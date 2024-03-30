import React, { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import { IndiceContext } from "../../contexts";
import { parseCookies } from "nookies";
import { toast } from "react-hot-toast";
import Link from "next/link";
import axios from "axios";
import baseUrl from "../../utils/baseUrl";
import ActiveListingPagination from "../activeListing/ActiveListingPagination";
import PendingListingPagination from "../pendingListing/PendingListingPagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// components
import UpdateListing from "./UpdateListing";

const DashboardListingArea = ({ user, data, totalPages, status }) => {
  //context state
  const { setActiveListing, setPendingListing } = useContext(IndiceContext);
  const router = useRouter();
  const { token } = parseCookies();
  const [display, setDisplay] = useState(false);
  const [isMounted, setisMounted] = useState(false);
  const [listings, setListings] = useState(data);
  const [showModal, setShowModal] = useState(false);
  const [updateList, setUpdateList] = useState(false);
  let page = parseInt(router.query.page) ? parseInt(router.query.page) : 1;

  const handleShow = (list) => {
    setUpdateList(list);
    setShowModal(true);
  };

  const handleClose = () => setShowModal(false);

  useEffect(() => {
    setisMounted(true);
    setDisplay(true);
    setisMounted(false);
  }, []);

  // show new data after every changes
  useEffect(() => {
    setListings(data);
  }, [page]);

  // updated listings data
  const updatedListings = (listings) => {
    setListings(listings);
    toast.success("Listing updated successfully");
  };

  // chane listing status
  const statusHandler = async (id) => {
    let response = await axios.put(
      `${baseUrl}/api/v1/listings/status/${id}/?status=pending`
    );
    setListings(response.data.updatedListing);
    setActiveListing(response.data.activeListings);
    setPendingListing(response.data.pendingListings);
  };

  // delete listing
  const deleteHandler = async (id) => {
    const payload = {
      headers: { Authorization: token },
    };

    const url = `${baseUrl}/api/v1/listings/${id}?status=${status}`;

    const response = await axios.delete(url, payload);
    if (user.role === "admin") {
      setListings(response.data.adminListings);
      setActiveListing(response.data.adminActiveListings);
      setPendingListing(response.data.adminPendingListings);
    } else {
      setListings(response.data.listings);
      setActiveListing(response.data.activeListings);
      setPendingListing(response.data.pendingListings);
    }
  };

  return (
    <>
      <div className="tab-content" id="myTabContent">
        <div className="tab-pane fade show " id="all-listing">
          <div className="row">
            {listings.length > 0 ? (
              listings.map((list) => (
                <div className="col-xl-4 col-lg-6 col-md-6" key={list.id}>
                  <div className="single-listings-box">
                    <div className="listings-image">
                      {list.gallery.length === 1 ? (
                        list.gallery.length > 0 &&
                        list.gallery.map((gal, i) => (
                          <div className="single-image" key={i}>
                            <img
                              src={gal}
                              alt="Picture of the author"
                              className="w-100"
                            />
                            <Link
                              href={`/listing/${list.id}`}
                              className="link-btn"
                            ></Link>
                          </div>
                        ))
                      ) : display ? (
                        <Swiper 
                          navigation={true}
                          modules={[Navigation]}
                          className="listings-image-slides"
                        >
                          {list.gallery.length > 0 &&
                            list.gallery.map((gal, i) => (
                              <SwiperSlide key={i}>
                                <div className="single-image">
                                  <img
                                    src={gal}
                                    alt="Picture of the author"
                                    className="w-100"
                                  />
                                  <Link
                                    href={`/listing/${list.id}`}
                                    className="link-btn"
                                  ></Link>
                                </div>
                              </SwiperSlide>
                            ))}
                        </Swiper>
                      ) : (
                        ""
                      )}
                    </div>

                    <div className="listings-content">
                      <ul className="listings-meta">
                        <li>
                          <i className="flaticon-furniture-and-household"></i>{" "}
                          {list.category}
                        </li>
                        <li>
                          <i className="flaticon-pin"></i> {list.address}
                        </li>
                      </ul>
                      <h3>
                        <Link href={`/listing/${list.id}`}>
                          {list.listingTitle}
                        </Link>
                      </h3>
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="rating">
                          <i className="bx bxs-star"></i>
                          <i className="bx bxs-star"></i>
                          <i className="bx bxs-star"></i>
                          <i className="bx bxs-star"></i>
                          <i className="bx bx-star"></i>
                          <span className="count">(10)</span>
                        </div>
                      </div>
                    </div>

                    <div className="listings-footer">
                      <div className="d-flex justify-content-between align-items-center">
                        {user.role === "admin" && list.status === "pending" && (
                          <button
                            className="default-btn global-pointer"
                            onClick={() => statusHandler(list.id)}
                          >
                            Approve
                          </button>
                        )}

                        {(user.role === "user" || user.role === "admin") &&
                          list.status === "active" && (
                            <button
                              className="default-btn global-pointer"
                              onClick={() => handleShow(list)}
                            >
                              Edit
                            </button>
                          )}

                        <button
                          className="default-btn global-pointer"
                          onClick={() => deleteHandler(list.id)}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="empty-listing" style={{ paddingBottom: '25px' }}>
                {`No ${status} Listing Available`}
              </p>
            )}
          </div>
        </div>
      </div>
      {status === "pending" && listings.length > 0 ? (
        <PendingListingPagination totalPages={totalPages} />
      ) : status === "active" && listings.length > 0 ? (
        <ActiveListingPagination totalPages={totalPages} />
      ) : (
        ""
      )}

      <UpdateListing
        show={showModal}
        handleClose={handleClose}
        updateList={updateList}
        updatedListings={updatedListings}
      />
    </>
  );
};

export default DashboardListingArea;
