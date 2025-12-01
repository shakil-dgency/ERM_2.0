"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import styles from "@/styles/blog.module.css";

import { FacebookShareButton, TwitterShareButton, LinkedinShareButton } from "react-share";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { PiLinkFill } from "react-icons/pi";
import { LiaRandomSolid } from "react-icons/lia";

function SingleCard({ data, highlightedSearch, singleNews, previousData, nextData, randomFeed }) {
	const [likeCount, setLikeCount] = useState();
	const [likeStatus, setLikeStatus] = useState(false);
	const [likeAnim, setLikeAnim] = useState(false);
	const [copy, setCopy] = useState(false);

	const navigate = usePathname();

	useEffect(() => {
		const handleStorage = (id) => {
			const storageValue = localStorage.getItem("likeId" + id);
			return storageValue ? JSON.parse(storageValue) : false;
		};

		setLikeStatus(handleStorage(data.id));
	});

	// console.log(previousNextData && previousNextData);

	useEffect(() => {
		const fetchLikeCount = async () => {
			try {
				const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/news-feeds/${data?.slug}`);
				const like = await res.json();

				setLikeCount(like.data.like_count);

				// console.log(likeCount);
			} catch (error) {}
		};

		fetchLikeCount();

		//if a tag has own link then load on the page otherwise new tab

		// if (document.querySelectorAll(".caption a").length !== 0) {
		// 	var aTags = document.querySelectorAll(".caption a");
		// 	aTags.forEach(function (aTag) {
		// 		if (aTag.href.split("/")[2] === "hamiduzjaman.com") {
		// 			// console.log("on same tab");
		// 		} else {
		// 			aTag.setAttribute("target", "_blank");
		// 		}
		// 	});
		// }
	}, [likeCount]);

	// Function for structure the slug
	const handleSlug = (title, date) => {
		// const titleToSlug = title.toLowerCase().replace(/ /g, "-");
		const createdAtDate = new Date(date);
		const year = createdAtDate.getFullYear();
		const month = createdAtDate.getMonth() + 1;
		const formattedDate = `/${year}/${month < 10 ? "0" + month : month}`;

		return `/daily-digest${formattedDate}/${title}`;
	};

	//Function for format the date
	const handleFormatedDate = (dateString) => {
		const date = new Date(dateString);
		const day = date.getDate();
		const month = date.toLocaleString("default", { month: "long" });
		const year = date.getFullYear();

		let daySuffix;
		if (day >= 11 && day <= 13) {
			daySuffix = "th";
		} else {
			switch (day % 10) {
				case 1:
					daySuffix = "st";
					break;
				case 2:
					daySuffix = "nd";
					break;
				case 3:
					daySuffix = "rd";
					break;
				default:
					daySuffix = "th";
					break;
			}
		}

		return `${day}${daySuffix} ${month} ${year}`;
	};

	//Function for count the like and update the like count
	async function handleLike(id, slug) {
		let isLike = localStorage.getItem("likeId");
		// const likeBtn = document.querySelector(".like_btn");

		if (!localStorage.getItem("likeId" + id)) {
			localStorage.setItem("likeId" + id, id);

			let stringToInt = parseInt(likeCount) + 1;
			let count = stringToInt.toString();

			setLikeAnim(true);

			// setTimeout(() => {
			// 	likeBtn.classList.add("like_anim");
			// }, 100);

			const dataToUpdate = {
				data: {
					like_count: count,
				},
			};

			// console.log(count);

			const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/news-feeds/${id}`, {
				method: "PUT",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(dataToUpdate),
			});

			setLikeCount(count);

			if (!response.ok) {
				console.error("Failed to update data:", response.statusText);
				return;
			}
		}
		// console.log();
	}

	//Function for highlight the text which is searched

	const highlightSearchKeyword = (text, search) => {
		const parts = text.split(new RegExp(`(${search})`, "gi"));
		return parts.map((part, index) =>
			part.toLowerCase() === search.toLowerCase() ? (
				<span key={index} style={{ backgroundColor: "yellow" }}>
					{part}
				</span>
			) : (
				part
			)
		);
	};

	// Function to parse HTML content to text and apply highlighting to text nodes
	const parseAndHighlightHTML = (html, search) => {
		const tempDiv = document.createElement("div");
		tempDiv.innerHTML = html;
		const nodes = tempDiv.childNodes;
		const highlightedNodes = Array.from(nodes).map((node, index) => {
			if (node.nodeType === Node.TEXT_NODE) {
				return highlightSearchKeyword(node.textContent, search);
			} else if (node.nodeType === Node.ELEMENT_NODE) {
				if (node.tagName.toLowerCase() === "a") {
					const href = node.getAttribute("href");
					const highlightedContent = parseAndHighlightHTML(node.innerHTML, search);
					return React.createElement(node.tagName.toLowerCase(), { key: index, href: href, ...node }, highlightedContent);
				} else {
					return React.createElement(node.tagName.toLowerCase(), { key: index, ...node }, parseAndHighlightHTML(node.innerHTML, search));
				}
			}
		});

		return highlightedNodes;
	};

	const handleCopyUrl = async () => {
		try {
			const url = handleSlug(data.slug, data.createdAt);
			const completeUrl = `${process.env.NEXT_PUBLIC_OWN_DOMAIN}` + url;

			await navigator.clipboard.writeText(completeUrl);

			setCopy(true);
			setTimeout(() => setCopy(false), 700);
		} catch (error) {
			console.log("Copy failed:", error);
		}
	};

	// console.log(data);

	return (
		<div>
			{/* <FadeInUpSection> */}
			<div className="max-w-[672px] mx-auto bg-secondary-800 sm:rounded-md mb-7 md:mb-[30px] bg-[url('/pages/home/bookingMaxBg.png')] bg-repeat bg-[length:240px_240px] overflow-hidden relative">
				<div className="glow_backgroun absolute -right-[80px] xs:-right-[120px] top-[-100px] w-[200px] h-[200px] rounded-full blur-[80px] xs:blur-[100px] bg-primary-500 " />
				<div className="glow_backgroun absolute z-10 -left-[150px] bottom-[-100px] w-[200px] h-[200px] rounded-full blur-[120px] bg-primary-500 " />
				<div className="px-[16px] py-[24px] sm:px-[30px] sm:py-[30px] relative z-10">
					<div className="flex justify-between gap-12">
						<Link
							href={handleSlug(data.slug, data.createdAt)}
							className="post_title text-[20px] leading-[1.4] md:leading-[inherit] sm:text-[24px] text-neutral-100 font-[600] hover:underline"
						>
							{highlightSearchKeyword(data.feed_title, highlightedSearch)}
						</Link>
						{data?.pin_post === true && navigate == "/daily-digest" && (
							<span className=" text-[#ADB5BD] flex items-center gap-1 py-1 text-[12px] font-[500] rounded">
								{" "}
								<Image src={"/icons/pin.svg"} height={30} width={15} alt="" className=" " />
								<p>Pinned</p>
							</span>
						)}
					</div>

					<p className="text-[14px] text-neutral-600 pt-1 font-[400]">{handleFormatedDate(data.createdAt)}</p>
					<div className="caption my-[14px] ">
						<div className={`${styles.text_area}`}>
							<div className="text-neutral-400 text-[14px] sm:text-[16px] font-[400]">
								{parseAndHighlightHTML(data.feed_description, highlightedSearch)}
							</div>
						</div>
					</div>

					<div className="image_video">
						{data.image !== null && (
							<Image src={data?.image ? process.env.NEXT_PUBLIC_API_URL + data.image.url : "/"} height={400} width={650} alt="" className="w-full" />
						)}
						{data.video_url && (
							<iframe
								src={data.video_url + "?rel=0&controls=0"}
								title="YouTube video"
								allowFullScreen
								className="w-full h-[200px] sm:h-[350px]"
							></iframe>
							// <ReactPlayer
							// 	url={data.video}
							// 	config={{
							// 		youtube: {
							// 			playerVars: { showinfo: 0 },
							// 		},
							// 	}}
							// />
						)}

						{data.gif_file && <img src={data.gif_file} className="w-full sm:h-[350px] object-contain bg-black" />}
					</div>
					{data.feed_description_down && (
						<div className="caption my-[14px] pb-2">
							<div className={`${styles.text_area}`}>
								<div className="text-neutral-400 text-[14px] sm:text-[16px] font-[400]">
									{parseAndHighlightHTML(data.feed_description_down, highlightedSearch)}
								</div>
							</div>
						</div>
					)}

					<div className="">
						<div className="flex items-center mt-[14px] gap-2">
							{/* <BiLike /> */}
							<Image src="/icons/like.svg" alt="" height={20} width={20} className="w-[20px] h-[20px] rounded-full shadow-[0px_0px_10px_#ff492c]" />
							<p className="text-[14px] text-neutral-400">
								{likeStatus && <span>You and</span>} {likeCount} others liked it
							</p>
						</div>
						<div className="h-[1px] w-[full] bg-secondary-800 mt-[10px] mb-[14px]"></div>
						<div className="flex items-center justify-between">
							<div className={`flex items-center ${likeStatus ? "text-[#717171]" : ""}`} onClick={() => handleLike(data.id, data?.slug)}>
								{/* <BiSolidLike className="text-[20px]" /> */}
								{likeStatus ? (
									<div className="">
										<Image
											src={"/icons/fill_like.svg"}
											alt=""
											height={26}
											width={26}
											className={`${likeAnim ? "like_anim" : ""} w-[22px] h-[22px]`}
										/>
										{/* <Lottie animationData={animationData} className=" absolute top-0 left-0" loop={true} /> */}
									</div>
								) : (
									// <BiSolidLike className="text-[20px]" />
									<Image src={"/icons/stroke_like.svg"} alt="" height={26} width={26} className=" w-[22px] h-[22px] hover:cursor-pointer" />
								)}
								<p className="ml-[10px] mt-1 font-[500] text-neutral-400">Like</p>
							</div>
							<div className="flex gap-3 text-[24px]">
								<LinkedinShareButton url={`${process.env.NEXT_PUBLIC_OWN_DOMAIN}${handleSlug(data.slug, data.createdAt)}`}>
									<FaLinkedin className="text-neutral-600 hover:text-neutral-800 duration-300 text-[22px]" />
								</LinkedinShareButton>
								<FacebookShareButton url={`${process.env.NEXT_PUBLIC_OWN_DOMAIN}${handleSlug(data.slug, data.createdAt)}`}>
									<FaSquareFacebook className="text-neutral-600 hover:text-neutral-800 duration-300 text-[22px]" />
								</FacebookShareButton>
								<TwitterShareButton url={`${process.env.NEXT_PUBLIC_OWN_DOMAIN}${handleSlug(data.slug, data.createdAt)}`}>
									<FaSquareXTwitter className="text-neutral-600 hover:text-neutral-800 duration-300 text-[22px]" />
								</TwitterShareButton>
								{/* <Image
									src={"/"}
									alt=""
									height={26}
											width={26}
									className={`${
										copy ? "bg-[#BFFF00]" : "bg-transparent"
									} relative z-20 link_copy text-neutral-600 hover:text-neutral-800 duration-300 cursor-pointer`}
									onClick={(Event) => handleCopyUrl(Event)}
								/> */}

								<button
									onClick={handleCopyUrl}
									className={`${
										copy ? "bg-[#BFFF00]" : "bg-transparent"
									} relative z-20 link_copy text-neutral-600 hover:text-neutral-800 duration-300 cursor-pointer rounded`}
								>
									<PiLinkFill />
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* </FadeInUpSection> */}
			{singleNews && (
				<div className="flex justify-center gap-4 sm:gap-10">
					{previousData && (
						<Link
							href={handleSlug(previousData && previousData?.slug, previousData && previousData?.createdAt)}
							className="flex items-center rounded-[5px] text-[14px] sm:text-[16px] text-neutral-200 border-secondary-400 border-[1px] py-[7px] px-[10px] sm:py-[15px] sm:px-[25px]"
						>
							<BiChevronLeft className="text-2xl -ml-[6px]" />
							Previous
						</Link>
					)}
					<Link
						href={handleSlug(randomFeed && randomFeed?.slug, randomFeed && randomFeed?.createdAt)}
						className="flex items-center gap-2 rounded-[5px] text-[14px] sm:text-[16px] text-neutral-200 border-secondary-400 border-[1px] py-[7px] px-[9px] sm:py-[15px] sm:px-[22px]"
					>
						
						<LiaRandomSolid className="text-[18px]" />
						Random
					</Link>
					{nextData && (
						<Link
							href={handleSlug(nextData && nextData?.slug, nextData && nextData?.createdAt)}
							className=" flex items-center rounded-[5px] text-[14px] sm:text-[16px] text-neutral-200 border-secondary-400 border-[1px] py-[7px] px-[20px] sm:py-[15px] sm:px-[40px]"
						>
							Next
							<BiChevronRight className="text-2xl -mr-[6px]" />
						</Link>
					)}
				</div>
			)}
		</div>
	);
}

export default SingleCard;
