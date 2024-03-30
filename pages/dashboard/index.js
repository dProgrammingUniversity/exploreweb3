import Link from "next/link";
import NavbarTwo from "../../components/_App/NavbarTwo";
import DashboardNavbar from "../../components/Dashboard/DashboardNavbar";
import Features from "../../components/Dashboard/Features";
import RecentActivities from "../../components/Dashboard/RecentActivities";
import Invoices from "../../components/Dashboard/Invoices";
import Footer from "../../components/Dashboard/Footer";

const Dashboard = ({ user }) => {
  return (
    <>
      <DashboardNavbar />

      <div className="main-content d-flex flex-column">
        <NavbarTwo userRole={user} />

        <div className="breadcrumb-area">
          <h1>Howdy, Andy!</h1>
          <ol className="breadcrumb">
            <li className="item">
              <Link href="/dashboard">Home</Link>
            </li>
            <li className="item">Dashboard</li>
          </ol>
        </div>

        <div
          className="notification-alert alert alert-success alert-dismissible fade show"
          role="alert"
        >
          Your listing <strong>Hills Hotel</strong> has been approved!
          <button
            type="button"
            className="btn-close"
            data-dismiss="alert"
            aria-label="Close"
          ></button>
        </div>

        <Features />

        <div className="row">
          <div className="col-lg-6 col-md-12">
            <RecentActivities />
          </div>

          <div className="col-lg-6 col-md-12">
            <Invoices />
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Dashboard;
