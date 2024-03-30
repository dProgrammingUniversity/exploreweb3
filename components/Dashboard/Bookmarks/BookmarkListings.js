import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

const BookmarkListings = () => {
  return (
    <>
      <div className="listing-area">
        <div className="row">
          <div className="col-xl-4 col-lg-6 col-md-6">
            <div className="single-listings-box">
              <div className="listings-image">
                <img src="/images/listings/listings1.jpg" alt="image" />
                <Link href="/single-listings" className="link-btn"></Link>
              </div>

              <div className="listings-content">
                <ul className="listings-meta">
                  <li>
                    <a href="#">
                      <i className="flaticon-furniture-and-household"></i>{" "}
                      Restaurant
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="flaticon-pin"></i> New York, USA
                    </a>
                  </li>
                </ul>
                <h3>
                  <Link href="/single-listings">Chipotle Mexican Grill</Link>
                </h3>
                <div className="d-flex align-items-center justify-content-between">
                  <div className="rating">
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <span className="count">(45)</span>
                  </div>
                </div>
              </div>

              <div className="listings-footer">
                <a href="#" className="default-btn">
                  Delete
                </a>
              </div>
            </div>
          </div>

          <div className="col-xl-4 col-lg-6 col-md-6">
            <div className="single-listings-box">
              <div className="listings-image">
                <Swiper 
                  navigation={true}
                  modules={[Navigation]}
                  className="listings-image-slides"
                >
                  <SwiperSlide>
                    <div className="single-image">
                      <img src="/images/listings/listings4.jpg" alt="image" />
                      <Link href="/single-listings" className="link-btn"></Link>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="single-image">
                      <img src="/images/listings/listings2.jpg" alt="image" />
                      <Link href="/single-listings" className="link-btn"></Link>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>

              <div className="listings-content">
                <ul className="listings-meta">
                  <li>
                    <a href="#">
                      <i className="flaticon-furniture-and-household"></i> Hotel
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="flaticon-pin"></i> Los Angeles, USA
                    </a>
                  </li>
                </ul>
                <h3>
                  <Link href="/single-listings">The Beverly Hills Hotel</Link>
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
                <a href="#" className="default-btn">
                  Delete
                </a>
              </div>
            </div>
          </div>

          <div className="col-xl-4 col-lg-6 col-md-6">
            <div className="single-listings-box">
              <div className="listings-image">
                <img src="/images/listings/listings3.jpg" alt="image" />
                <Link href="/single-listings" className="link-btn"></Link>
              </div>

              <div className="listings-content">
                <ul className="listings-meta">
                  <li>
                    <a href="#">
                      <i className="flaticon-shopping-bags"></i> Shopping
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="flaticon-pin"></i> Bangkok, Thailand
                    </a>
                  </li>
                </ul>
                <h3>
                  <Link href="/single-listings">Central Shopping Center</Link>
                </h3>
                <div className="d-flex align-items-center justify-content-between">
                  <div className="rating">
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star-half"></i>
                    <span className="count">(35)</span>
                  </div>
                </div>
              </div>

              <div className="listings-footer">
                <a href="#" className="default-btn">
                  Delete
                </a>
              </div>
            </div>
          </div>

          <div className="col-xl-4 col-lg-6 col-md-6">
            <div className="single-listings-box">
              <div className="listings-image">
                <Swiper
                  loop={true}
                  navigation={true}
                  modules={[Navigation]}
                  className="listings-image-slides"
                >
                  <SwiperSlide>
                    <div className="single-image">
                      <img src="/images/listings/listings4.jpg" alt="image" />
                      <Link href="/single-listings" className="link-btn"></Link>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="single-image">
                      <img src="/images/listings/listings2.jpg" alt="image" />
                      <Link href="/single-listings" className="link-btn"></Link>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>

              <div className="listings-content">
                <ul className="listings-meta">
                  <li>
                    <a href="#">
                      <i className="flaticon-cleansing"></i> Beauty
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="flaticon-pin"></i> Suwanee, USA
                    </a>
                  </li>
                </ul>
                <h3>
                  <Link href="/single-listings">Indice Beauty Center</Link>
                </h3>
                <div className="d-flex align-items-center justify-content-between">
                  <div className="rating">
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <i className="bx bx-star"></i>
                    <i className="bx bx-star"></i>
                    <span className="count">(15)</span>
                  </div>
                </div>
              </div>

              <div className="listings-footer">
                <a href="#" className="default-btn">
                  Delete
                </a>
              </div>
            </div>
          </div>

          <div className="col-xl-4 col-lg-6 col-md-6">
            <div className="single-listings-box">
              <div className="listings-image">
                <img src="/images/listings/listings7.jpg" alt="image" />
                <Link href="/single-listings" className="link-btn"></Link>
              </div>

              <div className="listings-content">
                <ul className="listings-meta">
                  <li>
                    <a href="#">
                      <i className="flaticon-furniture-and-household"></i>{" "}
                      Restaurant
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="flaticon-pin"></i> Francisco, USA
                    </a>
                  </li>
                </ul>
                <h3>
                  <Link href="/single-listings">The Mad Made Grill</Link>
                </h3>
                <div className="d-flex align-items-center justify-content-between">
                  <div className="rating">
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <span className="count">(18)</span>
                  </div>
                </div>
              </div>

              <div className="listings-footer">
                <a href="#" className="default-btn">
                  Delete
                </a>
              </div>
            </div>
          </div>

          <div className="col-xl-4 col-lg-6 col-md-6">
            <div className="single-listings-box">
              <div className="listings-image">
                <Swiper
                  loop={true}
                  navigation={true}
                  modules={[Navigation]}
                  className="listings-image-slides"
                >
                  <SwiperSlide>
                    <div className="single-image">
                      <img src="/images/listings/listings4.jpg" alt="image" />
                      <Link href="/single-listings" className="link-btn"></Link>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="single-image">
                      <img src="/images/listings/listings2.jpg" alt="image" />
                      <Link href="/single-listings" className="link-btn"></Link>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>

              <div className="listings-content">
                <ul className="listings-meta">
                  <li>
                    <a href="#">
                      <i className="flaticon-hotel"></i> Hotel
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="flaticon-pin"></i> Los Angeles, USA
                    </a>
                  </li>
                </ul>
                <h3>
                  <Link href="/single-listings">The Beverly Hills Hotel</Link>
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
                <a href="#" className="default-btn">
                  Delete
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookmarkListings;
