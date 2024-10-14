// /components/Dashboard/Guides/create/page.tsx
"use client"
import { useState, useRef } from "react";
import axios from "axios";
import { createClient } from "@/utils/supabase/client";
import GuidesContentInfo from "./GuidesContentInfo";
import GuidesUploadInfo from "./GuidesUploadInfo";

const GuidesIndex = ({ projects }) => {
  const [formData, setFormData] = useState({
    title: "",
    shortTitle: "",
    projectId: "",
    content: "",
    imageUrl: "",
    summaryContent: "",
  });
  const [message, setMessage] = useState({ text: "", type: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const supabase = createClient();

  const handleFileSelect = async (event) => {
    const file = event.target.files[0];
    const formData = new FormData();
    const uploadPreset = process.env.NEXT_PUBLIC_UPLOAD_PRESET!;

    if (!uploadPreset) {
      console.error("Upload preset is not defined.");
      return;
    }

    formData.append("file", file);
    formData.append("upload_preset", uploadPreset);

    try {
      const response = await axios.post(
        `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
        formData
      );
      setFormData((prev) => ({ ...prev, imageUrl: response.data.secure_url }));
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  const removeSelectedImage = () => {
    setFormData((prev) => ({ ...prev, imageUrl: "" }));
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage({ text: "Submitting...", type: "pending" });

    const { data: { user }, error: userError } = await supabase.auth.getUser();

    if (userError || !user) {
      console.error("Error fetching user:", userError);
      setMessage({ text: "Error fetching user.", type: "error" });
      setIsSubmitting(false);
      return;
    }

    const { data, error } = await supabase
      .from("guides")
      .insert([
        {
          title: formData.title,
          short_title: formData.shortTitle,
          project: formData.projectId,
          full_content: formData.content,
          image_url: formData.imageUrl,
          summary_content: formData.summaryContent,
          author_id: user.id,
        },
      ]);

    if (error) {
      console.error("Error submitting guide:", error);
      setMessage({ text: `Error submitting guide: ${error.message}`, type: "error" });
    } else {
      console.log("Guide submitted successfully:", data);
      setMessage({ text: "Guide submitted successfully!", type: "success" });
      setFormData({
        title: "",
        shortTitle: "",
        projectId: "",
        content: "",
        imageUrl: "",
        summaryContent: "",
      });
    }
    setIsSubmitting(false);
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
        imageUrl={formData.imageUrl}
        handleFileSelect={handleFileSelect}
        removeSelectedImage={removeSelectedImage}
      />
      <button
        type="submit"
        className={`mt-6 px-4 py-2 rounded ${
          isSubmitting ? "bg-gray-500" : "bg-blue-500 hover:bg-blue-600"
        } text-white`}
        disabled={isSubmitting}
      >
        {isSubmitting ? "Submitting..." : "Submit Guide"}
      </button>
      {message.text && (
        <div
          className={`mt-4 text-center ${
            message.type === "error" ? "text-red-500" : "text-green-500"
          }`}
        >
          {message.text}
        </div>
      )}
    </form>
  );
};

export default GuidesIndex;