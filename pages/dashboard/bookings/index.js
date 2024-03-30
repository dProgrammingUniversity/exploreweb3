import Link from "next/link";
import NavbarTwo from "../../../components/_App/NavbarTwo";
import DashboardNavbar from "../../../components/Dashboard/DashboardNavbar";
import Footer from "../../../components/Dashboard/Footer";
import BookingRequests from "../../../components/Dashboard/Bookings/BookingRequests";

const Bookings = ({user}) => {
	return (
		<>
			<DashboardNavbar />

			<div className="main-content d-flex flex-column">

				<NavbarTwo 
					userRole={user} 
				/>

				<div className="breadcrumb-area">
					<h1>Bookings</h1>
					<ol className="breadcrumb">
						<li className="item">
							<Link href="/dashboard">
								Home
							</Link>
						</li>
						<li className="item">
							<Link href="/dashboard">
								Dashboard
							</Link>
						</li>
						<li className="item">Bookings</li>
					</ol>
				</div>

				<BookingRequests />

				<Footer />
			</div>
		</>
	);
};

export default Bookings;
