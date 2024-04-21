// ExploreSol/app/globalTypes.ts

/*
TYPE DEFINITION 1:
Define a type for listing data and it can be used anywhere in the app 
to fix listings type errors
*/
type ListingType = {
  id: number;
  author_id: string;
  author: string;
  name: string;
  logo_url: string;
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
  solarplex: string;
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
}