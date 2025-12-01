"use client";
import React, { useEffect, useState } from "react";
import { notFound, usePathname } from "next/navigation";
import NewsFeedCard from "./NewsFeedCard";
import StructureData from "../global/StructureData";

function DedicatedSinglePost({ feedData ,singleNews}) {
	const navigate = usePathname();
	const [filteredData, setFilteredData] = useState(null);
	const [previousData, setPreviousData] = useState();
	const [nextData, setNextData] = useState();
	const [randomFeed, setRandomFeed] = useState();

	useEffect(() => {
		const newData = feedData?.filter((item) => {
			const titleToSlug = item?.slug;
			const slugArray = navigate.split("/");

			if (titleToSlug === slugArray[slugArray.length - 1]) {
				return titleToSlug === slugArray[slugArray.length - 1];
			} else {
				return null;
			}
		});

		setFilteredData(newData);

		// let data = feedData.data.reduce(function (previousValue, currentValue, index, array) {
		// 	let newData = [];
		// 	// setNextData(previousValue, array[index + 1]);
		// 	newData.push(previousValue, array[index + 1]);

		// 	return newData;
		// });
		// // setPreviousData(data);

		if (newData.length !== 0) {
			let id = newData[0].id;

			// Filter elements less than id and find the maximum id
			let prevObject = feedData?.reduce((prev, current) => {
				if (current.id < id && current.id > (prev ? prev.id : -Infinity)) {
					return current;
				}
				return prev;
			}, null);

			// Filter elements greater than id and find the minimum id
			let nextObject = feedData.reduce((next, current) => {
				if (current.id > id && current.id < (next ? next.id : Infinity)) {
					return current;
				}
				return next;
			}, null);

			//random choose the item
			function randomValue() {
				let random = Math.floor(Math.random() * feedData.length);

				if (feedData[random].id === id) {
					return randomValue();
				} else {
					return random;
				}
			}

			setNextData(nextObject);
			setPreviousData(prevObject);
			setRandomFeed(feedData[randomValue()]);

			// console.log({ prevObject, nextObject });
		}
	}, []);

	console.log(filteredData);

	return (
		<>
			{filteredData &&
				filteredData[0].seo?.structuredData?.map((item, i) => {
					return <StructureData data={item} key={i} />;
				})}
			<div>
				{filteredData?.length !== 0 ? (
					<div className={``}>
						<div className=" ">
							{/* <SearchComponent /> */}

							<div className={`min-h-[1000px]`}>
								{/* {filteredData &&
						filteredData.map((data) => {
							return <SingleCard data={data} />;
						})} */}

								<NewsFeedCard feedData={filteredData} previousData={previousData} nextData={nextData} randomFeed={randomFeed} singleNews={singleNews} />
							</div>
						</div>
					</div>
				) : (
					notFound()
				)}
			</div>
		</>
	);
}

export default DedicatedSinglePost;
