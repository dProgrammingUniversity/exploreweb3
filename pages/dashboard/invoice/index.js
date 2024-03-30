import Link from "next/link";
import NavbarTwo from "../../../components/_App/NavbarTwo";
import DashboardNavbar from "../../../components/Dashboard/DashboardNavbar";
import Footer from "../../../components/Dashboard/Footer";
import InvoiceTable from "../../../components/Dashboard/Invoice/InvoiceTable";

const Invoice = ({ user }) => {
  return (
    <>
      <DashboardNavbar />

      <div className="main-content d-flex flex-column">
        <NavbarTwo userRole={user} />

        <div className="breadcrumb-area">
          <h1>Invoice</h1>
          <ol className="breadcrumb">
            <li className="item">
              <Link href="/dashboard">Home</Link>
            </li>
            <li className="item">
              <Link href="/dashboard">Dashboard</Link>
            </li>
            <li className="item">Invoice</li>
          </ol>
        </div>

        <InvoiceTable />

        <Footer />
      </div>
    </>
  );
};

export default Invoice;
