"use client";
import React, { useEffect, useState } from "react";

import SingleCard from "./SingleCard";
// import SearchComponent from "./SearchComponent";
import Link from "next/link";
// import NavBar from "../NavBar";
import { BiChevronLeft } from "react-icons/bi";

import InfiniteScroll from "react-infinite-scroll-component";
// import Spinner from "../Spinner";
import { usePathname } from "next/navigation";
import FadeInUpSection from "../FadeInUpSection";
// import EmailSubscribe from "../EmailSubscribe";


function NewsFeedCard({ feedData, singleNews, previousData, nextData, randomFeed, categorySection }) {
	const [sortedData, setSortedData] = useState();
	const [search, setSearch] = useState("");
	const [count, setCount] = useState(10);
	const [dataLength, setdataLength] = useState(1);
	const [noData, setNoData] = useState();

	const navigate = usePathname();

	// console.log(feedData);

	useEffect(() => {
		if (feedData) {
			let finalData = feedData.reduce(function (accumulator, currentValue) {
				if (typeof currentValue.id === "number") {
					// Insert currentValue into the correct position in the accumulator array
					if (navigate === "/daily-digest") {
						// const index = accumulator.findIndex((item) => item.attributes.pin_post !== true && item.id <= currentValue.id);

						// if (index === -1) {
						// 	accumulator.push(currentValue);
						// } else {
						// 	accumulator.splice(index, 0, currentValue);
						// }

						// Check if pin_post is true
						if (currentValue?.pin_post === true) {
							// Place the pinned post at the beginning of the array
							accumulator.unshift(currentValue);
						} else {
							// Find the first non-pinned item with an id greater than the current value's id
							const pinnedCount = accumulator.filter((item) => item.pin_post === true).length;
							const index = accumulator.findIndex((item, idx) => idx >= pinnedCount && item.id <= currentValue.id);

							console.log(index);

							if (index === -1) {
								// If no larger id is found among non-pinned items, push the currentValue to the end
								accumulator.push(currentValue);
							} else {
								// Insert the currentValue at the found index
								accumulator.splice(index, 0, currentValue);
							}
						}
					} else {
						const index = accumulator.findIndex((item) => item.id <= currentValue.id);

						if (index === -1) {
							accumulator.push(currentValue);
						} else {
							accumulator.splice(index, 0, currentValue);
						}
					}
				}
				return accumulator;
			}, []);
			setSortedData(finalData);
			setdataLength(feedData.length);
			console.log(sortedData);
		}

		const foundData = sortedData?.filter((item) => {
			return search.toLowerCase() === ""
				? item
				: item.attributes.feed_title.toLowerCase().includes(search.toLowerCase()) ||
						item.attributes.feed_description.toLowerCase().includes(search.toLowerCase());
		});

		setNoData(foundData?.length);
	}, [feedData, search]);

	console.log(sortedData);
	

	// setNextData(sortedData && sortedData);

	const handleLoad = () => {
		setTimeout(() => {
			setCount(count + 10);
		}, 2500);
	};

	return (
		<div className="bg-secondary-900 pb-[60px] md:pb-[100px]">
			{/* <NavBar search={search} setSearch={setSearch} isSearch={singleNews ? false : true} /> */}
			{/* <SearchComponent search={search} setSearch={setSearch} /> */}
			<div className="">
				<div className=" max-w-[672px] mx-auto pt-[100px] lg:pt-[140px]  sm:pb-[50px] flex flex-col sm:flex-row items-center sm:justify-between">
					{singleNews ? (
						<div className="h-[inherit] sm:h-[68px] self-start sm:self-auto sm:flex sm:items-center pt-[25px] sm:pt-0 ml-2.5 md:ml-0 mb-[30px] sm:mb-0">
							<Link
								href="/daily-digest"
								className="text-neutral-200 hover:text-primary-500 duration-300 text-center font-[500] text-[12px] md:text-[14px] flex items-center decoration-[1px]  underline underline-offset-4 "
							>
								<BiChevronLeft className="text-2xl" /> BACK TO All DAILY DIGEST
							</Link>
						</div>
					) : (
						<div className=" sm:ml-2.5 md:ml-0 mb-[30px] sm:mb-0 sm:pt-0">
							<h1 className="text-neutral-50 text-[26px] sm:text-[32px] font-[600] text-center sm:text-left cursor-pointer" onClick={() => window.location.reload()}>
								DAILY DIGEST
							</h1>
							<p className="text-[14px] font-[400] text-neutral-500">Cutting-edge trends and timeless truths.</p>
						</div>
					)}
					{/* <EmailSubscribe component="newsfeed" singleNews={singleNews} /> */}
				</div>
				{noData !== 0 ? (
					<InfiniteScroll
						dataLength={count}
						next={handleLoad}
						hasMore={count <= dataLength}
						scrollThreshold={0.7}
						loader={
							<div className="flex flex-col justify-center">
								{/* <Spinner /> <span className="text-center pt-2 pl-2 text-[#8f8f8f]">Loading...</span> */}
							</div>
						}
					>
						{sortedData &&
							sortedData
								.filter((item) => {
									return search.toLowerCase() === ""
										? item
										: item?.feed_title.toLowerCase().includes(search.toLowerCase()) ||
												item?.feed_description.toLowerCase().includes(search.toLowerCase());
								})
								.slice(0, count)
								.map((data,i) => {
									return (
										<FadeInUpSection key={i} >
											<SingleCard
												data={data ? data : "No data"}
												key={data.id}
												highlightedSearch={search.toLowerCase()}
												singleNews={singleNews}
												previousData={previousData}
												nextData={nextData}
												randomFeed={randomFeed}
											/>
										
										</FadeInUpSection>
									);
								})}
					</InfiniteScroll>
				) : (
					<div>
						<p className="text-center text-[24px] pt-8">No data Found</p>
					</div>
				)}
			</div>
		</div>
	);
}

export default NewsFeedCard;
