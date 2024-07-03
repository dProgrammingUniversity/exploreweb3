// /globalTypes.ts

/*
TYPE DEFINITION 1: for exploresol/app/directory/[slug]/page.tsx
Define a type for listing data and it can be used anywhere in the app 
to fix listings type errors
*/
type DisplayListingTypes = {
  id: number;
  author_id: string;
  author: string;
  name: string;
  logo_url: string;
  category: string;
  category_1: string;
  category_2: string;
  category_3: string;
  category_4: string;
  category_5: string;
  category_1_name?: string;
  category_2_name?: string;
  category_3_name?: string;
  category_4_name?: string;
  category_5_name?: string;
  status: string;
  keyword: string;
  year_founded: number;
  short_description: string;
  full_description: string;
  website: string;
  twitter: string;
  discord: string;
  telegram: string;
  youtube: string;
  pros: string;
  cons: string;
  team: string;
  governance: string;
  blockchain: string;
  use_case: string;
  pricing: string;
  roadmap_url: string;
  whitepaper_url: string;
  nft_collection: string;
  nft_collection_url: string;
  tokenomic: string;
  token_name: string;
  demo_url: string;
  moderation_status: string;
  created_at: string;
  updated_at: string;
  slug: string;
  github_url: string;
  documentation_url: string;
  support_website_url: string;
  support_livechat_url: string;
  support_email: string;
  support_discord_url: string;
  support_twitter_url: string;
  support_telegram_url: string;
  download_google_play_url: string;
  download_apple_app_store_url: string;
  download_solana_dapp_store_url: string;
  download_chrome_extension_url: string;
  download_website_url: string;
  faq_url: string;
  source_code_access: string;
  linkedin: string;
  job_url: string;
  bounty_url: string;
  grant_url: string;
  team_1_name: string;
  team_1_x_url: string;
  team_1_linkedin_url: string;
  team_2_name: string;
  team_2_x_url: string;
  team_2_linkedin_url: string;
  team_3_name: string;
  team_3_x_url: string;
  team_3_linkedin_url: string;
  team_4_name: string;
  team_4_x_url: string;
  team_4_linkedin_url: string;
  team_5_name: string;
  team_5_x_url: string;
  team_5_linkedin_url: string;
  team_all_x_url: string;
  team_all_linkedin_url: string;
  team_all_website_url: string;
};

/*
TYPE DEFINITION 2: for exploresol/components/CreateListings.tsx
Define a type for listing data and it can be used anywhere in the app 
to fix listings type errors

NOTE: commented out  like "id" means not needed for this form submission types
and leaving it there will cause error during form submission
*/
type CreateListingTypes = {
  // id: number;
  // author_id: string;
  // author: string;
  name: string;
  logo_url: string;
  category_1: string;
  category_2: string;
  category_3: string;
  category_4: string;
  category_5: string;
  status: string;
  keyword: string;
  year_founded: number;
  short_description: string;
  full_description: string;
  website: string;
  twitter: string;
  discord: string;
  telegram: string;
  youtube: string;
  pros: string;
  cons: string;
  team: string;
  governance: string;
  blockchain: string;
  use_case: string;
  pricing: string;
  roadmap_url: string;
  whitepaper_url: string;
  nft_collection: string;
  nft_collection_url: string;
  tokenomic: string;
  token_name: string;
  demo_url: string;
  moderation_status: string;
  // created_at: string;
  // updated_at: string;
  // slug: string;
  github_url: string;
  documentation_url: string;
  support_website_url: string;
  support_livechat_url: string;
  support_email: string;
  support_discord_url: string;
  support_twitter_url: string;
  support_telegram_url: string;
  download_google_play_url: string;
  download_apple_app_store_url: string;
  download_solana_dapp_store_url: string;
  download_chrome_extension_url: string;
  download_website_url: string;
  faq_url: string;
  source_code_access: string;
  linkedin: string;
  job_url: string;
  bounty_url: string;
  grant_url: string;
  team_1_name: string;
  team_1_x_url: string;
  team_1_linkedin_url: string;
  team_2_name: string;
  team_2_x_url: string;
  team_2_linkedin_url: string;
  team_3_name: string;
  team_3_x_url: string;
  team_3_linkedin_url: string;
  team_4_name: string;
  team_4_x_url: string;
  team_4_linkedin_url: string;
  team_5_name: string;
  team_5_x_url: string;
  team_5_linkedin_url: string;
  team_all_x_url: string;
  team_all_linkedin_url: string;
  team_all_website_url: string;
};

/*
TYPE DEFINITION 3: for Categories types in 
exploresol/components/CreateListings.tsx
Define a type for listing data and it can be used anywhere in the app 
to fix listings type errors
*/
type CategoryListingTypes = {
  id: number;
  name: string;
};

