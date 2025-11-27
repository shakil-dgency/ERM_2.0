import { notFound } from "next/navigation";

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
		return notFound()
	}
};

export const setSafeLinkTargets = (selector = ".blog_body a") => {
	const links = document.querySelectorAll(selector);

	links.forEach((link) => {
		const domain = new URL(link.href).hostname.replace("www.", "");

		if (domain === "escaperoommarketer.com") {
			link.removeAttribute("target");
		} else {
			link.setAttribute("target", "_blank");
		}
	});
};
