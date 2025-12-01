/* eslint-disable react/no-unescaped-entities */
"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";
import thankYouAnimation from "../../../public/global/Thank You Page - Escape Room Marketer.json";

import Link from "next/link";
import styles from "@/styles/blog.module.css";

import { notFound, usePathname } from "next/navigation";
import { setSafeLinkTargets } from "@/services/helper";

function ThankYou() {
	const router = usePathname();
	const [state, setState] = useState();
	const [name, setName] = useState();

	useEffect(() => {
		// window.location.reload();
		const APIurl = `${process.env.NEXT_PUBLIC_API_URL}/api/thank-you`;

		fetch(`${APIurl}?populate=*`)
			.then((res) => res.json())
			.then((data) => setState(data));

		//redirect url if direct thank-you url hit

		const queryString = window.location.search;
		const urlParams = new URLSearchParams(queryString);

		// Get the value of the 'name' parameter
		const name = urlParams.get("%6e");
		let decodeName = decodeURIComponent(name);
		setName(decodeName);

        setSafeLinkTargets()

		if (name === null) {
			// location.replace(`${process.env.NEXT_PUBLIC_OWN_DOMAIN}`);
		}
	}, [router]);

	if (name !== null) {
		return (
			<div className="bg-tertiary-500 bg-[url('/pages/home/papertexture.png')] bg-[length:240px_240px] bg-repeat ">
				{/* <div className="break_line image bg-[url('/page_broke.png')] h-[75px] bg-[length:1600px_90px] bg-center -mt-10 bg-[var(--section-bg-lightred)]"></div> */}
				<div className="g-page_structure  bg-[var(--section-bg-lightred)]">
					<div className="max-w-[350px] mx-auto pt-6">
						<Lottie loop={true} animationData={thankYouAnimation} className="" />
					</div>
				</div>

				<div className="g-page_structur px-[15px]  bg-[var(--section-bg-lightblue)]">
					<div className="text-[18px] pt-8 md:pt-14 pb-10 md:pb-12 max-w-[1000px] mx-auto text-neutral-950 font-[400]">
						<ul className=" ">
							<li className="mb-6">
								Congrats <span className="font-bold pl-1"> {name && name}</span>!
							</li>
							<div className={`${styles.blog_details} blog_body`} dangerouslySetInnerHTML={{ __html: state && state?.data?.calender_top_message }} />

							<li className="mb-6">
								Booking calendar will load in a second (
								<Link href={`${state?.data?.calenly_url ? state?.data?.calenly_url : "/"}`} target="_blank" className="text-blue-500 underline">
									click here
								</Link>{" "}
								if it isn't loading properly):
							</li>
						</ul>

						<div className="bg-neutral-100 max-w-[800px] mx-auto p-2">
							<div
								className="max-w-[800px] mx-auto text-neutral-200 bg-neutral-50 rounded-[10px]
               h-[700px] overflow-auto [scrollbar-width:none] [-ms-overflow-style:none]
               [&::-webkit-scrollbar]:hidden"
							>
								<iframe src={state?.data?.calenly_url} width="100%" height="1200" frameBorder="0" className="block"></iframe>
							</div>
						</div>


						<div className="my-16">
							<div className={`${styles.blog_details} blog_body`} dangerouslySetInnerHTML={{ __html: state && state?.data?.calender_bottom_message }} />
						</div>

						<div className=" flex flex-col md:flex-row items-center gap-5">
							<Image
								src={`${
									state && state.data.image
										? state.data.image?.url
										: "/global/h_m-hamiduzjaman_escaperoom-marketer_founder.png"
								}`}
								height={100}
								width={140}
								alt=""
								className=""
							/>
							<div className="flex flex-col items-center md:items-start text-center md:text-left">
								<Image src="/global/Hamid Signature.svg" height={100} width={100} alt="" className="object-cover mb-2  " />
								<h5 className="text-xl font-bold">Hamid Shawon</h5>
								<p className=" text-lg text-[#808080]">Captain, Escape Room Marketer</p>
							</div>
						</div>
					</div>
				</div>
				<div className="break_line image bg-[url('/section_break_blue-footer.svg')] h-[80px] bg-[length:3200px_90px]    bg-center"></div>
			</div>
		);
	} else {
		return notFound();
	}
}

export default ThankYou;
