// ExploreSol/app/globalTypes.ts

/*
Define a type for listing data and it can be used anywhere in the app 
to fix listings type errors
*/
type ListingType = {
    id: number;
    name: string;
    logo_url: string;
    category: string;
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
    moderation_status: 'pending' | 'approved' | 'rejected';
    created_at: string;
    updated_at: string;
    slug: string;
  };