import React, { useEffect, useState, useContext } from "react";
import { IndiceContext } from "../../contexts";
import { handleLogout } from "../../utils/auth";
import { useRouter } from "next/router";
import Link from "next/link";

const NavbarTwo = ({ userRole }) => {
  const { toggleSideMenu } = useContext(IndiceContext);
  const [showMenu, setshowMenu] = useState(false);
  const [displayMiniAuth, setDisplayMiniAuth] = useState(false);
  const [displayDropdownProfile, setDisplayDropdownProfile] = useState(false);

  const toggleMiniAuth = () => {
    setDisplayMiniAuth(!displayMiniAuth);
  };

  const toggleMenu = () => {
    setshowMenu(!showMenu);
  };

  const toggleDropdownProfile = () => {
    setDisplayDropdownProfile(!displayDropdownProfile);
  };

  // Add active class
  const [currentPath, setCurrentPath] = useState("");
  const router = useRouter();
  // console.log(router.asPath)

  useEffect(() => {
    setCurrentPath(router.asPath);
  }, [router]);

  return (
    <>
      <div className="navbar-area">
        <div className="miran-responsive-nav">
          <div className="miran-responsive-menu">
            <div
              onClick={() => toggleMenu()}
              className="hamburger-menu hamburger-two dashboard-hamburger"
            >
              {showMenu ? (
                <i className="bx bx-x"></i>
              ) : (
                <i className="bx bx-menu"></i>
              )}
            </div>
            <div
              className="responsive-burger-menu d-lg-none d-block"
              onClick={toggleSideMenu}
            >
              <span className="top-bar"></span>
              <span className="middle-bar"></span>
              <span className="bottom-bar"></span>
            </div>
          </div>
        </div>

        <div className={showMenu ? "miran-nav show" : "miran-nav"}>
          <nav className="navbar navbar-expand-md navbar-light">
            <div className="collapse navbar-collapse mean-menu">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link
                    href="/"
                    className={`nav-link ${currentPath == "/" && "active"}`}
                  >
                    Home
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    href="/listings/"
                    className={`nav-link ${
                      currentPath == "/listings/" && "active"
                    }`}
                  >
                    Listings
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    href="/about/"
                    className={`nav-link ${
                      currentPath == "/about/" && "active"
                    }`}
                  >
                    About Us
                  </Link>
                </li>

                <li className="nav-item">
                  <a href="#" className="dropdown-toggle nav-link">
                    Pages
                  </a>

                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <Link
                        href="/testimonial/"
                        className={`nav-link ${
                          currentPath == "/testimonial/" && "active"
                        }`}
                      >
                        Testimonials
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="/faq/"
                        className={`nav-link ${
                          currentPath == "/faq/" && "active"
                        }`}
                      >
                        FAQ
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="/how-it-works/"
                        className={`nav-link ${
                          currentPath == "/how-it-works/" && "active"
                        }`}
                      >
                        How It Works
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="/events/"
                        className={`nav-link ${
                          currentPath == "/events/" && "active"
                        }`}
                      >
                        Events
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="/single-events/"
                        className={`nav-link ${
                          currentPath == "/single-events/" && "active"
                        }`}
                      >
                        Single Events
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="/pricing/"
                        className={`nav-link ${
                          currentPath == "/pricing/" && "active"
                        }`}
                      >
                        Pricing
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="/gallery/"
                        className={`nav-link ${
                          currentPath == "/gallery/" && "active"
                        }`}
                      >
                        Gallery
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="/privacy-policy/"
                        className={`nav-link ${
                          currentPath == "/privacy-policy/" && "active"
                        }`}
                      >
                        Privacy Policy
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="/terms-and-condition/"
                        className={`nav-link ${
                          currentPath == "/terms-and-condition/" && "active"
                        }`}
                      >
                        Terms and Condition
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className="nav-item">
                  <Link
                    href="/contact/"
                    className={`nav-link ${
                      currentPath == "/contact/" && "active"
                    }`}
                  >
                    Contact
                  </Link>
                </li>

                <li className="nav-item">
                  <a className="dropdown-toggle nav-link user-drop global-pointer">
                    User Panel
                  </a>

                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <Link href="/dashboard/" 
                        className={`nav-link ${
                          currentPath == "/dashboard/" && "active"
                        }`}
                      >
                        Dashboard
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link href="/dashboard/messages/" 
                        className={`nav-link ${
                          currentPath == "/dashboard/messages/" && "active"
                        }`}
                      >
                        Messages
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link href="/dashboard/bookings/" 
                        className={`nav-link ${
                          currentPath == "/dashboard/bookings/" && "active"
                        }`}
                      >
                        Bookings
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link href="/dashboard/wallet/" 
                        className={`nav-link ${
                          currentPath == "/dashboard/wallet/" && "active"
                        }`}
                      >
                        Wallet
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="/dashboard/my-listing/active/"
                        className={`nav-link ${
                          currentPath == "/dashboard/my-listing/active/" && "active"
                        }`}
                      >
                        My Listings
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link href="/dashboard/reviews/" 
                        className={`nav-link ${
                          currentPath == "/dashboard/reviews/" && "active"
                        }`}
                      >
                        Reviews
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link href="/dashboard/bookmarks/" 
                        className={`nav-link ${
                          currentPath == "/dashboard/bookmarks/" && "active"
                        }`}
                      >
                        Bookmarks
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link href="/dashboard/add-listing/" 
                        className={`nav-link ${
                          currentPath == "/dashboard/add-listing/" && "active"
                        }`}
                      >
                        Add Listings
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link href="/dashboard/profile/" 
                        className={`nav-link ${
                          currentPath == "/dashboard/profile/" && "active"
                        }`}
                      >
                        My Profile
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link href="/dashboard/invoice/" 
                        className={`nav-link ${
                          currentPath == "/dashboard/invoice/" && "active"
                        }`}
                      >
                        Invoice
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>

              <div className="others-option d-flex align-items-center">
                <div className="option-item">
                  <div className="dropdown profile-nav-item menu-profile-one">
                    <a
                      href="#"
                      className="dropdown-toggle global-pointer"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <div
                        className="menu-profile"
                        onClick={toggleDropdownProfile}
                      >
                        {userRole.avatar ? (
                          <img
                            src={userRole.avatar}
                            className="rounded-circle"
                            alt="image"
                          />
                        ) : (
                          <span className="default-user">
                            <i className="flaticon-user"></i>
                          </span>
                        )}

                        <span className="name">
                          {userRole && userRole.name}
                        </span>
                      </div>
                    </a>

                    <div
                      className={
                        displayDropdownProfile
                          ? "dropdown-menu show"
                          : "dropdown-menu"
                      }
                    >
                      <div className="dropdown-header d-flex flex-column align-items-center">
                        <div className="figure mb-3">
                          {userRole.avatar ? (
                            <img
                              src={userRole.avatar}
                              className="rounded-circle"
                              alt="image"
                            />
                          ) : (
                            <span className="default-user">
                              <i className="flaticon-user"></i>
                            </span>
                          )}
                        </div>

                        <div className="info text-center">
                          <span className="name">
                            {userRole && userRole.name}
                          </span>
                          <p className="mb-3 email">
                            {userRole && userRole.email}
                          </p>
                        </div>
                      </div>

                      <div className="dropdown-body">
                        <ul className="profile-nav p-0 pt-3">
                          <li className="nav-item">
                            <Link href="/dashboard/" 
                              className={`nav-link ${
                                currentPath == "/dashboard/" && "active"
                              }`}
                            >
                              <i className="bx bx-user"></i>{" "}
                              <span>Dashboard</span>
                            </Link>
                          </li>

                          <li className="nav-item">
                            <Link
                              href="/dashboard/messages/"
                              className={`nav-link ${
                                currentPath == "/dashboard/messages/" && "active"
                              }`}
                            >
                              <i className="bx bx-envelope"></i>
                              <span>Messages</span>
                            </Link>
                          </li>

                          <li className="nav-item">
                            <Link
                              href="/dashboard/bookings/"
                              className={`nav-link ${
                                currentPath == "/dashboard/bookings/" && "active"
                              }`}
                            >
                              <i className="bx bx-edit-alt"></i>{" "}
                              <span>Bookings</span>
                            </Link>
                          </li>

                          <li className="nav-item">
                            <Link
                              href="/dashboard/profile/"
                              className={`nav-link ${
                                currentPath == "/dashboard/profile/" && "active"
                              }`}
                            >
                              <i className="bx bx-cog"></i>{" "}
                              <span>Settings</span>
                            </Link>
                          </li>
                        </ul>
                      </div>

                      <div className="dropdown-footer">
                        <ul className="profile-nav">
                          <li className="nav-item">
                            <a
                              href="#"
                              className="nav-link global-pointer"
                              onClick={handleLogout}
                            >
                              <i className="bx bx-log-out"></i>{" "}
                              <span>Logout</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="option-item">
                  <Link
                    href="/dashboard/add-listing/"
                    className="default-btn button-one"
                  >
                    <i className="flaticon-more"></i> Add Listing
                  </Link>
                </div>
              </div>
            </div>
          </nav>
        </div>

        <div className="others-option-for-responsive">
          <div className="container">
            <div className="dot-menu" onClick={toggleMiniAuth}>
              <div className="inner">
                <div className="circle circle-one"></div>
                <div className="circle circle-two"></div>
                <div className="circle circle-three"></div>
              </div>
            </div>

            <div className={displayMiniAuth ? "container active" : "container"}>
              <div className="option-inner">
                <div className="others-option">
                  <div className="option-item">
                    <div className="dropdown profile-nav-item">
                      <a
                        href="#"
                        className="dropdown-toggle"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <div
                          className="menu-profile"
                          onClick={toggleDropdownProfile}
                        >
                          {userRole.avatar ? (
                            <img
                              src={userRole.avatar}
                              className="rounded-circle"
                              alt="image"
                            />
                          ) : (
                            <span className="default-user">
                              <i className="flaticon-user me-2"></i>
                            </span>
                          )}

                          <span className="name">My Account</span>
                        </div>
                      </a>

                      <div
                        className={
                          displayDropdownProfile
                            ? "dropdown-menu show"
                            : "dropdown-menu"
                        }
                      >
                        <div className="dropdown-header d-flex flex-column align-items-center">
                          <div className="figure mb-3">
                            {userRole.avatar ? (
                              <img
                                src={userRole.avatar}
                                className="rounded-circle"
                                alt="image"
                              />
                            ) : (
                              <span className="default-user">
                                <i className="flaticon-user"></i>
                              </span>
                            )}
                          </div>

                          <div className="info text-center">
                            <span className="name">Andy Smith</span>
                            <p className="mb-3 email">hello@androsmith.com</p>
                          </div>
                        </div>

                        <div className="dropdown-body">
                          <ul className="profile-nav p-0 pt-3">
                            <li className="nav-item">
                              <Link href="/dashboard/" 
                              className={`nav-link ${
                                currentPath == "/dashboard/" && "active"
                              }`}
                              >
                                <i className="bx bx-user"></i>{" "}
                                <span>Dashboard</span>
                              </Link>
                            </li>

                            <li className="nav-item">
                              <Link
                                href="/dashboard/messages/"
                                className={`nav-link ${
                                  currentPath == "/dashboard/messages/" && "active"
                                }`}
                              >
                                <i className="bx bx-envelope"></i>{" "}
                                <span>Messages</span>
                              </Link>
                            </li>

                            <li className="nav-item">
                              <Link
                                href="/dashboard/bookings/"
                                className={`nav-link ${
                                  currentPath == "/dashboard/bookings/" && "active"
                                }`}
                              >
                                <i className="bx bx-edit-alt"></i>{" "}
                                <span>Bookings</span>
                              </Link>
                            </li>

                            <li className="nav-item">
                              <Link
                                href="/dashboard/profile/"
                                className={`nav-link ${
                                  currentPath == "/dashboard/profile/" && "active"
                                }`}
                              >
                                <i className="bx bx-cog"></i>{" "}
                                <span>Settings</span>
                              </Link>
                            </li>
                          </ul>
                        </div>

                        <div className="dropdown-footer">
                          <ul className="profile-nav">
                            <li className="nav-item">
                              <a
                                href="#"
                                className="nav-link global-pointer"
                                onClick={handleLogout}
                              >
                                <i className="bx bx-log-out"></i>{" "}
                                <span>Logout</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="option-item">
                    <Link href="/dashboard/add-listing" className="default-btn">
                      <i className="flaticon-more"></i> Add Listing
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavbarTwo;
