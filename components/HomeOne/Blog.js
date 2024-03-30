import React from "react";
import Link from "next/link";

const Blog = () => {
  return (
    <>
      <section className="blog-area pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <h2>Indice Recent News</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida. Risus commodo viverra.
            </p>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="single-blog-post">
                <div className="post-image">
                  <Link href="/single-blog" className="d-block">
                    <img src="/images/blog/blog4.jpg" alt="image" />
                  </Link>
                </div>

                <div className="post-content">
                  <ul className="post-meta d-flex align-items-center">
                    <li>
                      <div className="d-flex align-items-center">
                        <img src="/images/user1.jpg" alt="image" />
                        <span>
                          <Link href="#">Taylor</Link>
                        </span>
                      </div>
                    </li>
                    <li>
                      <i className="flaticon-calendar"></i> Aug 7, 2020
                    </li>
                  </ul>
                  <h3>
                    <Link href="/single-blog">
                      10 Types of Social Proof and What Makes Them Effective
                    </Link>
                  </h3>
                  <Link href="/single-blog" className="link-btn">
                    <i className="flaticon-right-arrow"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-blog-post">
                <div className="post-image">
                  <Link href="/single-blog" className="d-block">
                    <img src="/images/blog/blog5.jpg" alt="image" />
                  </Link>
                </div>

                <div className="post-content">
                  <ul className="post-meta d-flex align-items-center">
                    <li>
                      <div className="d-flex align-items-center">
                        <img src="/images/user2.jpg" alt="image" />
                        <span>
                          <Link href="#">Sarah</Link>
                        </span>
                      </div>
                    </li>
                    <li>
                      <i className="flaticon-calendar"></i> Aug 6, 2020
                    </li>
                  </ul>
                  <h3>
                    <Link href="/single-blog">
                      Tech Products That Make It Easier to Stay Home
                    </Link>
                  </h3>
                  <Link href="/single-blog" className="link-btn">
                    <i className="flaticon-right-arrow"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
              <div className="single-blog-post">
                <div className="post-image">
                  <Link href="/single-blog" className="d-block">
                    <img src="/images/blog/blog6.jpg" alt="image" />
                  </Link>
                </div>

                <div className="post-content">
                  <ul className="post-meta d-flex align-items-center">
                    <li>
                      <div className="d-flex align-items-center">
                        <img src="/images/user3.jpg" alt="image" />
                        <span>
                          <Link href="#">Andy</Link>
                        </span>
                      </div>
                    </li>
                    <li>
                      <i className="flaticon-calendar"></i> Aug 5, 2020
                    </li>
                  </ul>
                  <h3>
                    <Link href="/single-blog">
                      13 Feel-Good Restaurant Stories from the Pandemic
                    </Link>
                  </h3>
                  <Link href="/single-blog" className="link-btn">
                    <i className="flaticon-right-arrow"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
