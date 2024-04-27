// ExploreSol/utils/AppendSiteUrlToExternalLink.js

/**
 * Appends the site url query parameter to the given URL.
 * @param {string} url - The original URL.
 * @returns {string} - The formatted URL with site url as a referral query parameter.
 */
export function AppendSiteUrlToExternalLink(url: string | string[]) {
    if (!url) return url;
  
    // Check if URL already has query parameters
    const hasQueryParams = url.includes('?');
    const siteLinkQuery = hasQueryParams ? '&ref=exploresol' : '?ref=exploresol';
    
    return `${url}${siteLinkQuery}`;
  }
  