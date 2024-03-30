import Link from "next/link";
import NavbarTwo from "../../../components/_App/NavbarTwo";
import DashboardNavbar from "../../../components/Dashboard/DashboardNavbar";
import ProfileArea from "../../../components/Dashboard/Profile/ProfileArea";
import Footer from "../../../components/Dashboard/Footer";
const avatar = "../images/avatar.png";

const Profile = ({ user }) => {
  return (
    <>
      <DashboardNavbar />

      <div className="main-content d-flex flex-column">
        <NavbarTwo userRole={user} />

        <div className="breadcrumb-area">
          <h1>My Profile</h1>
          <ol className="breadcrumb">
            <li className="item">
              <Link href="/dashboard">Home</Link>
            </li>
            <li className="item">
              <Link href="/dashboard">Dashboard</Link>
            </li>
            <li className="item">My Profile</li>
          </ol>
        </div>

        <ProfileArea user={user} avatar={avatar} />

        <Footer />
      </div>
    </>
  );
};

export default Profile;
