import Blog from "@/components/pages/home/Blog";
import BlogBody from "@/components/pages/singleBlog/BlogBody";
import SingleBlogHero from "@/components/pages/singleBlog/SingleBlogHero";
import { getData } from "@/services/helper";
import { notFound } from "next/navigation";
import React from "react";

async function page({ params }) {
	const { singleBlog } = params;
	const url = `${process.env.NEXT_PUBLIC_API_URL}/api/blogs/${singleBlog}`;

	const data = await getData(url, "Single Blog Page");
	console.log(data);

	if (!data?.data) {
		// This will trigger Next.js 404 page
		notFound();
	}

	return (
		<div>
			<SingleBlogHero data={data?.data} />
			<BlogBody data={data?.data.blog_body} />
			<Blog data={data?.data.other_blogs} />
		</div>
	);
}

export default page;
