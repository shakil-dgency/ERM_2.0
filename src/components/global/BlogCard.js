import { handleDate } from "@/services/DateFormatter";
import Link from "next/link";
import React from "react";

function BlogCard({ data }) {
	return (
		<div className="group relative flex flex-col justify-end px-5 lg:px-[45px] py-5 lg:py-[35px] rounded-[10px] overflow-hidden max-w-full aspect-[780/650] lg:aspect-[780/516]">
			{/* Background Layer */}
			<div
				className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-blend-multiply transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-105"
				style={{
					backgroundImage: `linear-gradient(180deg, rgba(13,17,22,0) 0%, rgba(13,17,22,0.90) 60%, #0D1116 100%), url(${
						data?.main_image ? `${process.env.NEXT_PUBLIC_API_URL}${data?.main_image.url}` : ""
					})`,
				}}
			></div>

			{/* Content */}
			<div className="relative z-10">
				<p className="text-[#C8C7C7] text-[12px] lg:text-[16px] font-normal leading-[1.4] pb-2.5 lg:pb-[15px]">{handleDate(data?.updated_date)}</p>
				<div className="pb-2.5 lg:pb-5">
					<Link href={`blog/${data?.slug}`} className="text-[#fff] text-[20px] xl:text-[32px] font-[600] ">
						{data?.headline}
					</Link>
				</div>
				<Link href={`blog/${data?.slug}`} className="group-hover:text-primary-500 cursor-pointer text-neutral-300 border-t-[1px] border-[#2C3640] text-[16px] font-[500] flex items-center gap-[5px] pt-2.5 lg:pt-5">
					Learn More
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="5"
						height="8"
						viewBox="0 0 5 8"
						fill="none"
						className="mt-[2px] transition-transform duration-300 ease-in-out transform group-hover:translate-x-1 group-hover:scale-110"
					>
						<path
							d="M0.689453 1.07009L0.689453 4.41199L0.689453 7.42132C0.689453 7.93629 1.3117 8.19377 1.67647 7.829L4.45513 5.05033C4.90036 4.6051 4.90036 3.88093 4.45513 3.4357L3.39838 2.37896L1.67647 0.657045C1.3117 0.297644 0.689453 0.555126 0.689453 1.07009Z"
							className="fill-[#b3b3b4] group-hover:fill-primary-500"
						/>
					</svg>
				</Link>
			</div>

			{/* Tag */}
			<button className="absolute cursor-pointer z-10 top-5 lg:top-[35px] right-5 lg:right-[45px] border border-primary-800 rounded-[4px] bg-[rgba(32,41,49,0.60)] text-[12px] lg:text-[16px] font-[600] text-neutral-50 py-1.5 sm:py-2.5 px-3 sm:px-5">
				{data?.tag}
			</button>
		</div>
	);
}

export default BlogCard;
