import React from "react"; 

const HowItWorksSteps = () => {
  return (
    <>
      <div className="timeline-area ptb-100">
        <div className="container">
          <div className="main-timeline">
            <div className="timeline">
              <span className="icon">1</span>
              <div className="timeline-content">
                <h3 className="title">Submit Listings</h3>
                <p className="description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et.
                </p>
                <a href="#" className="default-btn">
                  Submit Now
                </a>
              </div>
            </div>

            <div className="timeline">
              <span className="icon">2</span>
              <div className="timeline-content">
                <h3 className="title">Choose Your Package</h3>
                <p className="description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et.
                </p>
                <a href="#" className="default-btn">
                  Choose Now
                </a>
              </div>
            </div>

            <div className="timeline">
              <span className="icon">3</span>
              <div className="timeline-content">
                <h3 className="title">Login to My Account</h3>
                <p className="description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et.
                </p>
                <a
                  href="#"
                  className="default-btn"
                  data-toggle="modal"
                  data-target="#loginRegisterModal"
                >
                  Login Now
                </a>
              </div>
            </div>

            <div className="timeline">
              <span className="icon">4</span>
              <div className="timeline-content">
                <h3 className="title">Submit Listing - Free or Paid</h3>
                <p className="description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et.
                </p>
                <a href="#" className="default-btn">
                  Choose Now
                </a>
              </div>
            </div>

            <div className="timeline">
              <span className="icon">5</span>
              <div className="timeline-content">
                <h3 className="title">Admin Approves</h3>
                <p className="description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HowItWorksSteps;
