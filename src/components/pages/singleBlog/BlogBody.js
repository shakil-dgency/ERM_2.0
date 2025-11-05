"use client"
import React, { useEffect } from "react";
import Banner from "./Banner";
import styles from "@/styles/blog.module.css"

function BlogBody({ data }) {

	useEffect(() => {
		const firstPera = document.querySelector(".first-blog p");
		firstPera?.classList.add("first-word");
		
	}, []);
	

	return (
		<section className="bg-tertiary-500 px-2.5 pb-[80px] md:pb-[100px]">
			{data.map((body, i) => {
				return (
					<div key={i} className="">
						<div
							className={`${styles.blog_details} ${i === 0?"pt-[80px] first-blog":""} max-w-[900px] mx-auto px-2.5 text-[16px] lg:text-[20px] text-neutral-950`}
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
