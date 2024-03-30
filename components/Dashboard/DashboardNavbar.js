import React, { useState, useEffect, useContext } from "react";
import { parseCookies } from "nookies";
import { IndiceContext } from "../../contexts";
import { handleLogout } from "../../utils/auth";
import Link from "next/link";

//utils
import axios from "axios";
import baseUrl from "../../utils/baseUrl";

const DashboardNavbar = ({ user, listings }) => {
  //context state
  const { displaySideMenu, toggleSideMenu, pendingListing } =
    useContext(IndiceContext);

  const [display, setDisplay] = useState(false);

  //token
  const { token } = parseCookies();

  //all listings
  const [listingsData, setListingsData] = useState([]);

  //fetch all listings
  useEffect(() => {
    const fetchListing = async () => {
      const payload = { headers: { Authorization: token } };
      const url = `${baseUrl}/api/v1/listings/active-listings`;
      const response = await axios.get(url, payload);
      setListingsData(response.data.listings);
    };
    fetchListing();
  }, []);

  //filter listing
  const activeList = listingsData.filter((list) => list.status === "active");
  const pendingList = listingsData.filter((list) => list.status === "pending");

  const listingToggle = () => {
    setDisplay(!display);
  };

  return (
    <>
      <div
        className={
          displaySideMenu
            ? "sidemenu-area active-sidemenu-area"
            : "sidemenu-area"
        }
      >
        <div className="sidemenu-header">
          <Link href="/" className="navbar-brand d-flex align-items-center">
            <img src="/images/black-logo.png" alt="image" />
          </Link>

          <div
            className="responsive-burger-menu d-block d-lg-none"
            onClick={toggleSideMenu}
          >
            <i className="bx bx-x"></i>
          </div>
        </div>

        <div className="sidemenu-body">
          <ul
            className="sidemenu-nav metisMenu h-100"
            id="sidemenu-nav"
            data-simplebar
          >
            <li className="nav-item-title">Main</li>

            <li className="nav-item">
              <Link href="/dashboard">
                <span className="icon">
                  <i className="bx bx-home-circle"></i>
                </span>
                <span className="menu-title">Dashboard</span>
              </Link>
            </li>

            <li className="nav-item">
              <Link href="/dashboard/messages">
                <span className="icon">
                  <i className="bx bx-envelope-open"></i>
                </span>
                <span className="menu-title">Messages</span>
                <span className="badge">3</span>
              </Link>
            </li>

            <li className="nav-item">
              <Link href="/dashboard/bookings">
                <span className="icon">
                  <i className="bx bx-copy"></i>
                </span>
                <span className="menu-title">Bookings</span>
              </Link>
            </li>

            <li className="nav-item">
              <Link href="/dashboard/wallet">
                <span className="icon">
                  <i className="bx bx-wallet"></i>
                </span>
                <span className="menu-title">Wallet</span>
              </Link>
            </li>

            <li className="nav-item-title">Listings</li>

            <li className="nav-item">
              <Link href="/dashboard/add-listing">
                <span className="icon">
                  <i className="bx bx-plus-circle"></i>
                </span>
                <span className="menu-title">Add Listings</span>
              </Link>
            </li>

            <li className="nav-item">
              <a
                href="#"
                className="collapsed-nav-link nav-link global-pointer"
                onClick={listingToggle}
              >
                <span className="icon">
                  <i className="bx bx-layer"></i>
                </span>
                <span className="menu-title">My Listings</span>
              </a>

              <ul
                className={
                  display
                    ? "sidemenu-nav-second-level show"
                    : "sidemenu-nav-second-level sidemenu-nav-display"
                }
              >
                <li className="nav-item active-section">
                  <Link
                    href="/dashboard/my-listing/active" 
                  >
                    <span className="menu-title">Active</span>
                    <span className="badge">{activeList.length}</span>
                  </Link>
                </li>

                <li className="nav-item active-section">
                  <Link
                    href="/dashboard/my-listing/pending" 
                  >
                    <span className="menu-title">Pending</span>
                    <span className="badge yellow">
                      {pendingListing
                        ? pendingListing.length
                        : pendingList.length}
                    </span>
                  </Link>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <Link href="/dashboard/reviews">
                <span className="icon">
                  <i className="bx bx-star"></i>
                </span>
                <span className="menu-title">Reviews</span>
              </Link>
            </li>

            <li className="nav-item">
              <Link href="/dashboard/bookmarks">
                <span className="icon">
                  <i className="bx bx-heart"></i>
                </span>
                <span className="menu-title">Bookmarks</span>
              </Link>
            </li>

            <li className="nav-item">
              <Link href="/dashboard/invoice">
                <span className="icon">
                  <i className="bx bx-certification"></i>
                </span>
                <span className="menu-title">Invoice</span>
              </Link>
            </li>

            <li className="nav-item-title">Account</li>

            <li className="nav-item">
              <Link href="/dashboard/profile">
                <span className="icon">
                  <i className="bx bxs-user-circle"></i>
                </span>
                <span className="menu-title">Profile</span>
              </Link>
            </li>

            <li className="nav-item">
              <Link href="#" className="global-pointer" onClick={handleLogout}>
                <span className="icon">
                  <i className="bx bx-log-out"></i>
                </span>
                <span className="menu-title">Logout</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default DashboardNavbar;
