import Link from "next/link";

const DestinationsTwo = () => {
  return (
    <>
      <section className="destinations-area bg-main-color pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <h2>Destinations for Future Trips</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida. Risus commodo viverra.
            </p>
          </div>

          <div className="row">
            <div className="col-lg-6 col-sm-12 col-md-12">
              <div className="single-destinations-box">
                <img src="/images/destinations/destinations1.jpg" alt="image" />
                <div className="country">THAILAND</div>
                <div className="content">
                  <h3>Bangkok</h3>
                  <span>26 Places</span>
                </div>
                <Link href="/listings" className="link-btn"></Link>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 col-md-6">
              <div className="single-destinations-box">
                <img src="/images/destinations/destinations2.jpg" alt="image" />
                <div className="country">UNITED STATES</div>
                <div className="content">
                  <h3>New York</h3>
                  <span>20 Places</span>
                </div>
                <Link href="/listings" className="link-btn"></Link>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 col-md-6">
              <div className="single-destinations-box">
                <img src="/images/destinations/destinations3.jpg" alt="image" />
                <div className="country">JAPAN</div>
                <div className="content">
                  <h3>Osaka</h3>
                  <span>30 Places</span>
                </div>
                <Link href="/listings" className="link-btn"></Link>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 col-md-6">
              <div className="single-destinations-box">
                <img src="/images/destinations/destinations4.jpg" alt="image" />
                <div className="country">FRANCE</div>
                <div className="content">
                  <h3>Paris</h3>
                  <span>35 Places</span>
                </div>
                <Link href="/listings" className="link-btn"></Link>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 col-md-6">
              <div className="single-destinations-box">
                <img src="/images/destinations/destinations5.jpg" alt="image" />
                <div className="country">UNITED KINGDOM</div>
                <div className="content">
                  <h3>London</h3>
                  <span>21 Places</span>
                </div>
                <Link href="/listings" className="link-btn"></Link>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 col-md-6">
              <div className="single-destinations-box">
                <img src="/images/destinations/destinations6.jpg" alt="image" />
                <div className="country">ABUDABI</div>
                <div className="content">
                  <h3>Dubai</h3>
                  <span>14 Places</span>
                </div>
                <Link href="/listings" className="link-btn"></Link>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 col-md-6">
              <div className="single-destinations-box">
                <img src="/images/destinations/destinations7.jpg" alt="image" />
                <div className="country">AUSTRALIA</div>
                <div className="content">
                  <h3>Sydney</h3>
                  <span>10 Places</span>
                </div>
                <Link href="/listings" className="link-btn"></Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DestinationsTwo;
