import { notFound } from "next/navigation";
import qs from "qs";

export const getData = async (apiURL, caller, options = {}) => {
	try {
		const url = new URL(apiURL);

		console.log(`[${caller}]: fetching ${url.pathname} started`);

		// const startTime = performance.now();

		const response = await fetch(apiURL, options);

		// const endTime = performance.now();
		// const duration = (endTime - startTime).toFixed(2);

		if (!response.ok) {
			// console.error(`fetch url ${url.pathname} failed`);
			// throw new Error(`[${caller}]: failed to fetch ${url.pathname}`);
			console.log("error");
		}

		const data = await response.json();
		console.log(`[${caller}]: fetching ${url.pathname} completed successfully`);

		return data;
	} catch (error) {
		return notFound();
	}
};

export const setSafeLinkTargets = (selector = ".blog_body a") => {
	const links = document.querySelectorAll(selector);

	links.forEach((link) => {
		const domain = new URL(link.href).hostname.replace("www.", "");

		if (domain === process.env.NEXT_PUBLIC_OWN_DOMAIN) {
			link.removeAttribute("target");
		} else {
			link.setAttribute("target", "_blank");
		}
	});
};

export async function buildMetadataFromSeo(apiURL, options = {}) {
	const newquery = qs.stringify(
		{
			populate: {
				seo: {
					populate: {
						metaImage: true,
					},
				},
			},
		},
		{ encodeValuesOnly: true }
	);

	const url = `${process.env.NEXT_PUBLIC_API_URL}${apiURL}?${newquery}`;

	const { data: seoData } = await getData(url, "Home page SEO", {
		next: { revalidate: 60 },
	});

	let seo = seoData.length ? seoData[0]?.seo : seoData?.seo;
	

	if (!seo) {
		return {
			title: "Escape Room Marketer",
			description: "We help escape rooms get more bookings with smart marketing.",
		};
	}

	const title = seo.metaTitle;
	const description = seo.metaDescription;

	const keywords = seo.keywords; // e.g. "escape room marketing, escape room seo"
	const robots = seo.metaRobots || "index,follow";
	const canonical = seo.canonicalURL;

	const rawImageUrl = seo.metaImage?.url;
	const imageUrl = rawImageUrl ? `${process.env.NEXT_PUBLIC_API_URL}${rawImageUrl}` : "/default-og-image.png";

	return {
		title,
		description,
		keywords: keywords ? keywords.split(",").map((k) => k.trim()) : undefined,
		robots,
		openGraph: {
			title,
			description,
			url: canonical,
			images: [
				{
					url: imageUrl,
				},
			],
		},
		twitter: {
			card: "summary_large_image",
			images: [imageUrl],
		},
		alternates: {
			canonical: canonical || undefined,
		},
		viewport: "width=device-width, initial-scale=1",
	};
}
