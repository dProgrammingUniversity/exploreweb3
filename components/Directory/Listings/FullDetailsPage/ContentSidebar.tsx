// /components/Directory/Listings/FullDetailsPage/ContentSidebar.tsx
"use client";
import React from "react";
import Link from "next/link";
import { AppendSiteUrlToExternalLink } from "@/utils/AppendSiteUrlToExternalLink";

const ContentSidebar: React.FC<{ listing: DisplayListingTypes }> = ({ listing }) => {
  return (
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
                listing.download_solana_dapp_store_url,
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
                listing.download_google_play_url,
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
                listing.download_apple_app_store_url,
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
                listing.download_chrome_extension_url,
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
  );
};

export default ContentSidebar;
