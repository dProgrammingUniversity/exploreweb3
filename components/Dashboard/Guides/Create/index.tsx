// /components/Dashboard/Guides/Create/index.tsx
"use client"
import { useState, useRef, useEffect } from "react";
import axios from "axios";
import { createClient } from "@/utils/supabase/client";
import GuidesContentInfo from "./GuidesContentInfo";
import GuidesUploadInfo from "./GuidesUploadInfo";

const GuidesIndex = ({ projects, draft, userId }) => {
  const [formData, setFormData] = useState(draft || {
    title: "",
    shortTitle: "",
    projectId: "",
    content: "",
    imageUrl: "",
    summaryContent: "",
  });
  const [message, setMessage] = useState({ text: "", type: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const supabase = createClient();

  // Draft autosave
  useEffect(() => {
    const interval = setInterval(() => {
      saveDraft();
    }, 60000); // Auto-save every 1 minute

    return () => clearInterval(interval);
  }, [formData]);

  const saveDraft = async () => {
    try {
      await supabase.rpc("guides_drafts_save", {
        user_uuid: userId,
        form: formData,
      });
      setMessage({ text: "Draft saved successfully!", type: "success" });
      setTimeout(() => setMessage({ text: "", type: "" }), 3000);
    } catch (error) {
      console.error("Error saving draft:", error);
      setMessage({ text: "Error saving draft.", type: "error" });
    }
  };

  // Delete draft function
  const deleteDraft = async () => {
    try {
      await supabase.rpc("guides_drafts_delete", {
        user_uuid: userId,
      });
    } catch (error) {
      console.error("Error deleting draft:", error);
    }
  };

  // Reset form function
  const resetForm = () => {
    setFormData({
      title: "",
      shortTitle: "",
      projectId: "",
      content: "",
      imageUrl: "",
      summaryContent: "",
    });
    setSelectedImage(null);
    setPreviewUrl(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  // Handle file selection for image upload
  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedImage(file);
      // Create a local preview URL
      const localPreviewUrl = URL.createObjectURL(file);
      setPreviewUrl(localPreviewUrl);
    }
  };

  // Remove selected image
  const removeSelectedImage = () => {
    setSelectedImage(null);
    setPreviewUrl(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  // Upload image to Cloudinary
  const uploadImageToCloudinary = async (file: File): Promise<string> => {
    const formData = new FormData();
    const uploadPreset = process.env.NEXT_PUBLIC_UPLOAD_PRESET!;

    if (!uploadPreset) {
      throw new Error("Upload preset is not defined.");
    }

    formData.append("file", file);
    formData.append("upload_preset", uploadPreset);

    try {
      const response = await axios.post(
        `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
        formData
      );
      return response.data.secure_url;
    } catch (error) {
      console.error("Error uploading image:", error);
      throw error;
    }
  };

  // Form submission function
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage({ text: "Submitting...", type: "pending" });

    // Check if all required fields are filled
    if (!formData.title || !formData.shortTitle || !formData.projectId || !formData.content || !formData.summaryContent || !selectedImage) {
      setMessage({ text: "Please fill all required fields and select an image.", type: "error" });
      setIsSubmitting(false);
      return;
    }

    const { data: { user }, error: userError } = await supabase.auth.getUser();

    if (userError || !user) {
      console.error("Error fetching user:", userError);
      setMessage({ text: "Error fetching user.", type: "error" });
      setIsSubmitting(false);
      return;
    }

    try {
      // Upload image to Cloudinary
      const imageUrl = await uploadImageToCloudinary(selectedImage);

      // Insert guide data into the database
      const { data, error } = await supabase
        .from("guides")
        .insert([
          {
            title: formData.title,
            short_title: formData.shortTitle,
            project: formData.projectId,
            full_content: formData.content,
            image_url: imageUrl,
            summary_content: formData.summaryContent,
            author_id: user.id,
          },
        ]);

      if (error) {
        throw error;
      }

      console.log("Guide submitted successfully:", data);
      setMessage({ text: "Guide submitted successfully!", type: "success" });

      // Reset form and delete draft
      await deleteDraft();
      resetForm();

      // Set a short timeout before refreshing the page
      setTimeout(() => {
        window.location.reload();
      }, 2000); // Refresh after 2 seconds to allow the success message to be seen

    } catch (error) {
      console.error("Error submitting guide:", error);
      setMessage({ text: `Error submitting guide: ${(error as Error).message}`, type: "error" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Create New Guide</h1>
      <GuidesContentInfo
        projects={projects}
        formData={formData}
        setFormData={setFormData}
      />
      <GuidesUploadInfo
        previewUrl={previewUrl}
        handleFileSelect={handleFileSelect}
        removeSelectedImage={removeSelectedImage}
        fileInputRef={fileInputRef}
      />
      <div className="flex justify-between mt-6">
        <button
          type="button"
          onClick={saveDraft}
          className="px-4 py-2 rounded bg-gray-500 hover:bg-gray-600 text-white"
        >
          Save Draft
        </button>
        <button
          type="submit"
          className={`px-4 py-2 rounded ${isSubmitting ? "bg-gray-500" : "bg-blue-500 hover:bg-blue-600"
            } text-white`}
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Submit Guide"}
        </button>
      </div>
      {message.text && (
        <div
          className={`mt-4 text-center ${message.type === "error" ? "text-red-500" : "text-green-500"
            }`}
        >
          {message.text}
        </div>
      )}
    </form>
  );
};

export default GuidesIndex;