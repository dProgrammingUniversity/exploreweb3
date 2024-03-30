import NavbarTwo from "../../../../components/_App/NavbarTwo";
import DashboardNavbar from "../../../../components/Dashboard/DashboardNavbar";
import DashboardListingArea from "../../../../components/Dashboard/DashboardListingArea";

const Index = ({user}) => {
	return (
		<>
			<DashboardNavbar />

			<div className="main-content d-flex flex-column">

				<NavbarTwo 
					userRole={user} 
				/>

				<DashboardListingArea />

			</div>
		</>
	);
};

export default Index;
