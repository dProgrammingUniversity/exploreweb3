// ExploreSol/app/directory/[slug]/page.tsx
"use client";
import React from 'react';
import { usePathname } from 'next/navigation';
import ListingsFullDetailsPage from '@/components/ListingsFullDetailsPage';

const ListingDetailPage = () => {
  const pathname = usePathname();
  const slug = pathname.split('/').pop() || '';

  return <ListingsFullDetailsPage slug={slug} />;
};

export default ListingDetailPage;