// /components/Header/menuData.tsx
import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    newTab: false,
    path: "/",
  },
  {
    id: 2,
    title: "Blog",
    newTab: true,
    path: "https://exploresolana.substack.com/",
  },
  {
    id: 2.1,
    title: "Directory",
    newTab: false,
    path: "/directory",
  },
  {
    id: 2.2,
    title: "About",
    newTab: false,
    path: "/about",
  },
  {
    id: 2.3,
    title: "Contact",
    newTab: false,
    path: "/contact",
  },
  {
    id: 2.4,
    title: "Earn",
    newTab: false,
    path: "/earn",
  },
  {
    id: 2.5,
    title: "Roadmap",
    newTab: false,
    path: "/roadmap",
  },
  {
    id: 2.6,
    title: "S",
    newTab: false,
    path: "/s",
  },
  {
    id: 3,
    title: "Dashboard",
    newTab: false,
    submenu: [
      {
        id: 31,
        title: "Dashboard Home",
        newTab: false,
        path: "/dashboard",
      },
      {
        id: 34,
        title: "Profile",
        newTab: false,
        path: "/dashboard/profile",
      },
      {
        id: 35,
        title: "Create Listings",
        newTab: false,
        path: "/dashboard/create-listings",
      },
      {
        id: 35,
        title: "Favorites",
        newTab: false,
        path: "/dashboard/favorite-listings",
      },
      {
        id: 35.1,
        title: "Support",
        newTab: false,
        path: "/support",
      },
      {
        id: 36,
        title: "404",
        newTab: false,
        path: "/error",
      },
    ],
  },

  
];

export default menuData;
