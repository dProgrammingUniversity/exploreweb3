import React, { useState, useEffect, useContext } from "react";
import { toast } from "react-hot-toast";
import { IndiceContext } from "../../contexts";
import { useRouter } from "next/router";
import Link from "next/link";

// utils
import { handleLogout } from "../../utils/auth";

// component
import AuthModal from "../Authentication/AuthModal";
import MiniAuth from "../Authentication/MiniAuth";

const Navbar = ({ userRole }) => {
  const { toggleAuthModal, displayAuthModal } = useContext(IndiceContext);
  const [displayMiniAuth, setDisplayMiniAuth] = useState(false);
  const [sticky, setSticky] = useState(false);
  const [keyword, setKeyword] = useState("");

  // sticky menu
  const showStickyMenu = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  if (typeof window !== "undefined") {
    // browser code
    window.addEventListener("scroll", showStickyMenu);
  }

  const toggleMiniAuth = () => {
    setDisplayMiniAuth(!displayMiniAuth);
  };

  const [showMenu, setshowMenu] = useState(false);

  const toggleMenu = () => {
    setshowMenu(!showMenu);
  };

  useEffect(() => {
    let abortController = new AbortController();

    return () => {
      abortController.abort();
    };
  }, []);

  // navbar search
  const router = useRouter();

  const handleChange = (e) => {
    const { value } = e.target;
    setKeyword(value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (keyword) {
      router.push(`/listings/?title=${keyword}`);
    } else {
      router.push("/");
    }
  };

  // Add active class
  const [currentPath, setCurrentPath] = useState("");
  // const router = useRouter();
  // console.log(router.asPath)

  useEffect(() => {
    setCurrentPath(router.asPath);
  }, [router]);

  return (
    <>
      <div
        className={displayAuthModal ? "body_overlay open" : "body_overlay"}
      ></div>
      <div className={sticky ? "is-sticky navbar-area" : "navbar-area"}>
        <div className="miran-responsive-nav">
          <div className="container">
            <div className="miran-responsive-menu">
              <div
                onClick={() => toggleMenu()}
                className="hamburger-menu hamburger-two"
              >
                {showMenu ? (
                  <i className="bx bx-x"></i>
                ) : (
                  <i className="bx bx-menu"></i>
                )}
              </div>
              <div className="logo">
                <Link href="/">
                  <img src="/images/black-logo.png" alt="logo" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className={showMenu ? "miran-nav show" : "miran-nav"}>
          <div className="container-fluid">
            <nav className="navbar navbar-expand-md navbar-light">
              <Link href="/" className="navbar-brand">
                <img src="/images/black-logo.png" alt="logo" />
              </Link>

              <div className="collapse navbar-collapse mean-menu">
                <form
                  className="navbar-search-box search-box-one"
                  onSubmit={handleSearch}
                >
                  <label>
                    <i className="flaticon-search"></i>
                  </label>
                  <input
                    type="text"
                    className="input-search"
                    placeholder="What are you looking for?"
                    name="search"
                    onChange={handleChange}
                  />
                </form>

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
                    <a href="#" className="dropdown-toggle nav-link">
                      Blog
                    </a>

                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link
                          href="/blog/"
                          className={`nav-link ${
                            currentPath == "/blog/" && "active"
                          }`}
                        >
                          Blog
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/single-blog/"
                          className={`nav-link ${
                            currentPath == "/single-blog/" && "active"
                          }`}
                        >
                          Single Blog
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

                  {userRole &&
                    (userRole.role === "user" || userRole.role === "admin") && (
                      <li className="nav-item">
                        <a
                          href="#"
                          className="dropdown-toggle nav-link user-drop"
                        >
                          User Panel
                        </a>

                        <ul className="dropdown-menu">
                          <li className="nav-item">
                            <Link
                              href="/dashboard/"
                              className={`nav-link ${
                                currentPath == "/dashboard/" && "active"
                              }`}
                            >
                              Dashboard
                            </Link>
                          </li>

                          <li className="nav-item">
                            <Link
                              href="/dashboard/messages/"
                              className={`nav-link ${
                                currentPath == "/dashboard/messages/" &&
                                "active"
                              }`}
                            >
                              Messages
                            </Link>
                          </li>

                          <li className="nav-item">
                            <Link
                              href="/dashboard/bookings/"
                              className={`nav-link ${
                                currentPath == "/dashboard/bookings/" &&
                                "active"
                              }`}
                            >
                              Bookings
                            </Link>
                          </li>

                          <li className="nav-item">
                            <Link
                              href="/dashboard/wallet/"
                              className={`nav-link ${
                                currentPath == "/dashboard/wallet" && "active"
                              }`}
                            >
                              Wallet
                            </Link>
                          </li>

                          <li className="nav-item">
                            <Link
                              href="/dashboard/my-listing/active/"
                              className={`nav-link ${
                                currentPath ==
                                  "/dashboard/my-listing/active/" && "active"
                              }`}
                            >
                              My Listings
                            </Link>
                          </li>

                          <li className="nav-item">
                            <Link
                              href="/dashboard/reviews/"
                              className={`nav-link ${
                                currentPath == "/dashboard/reviews/" && "active"
                              }`}
                            >
                              Reviews
                            </Link>
                          </li>

                          <li className="nav-item">
                            <Link
                              href="/dashboard/bookmarks/"
                              className={`nav-link ${
                                currentPath == "/dashboard/bookmarks/" &&
                                "active"
                              }`}
                            >
                              Bookmarks
                            </Link>
                          </li>

                          <li className="nav-item">
                            <Link
                              href="/dashboard/add-listing/"
                              className={`nav-link ${
                                currentPath == "/dashboard/add-listing" &&
                                "active"
                              }`}
                            >
                              Add Listings
                            </Link>
                          </li>

                          <li className="nav-item">
                            <Link
                              href="/dashboard/profile/"
                              className={`nav-link ${
                                currentPath == "/dashboard/profile/" && "active"
                              }`}
                            >
                              My Profile
                            </Link>
                          </li>

                          <li className="nav-item">
                            <Link
                              href="/dashboard/invoice/"
                              className={`nav-link ${
                                currentPath == "/dashboard/invoice/" && "active"
                              }`}
                            >
                              Invoice
                            </Link>
                          </li>
                        </ul>
                      </li>
                    )}
                </ul>

                <div className="others-option d-flex align-items-center">
                  <div className="option-item">
                    {userRole &&
                    (userRole.role === "user" || userRole.role === "admin") ? (
                      <span
                        data-toggle="modal"
                        className="auth-one"
                        onClick={handleLogout}
                      >
                        <i className="flaticon-user"></i> Logout
                      </span>
                    ) : (
                      <span
                        data-toggle="modal"
                        onClick={toggleAuthModal}
                        className="auth-one"
                      >
                        <i className="flaticon-user"></i> Login / Register
                      </span>
                    )}
                  </div>

                  <div className="option-item">
                    <Link
                      href="/dashboard/add-listing"
                      className="default-btn button-one"
                    >
                      {userRole ? (
                        <div>
                          <i className="flaticon-more"></i> Add Listing
                        </div>
                      ) : (
                        <div
                          onClick={(e) => {
                            toast.error("Please login to add listings.");
                          }}
                        >
                          <i className="flaticon-more"></i> Add Listing
                        </div>
                      )}
                    </Link>
                  </div>
                </div>
              </div>
            </nav>
          </div>
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

            <MiniAuth
              displayMiniAuth={displayMiniAuth}
              handleSearch={handleSearch}
              userRole={userRole}
              toggleAuthModal={toggleAuthModal}
              handleChange={handleChange}
              handleLogout={handleLogout}
            />
          </div>
        </div>
      </div>

      {/* ------ Auth Modal ------ */}
      <AuthModal />
    </>
  );
};

export default Navbar;
