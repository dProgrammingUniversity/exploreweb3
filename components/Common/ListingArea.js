import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import Link from "next/link";

const ListingArea = () => {
  return (
    <>
      <section className="listings-area ptb-100 bg-f9f9f9">
        <div className="container">
          <div className="section-title">
            <h2>Trending Listings Right Now</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida. Risus commodo viverra.
            </p>
          </div>

          <Swiper
            spaceBetween={25}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1200: {
                slidesPerView: 3,
              },
            }}
            modules={[Pagination]}
            className="listings-slides"
          >
            <SwiperSlide>
              <div className="single-listings-box">
                <div className="listings-image">
                  <img src="/images/listings/listings1.jpg" alt="image" />
                  <Link href="/single-listings" className="link-btn"></Link>

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
                      <img src="/images/user1.jpg" alt="image" />
                      <span>Taylor</span>
                    </div>
                  </div>
                  <ul className="listings-meta">
                    <li>
                      <Link href="#">
                        <i className="flaticon-furniture-and-household"></i>
                        Restaurant
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <i className="flaticon-pin"></i> New York, USA
                      </Link>
                    </li>
                  </ul>
                  <h3>
                    <Link href="/single-listings">Chipotle Mexican Grill</Link>
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
                      <i className="bx bxs-star"></i>
                      <span className="count">(45)</span>
                    </div>
                    <div className="price">
                      Start From <span>$150</span>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
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
                        <img src="/images/listings/listings2.jpg" alt="image" />
                        <Link
                          href="/single-listings"
                          className="link-btn"
                        ></Link>
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      <div className="single-image">
                        <img src="/images/listings/listings3.jpg" alt="image" />
                        <Link
                          href="/single-listings"
                          className="link-btn"
                        ></Link>
                      </div>
                    </SwiperSlide>
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
                      <img src="/images/user2.jpg" alt="image" />
                      <span>Sarah</span>
                    </div>
                  </div>
                  <ul className="listings-meta">
                    <li>
                      <Link href="#">
                        <i className="flaticon-furniture-and-household"></i>{" "}
                        Hotel
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <i className="flaticon-pin"></i> Los Angeles, USA
                      </Link>
                    </li>
                  </ul>
                  <h3>
                    <Link href="/single-listings">The Beverly Hills Hotel</Link>
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
                      Start From <span>$200</span>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-listings-box">
                <div className="listings-image">
                  <img src="/images/listings/listings3.jpg" alt="image" />
                  <Link href="/single-listings" className="link-btn"></Link>

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
                      <img src="/images/user3.jpg" alt="image" />
                      <span>James</span>
                    </div>
                  </div>
                  <ul className="listings-meta">
                    <li>
                      <Link href="#">
                        <i className="flaticon-shopping-bags"></i> Shopping
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <i className="flaticon-pin"></i> Bangkok, Thailand
                      </Link>
                    </li>
                  </ul>
                  <h3>
                    <Link href="/single-listings">Central Shopping Center</Link>
                  </h3>
                  <span className="status status-close">
                    <i className="flaticon-save"></i> Close Now
                  </span>
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="rating">
                      <i className="bx bxs-star"></i>
                      <i className="bx bxs-star"></i>
                      <i className="bx bxs-star"></i>
                      <i className="bx bxs-star"></i>
                      <i className="bx bxs-star-half"></i>
                      <span className="count">(35)</span>
                    </div>
                    <div className="price">
                      Start From <span>$110</span>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
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
                        <img src="/images/listings/listings2.jpg" alt="image" />
                        <Link
                          href="/single-listings"
                          className="link-btn"
                        ></Link>
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      <div className="single-image">
                        <img src="/images/listings/listings3.jpg" alt="image" />
                        <Link
                          href="/single-listings"
                          className="link-btn"
                        ></Link>
                      </div>
                    </SwiperSlide>
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
                      <span>Andy</span>
                    </div>
                  </div>
                  <ul className="listings-meta">
                    <li>
                      <Link href="#">
                        <i className="flaticon-cleansing"></i> Beauty
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <i className="flaticon-pin"></i> Suwanee, USA
                      </Link>
                    </li>
                  </ul>
                  <h3>
                    <Link href="/single-listings">Indice Beauty Center</Link>
                  </h3>
                  <span className="status">
                    <i className="flaticon-save"></i> Open Now
                  </span>
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="rating">
                      <i className="bx bxs-star"></i>
                      <i className="bx bxs-star"></i>
                      <i className="bx bxs-star"></i>
                      <i className="bx bx-star"></i>
                      <i className="bx bx-star"></i>
                      <span className="count">(15)</span>
                    </div>
                    <div className="price">
                      Start From <span>$100</span>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="divider2"></div>
      </section>
    </>
  );
};

export default ListingArea;
