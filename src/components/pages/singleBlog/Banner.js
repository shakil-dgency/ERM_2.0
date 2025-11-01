import Image from "next/image";
import Link from "next/link";
import React from "react";

function Banner({ data }) {
	return (
		<div className="bg-secondary-800 max-w-[1316px] mx-auto mt-[100px] mb-[60px] px-5 py-8 md:p-2 md:h-[184px] rounded-[20px] flex flex-col items-center sm:items-start  md:grid grid-cols-10 md:items-center md:justify-items-center relative">
			<Image
				src={`${data?.image ? `${process.env.NEXT_PUBLIC_API_URL}${data?.image.url}` : "/pages/blog/captain.png"}`}
				alt="Banner Image"
				width={203}
				height={238}
				className="h-[200px] lg:h-[238px] w-auto hidden sm:block absolute right-2.5 md:right-0 md:left-2.5 lg:left-5 bottom-[1px]"
			/>
			<div className="md:ml-12 lg:ml-10 md:col-start-3 md:col-end-8 text-center sm:text-left">
				<p className="text-neutral-50 text-[20px] lg:text-[32px] font-[700] sm:max-w-[500px] md:max-w-none">{data?.headline}</p>
				<p className="text-[16px] text-neutral-300  sm:max-w-[500px] md:max-w-none">{data?.description}</p>
			</div>
			{/* <button className="md:col-start-8 md:col-end-11 text-[14px] lg:text-[18px] text-neutral-50 font-[700] uppercase mt-[25px] md:mt-0 px-[15px] lg:px-[35px] py-[15px] rounded-[6px] bg-primary-600">
				Unlock Marketing Plan
			</button> */}

			<div className="flex md:col-start-8 md:col-end-11">
				<Link
					href={"/free-marketing"}
					className="group flex items-center gap-2.5 text-[14px] lg:text-[18px] text-neutral-50 font-[700] uppercase mt-[25px] md:mt-0 px-[15px] lg:px-[35px] py-[15px] rounded-[6px] bg-primary-600 hover:drop-shadow-[0px_0px_10px_#d42f00] transition-all duration-300"
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
            <span className="inline-block md:hidden xl:inline-block">UNLOCK </span>
						<span> MARKETING PLAN</span>
					</span>
				</Link>
			</div>
		</div>
	);
}

export default Banner;
