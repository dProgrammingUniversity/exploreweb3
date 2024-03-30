import React from "react";
import Link from "next/link";
import ListingPagination from "./ListingPagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

const ListingArea = ({ listings, totalPages }) => {
  return (
    <>
      <section className="listings-area ptb-100">
        <div className="container">
          <div className="listings-grid-sorting row align-items-center">
            <div className="col-lg-5 col-md-6 result-count">
              <p>
                We found <span className="count">{listings.length}</span>{" "}
                listings available for you
              </p>
            </div>

            <div className="col-lg-7 col-md-6 ordering">
              <div className="d-flex justify-content-end">
                <div className="select-box">
                  <label>Sort By:</label>
                  <select className="blog-select">
                    <option>Recommended</option>
                    <option>Default</option>
                    <option>Popularity</option>
                    <option>Latest</option>
                    <option>Price: low to high</option>
                    <option>Price: high to low</option>
                  </select>
                </div>

                <div className="select-box">
                  <label>Distance:</label>
                  <select className="blog-select">
                    <option>Driving (5 mi.)</option>
                    <option>Walking (1 mi.)</option>
                    <option>Biking (2 mi.)</option>
                    <option>Within 4 blocks</option>
                    <option>Bicycle (6 mi.)</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            {listings &&
              listings.map(
                (list) =>
                  list.status === "active" && (
                    <div className="col-xl-4 col-lg-6 col-md-6" key={list.id}>
                      <div className="single-listings-box">
                        <div className="listings-image">
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
                                      src={gal.replace(
                                        /^http:\/\//i,
                                        "https://"
                                      )}
                                      alt="image"
                                    />
                                    <Link
                                      href={`/listing/${list.id}`}
                                      className="link-btn"
                                    ></Link>
                                  </div>
                                </SwiperSlide>
                              ))}
                          </Swiper>

                          <button type="button" className="bookmark-save">
                            <i className="flaticon-heart"></i>
                          </button>
                          <Link href="#" className="category">
                            <i className="flaticon-cooking"></i>
                          </Link>
                        </div>

                        <div className="listings-content">
                          <div className="author">
                            <div className="d-flex align-items-center">
                              <img src="/images/user4.jpg" alt="image" />
                              <span>Admin</span>
                            </div>
                          </div>

                          <ul className="listings-meta">
                            <li>
                              <Link href="#">
                                <i className="flaticon-hotel"></i>{" "}
                                {list.category}
                              </Link>
                            </li>
                            <li>
                              <Link href="#">
                                <i className="flaticon-pin"></i> {list.address}
                              </Link>
                            </li>
                          </ul>

                          <h3>
                            <Link href={`/listing/${list.id}`}>
                              {list.listingTitle}
                            </Link>
                          </h3>

                          <span className="status">
                            <i className="flaticon-save"></i> Open Now
                          </span>

                          <div className="d-flex align-items-center justify-content-between">
                            <div className="rating">
                              <i className="bx bxs-star"></i>
                              <i className="bx bxs-star"></i>
                              <i className="bx bxs-star"></i>
                              <i className="bx bxs-star"></i>
                              <i className="bx bx-star"></i>
                              <span className="count">(10)</span>
                            </div>
                            <div className="price">
                              Start From <span>${list.pricing}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
              )}

            <div className="col-xl-12 col-lg-12 col-md-12">
              {listings.length > 0 && (
                <ListingPagination totalPages={totalPages} />
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ListingArea;
