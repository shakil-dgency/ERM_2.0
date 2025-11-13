import BlogHome from "@/components/pages/blog/BlogHome";
import React from "react";
import qs from "qs";
import { getData } from "@/services/helper";
import { notFound } from "next/navigation";

export const revalidate = 60;

async function page() {
	const query = qs.stringify(
		{
			populate: {
				main_image: true,
			},
			pagination: {
				page: 1,
				pageSize: 3, // show first 6 blogs
			},
		},
		{ encodeValuesOnly: true }
	);

	const url = `${process.env.NEXT_PUBLIC_API_URL}/api/blogs?${query}`;

	const { data, meta } = await getData(url, "contact page");

	if (!data) {
		return notFound();
	}

	console.log(data, meta);

	return (
		<div>
			<BlogHome initialData={data} initialMeta={meta} />
		</div>
	);
}

export default page;
