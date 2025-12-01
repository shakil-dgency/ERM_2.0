import SiteMapBody from "@/components/pages/siteMap/SiteMapBody";
import Container from "@/components/ui/Container";
import { getData } from "@/services/helper";
import React from "react";
import qs from "qs";

async function page() {
	const worksquery = qs.stringify(
		{
			pagination: false,
		},
		{ encodeValuesOnly: true }
	);

	const allWorkRes = `${process.env.NEXT_PUBLIC_API_URL}/api/works?${worksquery}`;

	const { data: worksData } = await getData(allWorkRes, "works data sitemap");

	const caasequery = qs.stringify(
		{
			pagination: false,
		},
		{ encodeValuesOnly: true }
	);

	const newUrl = `${process.env.NEXT_PUBLIC_API_URL}/api/case-studies?${caasequery}`;
	const { data: caseData } = await getData(newUrl, "case ");

	const blogquery = qs.stringify(
		{
			pagination: false,
		},
		{ encodeValuesOnly: true }
	);

	const url = `${process.env.NEXT_PUBLIC_API_URL}/api/blogs?${blogquery}`;

	const { data: blogData } = await getData(url, "blog page sitemap");

	const directoryquery = qs.stringify(
		{
			pagination: false,
		},
		{ encodeValuesOnly: true }
	);

	const cityurl = `${process.env.NEXT_PUBLIC_API_URL}/api/city-names?${directoryquery}`;

	const { data: directoryData } = await getData(cityurl, "directory sitemap");

	const locationurl = `${process.env.NEXT_PUBLIC_API_URL}/api/locations?fields[0]=location_name&fields[1]=slug`;

	const { data: locationData } = await getData(locationurl, "location sitemap");

    const digestquery = qs.stringify(
		{
            fields:["feed_title","slug","createdAt"],
			pagination: false,
		},
		{ encodeValuesOnly: true }
	);

    const digesturl = `${process.env.NEXT_PUBLIC_API_URL}/api/news-feeds?${digestquery}`;

	const { data: digestData } = await getData(digesturl, "digest sitemap");

	return (
		<div className="min-h-screen bg-secondary-900">
			<Container>
				<SiteMapBody worksData={worksData} caseStudy={caseData} blogData={blogData} directoryData={directoryData} locationData={locationData} digestData={digestData} />
			</Container>
		</div>
	);
}

export default page;
