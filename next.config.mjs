/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "cms.escaperoommarketer.com",
				port: "",
				pathname: "/uploads/**",
			},
		],
	},

	async redirects() {
		return [
			{
				source: "/5-ux-mistakes-escape-room-website",
				destination: "/blog/5-ux-mistakes-escape-room-website",
				permanent: true,
			},
			{
				source: "/seo-web-design-for-escape-rooms",
				destination: "/blog/seo-web-design-for-escape-rooms",
				permanent: true,
			},
			{
				source: "/escape-room-advertising-ideas",
				destination: "/blog/escape-room-advertising-ideas",
				permanent: true,
			},
			{
				source: "/escape-room-website-redesign",
				destination: "/blog/escape-room-website-redesign",
				permanent: true,
			},
			{
				source: "/user-generated-content-for-escape-rooms",
				destination: "/blog/user-generated-content-for-escape-rooms",
				permanent: true,
			},
			{
				source: "/escape-room-facebook-event-ads",
				destination: "/blog/escape-room-facebook-event-ads",
				permanent: true,
			},
			{
				source: "/escape-room-facebook-ads-strategy",
				destination: "/blog/escape-room-facebook-ads-strategy",
				permanent: true,
			},
			{
				source: "/seo-success-with-social-media-for-escape-rooms",
				destination: "/blog/seo-success-with-social-media-for-escape-rooms",
				permanent: true,
			},
			{
				source: "/escape-room-seo-mistakes",
				destination: "/blog/escape-room-seo-mistakes",
				permanent: true,
			},
			{
				source: "/seo-keyword-research-for-escape-room",
				destination: "/blog/seo-keyword-research-for-escape-room",
				permanent: true,
			},
			{
				source: "/optimizing-google-business-profile-for-escape-rooms",
				destination: "/blog/optimizing-google-business-profile-for-escape-rooms",
				permanent: true,
			},
			{
				source: "/escape-room-marketing-strategy",
				destination: "/blog/escape-room-marketing-strategy",
				permanent: true,
			},
			{
				source: "/key-seo-metrics-every-escape-room-owner-should-analyze-and-track",
				destination: "/blog/key-seo-metrics-every-escape-room-owner-should-analyze-and-track",
				permanent: true,
			},
			{
				source: "/escape-room-theme-ideas",
				destination: "/blog/escape-room-theme-ideas",
				permanent: true,
			},
			{
				source: "/escape-room-seo",
				destination: "/blog/escape-room-seo",
				permanent: true,
			},
			{
				source: "/advanced-link-building-techniques-for-escape-room-website",
				destination: "/blog/advanced-link-building-techniques-for-escape-room-website",
				permanent: true,
			},
			{
				source: "/google-ads-escape-room",
				destination: "/blog/google-ads-escape-room",
				permanent: true,
			},
			{
				source: "/escape-room-remarketing",
				destination: "/blog/escape-room-remarketing",
				permanent: true,
			},
			{
				source: "/escape-room-website-success",
				destination: "/blog/escape-room-website-success",
				permanent: true,
			},
			{
				source: "/linkedin-ads-escape-room",
				destination: "/blog/linkedin-ads-escape-room",
				permanent: true,
			},
			{
				source: "/local-seo-escape-room",
				destination: "/blog/local-seo-escape-room",
				permanent: true,
			},
			{
				source: "/avoid-mistakes-escape-room",
				destination: "/blog/avoid-mistakes-escape-room",
				permanent: true,
			},
			{
				source: "/trends-escape-room-themes",
				destination: "/blog/trends-escape-room-themes",
				permanent: true,
			},

			// case studies url
			{
				source: "/case-studies/:slug",
				has: [
					{
						type: "query",
						key: "i", // match old URLs that contain ?i=xx
					},
				],
				destination: "/case-studies",
				permanent: true,
			},

			//quiz url
			{
				source: "/quizzes/:path*",
				destination: "/",
				permanent: true,
			},

			//single page
			{
				source: "/pricing",
				destination: "/",
				permanent: true,
			},
			{
				source: "/projects",
				destination: "/works",
				permanent: true,
			},
			{
				source: "/career",
				destination: "/",
				permanent: true,
			},

			//service page url
			{
				source: "/services",
				destination: "/",
				permanent: true,
			},
			{
				source: "/microsoft-ads",
				destination: "/",
				permanent: true,
			},
			{
				source: "/facebook-ads",
				destination: "/social-media-advertising",
				permanent: true,
			},
			{
				source: "/linkedin-ads",
				destination: "/social-media-advertising",
				permanent: true,
			},
			{
				source: "/social-media-management",
				destination: "/social-media-advertising",
				permanent: true,
			},
			{
				source: "/landing-page-development",
				destination: "/website-design-and-development",
				permanent: true,
			},
			{
				source: "/website-development",
				destination: "/website-design-and-development",
				permanent: true,
			},
		];
	},
};

export default nextConfig;
