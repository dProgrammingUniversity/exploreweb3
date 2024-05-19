// /components/Directory/Listings/ListingsFullDetailsPage.tsx
"use client";
import React, { useState, useEffect, useMemo } from "react";
import { createClient } from "@/utils/supabase/client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AppendSiteUrlToExternalLink } from "@/utils/AppendSiteUrlToExternalLink";
import EmailSubscriptionForm from "../Newsletter/EmailSubscriptionForm";
import { renderMultilineText } from "@/utils/FormatText";
import ListingsRelatedSuggestion from "./ListingsRelatedSuggestion";
import FavoritesButton from "../Favorite/FavoritesButton";
import RatingReviewsForm from "../RatingsReviews/RatingReviewsForm";
import RatingReviewsList from "../RatingsReviews/RatingReviewsList";
import Image from "next/image";

const ListingsFullDetailsPage: React.FC<{
  onListingDataLoaded?: (data: DisplayListingTypes) => void;
}> = ({ onListingDataLoaded }) => {
  const pathname = usePathname();
  const slug = pathname.split("/").pop() || "";
  const [listing, setListing] = useState<DisplayListingTypes | null>(null);
  const [loading, setLoading] = useState(true);
  const [userId, setUserId] = useState<string | null>(null);
  const supabaseClient = useMemo(() => createClient(), []);

  const defaultImageUrl =
    "https://res.cloudinary.com/difhad1rl/image/upload/v1712648696/ExploreSol-Banner-01_qgtopx.jpg";
  const featuredImage =
    "https://res.cloudinary.com/difhad1rl/image/upload/v1712648696/ExploreSol-Banner-01_qgtopx.jpg";

  useEffect(() => {
    const fetchListingData = async () => {
      const { data, error } = await supabaseClient
        .from("listings")
        .select("*")
        .eq("slug", slug)
        .eq("moderation_status", "approved")
        .single();

      if (error) {
        console.error("Error fetching listing:", error);
        setLoading(false);
      } else {
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
          const categoryNamesWithId = categoriesData.reduce(
            (acc, category) => ({ ...acc, [category.id]: category.name }),
            {}
          );
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
          onListingDataLoaded && onListingDataLoaded(updatedListing);
        }
        setLoading(false);
      }
    };

    if (slug) {
      fetchListingData();
    }
  }, [slug]);

  useEffect(() => {
    const fetchUserData = async () => {
      const {
        data: { user },
        error,
      } = await supabaseClient.auth.getUser();
      if (user) {
        setUserId(user.id);
      } else {
        console.error("Error fetching user data (user id):", error);
      }
    };

    if (slug) {
      fetchUserData();
    }
  }, [supabaseClient]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!listing) {
    return <div>Listing not found</div>;
  }

  return (
    <>
      <div className="md:w-1/2 lg:w-[32%]">
        <div className="animate_top mb-10 rounded-md border border-stroke bg-white p-9 shadow-solid-13 dark:border-strokedark dark:bg-blacksection">
          <h4 className="mb-7.5 text-2xl font-semibold text-black dark:text-white">
            Blockchain:
          </h4>
          <p>{listing.blockchain}</p>
        </div>

        <div className="animate_top mb-10 rounded-md border border-stroke bg-white p-9 shadow-solid-13 dark:border-strokedark dark:bg-blacksection">
          <h4 className="mb-7.5 text-2xl font-semibold text-black dark:text-white">
            {listing.name} Governance:
          </h4>
          <p>{listing.governance}</p>
        </div>

        <div className="animate_top mb-10 rounded-md border border-stroke bg-white p-9 shadow-solid-13 dark:border-strokedark dark:bg-blacksection">
          <h4 className="mb-7.5 text-2xl font-semibold text-black dark:text-white">
            Keyword:
          </h4>
          <p>{listing.keyword}</p>
        </div>

        <div className="animate_top mb-10 rounded-md border border-stroke bg-white p-9 shadow-solid-13 dark:border-strokedark dark:bg-blacksection">
          <h4 className="mb-7.5 text-2xl font-semibold text-black dark:text-white">
            {listing.name} Tokenomic:
          </h4>
          <p>
            <span className="text-green-600">
              Does {listing.name} have Token:
            </span>
            {""} {listing.tokenomic}
          </p>
          <p>
            <span className="text-green-600">{listing.name} Token Ticker:</span>
            {""} {listing.token_name}
          </p>
        </div>

        <div className="animate_top mb-10 rounded-md border border-stroke bg-white p-9 shadow-solid-13 dark:border-strokedark dark:bg-blacksection">
          <h4 className="mb-7.5 text-2xl font-semibold text-black dark:text-white">
            {listing.name} NFT Collection:
          </h4>
          <p>
            <span className="text-green-600">
              Does {listing.name} have NFT Collection:
            </span>
            {""} {listing.nft_collection}
          </p>
          <p>
            {listing.nft_collection_url ? (
              <Link
                href={AppendSiteUrlToExternalLink(listing.nft_collection_url)}
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

        <div className="animate_top mb-10 rounded-md border border-stroke bg-white p-9 shadow-solid-13 dark:border-strokedark dark:bg-blacksection">
          <h4 className="mb-7.5 text-2xl font-semibold text-black dark:text-white">
            {listing.name} Website:
          </h4>
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

        <div className="animate_top mb-10 rounded-md border border-stroke bg-white p-9 shadow-solid-13 dark:border-strokedark dark:bg-blacksection">
          <h4 className="mb-7.5 text-2xl font-semibold text-black dark:text-white">
            {listing.name} Social Media:
          </h4>

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

        <div className="animate_top mb-10 rounded-md border border-stroke bg-white p-9 shadow-solid-13 dark:border-strokedark dark:bg-blacksection">
          <h4 className="mb-7.5 text-2xl font-semibold text-black dark:text-white">
            {" "}
            {listing.name} Roadmap:
          </h4>
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

        <div className="animate_top mb-10 rounded-md border border-stroke bg-white p-9 shadow-solid-13 dark:border-strokedark dark:bg-blacksection">
          <h4 className="mb-7.5 text-2xl font-semibold text-black dark:text-white">
            {listing.name} Whitepaper:
          </h4>
          <p>
            {listing.whitepaper_url ? (
              <Link
                href={AppendSiteUrlToExternalLink(listing.whitepaper_url)}
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

        <div className="animate_top mb-10 rounded-md border border-stroke bg-white p-9 shadow-solid-13 dark:border-strokedark dark:bg-blacksection">
          <h4 className="mb-7.5 text-2xl font-semibold text-black dark:text-white">
            {listing.name} GitHub:
          </h4>
          <p>
            <span className="text-green-600">
              {listing.name} Source Code Accessibility:
            </span>
            {""} {listing.source_code_access}
          </p>
          <p>
            {listing.github_url ? (
              <Link
                href={AppendSiteUrlToExternalLink(listing.github_url)}
                target="_blank"
                className="text-blue-400 hover:text-blue-300"
              >
                GitHub
              </Link>
            ) : (
              <span className="text-gray-500">
                {listing.name} GitHub link not available
              </span>
            )}
          </p>
        </div>

        <div className="animate_top mb-10 rounded-md border border-stroke bg-white p-9 shadow-solid-13 dark:border-strokedark dark:bg-blacksection">
          <h4 className="mb-7.5 text-2xl font-semibold text-black dark:text-white">
            {listing.name} Documentation:
          </h4>
          <p>
            {listing.documentation_url ? (
              <Link
                href={AppendSiteUrlToExternalLink(listing.documentation_url)}
                target="_blank"
                className="text-blue-400 hover:text-blue-300"
              >
                Documentation
              </Link>
            ) : (
              <span className="text-gray-500">
                {listing.name} Documentation link not available
              </span>
            )}
          </p>
          <p>
            {listing.faq_url ? (
              <Link
                href={AppendSiteUrlToExternalLink(listing.faq_url)}
                target="_blank"
                className="text-blue-400 hover:text-blue-300"
              >
                {listing.name} FAQs
              </Link>
            ) : (
              <span className="text-gray-500">
                {listing.name} FAQs link not available
              </span>
            )}
          </p>
        </div>

        <div className="animate_top mb-10 rounded-md border border-stroke bg-white p-9 shadow-solid-13 dark:border-strokedark dark:bg-blacksection">
          <h4 className="mb-7.5 text-2xl font-semibold text-black dark:text-white">
            Contact {listing.name} Support:
          </h4>

          <p>
            {listing.support_website_url ? (
              <Link
                href={AppendSiteUrlToExternalLink(listing.support_website_url)}
                target="_blank"
                className="text-blue-400 hover:text-blue-300"
              >
                Support Website
              </Link>
            ) : (
              <span className="text-gray-500">
                {listing.name} Support Website link not available
              </span>
            )}
          </p>

          <p>
            {listing.support_livechat_url ? (
              <Link
                href={AppendSiteUrlToExternalLink(listing.support_livechat_url)}
                target="_blank"
                className="text-blue-400 hover:text-blue-300"
              >
                Support Live Chat
              </Link>
            ) : (
              <span className="text-gray-500">
                {listing.name} Support Live Chat link not available
              </span>
            )}
          </p>

          <p>
            {listing.support_email ? (
              <a
                href={`mailto:${listing.support_email}`}
                className="text-blue-400 hover:text-blue-300"
              >
                Support Email
              </a>
            ) : (
              <span className="text-gray-500">
                {listing.name} Support Email link not available
              </span>
            )}
          </p>

          <p>
            {listing.support_discord_url ? (
              <Link
                href={AppendSiteUrlToExternalLink(listing.support_discord_url)}
                target="_blank"
                className="text-blue-400 hover:text-blue-300"
              >
                Support Discord
              </Link>
            ) : (
              <span className="text-gray-500">
                {listing.name} Support Discord link not available
              </span>
            )}
          </p>

          <p>
            {listing.support_twitter_url ? (
              <Link
                href={AppendSiteUrlToExternalLink(listing.support_twitter_url)}
                target="_blank"
                className="text-blue-400 hover:text-blue-300"
              >
                Support X (Twitter)
              </Link>
            ) : (
              <span className="text-gray-500">
                {listing.name} Support X (Twitter) link not available
              </span>
            )}
          </p>

          <p>
            {listing.support_telegram_url ? (
              <Link
                href={AppendSiteUrlToExternalLink(listing.support_telegram_url)}
                target="_blank"
                className="text-blue-400 hover:text-blue-300"
              >
                Support Telegram
              </Link>
            ) : (
              <span className="text-gray-500">
                {listing.name} Support Telegram link not available
              </span>
            )}
          </p>
        </div>

        <div className="animate_top mb-10 rounded-md border border-stroke bg-white p-9 shadow-solid-13 dark:border-strokedark dark:bg-blacksection">
          <h4 className="mb-7.5 text-2xl font-semibold text-black dark:text-white">
            Download {listing.name} dApp:
          </h4>

          <p>
            {listing.download_solana_dapp_store_url ? (
              <Link
                href={AppendSiteUrlToExternalLink(
                  listing.download_solana_dapp_store_url
                )}
                target="_blank"
                className="text-blue-400 hover:text-blue-300"
              >
                Solana dApp Store
              </Link>
            ) : (
              <span className="text-gray-500">
                {listing.name} Solana dApp Store link not available
              </span>
            )}
          </p>
        </div>

        <div className="animate_top mb-10 rounded-md border border-stroke bg-white p-9 shadow-solid-13 dark:border-strokedark dark:bg-blacksection">
          <h4 className="mb-7.5 text-2xl font-semibold text-black dark:text-white">
            Download {listing.name} App:
          </h4>

          <p>
            {listing.download_google_play_url ? (
              <Link
                href={AppendSiteUrlToExternalLink(
                  listing.download_google_play_url
                )}
                target="_blank"
                className="text-blue-400 hover:text-blue-300"
              >
                Android (Google Play Store)
              </Link>
            ) : (
              <span className="text-gray-500">
                {listing.name} Android (Google Play Store) link not available
              </span>
            )}
          </p>

          <p>
            {listing.download_apple_app_store_url ? (
              <Link
                href={AppendSiteUrlToExternalLink(
                  listing.download_apple_app_store_url
                )}
                target="_blank"
                className="text-blue-400 hover:text-blue-300"
              >
                Apple iOS (App Store)
              </Link>
            ) : (
              <span className="text-gray-500">
                {listing.name} Apple iOS (App Store) link not available
              </span>
            )}
          </p>

          <p>
            {listing.download_chrome_extension_url ? (
              <Link
                href={AppendSiteUrlToExternalLink(
                  listing.download_chrome_extension_url
                )}
                target="_blank"
                className="text-blue-400 hover:text-blue-300"
              >
                Chrome Extension
              </Link>
            ) : (
              <span className="text-gray-500">
                {listing.name} Chrome Extension link not available
              </span>
            )}
          </p>

          <p>
            {listing.download_website_url ? (
              <Link
                href={AppendSiteUrlToExternalLink(listing.download_website_url)}
                target="_blank"
                className="text-blue-400 hover:text-blue-300"
              >
                Download Website
              </Link>
            ) : (
              <span className="text-gray-500">
                {listing.name} Download Website link not available
              </span>
            )}
          </p>
        </div>
      </div>

      <div className="lg:w-2/3">
        <div className="animate_top rounded-md border border-stroke bg-white p-7.5 shadow-solid-13 dark:border-strokedark dark:bg-blacksection md:p-10">
          <h1 className="mb-5 mt-11 text-center text-5xl font-semibold text-black dark:text-white 2xl:text-sectiontitle2">
            {listing.name}
          </h1>

          <ul className="mb-9 flex flex-wrap gap-5 2xl:gap-7.5">
            <li>
              <span className="text-black dark:text-white">
                Project Status:{" "}
              </span>{" "}
              {listing.status}
            </li>
            <li>
              <span className="text-black dark:text-white">Year Founded: </span>{" "}
              {listing.year_founded}
            </li>
            <li>
              <span className="text-black dark:text-white">
                Moderation Status:{" "}
              </span>{" "}
              {listing.moderation_status}
            </li>
          </ul>

          <div className="mb-10 w-full overflow-hidden">
            <div className="relative flex aspect-[97/60] w-full items-center justify-center sm:aspect-[97/44]">
              <Image
                src={listing.logo_url || defaultImageUrl}
                alt={listing.name}
                className="rounded-md object-cover object-center"
                width={600}
                height={400}
              />
            </div>
          </div>

          <div className="blog-details">
            <FavoritesButton userId={userId} listingId={listing.id} />

            <ul className="mb-9">
              <li>
                <span className="text-black dark:text-white">Pricing: </span>{" "}
                {listing.pricing}
              </li>
              <li>
                <span className="text-black dark:text-white">Categories: </span>{" "}
                {listing.category_1_name}, {listing.category_2_name},{" "}
                {listing.category_3_name}, {listing.category_4_name},{" "}
                {listing.category_5_name}
              </li>
            </ul>

            <h2>{listing.name} Summary:</h2>
            <p>{renderMultilineText(listing.short_description)}</p>

            <h2>{listing.name} Description:</h2>
            <p>{renderMultilineText(listing.full_description)}</p>

            <h2>{listing.name} Pros:</h2>
            <p>{renderMultilineText(listing.pros)}</p>

            <h2>{listing.name} Cons:</h2>
            <p>{renderMultilineText(listing.cons)}</p>

            <h2>{listing.name} Use Case:</h2>
            <p>{renderMultilineText(listing.use_case)}</p>

            <h2>{listing.name} Demo:</h2>
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

            <h2>{listing.name} Team Details:</h2>
            <p>{renderMultilineText(listing.team)}</p>

            <div className="text-center">
              <h3>
                Kindly support to keep this ExploreSolana project going to
                continue to add more Solana projects like {listing.name}:
              </h3>
              <p>
                <Link
                  href={"/donate"}
                  className="text-xl font-bold text-green-500"
                >
                  Kindly Donate Here - Thanks!
                </Link>
              </p>
            </div>

            <EmailSubscriptionForm />

            <div className="mt-8">
              <h2>{listing.name} Alternatives & Related Listings:</h2>
              <p>Checkout {listing.name} alternatives below:</p>
              {listing && listing.category_1_name && (
                <ListingsRelatedSuggestion
                  mainCategory={listing.category_1_name}
                />
              )}
            </div>

            <div className="mt-8">
              <h2>Rate & Review {listing.name}:</h2>
              <RatingReviewsForm listingId={listing?.id} userId={userId} />
            </div>
            <div className="mt-8">
              <h2>{listing.name} Users Ratings & Reviews:</h2>
              <span>Discover other users experience with {listing.name}:</span>
              <RatingReviewsList listingId={listing?.id} userId={null} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListingsFullDetailsPage;
