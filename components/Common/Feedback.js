import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

const Feedback = ({ bgColor, bgImage }) => {
  return (
    <>
      <div className={`feedback-area ${bgImage} ${bgColor} ptb-100`}>
        <div className="container">
          <div className="section-title">
            <h2>User’s Feedback About Us</h2>
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
            className="feedback-slides"
          >
            <SwiperSlide>
              <div className="single-feedback-box">
                <div className="rating">
                  <i className="bx bxs-star"></i>
                  <i className="bx bxs-star"></i>
                  <i className="bx bxs-star"></i>
                  <i className="bx bxs-star"></i>
                  <i className="bx bxs-star"></i>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor ut labore et dolore magna aliqua. Quis ipsum
                  suspendisse ultrices gravida. Risus viverra maecenas accumsan.
                </p>
                <div className="client-info">
                  <div className="d-flex align-items-center">
                    <img src="/images/user1.jpg" alt="image" />
                    <div className="title">
                      <h3>John Smith</h3>
                      <span>Restaurant Owner</span>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-feedback-box">
                <div className="rating">
                  <i className="bx bxs-star"></i>
                  <i className="bx bxs-star"></i>
                  <i className="bx bxs-star"></i>
                  <i className="bx bxs-star"></i>
                  <i className="bx bxs-star-half"></i>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor ut labore et dolore magna aliqua. Quis ipsum
                  suspendisse ultrices gravida. Risus viverra maecenas accumsan.
                </p>
                <div className="client-info">
                  <div className="d-flex align-items-center">
                    <img src="/images/user2.jpg" alt="image" />
                    <div className="title">
                      <h3>Sarah Taylor</h3>
                      <span>Hotel Owner</span>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-feedback-box">
                <div className="rating">
                  <i className="bx bxs-star"></i>
                  <i className="bx bxs-star"></i>
                  <i className="bx bxs-star"></i>
                  <i className="bx bxs-star"></i>
                  <i className="bx bx-star"></i>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor ut labore et dolore magna aliqua. Quis ipsum
                  suspendisse ultrices gravida. Risus viverra maecenas accumsan.
                </p>
                <div className="client-info">
                  <div className="d-flex align-items-center">
                    <img src="/images/user3.jpg" alt="image" />
                    <div className="title">
                      <h3>Alex Hales</h3>
                      <span>Developer</span>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-feedback-box">
                <div className="rating">
                  <i className="bx bxs-star"></i>
                  <i className="bx bxs-star"></i>
                  <i className="bx bxs-star"></i>
                  <i className="bx bxs-star-half"></i>
                  <i className="bx bx-star"></i>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor ut labore et dolore magna aliqua. Quis ipsum
                  suspendisse ultrices gravida. Risus viverra maecenas accumsan.
                </p>
                <div className="client-info">
                  <div className="d-flex align-items-center">
                    <img src="/images/user4.jpg" alt="image" />
                    <div className="title">
                      <h3>Andy James</h3>
                      <span>Traveler</span>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-feedback-box">
                <div className="rating">
                  <i className="bx bxs-star"></i>
                  <i className="bx bxs-star"></i>
                  <i className="bx bxs-star"></i>
                  <i className="bx bxs-star"></i>
                  <i className="bx bxs-star-half"></i>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor ut labore et dolore magna aliqua. Quis ipsum
                  suspendisse ultrices gravida. Risus viverra maecenas accumsan.
                </p>
                <div className="client-info">
                  <div className="d-flex align-items-center">
                    <img src="/images/user2.jpg" alt="image" />
                    <div className="title">
                      <h3>Sarah Taylor</h3>
                      <span>Hotel Owner</span>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-feedback-box">
                <div className="rating">
                  <i className="bx bxs-star"></i>
                  <i className="bx bxs-star"></i>
                  <i className="bx bxs-star"></i>
                  <i className="bx bxs-star"></i>
                  <i className="bx bx-star"></i>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor ut labore et dolore magna aliqua. Quis ipsum
                  suspendisse ultrices gravida. Risus viverra maecenas accumsan.
                </p>
                <div className="client-info">
                  <div className="d-flex align-items-center">
                    <img src="/images/user3.jpg" alt="image" />
                    <div className="title">
                      <h3>Alex Hales</h3>
                      <span>Developer</span>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Feedback;
