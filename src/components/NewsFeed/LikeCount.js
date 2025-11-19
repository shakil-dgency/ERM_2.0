import React from "react";

// async function getNewsFeeds() {
// 	const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/news-feeds?populate=*`, { cache: "no-store" });
// 	const newsfeeds = await res.json();

// 	return newsfeeds;
// }

// export default async function LikeCount() {
// 	const newsFeeds = await getNewsFeeds();
// 	return (
// 		<div>
// 			{newsFeeds &&
// 				newsFeeds.data.map((data) => {
// 					return (
// 						data.id === id && (
// 							<div className="flex items-center mt-3 gap-2" key={data.id}>
// 								<BiLike />
// 								<p className="text-[14px]">{} people liked it</p>
// 							</div>
// 						)
// 					);
// 				})}
// 		</div>
// 	);
// }

function LikeCount() {
	return <div>LikeCount</div>;
}

export default LikeCount;
