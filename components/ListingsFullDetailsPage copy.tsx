// Exploresol/components/ListingsFullDetailsPage.tsx
import React, { useState, useEffect } from "react";
import { createClient } from "@/utils/supabase/client";
import Link from "next/link";
import { AppendSiteUrlToExternalLink } from "../utils/AppendSiteUrlToExternalLink";
import EmailSubscriptionForm from "./EmailSubscriptionForm";
import { renderMultilineText } from "@/utils/FormatText";
import ListingsRelatedSuggestion from "./ListingsRelatedSuggestion";
import FavoritesButton from "./FavoritesButton";
import RatingReviewsForm from "./ratings-reviews/RatingReviewsForm";
import RatingReviewsList from "./ratings-reviews/RatingReviewsList";

const ListingsFullDetailsPage: React.FC<ListingsFullDetailsPageProps> = ({
  slug,
  // onListingDataLoaded  // This prop is the callback function from the parent page to be called when the listing data is loaded
}) => {
  const [listing, setListing] = useState<DisplayListingTypes | null>(null);
  const [loading, setLoading] = useState(true);
  const [userId, setUserId] = useState<string | null>(null); // State to store the userId
  const supabaseClient = createClient();
  
  
  /*
  Define images for this page
  */
  //Listings default image URL
  const defaultImageUrl =
    "https://res.cloudinary.com/difhad1rl/image/upload/v1712648696/ExploreSol-Banner-01_qgtopx.jpg";
  

  useEffect(() => {
    // Fetch user data to get id
    const fetchUserData = async () => {
      const {
        data: { user },
      } = await supabaseClient.auth.getUser();
      if (user) {
        setUserId(user.id); // Set userId state
      }
    };

    // Fetch listings details
    const fetchListingData = async () => {
      setLoading(true);
      const { data, error } = await supabaseClient
        .from("listings")
        .select("*")
        .eq("slug", slug)
        .single();

      if (error) {
        console.error("Error fetching listing:", error);
        setLoading(false);
      } else {
        // Fetch category names for the listing
        const categoryIds = [
          data.category_1,
          data.category_2,
          data.category_3,
          data.category_4,
          data.category_5,
        ].filter(Boolean);
        const { data: categoriesData, error: categoriesError } =
          await supabaseClient
            .from("categories")
            .select("id, name")
            .in("id", categoryIds);

        if (categoriesError) {
          console.error("Error fetching categories:", categoriesError);
        } else {
          // Map category IDs to names
          const categoryNamesWithId = categoriesData.reduce(
            (acc, category) => ({ ...acc, [category.id]: category.name }),
            {}
          );
          // Update the listing object with category names
          const updatedListing = {
            ...data,
            category_1_name:
              categoryNamesWithId[data.category_1 as keyof CategoryNamesWithId],
            category_2_name:
              categoryNamesWithId[data.category_2 as keyof CategoryNamesWithId],
            category_3_name:
              categoryNamesWithId[data.category_3 as keyof CategoryNamesWithId],
            category_4_name:
              categoryNamesWithId[data.category_4 as keyof CategoryNamesWithId],
            category_5_name:
              categoryNamesWithId[data.category_5 as keyof CategoryNamesWithId],
          };
          setListing(updatedListing);
        }
        setLoading(false);
      }
    };

    if (slug) {
      fetchListingData();
      fetchUserData();
    }
  }, [slug]);

  // if loading
  if (loading) {
    return <div>Loading...</div>;
  }

  // if no listing found with the slug
  if (!listing) {
    return <div>Listing not found</div>;
  }

  // Listing details presentation
  return (
    <>
      <div className="container">
        <div className="bg-gray-900 text-white">
          <div className="container mx-auto px-4 py-8">
            <header className="text-center mb-8 bg-purple-900">
              <h1 className="text-6xl font-bold mb-2">{listing.name}</h1>
              <p className="text-l font-semibold text-gray-400">
                <span className="text-blue-400">Status:</span> {listing.status}{" "}
                || <span className="text-green-400">Founded:</span>{" "}
                {listing.year_founded}
                <br />
                <span className="text-red-400">Category:</span>{" "}
                {listing.category_1_name}, {listing.category_2_name},{" "}
                {listing.category_3_name}, {listing.category_4_name},{" "}
                {listing.category_5_name}
              </p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Left Column - Image & Details */}
              <div className="md:col-span-2">
                {/* Image */}
                <img
                  src={listing.logo_url || defaultImageUrl}
                  alt={listing.name}
                  className="w-full h-auto rounded-lg shadow-lg"
                />

                <div className="mt-4">
                  {/* Favorites Button */}
                  <FavoritesButton userId={userId} listingId={listing.id} />

                  {/* Pricing/category */}
                  <p className="text-l font-semibold text-gray-400">
                    <span className="text-green-400">Pricing:</span>{" "}
                    {listing.pricing} ||{" "}
                    <span className="text-blue-400">Main Category:</span>{" "}
                    {listing.category_1_name}
                  </p>

                  {/* short description */}
                  <h2 className="text-2xl font-bold text-purple-500">
                    {listing.name} Summary:
                  </h2>
                  <p className="text-gray-300 mt-2">
                    {renderMultilineText(listing.short_description)}
                  </p>

                  {/* long description */}
                  <div className="mt-4 space-y-2">
                    <h2 className="text-2xl font-bold text-purple-500">
                      {listing.name} Description:
                    </h2>
                    <p>{renderMultilineText(listing.full_description)}</p>
                  </div>

                  {/* pros description */}
                  <div className="mt-4 space-y-2">
                    <h2 className="text-2xl font-bold text-purple-500">
                      {listing.name} Pros:
                    </h2>
                    <p>{renderMultilineText(listing.pros)}</p>
                  </div>

                  {/* cons description */}
                  <div className="mt-4 space-y-2">
                    <h2 className="text-2xl font-bold text-purple-500">
                      {listing.name} Cons:
                    </h2>
                    <p>{renderMultilineText(listing.cons)}</p>
                  </div>

                  {/* Use Cases */}
                  <div className="mt-4 space-y-2">
                    <h2 className="text-2xl font-bold text-purple-500">
                      {listing.name} Use Case:
                    </h2>
                    <p>{renderMultilineText(listing.use_case)}</p>
                  </div>

                  {/* Demo video */}
                  <div className="mt-4 space-y-2">
                    <h2 className="text-2xl font-bold text-purple-500">
                      {listing.name} Demo:
                    </h2>
                    <p>
                      {listing.demo_url ? (
                        <Link
                          href={AppendSiteUrlToExternalLink(listing.demo_url)}
                          target="_blank"
                          className="text-blue-400 hover:text-blue-300"
                        >
                          Watch {listing.name} Demo Video
                        </Link>
                      ) : (
                        <span className="text-gray-500">
                          {listing.name} Demo Video link not available
                        </span>
                      )}
                    </p>
                  </div>

                  {/* Project Team */}
                  <div className="mt-4 space-y-2">
                    <h2 className="text-2xl font-bold text-purple-500">
                      {listing.name} Team Details:
                    </h2>
                    <p>{renderMultilineText(listing.team)}</p>
                  </div>

                  {/* Email Subscription Form */}
                  <div className="mt-4 space-y-2">
                    <EmailSubscriptionForm />
                  </div>
                </div>
              </div>

              {/* Right Column - Additional Info */}
              <div className="space-y-4">
                <div className="p-4 bg-gray-800 rounded-lg shadow-lg">
                  <h2 className="text-xl font-bold text-purple-500">
                    Blockchain:
                  </h2>
                  <p>{listing.blockchain}</p>
                </div>

                <div className="p-4 bg-gray-800 rounded-lg shadow-lg">
                  <h2 className="text-xl font-bold text-purple-500">
                    {listing.name} Governance:
                  </h2>
                  <p>{listing.governance}</p>
                </div>

                <div className="p-4 bg-gray-800 rounded-lg shadow-lg">
                  <h2 className="text-xl font-bold text-purple-500">
                    Keyword:
                  </h2>
                  <p>{listing.keyword}</p>
                </div>

                <div className="p-4 bg-gray-800 rounded-lg shadow-lg">
                  <h2 className="text-xl font-bold text-purple-500">
                    {listing.name} Tokenomic:
                  </h2>
                  <p>
                    Does {listing.name} have Token: {listing.tokenomic}
                  </p>
                  <p>
                    {listing.name} Token Ticker: {listing.token_name}
                  </p>
                </div>

                <div className="p-4 bg-gray-800 rounded-lg shadow-lg">
                  <h2 className="text-xl font-bold text-purple-500">
                    {listing.name} NFT Collection:
                  </h2>
                  <p>
                    Does {listing.name} have NFT Collection:{" "}
                    {listing.nft_collection}
                  </p>
                  <p>
                    {listing.nft_collection_url ? (
                      <Link
                        href={AppendSiteUrlToExternalLink(
                          listing.nft_collection_url
                        )}
                        target="_blank"
                        className="text-blue-400 hover:text-blue-300"
                      >
                        {listing.name} NFT Collection Website
                      </Link>
                    ) : (
                      <span className="text-gray-500">
                        {listing.name} NFT Collection link not available
                      </span>
                    )}
                  </p>
                </div>

                <div className="p-4 bg-gray-800 rounded-lg shadow-lg">
                  <h2 className="text-xl font-bold text-purple-500">
                    {listing.name} Website:
                  </h2>
                  <p>
                    {listing.website ? (
                      <Link
                        href={AppendSiteUrlToExternalLink(listing.website)}
                        target="_blank"
                        className="text-blue-400 hover:text-blue-300"
                      >
                        Website
                      </Link>
                    ) : (
                      <span className="text-gray-500">
                        {listing.name} Website link not available
                      </span>
                    )}
                  </p>
                </div>

                {/* Social Media Links */}
                <div className="p-4 bg-gray-800 rounded-lg shadow-lg">
                  <h2 className="text-xl font-bold text-purple-500">
                    {listing.name} Social Media:
                  </h2>

                  <p>
                    {listing.twitter ? (
                      <Link
                        href={AppendSiteUrlToExternalLink(listing.twitter)}
                        target="_blank"
                        className="text-blue-400 hover:text-blue-300"
                      >
                        Twitter
                      </Link>
                    ) : (
                      <span className="text-gray-500">
                        {listing.name} Twitter link not available
                      </span>
                    )}
                  </p>

                  <p>
                    {listing.discord ? (
                      <Link
                        href={AppendSiteUrlToExternalLink(listing.discord)}
                        target="_blank"
                        className="text-blue-400 hover:text-blue-300"
                      >
                        Discord
                      </Link>
                    ) : (
                      <span className="text-gray-500">
                        {listing.name} Discord link not available
                      </span>
                    )}
                  </p>

                  <p>
                    {listing.telegram ? (
                      <Link
                        href={AppendSiteUrlToExternalLink(listing.telegram)}
                        target="_blank"
                        className="text-blue-400 hover:text-blue-300"
                      >
                        Telegram
                      </Link>
                    ) : (
                      <span className="text-gray-500">
                        {listing.name} Telegram link not available
                      </span>
                    )}
                  </p>

                  <p>
                    {listing.solarplex ? (
                      <Link
                        href={AppendSiteUrlToExternalLink(listing.solarplex)}
                        target="_blank"
                        className="text-blue-400 hover:text-blue-300"
                      >
                        Solarplex
                      </Link>
                    ) : (
                      <span className="text-gray-500">
                        {listing.name} Solarplex link not available
                      </span>
                    )}
                  </p>
                </div>

                {/* Roadmap Link */}
                <div className="p-4 bg-gray-800 rounded-lg shadow-lg">
                  <h2 className="text-xl font-bold text-purple-500">
                    {" "}
                    {listing.name} Roadmap:
                  </h2>
                  <p>
                    {listing.roadmap_url ? (
                      <Link
                        href={AppendSiteUrlToExternalLink(listing.roadmap_url)}
                        target="_blank"
                        className="text-blue-400 hover:text-blue-300"
                      >
                        Roadmap
                      </Link>
                    ) : (
                      <span className="text-gray-500">
                        {listing.name} Roadmap link not available
                      </span>
                    )}
                  </p>
                </div>

                {/* Whitepaper Link */}
                <div className="p-4 bg-gray-800 rounded-lg shadow-lg">
                  <h2 className="text-xl font-bold text-purple-500">
                    {listing.name} Whitepaper:
                  </h2>
                  <p>
                    {listing.whitepaper_url ? (
                      <Link
                        href={AppendSiteUrlToExternalLink(
                          listing.whitepaper_url
                        )}
                        target="_blank"
                        className="text-blue-400 hover:text-blue-300"
                      >
                        Whitepaper
                      </Link>
                    ) : (
                      <span className="text-gray-500">
                        {listing.name} Whitepaper link not available
                      </span>
                    )}
                  </p>
                </div>
              </div>
            </div>

            {/* Related Listings Section */}
            <div className="mt-8">
              <h2 className="text-2xl font-bold mb-1 text-purple-500">
                {listing.name} Alternatives & Related Listings:
              </h2>
              <h2 className="text-l mb-1 text-gray-400">
                Checkout {listing.name} alternatives below:
              </h2>
              {listing && listing.category_1_name && (
                <ListingsRelatedSuggestion
                  mainCategory={listing.category_1_name}
                />
              )}
            </div>

            {/* Ratings and Reviews Section */}
            <div className="mt-8">
              {/* Include the RatingReviewsForm component */}
              <label className="mb-2 capitalize text-2xl font-bold text-purple-500">
                Rate & Review {listing.name}:
              </label>
              <RatingReviewsForm listingId={listing?.id} userId={userId} />

              <br />

              {/* Include the RatingReviewsList component */}
              <label className="mb-2 capitalize text-2xl font-bold text-purple-500">
                {listing.name} Users Ratings & Reviews:
              </label>
              <br />
              <span className="text-sm text-gray-400 mb-1">
                Discover other users experience with {listing.name}:
              </span>
              <RatingReviewsList listingId={listing?.id} userId={null} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListingsFullDetailsPage;
