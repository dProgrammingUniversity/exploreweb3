// Exploresol/utils/analytics/analytics.ts
// "use client"
export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID;

// Function to send a page view to Google Analytics
export const pageview = (url: string) => {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  });
};

// Function to send events to Google Analytics
export const event = ({ action, category, label, value }: AnalyticsEventParams) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};