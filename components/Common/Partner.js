import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

const Partner = () => {
  return (
    <>
      <div className="partner-area ptb-100 bg-f5f5f5">
        <div className="container">
          <div className="section-title">
            <h2>Our Partners</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida. Risus commodo viverra.
            </p>
          </div>

          <Swiper
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              576: {
                slidesPerView: 2,
              },
              758: {
                slidesPerView: 3,
              },
              992: {
                slidesPerView: 4,
              },
              1200: {
                slidesPerView: 5,
              },
            }}
            className="partner-slides"
          >
            <SwiperSlide>
              <div className="partner-item">
                <img src="/images/partner/partner1.png" alt="image" />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="partner-item">
                <img src="/images/partner/partner2.png" alt="image" />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="partner-item">
                <img src="/images/partner/partner3.png" alt="image" />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="partner-item">
                <img src="/images/partner/partner4.png" alt="image" />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="partner-item">
                <img src="/images/partner/partner5.png" alt="image" />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="partner-item">
                <img src="/images/partner/partner6.png" alt="image" />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Partner;
