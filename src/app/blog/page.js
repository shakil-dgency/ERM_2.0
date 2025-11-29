import BlogHome from "@/components/pages/blog/BlogHome";
import React from "react";
import qs from "qs";
import { getData } from "@/services/helper";
import { notFound } from "next/navigation";
import Hero from "@/components/pages/about/Hero";

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

	const { data, meta, tag_options } = await getData(url, "contact page");

	if (!data) {
		return notFound();
	}

	const blogquery = qs.stringify(
		{
			populate: {
				hero: {
					populate: {
						background_image: true,
						hero_text: true,
					},
				},
			},
		},
		{ encodeValuesOnly: true }
	);

	const newUrl = `${process.env.NEXT_PUBLIC_API_URL}/api/all-blog?${blogquery}`;
	const { data: newData } = await getData(newUrl, "blog home page");



	return (
		<div>
			<Hero data={newData?.hero} />
			<BlogHome initialData={data} initialMeta={meta} BLOG_TAGS={tag_options} />
		</div>
	);
}

export default page;
