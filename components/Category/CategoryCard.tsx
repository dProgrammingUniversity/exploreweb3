// /components/Category/CategoryCard.tsx
import React from "react";
import Link from "next/link";
import Image from "next/image";

const CategoryCard = ({ category }) => {
    return (
      <Link href={`/category/${category.slug}`}>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
          <div className="relative h-48">
            <Image
              src={category.image_url || "/images/opengraph-image.png"}
              alt={category.name}
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2">{category.name} ({category.projectCount})</h2>
            <p className="text-gray-600 dark:text-gray-300">{category.description}</p>
          </div>
        </div>
      </Link>
    );
  };

export default CategoryCard;