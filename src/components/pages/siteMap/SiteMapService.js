"use client";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";

function SiteMapService() {
	const { service } = useSelector((state) => state.service);
	return (
		<>
			{service?.map((item, i) => (
				<li className="" key={i}>
					<Link href={`/${item?.slug}`}>{item?.service_name}</Link>{" "}
				</li>
			))}
		</>
	);
}

export default SiteMapService;
