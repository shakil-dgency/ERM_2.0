"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

function SiteMapDailyDigest({ feedData }) {
	const [sortedData, setSortedData] = useState();

	useEffect(() => {
		if (feedData) {
			let finalData = feedData.reduce(function (accumulator, currentValue) {
				if (typeof currentValue.id === "number") {
					// Insert currentValue into the correct position in the accumulator array

					const index = accumulator.findIndex((item) => item.id <= currentValue.id);

					if (index === -1) {
						accumulator.push(currentValue);
					} else {
						accumulator.splice(index, 0, currentValue);
					}
				}
				return accumulator;
			}, []);
			setSortedData(finalData);
		}
	}, [feedData]);

	const handleSlug = (title, date) => {
		// const titleToSlug = title.toLowerCase().replace(/ /g, "-");
		const createdAtDate = new Date(date);
		const year = createdAtDate.getFullYear();
		const month = createdAtDate.getMonth() + 1;
		const formattedDate = `/${year}/${month < 10 ? "0" + month : month}`;

		return `${formattedDate}/${title}`;
	};

	return (
		<>
			{sortedData &&
				sortedData.map((item) => {
					return (
						<li key={item.id}>
							<Link href={handleSlug(item.slug, item.createdAt)}>{item.feed_title}</Link>
						</li>
					);
				})}
		</>
	);
}

export default SiteMapDailyDigest;
