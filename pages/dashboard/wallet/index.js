import NavbarTwo from "../../../components/_App/NavbarTwo";
import DashboardNavbar from "../../../components/Dashboard/DashboardNavbar";
import Link from "next/link";
import Features from "../../../components/Dashboard/Wallet/Features";
import Earnings from "../../../components/Dashboard/Wallet/Earnings";
import PayoutHistory from "../../../components/Dashboard/Wallet/PayoutHistory";
import Footer from "../../../components/Dashboard/Footer";

const Wallet = ({ user }) => {
  return (
    <>
      <DashboardNavbar />

      <div className="main-content d-flex flex-column">
        <NavbarTwo userRole={user} />

        <div className="breadcrumb-area">
          <h1>Wallet</h1>
          <ol className="breadcrumb">
            <li className="item">
              <Link href="/dashboard">Home</Link>
            </li>
            <li className="item">
              <Link href="/dashoboard">Dashboard</Link>
            </li>
            <li className="item">Wallet</li>
          </ol>
        </div>

        <Features />

        <div className="row">
          <div className="col-lg-6 col-md-12">
            <Earnings />
          </div>

          <div className="col-lg-6 col-md-12">
            <PayoutHistory />
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Wallet;
