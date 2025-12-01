import StructureData from "@/components/global/StructureData";
import Blog from "@/components/pages/home/Blog";
import BlogBody from "@/components/pages/singleBlog/BlogBody";
import SingleBlogHero from "@/components/pages/singleBlog/SingleBlogHero";
import { buildMetadataFromSeo, getData } from "@/services/helper";
import { notFound } from "next/navigation";
import React from "react";

export const revalidate = 60;

export async function generateMetadata({ params }) {
	const { singleBlog } = params;
	return buildMetadataFromSeo(`/api/blogs/${singleBlog}`);
}

async function page({ params }) {
	const { singleBlog } = params;
	const url = `${process.env.NEXT_PUBLIC_API_URL}/api/blogs/${singleBlog}`;

	const data = await getData(url, "Single Blog Page");

	if (!data?.data) {
		// This will trigger Next.js 404 page
		notFound();
	}

	const seo = data?.data?.seo;

	return (
		<>
			{seo &&
				seo.structuredData?.map((item, i) => {
					return <StructureData data={item} key={i} />;
				})}
			<div>
				<SingleBlogHero data={data?.data} />
				<BlogBody data={data?.data?.blog_body} slug={data?.data?.slug} />
				<Blog data={data?.data?.other_blogs} />
			</div>
		</>
	);
}

export default page;
