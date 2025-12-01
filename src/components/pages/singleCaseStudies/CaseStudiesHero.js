import LazyLoadingVideo from "@/components/global/LazyLoadingVideo";
import Container from "@/components/ui/Container";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdOutlineArrowDropDown } from "react-icons/md";

function CaseStudiesHero({ data }) {
	console.log(data);

	return (
		<div className=" bg-[linear-gradient(180deg,#0D1116_80%,#FFF7E1_100%)] lg:bg-[linear-gradient(180deg,#0D1116_60%,#FFF7E1_100%)] ">
			<Container>
				<div className=" flex pt-[60px] sm:pt-[80px]">
					<Link
						// onClick={backToPreviousPage}
						href="/case-studies"
						className="group text-neutral-500 hover:text-primary-500 text-center  font-semibold text-[12px] md:text-[14px] flex items-center underline underline-offset-4 "
					>
						<MdOutlineArrowDropDown className="text-xl rotate-90 group-hover:translate-x-[-2px] duration-300" /> BACK TO ALL CASE STUDY
					</Link>
				</div>
			</Container>
			<div className="px-2.5">
				<div className="max-w-[1152px] mx-auto pt-[50px] lg:pt-[80px] pb-[50px] lg:pb-[80px] flex flex-col items-center justify-center">
					<p className="highlighted_text text-center">{data?.eyebrow_headline}</p>
					<h1 className="text-neutral-50 py-5 text-[24px] lg:text-[54px] font-[700] text-center leading-[1.3]">{data?.headline}</h1>
					<div className="flex flex-col sm:flex-row gap-y-[20px] gap-x-2.5 justify-between w-full mt-[40px] lg:mt-[80px]">
						<div className="text-center">
							<p className="text-[32px] lg:text-[54px] font-[700] text-neutral-50">{data?.state_1}</p>
							<p className=" text-[16px] lg:text-[20px] text-neutral-300">{data?.state_description1}</p>
						</div>
						<div className="text-center">
							<p className="text-[32px] lg:text-[54px] font-[700] text-neutral-50">{data?.state_2}</p>
							<p className="text-[16px] lg:text-[20px] text-neutral-300">{data?.state_description2}</p>
						</div>
						<div className="text-center">
							<p className="text-[32px] lg:text-[54px] font-[700] text-neutral-50">{data?.state_3}</p>
							<p className="text-[16px] lg:text-[20px] text-neutral-300">{data?.state_description3}</p>
						</div>
					</div>
				</div>
				<div className="relative max-w-[1316px] mx-auto aspect-[1316/740] overflow-hidden rounded-[10px] lg:rounded-[20px]">
					{data?.video_url ? (
						<LazyLoadingVideo video_url={data.video_url} autoPlay={false} controls={true} muted={false} />
					) : (
						<Image
							src={`${data?.main_image ? process.env.NEXT_PUBLIC_API_URL + data?.main_image.url : "/"}`}
							alt="Blog Image"
							width={1152}
							height={600}
							className="h-full w-full object-cover rounded-[10px] lg:rounded-[20px]"
						/>
					)}
				</div>
			</div>
		</div>
	);
}

export default CaseStudiesHero;
