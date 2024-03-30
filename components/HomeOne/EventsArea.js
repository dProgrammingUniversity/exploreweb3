import React from "react";
import Link from "next/link";

const EventsArea = () => {
  return (
    <>
      <section className="events-area pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <h2>Upcoming Events</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida. Risus commodo viverra.
            </p>
          </div>

          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="events-box">
                <img src="/images/events/events-big.jpg" alt="image" />
                <div className="content">
                  <h3>Global Robotics Summit & Festival</h3>
                  <span className="meta">
                    <i className="flaticon-calendar"></i> Thu, Jul 30, 11:30 am
                    - 10:00 pm
                  </span>
                </div>
                <Link href="/single-events" className="link-btn"></Link>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="events-item-list">
                <div className="single-events-box">
                  <div className="row m-0">
                    <div className="col-lg-4 col-md-4 p-0">
                      <div className="image bg-1">
                        <img src="/images/events/events1.jpg" alt="image" />
                        <Link href="/single-events" className="link-btn"></Link>
                      </div>
                    </div>

                    <div className="col-lg-8 col-md-8 p-0">
                      <div className="content">
                        <span className="meta">
                          <i className="flaticon-calendar"></i> Thu, Jul 30,
                          11:30 am - 10:00 pm
                        </span>
                        <h3>
                          <Link href="/single-events">
                            Internet of Things Forum Africa Exhibition (IOTFA)
                          </Link>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="single-events-box">
                  <div className="row m-0">
                    <div className="col-lg-4 col-md-4 p-0">
                      <div className="image bg-2">
                        <img src="/images/events/events2.jpg" alt="image" />
                        <Link href="/single-events" className="link-btn"></Link>
                      </div>
                    </div>

                    <div className="col-lg-8 col-md-8 p-0">
                      <div className="content">
                        <span className="meta">
                          <i className="flaticon-calendar"></i> Thu, Jul 30,
                          11:30 am - 10:00 pm
                        </span>
                        <h3>
                          <Link href="/single-events">
                            Digital Marketing: Customer Engagement & Social
                            Media
                          </Link>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="single-events-box">
                  <div className="row m-0">
                    <div className="col-lg-4 col-md-4 p-0">
                      <div className="image bg-3">
                        <img src="/images/events/events3.jpg" alt="image" />
                        <Link href="/single-events" className="link-btn"></Link>
                      </div>
                    </div>

                    <div className="col-lg-8 col-md-8 p-0">
                      <div className="content">
                        <span className="meta">
                          <i className="flaticon-calendar"></i> Thu, Jul 30,
                          11:30 am - 10:00 pm
                        </span>
                        <h3>
                          <Link href="/single-events">
                            International Agriculture and Technology Summit
                          </Link>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EventsArea;
