import { handleDate } from "@/services/DateFormatter";
import Link from "next/link";
import React from "react";

function BlogCard(data) {
	
	
	return (
		<div
			
			className="relative flex flex-col justify-end px-5 lg:px-[45px] py-5 lg:py-[35px] rounded-[10px] bg-blend-multiply bg-cover bg-center bg-no-repeat max-w-full aspect-[780/650] lg:aspect-[780/516]"
			style={{
				backgroundImage: `linear-gradient(180deg, rgba(13,17,22,0) 0%, rgba(13,17,22,0.90) 60%, #0D1116 100%), url(${data?.data?.main_image ? `${process.env.NEXT_PUBLIC_API_URL}${data?.data.main_image.url}` : ""})`,
			}}
		>
			<p className="text-[#C8C7C7] text-[12px] lg:text-[16px] font-normal leading-[1.4] pb-2.5 lg:pb-[15px]">{handleDate(data?.data?.updated_date)}</p>
			<p className="text-[#fff] text-[20px] xl:text-[32px] font-[600] border-b-[1px] border-[#2C3640] pb-2.5 lg:pb-[20px] leading-[1.3]">
				{data?.data?.headline}
			</p>
			<Link href={`${data?.data?.slug}`} className="group cursor-pointer text-neutral-300 text-[16px] font-[500] flex items-center gap-[5px] pt-2.5 lg:pt-5">
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
						fill="#b3b3b4"
					/>
				</svg>
			</Link>
			<button className="absolute cursor-pointer z-10 top-5 lg:top-[35px] right-5 lg:right-[45px] border border-primary-800 rounded-[4px] bg-[rgba(32,41,49,0.60)] text-[12px] lg:text-[16px] font-[600] text-neutral-50 py-1.5 sm:py-2.5 px-3 sm:px-5 ">
				{data?.data?.Eyebrow_headline}
			</button>
		</div>
	);
}

export default BlogCard;
