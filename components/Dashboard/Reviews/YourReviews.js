import React from "react";
import Link from "next/link";

const YourReviews = () => {
  return (
    <>
      <div className="visitor-reviews-box">
        <h3>Your Reviews</h3>

        <div className="user-review">
          <img src="/images/user1.jpg" className="user" alt="image" />
          <div className="review-rating">
            <div className="review-stars">
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bx-star"></i>
            </div>
            <span className="d-inline-block">
              You{" "}
              <span>
                on <Link href="#">Gym Training</Link>
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
              <i className="bx bx-edit"></i> Edit
            </Link>
          </div>
        </div>

        <div className="user-review">
          <img src="/images/user1.jpg" className="user" alt="image" />
          <div className="review-rating">
            <div className="review-stars">
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
            </div>
            <span className="d-inline-block">
              You{" "}
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
          <div className="btn-box">
            <Link href="#" className="default-btn">
              <i className="bx bx-edit"></i> Edit
            </Link>
          </div>
        </div>

        <div className="user-review">
          <img src="/images/user1.jpg" className="user" alt="image" />
          <div className="review-rating">
            <div className="review-stars">
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star-half"></i>
            </div>
            <span className="d-inline-block">
              You{" "}
              <span>
                on <Link href="#">Shopping Complex</Link>
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
          <div className="btn-box">
            <Link href="#" className="default-btn">
              <i className="bx bx-edit"></i> Edit
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default YourReviews;
