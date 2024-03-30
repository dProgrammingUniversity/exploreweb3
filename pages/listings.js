import React from "react";
import axios from "axios";
import Navbar from "../components/_App/Navbar";
import PopularPlacesFilter from "../components/Common/PopularPlacesFilter";
import ListingArea from "../components/Listings/ListingArea";
import Footer from "../components/_App/Footer";
import { withRouter, useRouter } from "next/router";
import baseUrl from "../utils/baseUrl";
const listImage = "../images/empty-listing.png";

const Listings = ({ user, listings, totalPages }) => {
  return (
    <>
      <Navbar userRole={user} />

      <PopularPlacesFilter />

      {listings ? (
        <ListingArea listings={listings} totalPages={totalPages} />
      ) : (
        <div className="empty-page-image">
          <img src={listImage} alt="image" />
          <p>No Listings Available</p>
        </div>
      )}

      <Footer bgColor="bg-f5f5f5" />
    </>
  );
};

Listings.getInitialProps = async ({ query }) => {
  const page = query.page ? query.page : "1";
  const keyword = query.keyword;
  const title = query.title;
  const location = query.location;
  const category = query.category;
  const payload = {
    params: {
      page,
      limit: 6,
      keyword,
      title,
      location,
      category,
    },
  };
  const url = `${baseUrl}/api/v1/listings`;
  const response = await axios.get(url, payload);
  return response.data;
};

export default withRouter(Listings);
