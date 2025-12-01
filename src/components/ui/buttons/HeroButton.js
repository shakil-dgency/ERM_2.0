import Image from "next/image";
import Link from "next/link";
import React from "react";

function HeroButton({text}) {
	return (
		<div className="flex flex-none">
			<Link
				href={"/free-marketing"}
				className="group flex items-center uppercase gap-2.5 text-[14px] lg:text-[18px] text-neutral-50 font-[700]  px-[15px] lg:px-[35px] py-[15px] rounded-[6px] bg-primary-600 hover:drop-shadow-[0px_0px_10px_#d42f00] transition-all duration-300"
			>
				<Image
					src="/global/lock.svg"
					height={20}
					width={18}
					alt=""
					className="w-auto xs:w-[20px] h-[15px] xs:h-[20px] inline-block group-hover:hidden"
				/>
				<Image
					src="/global/lock_open.svg"
					height={20}
					width={18}
					alt=""
					className="w-[15px] xs:w-[20px] h-[15px] xs:h-[20px] hidden group-hover:inline-block"
				/>
				{/* <span className="inline-block md:hidden">FREE</span> */}
				<span>
					{/* <span className="inline-block md:hidden xl:inline-block">UNLOCK </span> */}
					<span> {text ? text : "UNLOCK MARKETING PLAN"}</span>
				</span>
			</Link>
		</div>
	);
}

export default HeroButton;
