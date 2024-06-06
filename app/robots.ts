// /app/robots.ts
import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/dashboard",
          "/dashboard/admin",
          "/dashboard/create-listings",
          "/dashboard/favorites",
          "/dashboard/moderator",
          "/dashboard/profile",
          "/dashboard/update-password",
          "/dashboard/user",
        ],
      },
    ],
    sitemap: `${process.env.NEXT_PUBLIC_BASE_URL}/sitemap.xml`,
  };
}
