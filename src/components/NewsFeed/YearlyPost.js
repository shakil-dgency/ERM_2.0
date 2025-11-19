"use client";
import React, { useEffect, useState } from "react";
import { notFound, usePathname } from "next/navigation";
import SingleCard from "./SingleCard";
import NewsFeedCard from "./NewsFeedCard";
// import NotFound from "@/app/not-found";

function YearlyPost({ postData }) {
	const navigate = usePathname();
	const [filteredData, setFilteredData] = useState(null);

	useEffect(() => {
		const newData = postData?.filter((item) => {
			const createdAtDate = new Date(item.createdAt);
			console.log(createdAtDate.getFullYear().toString() , navigate.replace("/daily-digest/", "") );

			return createdAtDate.getFullYear().toString() === navigate.replace("/daily-digest/", "");
		});


		setFilteredData(newData);
	}, []);

	return (
		<div>
			{filteredData?.length !== 0 ? (
				<div className={`${filteredData === null ? "h-[200vh]" : "h-full"}`}>
					<div className="">
						<div className="">
							<NewsFeedCard feedData={filteredData} />
						</div>
					</div>
				</div>
			) : (
				notFound()
			)}
		</div>
	);
}

export default YearlyPost;
