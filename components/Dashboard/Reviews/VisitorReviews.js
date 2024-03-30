import React from "react";
import Link from "next/link";

const VisitorReviews = () => {
  return (
    <>
      <div className="visitor-reviews-box">
        <h3>Visitor Reviews</h3>

        <div className="user-review">
          <img src="/images/user4.jpg" className="user" alt="image" />
          <div className="review-rating">
            <div className="review-stars">
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
            </div>
            <span className="d-inline-block">
              James Anderson{" "}
              <span>
                on <Link href="#">Farmis Hotel</Link>
              </span>
            </span>
          </div>
          <span className="date">
            <i className="bx bx-calendar"></i> 20 June 2020
          </span>
          <p>
            Very well built theme, couldn't be happier with it. Can't wait for
            future updates to see what else they add in.
          </p>

          <div className="review-image">
            <div className="row">
              <div className="col-lg-3 col-md-3 col-sm-4 col-6">
                <img src="/images/gallery/gallery1.jpg" alt="image" />
              </div>
              <div className="col-lg-3 col-md-3 col-sm-4 col-6">
                <img src="/images/gallery/gallery2.jpg" alt="image" />
              </div>
              <div className="col-lg-3 col-md-3 col-sm-4 col-6">
                <img src="/images/gallery/gallery3.jpg" alt="image" />
              </div>
            </div>
          </div>

          <div className="btn-box">
            <Link href="#" className="default-btn">
              <i className="bx bx-reply"></i> Reply
            </Link>
            <button type="button" className="default-btn danger ml-3">
              <i className="bx bx-trash"></i> Delete
            </button>
          </div>
        </div>

        <div className="user-review">
          <img src="/images/user2.jpg" className="user" alt="image" />
          <div className="review-rating">
            <div className="review-stars">
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star-half"></i>
            </div>
            <span className="d-inline-block">
              Sarah Taylor{" "}
              <span>
                on <a href="#">Shopping Complex</a>
              </span>
            </span>
          </div>
          <span className="date">
            <i className="bx bx-calendar"></i> 19 June 2020
          </span>
          <p>
            Very well built theme, couldn't be happier with it. Can't wait for
            future updates to see what else they add in.
          </p>
          <div className="review-image">
            <div className="row">
              <div className="col-lg-3 col-md-3 col-sm-4 col-6">
                <img src="/images/gallery/gallery1.jpg" alt="image" />
              </div>
            </div>
          </div>
          <div className="btn-box">
            <Link href="#" className="default-btn">
              <i className="bx bx-reply"></i> Reply
            </Link>
            <button type="submit" className="default-btn danger ml-3">
              <i className="bx bx-trash"></i> Delete
            </button>
          </div>
        </div>

        <div className="user-review">
          <img src="/images/user3.jpg" className="user" alt="image" />
          <div className="review-rating">
            <div className="review-stars">
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bx-star"></i>
            </div>
            <span className="d-inline-block">
              David Warner{" "}
              <span>
                on <a href="#">Gym Training</a>
              </span>
            </span>
          </div>
          <span className="date">
            <i className="bx bx-calendar"></i> 18 June 2020
          </span>
          <p>
            Very well built theme, couldn't be happier with it. Can't wait for
            future updates to see what else they add in.
          </p>
          <div className="btn-box">
            <Link href="#" className="default-btn">
              <i className="bx bx-reply"></i> Reply
            </Link>
            <button type="button" className="default-btn danger ml-3">
              <i className="bx bx-trash"></i> Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default VisitorReviews;
