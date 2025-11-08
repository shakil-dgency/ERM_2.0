"use client";
import React, { useEffect, useState } from "react";
import Tools from "../home/comparisonSection/Tools";
import styles from "@/styles/blog.module.css";

function Letter({ data }) {
	// console.log(data?.letter_body.length);
	const [boxHeight, setBoxHeight] = useState(0);
	const [inView, setInView] = useState(999);

	useEffect(() => {
		const x = document.querySelector(".letter_text");

		setBoxHeight(x.offsetHeight);

		// console.log(x.offsetHeight);
	}, [data]);

	const handleView = () => {
		setInView((prev) => prev + 500);
	};
	const handleReduceView = () => {
		setInView((prev) => prev - 500);
	};

	return (
		<section className="min-h-screen ">
			<div className=" max-w-[1182px] mx-auto px-2.5 pt-[100px] lg:pt-[140px] pb-[100px] w-full text-neutral-700 font-[500] leading-[1.3]">
				<div className="relative">
					<div style={{ maxHeight: `${inView}px` }} className=" overflow-hidden">
						<div
							className={`${styles.blog_details} letter_text text-[18px] lg:text-[22px] overflow-hidden`}
							dangerouslySetInnerHTML={{ __html: data?.letter_body ? data.letter_body : "" }}
						/>
					</div>
					{boxHeight > inView && (
						<div
							style={{
								background: "linear-gradient(0deg, rgba(255, 247, 225) 0%, #FFF7E190 28.65%, #FFF7E170 56.96%, rgba(255, 247, 225, 0.00) 100%)",
							}}
							className={` pointer-events-none absolute bottom-0 left-0 right-0 h-[150px] `}
						/>
					)}
				</div>

				{/* Read more button */}
				{boxHeight > inView ? (
					<div className="flex justify-center mt-4">
						<button
							onClick={handleView}
							className="text-[18px] px-[35px] py-[20px] border border-primary-600 rounded-[5px] text-neutral-950 font-[700] leading-[1]"
						>
							Read More
						</button>
					</div>
				) : boxHeight > 999 && (
					<div className="flex justify-center mt-4">
						<button
							onClick={handleReduceView}
							className="text-[18px] px-[35px] py-[20px] border border-primary-600 rounded-[5px] text-neutral-950 font-[700] leading-[1]"
						>
							Read Less
						</button>
					</div>
				)}
			</div>
			{/* <div className="bg-[url('/pages/home/papertexture.png')] bg-repeat relative">
				<div
					style={{
						background: "linear-gradient(180deg, rgba(255, 247, 225) 0%, #FFF7E195 28.65%, #FFF7E170 56.96%, rgba(255, 247, 225, 0.00) 100%)",
					}}
					className={` pointer-events-none absolute top-0 left-0 right-0 h-[70px] `}
				/>
				<Tools />
			</div> */}
		</section>
	);
}

export default Letter;
