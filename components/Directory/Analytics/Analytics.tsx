// Exploresol/components/analytics/Analytics.tsx
"use client"
"use client";
import { useEffect } from 'react';
import { pageview } from '../../utils/analytics/analytics';
// import { GA_TRACKING_ID } from '../../utils/analytics/analytics';


const Analytics = () => {
  useEffect(() => {
    // Ensure GA_TRACKING_ID is available
    if (!window.GA_TRACKING_ID) return;

    const handleRouteChange = () => {
      // Use window.location as the source of truth for the URL
      pageview(window.location.pathname + window.location.search);
    };

    // Listen to history changes - this event covers pushState, replaceState, and popstate
    window.addEventListener('popstate', handleRouteChange);
    window.addEventListener('pushState', handleRouteChange);
    window.addEventListener('replaceState', handleRouteChange);

    // Initial page load
    handleRouteChange();

    return () => {
      window.removeEventListener('popstate', handleRouteChange);
      window.removeEventListener('pushState', handleRouteChange);
      window.removeEventListener('replaceState', handleRouteChange);
    };
  }, []);

  return null;
};

export default Analytics;

