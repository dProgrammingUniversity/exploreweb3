import React from "react";

const Subscribe = () => {
  return (
    <>
      <section className="subscribe-area ptb-100 bg-f9f9f9">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="app-download-content">
                <h2>Download Indice App</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

                <div className="btn-box">
                  <Link href="#" className="playstore-btn" target="_blank">
                    <img src="/images/play-store.png" alt="image" />
                    GET IT ON
                    <span>Google Play</span>
                  </Link>
                  <Link href="#" className="applestore-btn" target="_blank">
                    <img src="/images/apple-store.png" alt="image" />
                    Download on the
                    <span>Apple Store</span>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="subscribe-content">
                <h2>Subscribe To Our Newsletter</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

                <form className="newsletter-form">
                  <input
                    type="email"
                    className="input-newsletter"
                    placeholder="Enter your email address"
                    name="EMAIL"
                    required
                  />
                  <button type="submit">Submit Now</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Subscribe;
