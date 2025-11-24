
import YearlyPost from "@/components/NewsFeed/YearlyPost";
import { getData } from "@/services/helper";
import React from "react";

export const revalidate = 60;

export default async function page() {
	const url = `${process.env.NEXT_PUBLIC_API_URL}/api/news-feeds?populate=*`;

	const { data } = await getData(url, "year page");

	return (
		<div>
			<div className="relative">
					<div className="absolute top-0 h-[200px] w-full bg-[linear-gradient(0deg,rgba(13,17,22,0)_0%,rgba(13,17,22,0)_50%,rgba(230,64,39,0.2)_100%)]"></div>
				<YearlyPost postData={data} />
			</div>
		</div>
	);
}
