import React from "react";
import Link from "next/link";

const RecentActivities = () => {
  return (
    <>
      <div className="recent-activities-box">
        <h3>Recent Activities</h3>

        <ul>
          <li className="alert alert-dismissible fade show" role="alert">
            <div className="icon">
              <i className="bx bx-layer"></i>
            </div>
            Your listing{" "}
            <strong>
              <Link href="#">Hills Hotel</Link>
            </strong>{" "}
            has been approved!
            <button
              type="button"
              className="btn-close"
              data-dismiss="alert"
              aria-label="Close"
            ></button>
          </li>

          <li className="alert alert-dismissible fade show" role="alert">
            <div className="icon">
              <i className="bx bx-star"></i>
            </div>
            <strong>Andy Smith</strong> left a review{" "}
            <div className="rating mid" data-rating="3.0"></div> on{" "}
            <strong>
              <Link href="#">Mad Grill</Link>
            </strong>
            <button
              type="button"
              className="btn-close"
              data-dismiss="alert"
              aria-label="Close"
            ></button>
          </li>

          <li className="alert alert-dismissible fade show" role="alert">
            <div className="icon">
              <i className="bx bx-heart"></i>
            </div>
            Someone bookmarked your{" "}
            <strong>
              <Link href="#">Mexican Grill</Link>
            </strong>{" "}
            listings!
            <button
              type="button"
              className="btn-close"
              data-dismiss="alert"
              aria-label="Close"
            ></button>
          </li>

          <li className="alert alert-dismissible fade show" role="alert">
            <div className="icon">
              <i className="bx bxs-star"></i>
            </div>
            Andy Smith left a review{" "}
            <div className="rating high" data-rating="5.0"></div> on{" "}
            <strong>
              <Link href="#">Mad Grill</Link>
            </strong>
            <button
              type="button"
              className="btn-close"
              data-dismiss="alert"
              aria-label="Close"
            ></button>
          </li>

          <li className="alert alert-dismissible fade show" role="alert">
            <div className="icon">
              <i className="bx bxs-bookmark-star"></i>
            </div>
            Someone bookmarked your{" "}
            <strong>
              <Link href="#">Grill</Link>
            </strong>{" "}
            listings!
            <button
              type="button"
              className="btn-close"
              data-dismiss="alert"
              aria-label="Close"
            ></button>
          </li>

          <li className="alert alert-dismissible fade show" role="alert">
            <div className="icon">
              <i className="bx bx-layer"></i>
            </div>
            Your listing{" "}
            <strong>
              <Link href="#">Hotel Hills</Link>
            </strong>{" "}
            has been approved!
            <button
              type="button"
              className="btn-close"
              data-dismiss="alert"
              aria-label="Close"
            ></button>
          </li>

          <li className="alert alert-dismissible fade show" role="alert">
            <div className="icon">
              <i className="bx bxs-star-half"></i>
            </div>
            <strong>James Andy</strong> left a review{" "}
            <div className="rating low" data-rating="2.5"></div> on{" "}
            <strong>
              <Link href="#">Mad Grill</Link>
            </strong>
            <button
              type="button"
              className="btn-close"
              data-dismiss="alert"
              aria-label="Close"
            ></button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default RecentActivities;
