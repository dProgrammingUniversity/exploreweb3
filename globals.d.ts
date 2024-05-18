// globals.d.ts
export {};

declare global {
  //gtag types
  interface Window {
    gtag: (...args: any[]) => void;
  }

  //GA_TRACKING_ID types
  interface Window {
    GA_TRACKING_ID?: string;
  }
}
