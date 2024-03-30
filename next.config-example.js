//Copy and paste this file then rename your new copy to next.config.js before you add your sensitive information
// and leave this original copy unedited 

module.exports = {
	trailingSlash: true,
	eslint: { 
		ignoreDuringBuilds: true 
	},
	images: {
		domains: ["res.cloudinary.com"],
	},
	env: {
		CLOUDINARY_URL: '...', // Update here your CLOUDINARY_URL
    CLOUD_NAME: '..', // Update here your CLOUD_NAME
    UPLOAD_PRESET:'...', // Update here your UPLOAD_PRESET
    JWT_SECRET: 'adfjdsjfsdjfkladjfkj', // Update here your JWT_SECRET
	},
	i18n: {
    locales: ["en", "ar"],
    defaultLocale: "en",
  },
};
