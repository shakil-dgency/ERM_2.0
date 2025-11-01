
import { handleDate } from "@/services/DateFormatter";
import Image from "next/image";
import React from "react";

function SingleBlogHero({ data }) {
	
	return (
		<div>
			<div className=" bg-[linear-gradient(180deg,#0D1116_80%,#FFF7E1_100%)] lg:bg-[linear-gradient(180deg,#0D1116_60%,#FFF7E1_100%)]">
				<div className="max-w-[1152px] mx-auto pt-[130px] lg:pt-[120px] pb-[50px] lg:pb-[80px] px-2.5 flex flex-col items-center justify-center">
					<p className="highlighted_text">{data?.Eyebrow_headline}</p>
					<h1 className="text-neutral-50 py-5 text-[24px] lg:text-[54px] font-[700] text-center leading-[1.3]">{data?.headline}</h1>
					<p className="text-[14px] text-[#C8C7C7]">
						<span>Last Updated on {handleDate(data?.updated_date)}</span> • <span>Escape Room Marketer</span>
					</p>
				</div>
				<div className=" max-w-[1316px] mx-auto aspect-[1316/740] overflow-hidden rounded-[10px] lg:rounded-[20px] px-2.5">
					<Image
						src={`${data?.main_image ? `${process.env.NEXT_PUBLIC_API_URL}${data?.main_image.url}` : ""}`}
						alt="Blog Image"
						width={1152}
						height={600}
						className="h-full w-full object-cover rounded-[10px] lg:rounded-[20px]"
					/>
				</div>
			</div>
		</div>
	);
}

export default SingleBlogHero;
