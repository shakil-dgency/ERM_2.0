"use client";
import React, { useEffect, useState } from "react";
import Banner from "./Banner";
import styles from "@/styles/blog.module.css";
import { setSafeLinkTargets } from "@/services/helper";
import { FacebookShareButton, LinkedinShareButton, TwitterShareButton } from "react-share";
import Image from "next/image";
import { PiLinkFill } from "react-icons/pi";
import { FaSquareFacebook, FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

function BlogBody({ data, slug }) {
	const [copy, setCopy] = useState(false);

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

		setSafeLinkTargets();
	}, [data]);

	const handleCopyUrl = async () => {
		try {
			
			
			const url = `/blog/${slug}`;
			const completeUrl = `${process.env.NEXT_PUBLIC_OWN_DOMAIN}` + url;

			await navigator.clipboard.writeText(completeUrl);

			setCopy(true);
			setTimeout(() => setCopy(false), 700);
		} catch (error) {
			console.log("Copy failed:", error);
		}
	};

	return (
		<section className="relative blog_content bg-tertiary-500 px-2.5 pb-[80px] md:pb-[100px] lg:flex justify-center gap-3">
			<div className="absolute bottom-6 right-4 lg:sticky lg:top-[100px] lg:mt-20 lg:h-[120px] flex flex-row lg:flex-col gap-3 text-[24px]">
				<LinkedinShareButton url={`${process.env.NEXT_PUBLIC_OWN_DOMAIN}/blog/${slug}`}>
					<FaLinkedin className="text-neutral-600 hover:text-neutral-800 duration-300 text-[22px]" />
				</LinkedinShareButton>
				<FacebookShareButton url={`${process.env.NEXT_PUBLIC_OWN_DOMAIN}/blog/${slug}`}>
					<FaSquareFacebook className="text-neutral-600 hover:text-neutral-800 duration-300 text-[22px]" />
				</FacebookShareButton>
				<TwitterShareButton url={`${process.env.NEXT_PUBLIC_OWN_DOMAIN}/blog/${slug}`}>
					<FaSquareXTwitter className="text-neutral-600 hover:text-neutral-800 duration-300 text-[22px]" />
				</TwitterShareButton>

				<button
					onClick={handleCopyUrl}
					className={`${
						copy ? "bg-[#BFFF00]" : "bg-transparent"
					} relative z-20 link_copy text-neutral-600 hover:text-neutral-800 duration-300 cursor-pointer rounded`}
				>
					<PiLinkFill />
				</button>
			</div>
			<div>
				{data.map((body, i) => {
					return (
						<div key={i} className={`${data.length-1 === i?"border-b-[1px] border-secondary-100":""}`}>
							<div
								className={`${styles.blog_details} ${styles.global_text_color} ${
									i === 0 ? "pt-[80px] first-blog" : ""
								} blog_body max-w-[900px] mx-auto px-2.5 text-[16px] lg:text-[20px] text-neutral-950`}
								dangerouslySetInnerHTML={{ __html: body?.blog_description }}
							/>

							{body?.banner && <Banner data={body?.banner} />}
						</div>
					);
				})}
			</div>
		</section>
	);
}

export default BlogBody;
