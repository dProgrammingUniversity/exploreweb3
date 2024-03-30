import Link from "next/link";

const DestinationsOne = ({ titleOne, titleTwo, paddingBottom70 }) => {
  return (
    <>
      <section className={`destinations-area pt-100 ${paddingBottom70}`}>
        <div className="container">
          {titleOne ? (
            <div className="section-title">
              <h2>Popular Places for Future Trips</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum suspendisse ultrices gravida. Risus commodo viverra.
              </p>
            </div>
          ) : titleTwo ? (
            <div className="section-title text-left">
              <h2>Explore Destinations</h2>
              <Link href="#" className="link-btn">
                Show All <i className="flaticon-right-chevron"></i>
              </Link>
            </div>
          ) : (
            ""
          )}

          <div className="row">
            <div className="col-lg-8 col-sm-12 col-md-12">
              <div className="single-destinations-box color-box-shadow">
                <img src="/images/destinations/destinations9.jpg" alt="image" />
                <div className="country">THAILAND</div>
                <div className="content">
                  <h3>Bangkok</h3>
                  <span>26 Places</span>
                </div>
                <Link href="/listings" className="link-btn"></Link>
              </div>
            </div>

            <div className="col-lg-4 col-sm-12 col-md-12">
              <div className="single-destinations-box color-box-shadow">
                <img
                  src="/images/destinations/destinations10.jpg"
                  alt="image"
                />
                <div className="country">JAPAN</div>
                <div className="content">
                  <h3>Osaka</h3>
                  <span>30 Places</span>
                </div>
                <Link href="/listings" className="link-btn"></Link>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 col-md-6">
              <div className="single-destinations-box color-box-shadow">
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
              <div className="single-destinations-box color-box-shadow">
                <img src="/images/destinations/destinations5.jpg" alt="image" />
                <div className="country">UNITED KINGDOM</div>
                <div className="content">
                  <h3>London</h3>
                  <span>21 Places</span>
                </div>
                <Link href="/listings" className="link-btn"></Link>
              </div>
            </div>

            <div className="col-lg-6 col-sm-12 col-md-12">
              <div className="single-destinations-box color-box-shadow">
                <img src="/images/destinations/destinations8.jpg" alt="image" />
                <div className="country">ABUDABI</div>
                <div className="content">
                  <h3>Dubai</h3>
                  <span>14 Places</span>
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

export default DestinationsOne;
