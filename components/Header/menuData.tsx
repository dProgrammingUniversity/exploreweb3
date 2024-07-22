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
    title: "Others",
    newTab: false,
    submenu: [
      {
        id: 2.1,
        title: "Solana Ecosystem",
        newTab: false,
        path: "/solana-blockchain-ecosystem",
      },
      {
        id: 2.1,
        title: "Projects",
        newTab: false,
        path: "/projects",
      },
      {
        id: 2.2,
        title: "Blinks",
        newTab: false,
        path: "/blinks",
      },
      {
        id: 2.3,
        title: "About",
        newTab: false,
        path: "/about",
      },
      {
        id: 2.4,
        title: "Pitch",
        newTab: false,
        path: "/pitch",
      },
      {
        id: 2.5,
        title: "Earn",
        newTab: false,
        path: "/earn",
      },
      {
        id: 2.6,
        title: "S",
        newTab: false,
        path: "/s",
      },
      {
        id: 2.7,
        title: "Roadmap",
        newTab: false,
        path: "/roadmap",
      },
      {
        id: 2.8,
        title: "Support",
        newTab: false,
        path: "/support",
      },
      {
        id: 2.9,
        title: "Blog",
        newTab: false,
        path: "https://exploresolana.substack.com/",
      },
    ],
  },
  {
    id: 3,
    title: "Dashboard",
    newTab: false,
    submenu: [
      {
        id: 3.1,
        title: "Dashboard Home",
        newTab: false,
        path: "/dashboard",
      },
      {
        id: 3.2,
        title: "Profile",
        newTab: false,
        path: "/dashboard/profile",
      },
      {
        id: 3.3,
        title: "Create Listings",
        newTab: false,
        path: "/dashboard/create-listings",
      },
      {
        id: 3.4,
        title: "Favorites",
        newTab: false,
        path: "/dashboard/favorites",
      },
      {
        id: 3.5,
        title: "Password Manager",
        newTab: false,
        path: "/dashboard/update-password",
      },
    ],
  },
];

export default menuData;