/*
TYPE DEFINITION 4: for Categories name by IDs types 
Define a type for listing data and it can be used anywhere in the app 
to fix listings type errors
*/
interface CategoryNamesById {
  [key: string]: string;
}

/*
TYPE DEFINITION 5: for ListingsFullDetailsPageProps types 
Define a type for listing data and it can be used anywhere in the app 
to fix listings type errors
*/
type ListingsFullDetailsPageProps = {
  slug: string;
};

/*
TYPE DEFINITION 6: for Categories name by IDs types 
Define a type for listing data and it can be used anywhere in the app 
to fix listings type errors
*/
interface CategoryNamesWithId {
  //empty
}

/*
TYPE DEFINITION 7: for favorite props types 
Define a type for listing data and it can be used anywhere in the app 
to fix listings type errors
*/
// Define an interface for the component props
interface FavoritePageProps {
  userId: string | null;
  listingId: number | null;
}

/*
TYPE DEFINITION 8: for ratings reviews types 
Define a type for listing data and it can be used anywhere in the app 
to fix listings type errors
*/
type RatingsReviewsType = {
  id: number;
  rating: number;
  review: string;
  username: string;
  created_at: string;
};

/*
TYPE DEFINITION 8.1: for ratings reviews form props types 
Define a type for listing data and it can be used anywhere in the app 
to fix listings type errors
*/
interface RatingReviewsProps {
  listingId: number | null;
  userId: string | null;
}

/*
TYPE DEFINITION 9: for User types 
Define a type for listing data and it can be used anywhere in the app 
to fix listings type errors
*/
type User = {
  id: string;
  email?: string;
  username?: string;
};

/*
TYPE DEFINITION 10: for analytics events parameters types 
Define a type for listing data and it can be used anywhere in the app 
to fix listings type errors
*/
interface AnalyticsEventParams {
  action: string;
  category: string;
  label: string;
  value: number;
}

/*
TYPE DEFINITION 11: 
Define a type for Blinks listing data and it can be used anywhere in the app 
to fix listings type errors
*/
type DisplayListingBlinksTypes = {
  id: number;
  name: string;
  moderation_status: string;
  status: string;
  short_description: string;
  blinks_registry_status: string;
  blinks_url: string;
  blinks_actions_json_url: string;
  source_code_access: string;
  blinks_actions_repo_url: string;
  category_1: string;
  category_2: string;
  category_3: string;
  category_4: string;
  category_5: string;
  category_1_name?: string;
  category_2_name?: string;
  category_3_name?: string;
  category_4_name?: string;
  category_5_name?: string;
  project: string;
  year_created: number;
  image_url: string;
  demo_url: string;
  created_at: string;
  updated_at: string;
  slug: string;
  team_1_name: string;
  team_1_x_url: string;
  team_1_linkedin_url: string;
  team_2_name: string;
  team_2_x_url: string;
  team_2_linkedin_url: string;
  team_all_x_url: string;
  team_all_linkedin_url: string;
  team_all_website_url: string;
  platform_ids: number[];
  project_name: string; //used in /components/Blinks/Listings/FullDetailsPage/ContentSidebar.tsx
  project_slug: string; //used in /components/Blinks/Listings/FullDetailsPage/ContentSidebar.tsx
  key_features: String;
};

/*
TYPE DEFINITION 12: 
Define a type for Blinks listing data and it can be used anywhere in the app 
to fix listings type errors

NOTE: commented out  like "id" means not needed for this form submission types
and leaving it there might cause error during form submission
*/
type CreateListingBlinksTypes = {
  // id: number;
  name: string;
  moderation_status: string;
  status: string;
  short_description: string;
  blinks_registry_status: string;
  blinks_url: string;
  blinks_actions_json_url: string;
  source_code_access: string;
  blinks_actions_repo_url: string;
  category_1: string;
  category_2: string;
  category_3: string;
  category_4: string;
  category_5: string;
  category_1_name?: string;
  category_2_name?: string;
  category_3_name?: string;
  category_4_name?: string;
  category_5_name?: string;
  project: string;
  year_created: number;
  image_url: string;
  demo_url: string;
  // created_at: string;
  // updated_at: string;
  // slug: string;
  team_1_name: string;
  team_1_x_url: string;
  team_1_linkedin_url: string;
  team_2_name: string;
  team_2_x_url: string;
  team_2_linkedin_url: string;
  team_all_x_url: string;
  team_all_linkedin_url: string;
  team_all_website_url: string;
  platform_ids: number[];
  // project_name: string; //used in /components/Blinks/Listings/FullDetailsPage/ContentSidebar.tsx
  // project_slug: string; //used in /components/Blinks/Listings/FullDetailsPage/ContentSidebar.tsx
  key_features: String;
};
