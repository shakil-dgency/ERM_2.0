"use client";
import React, { useEffect } from "react";
import Banner from "./Banner";
import styles from "@/styles/blog.module.css";

function BlogBody({ data }) {
	useEffect(() => {
		const firstPera = document.querySelector(".first-blog p");
		firstPera?.classList.add("first-word");
	}, []);

	useEffect(() => {
		const selector = ".blog_content"; // change to your wrapper
		const container = document.querySelector(selector);
		if (!container) return;

		container.querySelectorAll("figure").forEach((el) => {
			// if already wrapped, skip
			if (el.parentElement && el.parentElement.classList.contains("table-scroll")) return;

			const hasTable = el.querySelector("table");
			if (!hasTable) return;

			// create wrapper
			const wrapper = document.createElement("div");
			wrapper.className = "table-scroll";
			// insert wrapper before the element and move element inside it
			el.parentNode.insertBefore(wrapper, el);
			wrapper.appendChild(el);
		});
	}, [data]);

	return (
		<section className=" blog_content bg-tertiary-500 px-2.5 pb-[80px] md:pb-[100px]">
			{data.map((body, i) => {
				return (
					<div key={i} className="">
						<div
							className={`${styles.blog_details} ${
								i === 0 ? "pt-[80px] first-blog" : ""
							}  max-w-[900px] mx-auto px-2.5 text-[16px] lg:text-[20px] text-neutral-950`}
							dangerouslySetInnerHTML={{ __html: body?.blog_description }}
						/>

						{body?.banner && <Banner data={body?.banner} />}
					</div>
				);
			})}
		</section>
	);
}

export default BlogBody;
