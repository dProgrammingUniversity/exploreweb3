import Link from "next/link";
import LangDropdown from "./LangDropdown";

const Footer = ({ bgColor }) => {
  return (
    <>
      <footer className={`footer-area ${bgColor}`}>
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-sm-6 col-md-6">
              <div className="single-footer-widget">
                <h3>About</h3>

                <ul className="link-list">
                  <li>
                    <Link href="/about">
                      <i className="flaticon-left-chevron"></i> About Indice
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog">
                      <i className="flaticon-left-chevron"></i> Recent News
                    </Link>
                  </li>
                  <li>
                    <Link href="/testimonial">
                      <i className="flaticon-left-chevron"></i> Investor
                      Relations
                    </Link>
                  </li>
                  <li>
                    <Link href="/terms-and-condition">
                      <i className="flaticon-left-chevron"></i> Terms And
                      Condition
                    </Link>
                  </li>
                  <li>
                    <Link href="/privacy-policy">
                      <i className="flaticon-left-chevron"></i> Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <i className="flaticon-left-chevron"></i> Careers
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 col-md-6">
              <div className="single-footer-widget">
                <h3>Discover</h3>

                <ul className="link-list">
                  <li>
                    <Link href="/listings">
                      <i className="flaticon-left-chevron"></i> Listings
                    </Link>
                  </li>
                  <li>
                    <Link href="/events">
                      <i className="flaticon-left-chevron"></i> Events
                    </Link>
                  </li>
                  <li>
                    <Link href="/single-events">
                      <i className="flaticon-left-chevron"></i> Events Details
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact">
                      <i className="flaticon-left-chevron"></i> Customer Support
                    </Link>
                  </li>
                  <li>
                    <Link href="/testimonial">
                      <i className="flaticon-left-chevron"></i> Testimonials
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog">
                      <i className="flaticon-left-chevron"></i> Our Blog
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 col-md-6">
              <div className="single-footer-widget">
                <h3>Business With Indice</h3>

                <ul className="link-list">
                  <li>
                    <Link href="/about">
                      <i className="flaticon-left-chevron"></i> About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/testimonial">
                      <i className="flaticon-left-chevron"></i> Testimonials
                    </Link>
                  </li>
                  <li>
                    <Link href="/faq">
                      <i className="flaticon-left-chevron"></i> FAQ's
                    </Link>
                  </li>
                  <li>
                    <Link href="/listings">
                      <i className="flaticon-left-chevron"></i> Business Support
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact">
                      <i className="flaticon-left-chevron"></i> Contact
                    </Link>
                  </li>
                  <li>
                    <Link href="/privacy-policy">
                      <i className="flaticon-left-chevron"></i> Privacy Policy
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 col-md-6">
              <div className="single-footer-widget">
                <h3>Languages</h3>

                <LangDropdown />

                <h3>Countries</h3>
                <div className="country-switch">
                  <select>
                    <option>United States</option>
                    <option>Canada</option>
                    <option>France</option>
                    <option>Spain</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div className="copyright-area">
            <p>
              Copyright <span>Indice</span> is Proudly Crafted by{" "}
              <a href="https://envytheme.com/" target="_blank" rel="noreferrer">
                EnvyTheme
              </a>
            </p>
          </div>
        </div>

        <div className="footer-image text-center">
          <img src="/images/footer-image.png" alt="image" />
        </div>
      </footer>
    </>
  );
};

export default Footer;
