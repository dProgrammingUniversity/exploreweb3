// /components/utils/AppendSiteUrlToExternalLink.ts

/**
 * Appends the site url query parameter to the given URL.
 * @param {string} url - The original URL.
 * @returns {string} - The formatted URL with site url as a referral query parameter.
 */
export function AppendSiteUrlToExternalLink(url: string | string[]) {
  // If there's no URL, return undefined to avoid rendering a broken link
  if (!url) return "undefined";

  // Check if URL already has query parameters
  const hasQueryParams = url.includes("?");
  const siteLinkQuery = hasQueryParams ? "&ref=exploresolana" : "?ref=exploresolana";

  return `${url}${siteLinkQuery}`;
}
