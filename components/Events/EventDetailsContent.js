import React, { useState, useEffect } from "react";

const EventDetailsContent = () => {
  const [action, setAction] = useState({});
  const [days, setDays] = useState("");
  const [hours, setHours] = useState("");
  const [minutes, setMinutes] = useState("");
  const [seconds, setSeconds] = useState("");

  const comingSoonTime = () => {
    var endTime = new Date("August 23, 2026 17:00:00 PDT");
    var endTimeParse = Date.parse(endTime) / 1000;
    var now = new Date();
    var nowParse = Date.parse(now) / 1000;
    var timeLeft = endTimeParse - nowParse;
    var countdays = Math.floor(timeLeft / 86400);
    var counthours = Math.floor((timeLeft - countdays * 86400) / 3600);
    var countminutes = Math.floor(
      (timeLeft - countdays * 86400 - counthours * 3600) / 60
    );
    var countseconds = Math.floor(
      timeLeft - countdays * 86400 - counthours * 3600 - countminutes * 60
    );
    if (counthours < 10) {
      counthours = 0 + counthours;
    }
    if (countminutes < 10) {
      countminutes = 0 + countminutes;
    }
    if (countseconds < 10) {
      countseconds = 0 + countseconds;
    }

    setDays(countdays);
    setHours(counthours);
    setMinutes(countminutes);
    setSeconds(countseconds);
  };

  useEffect(() => {
    setInterval(() => {
      comingSoonTime();
    }, 1000);

    return () => {
      setAction({});
    };
  }, []);

  return (
    <>
      <div className="events-details-area bg-f9f9f9 ptb-100">
        <div className="container">
          <div className="events-details-image">
            <img src="/images/events/events-details.jpg" alt="image" />

            <div id="timer" className="flex-wrap d-flex justify-content-center">
              <div
                id="days"
                className="align-items-center flex-column d-flex justify-content-center"
              >
                {days} <span>DAYS</span>
              </div>
              <div
                id="hours"
                className="align-items-center flex-column d-flex justify-content-center"
              >
                {hours} <span>HOURS</span>
              </div>
              <div
                id="minutes"
                className="align-items-center flex-column d-flex justify-content-center"
              >
                {minutes} <span>MINUTES</span>
              </div>
              <div
                id="seconds"
                className="align-items-center flex-column d-flex justify-content-center"
              >
                {seconds} <span>SECONDS</span>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="events-details-header">
                <ul>
                  <li>
                    <i className="bx bx-calendar"></i>Dec 1, 2020 - Dec 31, 2020
                  </li>
                  <li>
                    <i className="bx bx-map"></i>Rome, Italy
                  </li>
                  <li>
                    <i className="bx bx-time"></i>12:00 AM - 12:00 PM
                  </li>
                </ul>
              </div>

              <div className="events-details-location">
                <div id="map">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d190028.2570988032!2d12.395915345059903!3d41.91024148618828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f61b6532013ad%3A0x28f1c82e908503c4!2sColosseum!5e0!3m2!1sen!2sbd!4v1597645466641!5m2!1sen!2sbd"></iframe>
                </div>
              </div>

              <div className="events-details-desc">
                <h3>About The Event</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis.
                </p>
                <h3>Where the event?</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis.
                </p>
                <h3>Who this event is for?</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-12">
              <div className="events-details-info">
                <ul className="info">
                  <li className="price">
                    <div className="d-flex justify-content-between align-items-center">
                      <span>Cost</span>
                      $149
                    </div>
                  </li>
                  <li>
                    <div className="d-flex justify-content-between align-items-center">
                      <span>Total Slot</span>
                      1500
                    </div>
                  </li>
                  <li>
                    <div className="d-flex justify-content-between align-items-center">
                      <span>Booked Slot</span>
                      350
                    </div>
                  </li>
                  <li>
                    <div className="d-flex justify-content-between align-items-center">
                      <span>Pay With</span>
                      <div className="payment-method">
                        <img
                          src="/images/payment/img1.png"
                          className="shadow"
                          alt="image"
                        />
                        <img
                          src="/images/payment/img2.png"
                          className="shadow"
                          alt="image"
                        />
                        <img
                          src="/images/payment/img3.png"
                          className="shadow"
                          alt="image"
                        />
                        <img
                          src="/images/payment/img4.png"
                          className="shadow"
                          alt="image"
                        />
                      </div>
                    </div>
                  </li>
                </ul>

                <div className="btn-box">
                  <a href="#" className="default-btn">
                    <i className="flaticon-user"></i>Book Now<span></span>
                  </a>
                  <p>
                    You must{" "}
                    <a
                      href="#"
                      data-toggle="modal"
                      data-target="#loginRegisterModal"
                    >
                      login
                    </a>{" "}
                    before register event.
                  </p>
                </div>

                <div className="events-share">
                  <div className="share-info">
                    <span>
                      Share This Course <i className="flaticon-share"></i>
                    </span>

                    <ul className="social-link">
                      <li>
                        <a href="https://www.facebook.com/" className="d-block" target="_blank">
                          <i className="bx bxl-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.facebook.com/" className="d-block" target="_blank">
                          <i className="bx bxl-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.facebook.com/" className="d-block" target="_blank">
                          <i className="bx bxl-instagram"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.facebook.com/" className="d-block" target="_blank">
                          <i className="bx bxl-linkedin"></i>
                        </a>
                      </li>
                    </ul>
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

export default EventDetailsContent;
