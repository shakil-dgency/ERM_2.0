"use client";
/* eslint-disable react/no-unescaped-entities */
import LazyLoadingVideo from "@/components/global/LazyLoadingVideo";
import VideoStream from "@/components/global/VideoStream";
import Container from "@/components/ui/Container";
import React, { useState } from "react";

function Features({ data }) {
	const [state, setState] = useState({
		title: data?.key_strategy[0]?.headline,
		description: data?.key_strategy[0]?.short_description,
		video_url: data?.key_strategy[0]?.video_link,
	});

	const handleKeyData = (item) => {
		setState((prev) => ({
			...prev,
			title: item?.headline,
			description: item?.short_description,
			video_url: item?.video_link,
		}));
	};

	return (
		<div className="pb-[100px] md:pb-[140px]">
			<Container>
				<p className="highlighted_text mb-2">{data?.text_component.eyebrow_headline}</p>
				<h2 className="max-w-[1222px] text-neutral-950">{data?.text_component.headline}</h2>
				<p className="text-[18px] md:text-[32px] font-[500] text-neutral-800 mt-4 md:mt-10">{data?.text_component.description}</p>

				<div className="md:hidden">
					<p className="mb-[30px] mt-[50px] text-[14px] font-[500] tracking-[5.6px] uppercase text-neutral-700">KEy components</p>
					{data?.key_strategy.map((item, i) => (
						<div key={i}>
							<div
								onClick={() => handleKeyData(item)}
								className={`${
									item.headline === state.title ? "bg-[linear-gradient(180deg,rgba(255,73,44,0.80)_0%,rgba(204,55,34,0.80)_100%)] hover:bg-primary-400" : ""
								} group py-[25px] lg:py-[35px] px-[15px] lg:px-[25px] mb-[10px] rounded-[10px] border-[1px] border-[rgba(84,101,119,0.40)] bg-[rgba(13,17,22,0.70)] cursor-pointer backdrop-blur-[10px]`}
							>
								<p className="text-[16px] lg:text-[18px] 2xl:text-[24px] group-hover:text-primary-500 text-neutral-50 font-[700]">{item?.title}</p>
							</div>
							<DisplayScreen item={item} state={state} data={data} />
						</div>
					))}
				</div>
				<div className="hidden md:block">
					<DisplayScreen state={state} data={data} handleKeyData={handleKeyData} />
				</div>
			</Container>
		</div>
	);
}

export default Features;

const DisplayScreen = ({ item, state, data,handleKeyData }) => {
	return (
		<div
			className={`${
				item ? (item?.headline === state?.title ? "h-full mt-[20px] mb-[30px]" : "h-0") : "mt-[80px]"
			} relative w-full bg-secondary-900 rounded-[20px] overflow-hidden`}
		>
			<div className="absolute inset-0 z-10">
				{/* <VideoStream src="video/compresed/bookingMax.m3u8" /> */}
				<LazyLoadingVideo key={state.video_url} video_url={state.video_url} />
				<div className="absolute inset-0 z-10 bg-[linear-gradient(0deg,rgba(0,0,0,0.8)_0%,rgba(0,0,0,0.8)_100%)]"></div>
			</div>

			<div className="relative z-20 py-[30px] px-[30px] xl:px-[70px] md:grid grid-cols-3 gap-x-[40px] lg:gap-x-[70px]">
				<div className="hidden md:block">
					<p className="mb-[36px] text-[14px] font-[700] tracking-[5.6px] uppercase text-neutral-400">KEy components</p>
					{data?.key_strategy.map((item, i) => (
						<div
							key={i}
							onClick={() => handleKeyData(item)}
							className={`${
								item.headline === state.title ? "bg-[linear-gradient(180deg,rgba(255,73,44,0.80)_0%,rgba(204,55,34,0.80)_100%)] hover:bg-primary-800" : ""
							} group py-[25px] lg:py-[35px] px-[15px] lg:px-[25px] mb-[10px] rounded-[10px] border-[1px] border-[rgba(84,101,119,0.40)] bg-[rgba(13,17,22,0.70)] cursor-pointer backdrop-blur-[10px]`}
						>
							<p className={`${
								item.headline === state.title ? "" : "group-hover:text-primary-500"
							} text-[16px] lg:text-[18px] 2xl:text-[24px]  text-neutral-50 font-[700]`}>{item?.title}</p>
						</div>
					))}
				</div>
				<div className="col-span-2 md:flex flex-col justify-end pt-[150px] md:pt-0 md:mb-[60px]">
					<p className=" text-[18px] md:text-[26px] lg:text-[32px] font-[600] text-neutral-50">{state.title}</p>
					<p className="text-[14px] md:text-[16px] lg:text-[20px] font-[400] text-neutral-300">{state.description}</p>
				</div>
			</div>
		</div>
	);
};
