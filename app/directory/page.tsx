// ExploreSol/app/directory/page.tsx
"use client";
import React from 'react';
import DirectoryPage from '@/components/DirectoryPage'; 
import EmailSubscriptionForm from '@/components/EmailSubscriptionForm';
import AnimatedTitle from '@/components/AnimatedTitle';

export default function Page() {
  return (
    <div>
      {/* Top text section with highlighted text */}
      <EmailSubscriptionForm />


      {/* Directory Page component */}
      <AnimatedTitle />
      <DirectoryPage />
      
      {/* Directory Page */}
      <DirectoryPage />
    </div>
  );
}