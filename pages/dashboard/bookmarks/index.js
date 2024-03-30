import React from "react";
import Link from "next/link";
import NavbarTwo from "../../../components/_App/NavbarTwo";
import DashboardNavbar from "../../../components/Dashboard/DashboardNavbar";
import Footer from "../../../components/Dashboard/Footer";
import BookmarkListings from "../../../components/Dashboard/Bookmarks/BookmarkListings";

const BookMarks = ({ user }) => {
  return (
    <>
      <DashboardNavbar />

      <div className="main-content d-flex flex-column">
        <NavbarTwo userRole={user} />

        <div className="breadcrumb-area">
          <h1>Bookmarked Listings</h1>
          <ol className="breadcrumb">
            <li className="item">
              <Link href="/dashboard">Home</Link>
            </li>
            <li className="item">
              <Link href="/dashboard">Dashboard</Link>
            </li>
            <li className="item">Bookmarks</li>
          </ol>
        </div>

        <BookmarkListings />

        <Footer />
      </div>
    </>
  );
};

export default BookMarks;
