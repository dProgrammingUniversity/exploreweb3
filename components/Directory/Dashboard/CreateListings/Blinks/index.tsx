// /components/Directory/Dashboard/CreateListings/Blinks/index.tsx

"use client";
import React, { useState, useRef, useEffect, ChangeEvent } from "react";
import { createClient } from "@/utils/supabase/client";
import axios from "axios";
import { motion } from "framer-motion";
import ProjectInfo from "./ProjectInfo";
import BlinksInfo from "./BlinksInfo";
import PlatformInfo from "./PlatformInfo";
import UploadInfo from "./UploadInfo";

// Define types for categories and other fetched options
interface IdName {
  id: number;
  name: string;
}

const CreateListingsBlinks = () => {
  // Initial form data state
  const initialFormData = {
    name: "",
    moderation_status: "pending",
    short_description: "",
    blinks_registry_status: "",
    blinks_url: "",
    blinks_actions_json_url: "",
    source_code_access: "",
    blinks_actions_repo_url: "",
    category_1: "",
    category_2: "",
    category_3: "",
    category_4: "",
    category_5: "",
    status: "",
    project: "",
    image_url: "",
    demo_url: "",
    year_created: 2050,
    platform_ids: [], // Initialize as an empty array
  };

  // State variables
  const [formData, setFormData] = useState(initialFormData);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ text: string; type: string } | null>(
    null,
  );
  const [image, setImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [selectedCategory1, setSelectedCategory1] = useState<string | null>(
    null,
  );
  const [selectedCategory2, setSelectedCategory2] = useState<string | null>(
    null,
  );
  const [selectedCategory3, setSelectedCategory3] = useState<string | null>(
    null,
  );
  const [selectedCategory4, setSelectedCategory4] = useState<string | null>(
    null,
  );
  const [selectedCategory5, setSelectedCategory5] = useState<string | null>(
    null,
  );
  const [statuses, setStatuses] = useState([]);
  const [blinksRegistryStatusOptions, setBlinksRegistryStatusOptions] =
    useState([]);
  const [sourceCodeAccessOptions, setSourceCodeAccessOptions] = useState([]);
  const [projectListOptions, setProjectListOptions] = useState<IdName[]>([]);
  const [categories, setCategories] = useState<IdName[]>([]);
  const [userId, setUserId] = useState<string | null>(null);
  const [platforms, setPlatforms] = useState<IdName[]>([]);

  const supabaseClient = createClient();

  // Fetch initial data and user information
  useEffect(() => {
    // Fetch categories
    async function fetchCategories() {
      const { data, error } = await supabaseClient
        .from("categories")
        .select("id, name");
      if (error) {
        console.error("Error fetching categories:", error);
      } else {
        // Sort the retrieved categories list alphabetically before set in state
        const sortedCategoriesData = data.sort((a, b) =>
          a.name.localeCompare(b.name),
        );
        setCategories(sortedCategoriesData);
      }
    }

    // Fetch Status Enum
    async function fetchStatuses() {
      const { data, error } = await supabaseClient.rpc("enum_status_values");
      if (error) {
        console.error("Error fetching statuses:", error);
      } else {
        setStatuses(data);
      }
    }

    // Fetch Official Blinks Registry Status Enum
    async function fetchBlinksRegistryStatusOptions() {
      const { data, error } = await supabaseClient.rpc(
        "enum_blinks_registry_status_values",
      );
      if (error) {
        console.error(
          "Error fetching Official Blinks Registry Status Options:",
          error,
        );
      } else {
        setBlinksRegistryStatusOptions(data);
      }
    }

    // Fetch  Source Code Access Enum
    async function fetchSourceCodeAccessOptions() {
      const { data, error } = await supabaseClient.rpc(
        "enum_source_code_access_values",
      );
      if (error) {
        console.error("Error fetching Source Code Access options:", error);
      } else {
        setSourceCodeAccessOptions(data);
      }
    }

    // Fetch project name and id
    async function fetchProjectList() {
      const { data, error } = await supabaseClient
        .from("listings")
        .select("id, name");
      if (error) {
        console.error("Error fetching listings:", error);
      } else {
        // Sort the retrieved project list alphabetically before set in state
        const sortedProjectListData = data.sort((a, b) =>
          a.name.localeCompare(b.name),
        );
        setProjectListOptions(sortedProjectListData);
      }
    }

    // Fetch Platforms Name and Id
    async function fetchPlatforms() {
      const { data, error } = await supabaseClient
        .from("blinks_platforms")
        .select("id, name");
      if (error) {
        console.error("Error fetching platforms:", error);
      } else {
        setPlatforms(data);
      }
    }

    // Fetch user information and initial data
    const fetchData = async () => {
      const {
        data: { user },
      } = await supabaseClient.auth.getUser();
      if (user) {
        setUserId(user.id);
        loadDraft(user.id);
      }
      fetchCategories();
      fetchStatuses();
      fetchBlinksRegistryStatusOptions();
      fetchSourceCodeAccessOptions();
      fetchProjectList();
      fetchPlatforms();
    };

    fetchData();
  }, []);

  // Auto-save the draft every minute
  useEffect(() => {
    const interval = setInterval(() => {
      saveDraft();
    }, 60000); // Auto-save every 1 minute

    return () => clearInterval(interval);
  }, [formData]);

  // Load draft from the database
  
  const loadDraft = async (userId: string) => {
    const { data, error } = await supabaseClient.rpc("blinks_get_draft", {
      user_uuid: userId,
    });
  
    if (data && data.length > 0) {
      const draft = data[0].form_data;
      setFormData(draft);
      setSelectedCategory1(draft.category_1);
      setSelectedCategory2(draft.category_2);
      setSelectedCategory3(draft.category_3);
      setSelectedCategory4(draft.category_4);
      setSelectedCategory5(draft.category_5);
    } else if (error) {
      console.error("Error loading Blinks draft:", error);
    } else {
      console.log("No draft found for user:");
    }
  };
  
  

  // Save draft to the database
  const saveDraft = async () => {
    if (!userId) return;

    const draftData = {
      ...formData,
      category_1: selectedCategory1,
      category_2: selectedCategory2,
      category_3: selectedCategory3,
      category_4: selectedCategory4,
      category_5: selectedCategory5,
    };

    const { error } = await supabaseClient.rpc("blinks_save_draft", {
      user_uuid: userId,
      form: draftData,
    });

    if (error) {
      console.error("Error saving draft:", error);
      setMessage({ text: "Error saving draft.", type: "error" });
    } else {
      setMessage({ text: "Draft saved successfully!", type: "success" });
      // Clear the message after 5 seconds
      setTimeout(() => setMessage(null), 15000);
    }
  };

  // Handle form input changes
  const handleInputChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    if (name === "year_founded") {
      const currentYear = new Date().getFullYear();
      if (value.length === 4 && (value < 1900 || value > currentYear)) {
        return;
      }
    }
    setFormData({ ...formData, [name]: value });
  };

  // Handle category changes
  const handleCategoryChange = (categoryIndex: number, value: string) => {
    switch (categoryIndex) {
      case 1:
        setSelectedCategory1(value);
        break;
      case 2:
        setSelectedCategory2(value);
        break;
      case 3:
        setSelectedCategory3(value);
        break;
      case 4:
        setSelectedCategory4(value);
        break;
      case 5:
        setSelectedCategory5(value);
        break;
      default:
        break;
    }
  };

  // Handle platform changes
  // Ensure platform_ids is always an array before use
  const handlePlatformChange = (selectedOptions) => {
    setFormData({
      ...formData,
      platform_ids: selectedOptions
        ? selectedOptions.map((option) => option.value)
        : [],
    });
  };

  // Handle file selection for image upload
  const handleFileSelect = (
    eventOrFile: File | ChangeEvent<HTMLInputElement>,
  ) => {
    let file: File | null = null;
    if (eventOrFile instanceof File) {
      file = eventOrFile;
    } else if (eventOrFile.target && eventOrFile.target.files) {
      file = eventOrFile.target.files[0];
    }
    if (file) {
      setSelectedFile(file);
      setImage(URL.createObjectURL(file));
    }
  };

  // Remove selected image
  const removeSelectedImage = () => {
    setSelectedFile(null);
    setImage(null);
  };

  // Drag and drop event handlers
  const dragOver = (e: { preventDefault: () => any }) => e.preventDefault();
  const dragEnter = (e: { preventDefault: () => any }) => e.preventDefault();
  const dragLeave = (e: { preventDefault: () => any }) => e.preventDefault();
  const fileDrop = (e: {
    preventDefault: () => void;
    dataTransfer: { files: any };
  }) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    if (files.length) {
      handleFileSelect(files[0]);
    }
  };

  // Trigger file input click
  const onFileInputClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  // Handle form submission
  const handleSubmit = async (event: { preventDefault: () => void }) => {
    console.log("Form submitted!");
    event.preventDefault();
    setLoading(true);
    setMessage({ text: "Submitting...", type: "pending" });

    let imageUrl = "";
    if (selectedFile) {
      const formData = new FormData();
      formData.append("file", selectedFile);
      formData.append("upload_preset", process.env.NEXT_PUBLIC_UPLOAD_PRESET_BLINKS!);

      try {
        const response = await axios.post(
          `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
          formData,
        );
        imageUrl = response.data.secure_url;
      } catch (error) {
        console.error("Error uploading image:", error);
        setLoading(false);
        setMessage({ text: "Failed to upload image.", type: "error" });
        // Clear the message after 5 seconds
        setTimeout(() => setMessage(null), 15000);
        return;
      }
    }

    const submissionData = {
      ...formData,
      image_url: imageUrl,
      category_1: selectedCategory1 ? parseInt(selectedCategory1) : null,
      category_2: selectedCategory2 ? parseInt(selectedCategory2) : null,
      category_3: selectedCategory3 ? parseInt(selectedCategory3) : null,
      category_4: selectedCategory4 ? parseInt(selectedCategory4) : null,
      category_5: selectedCategory5 ? parseInt(selectedCategory5) : null,
    };

    try {
      const { data, error } = await supabaseClient
        .from("blinks")
        .insert([submissionData]);
      if (error) {
        throw error;
      }
      setMessage({ text: "Blinks listing added successfully!", type: "success" });
      setLoading(false);
      setFormData(initialFormData);
      setImage(null);
      setSelectedCategory1(null);
      setSelectedCategory2(null);
      setSelectedCategory3(null);
      setSelectedCategory4(null);
      setSelectedCategory5(null);

      // Delete the draft only after successful submission
      const deleteError = await deleteDraft(userId);
      if (deleteError) {
        console.error("Failed to delete draft:", deleteError);
      }
    } catch (error) {
      console.error("Failed to add listing:", error);
      const message = (error as any).message ?? "An unknown error occurred";
      setMessage({ text: `Failed to add listing: ${message}`, type: "error" });
    } finally {
      setLoading(false);
      // Clear the message after 5 seconds
      setTimeout(() => setMessage(null), 15000);
    }
  };

  // Delete draft from the database
  const deleteDraft = async (userId: string | null) => {
    if (!userId) return;

    const { error } = await supabaseClient
      .from("blinks_drafts")
      .delete()
      .eq("user_id", userId);

    return error;
  };

  const [currentStep, setCurrentStep] = useState(0);


  // Steps for the multi-step form
  const steps = [
    <ProjectInfo
      formData={formData}
      handleInputChange={handleInputChange}
      projectListOptions={projectListOptions}
    />,
    <BlinksInfo
      formData={formData}
      handleInputChange={handleInputChange}
      statuses={statuses}
      categories={categories}
      selectedCategory1={selectedCategory1}
      setSelectedCategory1={setSelectedCategory1}
      selectedCategory2={selectedCategory2}
      setSelectedCategory2={setSelectedCategory2}
      selectedCategory3={selectedCategory3}
      setSelectedCategory3={setSelectedCategory3}
      selectedCategory4={selectedCategory4}
      setSelectedCategory4={setSelectedCategory4}
      selectedCategory5={selectedCategory5}
      setSelectedCategory5={setSelectedCategory5}
      loading={loading}
      blinksRegistryStatusOptions={blinksRegistryStatusOptions}
      sourceCodeAccessOptions={sourceCodeAccessOptions}
      handleCategoryChange={handleCategoryChange}
    />,
    <PlatformInfo
      formData={formData}
      platforms={platforms} // Pass platforms here
      handlePlatformChange={handlePlatformChange} // New handler for platform change
    />,
    <UploadInfo
      image={image}
      handleFileSelect={handleFileSelect}
      removeSelectedImage={removeSelectedImage}
      fileInputRef={fileInputRef}
      loading={loading}
      dragOver={dragOver}
      dragEnter={dragEnter}
      dragLeave={dragLeave}
      fileDrop={fileDrop}
      onFileInputClick={onFileInputClick}
    />,
  ];

  // Titles and summaries for each step
  const stepTitles = [
    "Project Info",
    "Blinks Info",
    "Platform Info",
    "Upload Image",
  ];

  const stepSummaries = [
    "Select Project your Blinks is connected to.",
    "Provide detailed information about your blinks.",
    "Share platform(s) your blinks can be accessed from.",
    "Upload the blinks screenshot (must be 800(Width)x800(Height)px).",
  ];

  return (
    <>
      <div className="flex w-full flex-1 flex-col items-center px-4 py-6">
        <div className="w-full max-w-4xl rounded bg-gray-700 p-5 shadow">
          <div className="col-span-full mb-4">
            <div className="mb-2 flex flex-wrap items-center justify-between">
              {stepTitles.map((title, index) => (
                <div
                  key={index}
                  className={`rounded p-2 ${currentStep === index ? "bg-green-500 text-white" : "bg-gray-500 text-gray-300"} mb-2 cursor-pointer`}
                  onClick={() => {
                    if (index === 0 || formData.project) {
                      setCurrentStep(index);
                    }
                  }}
                >
                  {index + 1}. {title}
                </div>
              ))}
            </div>
            <p className="text-center text-white">
              {stepSummaries[currentStep]}
            </p>
          </div>
          <form className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {steps[currentStep]}
          </form>
          <div className="col-span-full mt-4 flex justify-between">
            {currentStep > 0 && (
              <button
                type="button"
                className="btn rounded bg-blue-500 p-2 text-white hover:bg-blue-700"
                onClick={() => setCurrentStep(currentStep - 1)}
              >
                Previous
              </button>
            )}
            {currentStep < steps.length - 1 ? (
              <button
                type="button"
                className="btn rounded bg-blue-500 p-2 text-white hover:bg-blue-700"
                onClick={() => setCurrentStep(currentStep + 1)}
                disabled={!formData.project}
              >
                Next
              </button>
            ) : (
              <button
                type="button"
                className="btn mx-auto mt-6 rounded bg-green-500 p-2 text-white hover:bg-green-700"
                onClick={handleSubmit}
                disabled={loading}
              >
                Submit
              </button>
            )}
            <button
              type="button"
              className="btn rounded bg-yellow-500 p-2 text-white hover:bg-yellow-700"
              onClick={saveDraft}
            >
              Save Draft
            </button>
          </div>

          {/* Display feedback messages */}
          {message && (
            <motion.div
              className="col-span-full mt-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <p
                className={`text-m ${
                  message.type === "error"
                    ? "text-red-500"
                    : message.type === "success"
                      ? "text-green-500"
                      : "text-yellow-500"
                }`}
              >
                {message.text}
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </>
  );
};

export default CreateListingsBlinks;
