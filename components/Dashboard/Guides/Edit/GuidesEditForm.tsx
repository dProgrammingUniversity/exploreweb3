// /components/Dashboard/Guides/Edit/GuidesEditForm.tsx
"use client"
import React, { useRef, useState } from 'react';
import { createClient } from "@/utils/supabase/client";
import dynamic from "next/dynamic";
import Image from 'next/image';
import axios from 'axios';
import "../styles.css";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";

interface Project {
    id: string;
    name: string;
}

interface Guide {
    id: string;
    title: string;
    short_title: string;
    project: string;
    full_content: string;
    summary_content: string;
    image_url: string;
    slug: string;
    moderation_status: string;
    created_at: string;
    updated_at: string;
}

interface GuidesEditFormProps {
    guide: Guide;
    projects: Project[];
}

const GuidesEditForm: React.FC<GuidesEditFormProps> = ({ guide, projects }) => {
    const [formData, setFormData] = useState(guide);
    const [message, setMessage] = useState({ text: '', type: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [selectedImage, setSelectedImage] = useState<File | null>(null);
    const [previewUrl, setPreviewUrl] = useState<string | null>(guide.image_url);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const supabase = createClient();

    //ReactQuill Customizable Toolbar Options
    const modules = {
        toolbar: [
            [{ header: [1, 2, 3, 4, 5, 6, false] }],
            ["bold", "italic", "underline", "strike", "blockquote"],
            [{ list: "ordered" }, { list: "bullet" }],
            ["link", "image", "video"],
            ["clean"],
        ],
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleQuillChange = (value: string, name: string) => {
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setSelectedImage(file);
            const localPreviewUrl = URL.createObjectURL(file);
            setPreviewUrl(localPreviewUrl);
        }
    };

    const removeSelectedImage = () => {
        setSelectedImage(null);
        setPreviewUrl(guide.image_url);
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    };

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

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setMessage({ text: 'Updating...', type: 'info' });

        try {
            let imageUrl = formData.image_url;
            if (selectedImage) {
                imageUrl = await uploadImageToCloudinary(selectedImage);
            }

            // Create a new object without the 'id' field
            const { id, ...updateData } = formData;

            const { error } = await supabase
                .from('guides')
                .update({
                    ...updateData,
                    image_url: imageUrl,
                    updated_at: new Date().toISOString(),
                })
                .eq('id', guide.id);

            if (error) throw error;

            setMessage({ text: 'Guide updated successfully!', type: 'success' });
        } catch (error) {
            console.error('Error updating guide:', error);
            let errorMessage = 'Error updating guide. Please try again.';
            if (error instanceof Error) {
                errorMessage += ` Details: ${error.message}`;
            } else if (typeof error === 'object' && error !== null && 'message' in error) {
                errorMessage += ` Details: ${(error as { message: string }).message}`;
            }
            setMessage({ text: errorMessage, type: 'error' });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <h1 className="text-3xl font-bold mb-6">Edit Guide: {guide.title}</h1>

            <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-300">Title</label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 bg-gray-700 text-white"
                    required
                />
            </div>

            <div>
                <label htmlFor="short_title" className="block text-sm font-medium text-gray-300">Short Title</label>
                <input
                    type="text"
                    id="short_title"
                    name="short_title"
                    value={formData.short_title}
                    onChange={handleInputChange}
                    maxLength={50}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 bg-gray-700 text-white"
                    required
                />
            </div>

            <div>
                <label htmlFor="project" className="block text-sm font-medium text-gray-300">Project</label>
                <select
                    id="project"
                    name="project"
                    value={formData.project}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 bg-gray-700 text-white"
                    required
                >
                    <option value="">Select a project</option>
                    {projects.map((project) => (
                        <option key={project.id} value={project.id}>{project.name}</option>
                    ))}
                </select>
            </div>

            <div>
                <label htmlFor="summary_content" className="block text-sm font-medium text-gray-300">Summary Content</label>
                <ReactQuill
                    value={formData.summary_content}
                    onChange={(value) => handleQuillChange(value, 'summary_content')}
                    modules={modules}
                    className="mt-1"
                />
            </div>

            <div>
                <label htmlFor="full_content" className="block text-sm font-medium text-gray-300">Full Content</label>
                <ReactQuill
                    value={formData.full_content}
                    onChange={(value) => handleQuillChange(value, 'full_content')}
                    modules={modules}
                    className="mt-1"
                />
            </div>

            <div>
                <label htmlFor="image" className="block text-sm font-medium text-gray-300">Guide Image</label>
                <input
                    type="file"
                    id="image"
                    accept="image/*"
                    onChange={handleFileSelect}
                    ref={fileInputRef}
                    className="mt-1 block w-full text-sm text-gray-300
            file:mr-4 file:py-2 file:px-4
            file:rounded-full file:border-0
            file:text-sm file:font-semibold
            file:bg-blue-50 file:text-blue-700
            hover:file:bg-blue-100"
                />
                {previewUrl && (
                    <div className="mt-4">
                        <Image src={previewUrl} alt="Selected" width={200} height={200} className="rounded-lg" />
                        <button
                            type="button"
                            onClick={removeSelectedImage}
                            className="mt-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                        >
                            Remove Image
                        </button>
                    </div>
                )}
            </div>

            <div>
                <label htmlFor="slug" className="block text-sm font-medium text-gray-300">Slug</label>
                <input
                    type="text"
                    id="slug"
                    name="slug"
                    value={formData.slug}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 bg-gray-700 text-white"
                    required
                />
            </div>

            <div>
                <label htmlFor="moderation_status" className="block text-sm font-medium text-gray-300">Moderation Status</label>
                <select
                    id="moderation_status"
                    name="moderation_status"
                    value={formData.moderation_status}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 bg-gray-700 text-white"
                    required
                >
                    <option value="pending">Pending</option>
                    <option value="approved">Approved</option>
                    <option value="rejected">Rejected</option>
                </select>
            </div>

            <div>
                <label htmlFor="updated_at" className="block text-sm font-medium text-gray-300">Updated At</label>
                <input
                    type="datetime-local"
                    id="updated_at"
                    name="updated_at"
                    value={formData.updated_at.slice(0, 16)}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 bg-gray-700 text-white"
                    required
                />
            </div>

            <div className="flex justify-between">
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`px-4 py-2 rounded ${isSubmitting ? 'bg-gray-500' : 'bg-blue-500 hover:bg-blue-600'
                        } text-white font-bold`}
                >
                    {isSubmitting ? 'Updating...' : 'Update Guide'}
                </button>
                <button
                    type="button"
                    onClick={() => {
                        if (confirm('Are you sure you want to delete this guide?')) {
                            // Implement delete functionality here
                        }
                    }}
                    className="px-4 py-2 rounded bg-red-500 hover:bg-red-600 text-white font-bold"
                >
                    Delete Guide
                </button>
            </div>

            {message.text && (
                <div className={`mt-4 p-2 rounded ${message.type === 'error' ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'
                    }`}>
                    {message.text}
                </div>
            )}
        </form>
    );
};

export default GuidesEditForm;