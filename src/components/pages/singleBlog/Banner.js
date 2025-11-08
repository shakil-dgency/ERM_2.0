import Image from "next/image";
import Link from "next/link";
import React from "react";

function Banner({ data }) {
	return (
		<div className="bg-secondary-800 max-w-[1216px] mx-auto mb-[40px] mt-[100px] md:my-[30px] px-5 py-8 md:p-5 md:h-[184p] rounded-[20px] flex gap-x-[40px] flex-col md:flex-row items-center   relative">
			<Image
				src={`${data?.image ? `${process.env.NEXT_PUBLIC_API_URL}${data?.image.url}` : "/pages/blog/captain.png"}`}
				alt="Banner Image"
				width={203}
				height={238}
				className="h-[150px] w-[150px] object-contain -mt-[100px] md:mt-0 rounded-full flex-none  "
			/>
			<div className=" text-center md:text-start mt-[30px] md:mt-0  ">
				<p className="text-neutral-50 text-[20px] lg:text-[28px] font-[700] sm:max-w-[500px] md:max-w-none">{data?.headline}</p>
				<p className="text-[16px] text-neutral-300  sm:max-w-[500px] md:max-w-none pt-1">{data?.description}</p>
			</div>
			{/* <button className="md:col-start-8 md:col-end-11 text-[14px] lg:text-[18px] text-neutral-50 font-[700] uppercase mt-[25px] md:mt-0 px-[15px] lg:px-[35px] py-[15px] rounded-[6px] bg-primary-600">
				Unlock Marketing Plan
			</button> */}

			<div className="flex flex-none">
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
