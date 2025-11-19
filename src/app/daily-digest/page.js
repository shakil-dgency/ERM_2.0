import NewsFeedCard from "@/components/NewsFeed/NewsFeedCard";
import { getData } from "@/services/helper";
import React from "react";

async function page() {
	const url = `${process.env.NEXT_PUBLIC_API_URL}/api/news-feeds?populate=*`;

	const { data } = await getData(url, "digest page");
	console.log(data);

	return (
		<div className="relative ">
			<div className="absolute top-0 h-[200px] w-full bg-[linear-gradient(0deg,rgba(13,17,22,0)_0%,rgba(13,17,22,0)_50%,rgba(230,64,39,0.2)_100%)]"></div>
			<NewsFeedCard feedData={data} />
		</div>
	);
}

export default page;
