export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "ExploreSol",
	description: "Explore Solana Ecosystem & Discover Opportunities",
	navItems: [
		{
			label: "Home",
			href: "/",
		},
    // {
    //   label: "Docs",
    //   href: "/docs",
    // },
    {
      label: "Directory",
      href: "/directory",
    },
    {
      label: "Blog",
      href: "/blog",
    },
    {
      label: "About",
      href: "/about",
    }
	],
	navMenuItems: [
		{
			label: "Profile",
			href: "/profile",
		},
		{
			label: "Dashboard",
			href: "/dashboard",
		},
		{
			label: "Projects",
			href: "/projects",
		},
		{
			label: "Team",
			href: "/team",
		},
		{
			label: "Calendar",
			href: "/calendar",
		},
		{
			label: "Settings",
			href: "/settings",
		},
		{
			label: "Help & Feedback",
			href: "/help-feedback",
		},
		{
			label: "Logout",
			href: "/logout",
		},
	],
	links: {
		// github: "https://github.com/nextui-org/nextui",
		twitter: "https://twitter.com/ExploreSolXyz",
		// docs: "https://nextui.org",
		// discord: "https://discord.gg/9b6yyZKmH4",
    // sponsor: "https://patreon.com/jrgarciadev"
	},
};
