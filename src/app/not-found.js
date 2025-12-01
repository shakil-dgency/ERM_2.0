"use client";
import React from "react";
import Lottie from "lottie-react";
import ErrorAnimation from "../../public/global/404-Page.json";
import Link from "next/link";

function NotFound() {
	return (
		<div className="h-screen bg-secondary-950 text-neutral-50 pt-20 text-center text-[48px]">
			<div className="max-w-2xl mx-auto pt-20 md:pt-28 ">
				<Lottie loop={true} animationData={ErrorAnimation} className="" />
			</div>
			<div className="text-center text-[18px] md:text-xl mt-10 px-2.5">
				<p className="">Get a free sticker pack with your free proposal –</p>
				<div className="flex justify-center items-center pt-4 ">
					<Link href={`/free-marketing`} className="group font-[700] text-primary-600 hover:text-primary-500">
						Just add in your address in the question box <span className="group-hover:translate-x-1 group-hover:duration-200">→</span>
					</Link>
				</div>
			</div>
		</div>
	);
}

export default NotFound;
