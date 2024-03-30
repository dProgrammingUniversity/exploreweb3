import Link from "next/link";
import NavbarTwo from "../../../components/_App/NavbarTwo";
import DashboardNavbar from "../../../components/Dashboard/DashboardNavbar";
import VisitorReviews from "../../../components/Dashboard/Reviews/VisitorReviews";
import YourReviews from "../../../components/Dashboard/Reviews/YourReviews";
import Footer from "../../../components/Dashboard/Footer";

const Reviews = ({ user }) => {
  return (
    <>
      <DashboardNavbar />

      <div className="main-content d-flex flex-column">
        <NavbarTwo userRole={user} />

        <div className="breadcrumb-area">
          <h1>Reviews</h1>
          <ol className="breadcrumb">
            <li className="item">
              <Link href="/dashboard">Home</Link>
            </li>
            <li className="item">
              <Link href="/dashboard">Dashboard</Link>
            </li>
            <li className="item">Reviews</li>
          </ol>
        </div>

        <div className="row">
          <div className="col-lg-6 col-md-12">
            <VisitorReviews />
          </div>

          <div className="col-lg-6 col-md-12">
            <YourReviews />
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Reviews;
