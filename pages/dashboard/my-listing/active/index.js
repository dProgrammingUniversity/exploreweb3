import { parseCookies } from "nookies";
import axios from "axios";
import baseUrl from "../../../../utils/baseUrl";
import NavbarTwo from "../../../../components/_App/NavbarTwo";
import DashboardNavbar from "../../../../components/Dashboard/DashboardNavbar";
import ListingAreaNav from "../../../../components/Dashboard/ListingAreaNav";
import DashboardListingArea from "../../../../components/Dashboard/DashboardListingArea";

const Index = ({
	user,
	listings,
	totalPages,
	activeListings,
	pendingListings,
}) => {
	return (
		<>
			<DashboardNavbar 
				user={user} 
				listings={listings} 
			/>

			<div className="main-content d-flex flex-column">

				<NavbarTwo 
					userRole={user} 
				/>

				<section className="listing-area">
					
					<ListingAreaNav
						activeListings={activeListings}
						pendingListings={pendingListings}
					/>

					{listings ? (
						<DashboardListingArea
							user={user}
							data={listings}
							totalPages={totalPages}
							status="active"
						/>
					) : (
						""
					)}
				</section>
			</div>
		</>
	);
};

export async function getServerSideProps(ctx) {
	const { token } = parseCookies(ctx);
	const page = ctx.query.page ? ctx.query.page : "1";

	if (!token) {
		return { listing: [] };
	}
	const payload = {
		headers: { Authorization: token },
		params: {
			page,
			limit: 6,
		},
	};
	const url = `${baseUrl}/api/v1/listings/my-listings?status=active`;

	const res = await axios.get(url, payload);
	const { listings, totalPages, activeListings, pendingListings } =
		await res.data;

	return {
		props: {
			listings,
			totalPages,
			activeListings,
			pendingListings,
		},
	};
}

export default Index;
