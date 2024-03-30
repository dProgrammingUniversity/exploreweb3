import Link from "next/link";

const ListingAreaNav = ({ activeListings, pendingListings }) => {
  return (
    <>
      <ul className="nav nav-tabs" id="myTab" role="tablist">
        <li className="nav-item">
          <Link
            href="/dashboard/my-listing/active"
            className="nav-link"
            id="all-listing-tab"
          >
            Active listing ({activeListings})
          </Link>
        </li>

        <li className="nav-item">
          <Link
            href="/dashboard/my-listing/pending"
            className="nav-link"
            id="pending-listing-tab"
          >
            Pending listing ({pendingListings})
          </Link>
        </li>
      </ul>
    </>
  );
};

export default ListingAreaNav;
