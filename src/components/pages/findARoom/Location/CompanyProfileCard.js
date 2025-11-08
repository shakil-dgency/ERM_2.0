/* eslint-disable react/no-unescaped-entities */

"use client";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import React, { useEffect } from "react";
import GameCard from "./GameCard";
import Link from "next/link";
import { useState } from "react";
import RatingsStar from "@/components/ui/RatingsStar";

function CompanyProfileCard({ data }) {
	return (
		<div className="relative overflow-hidden w-full bg-[url('/pages/home/bookingMaxBg.png')] bg-repeat bg-[length:240px_240px] rounded-[20px] p-2.5 lg:px-[60px] py-[30px] md:py-[60px]">
			{/* Glow/Gradient Backgrounds */}
			<div className="glow_background absolute -left-32 top-[-50px] w-[250px] h-[250px] rounded-full blur-[150px] bg-primary-500 " />
			<div className="glow_background absolute -right-32 bottom-[-50px] w-[250px] h-[250px] rounded-full blur-[150px] bg-primary-500 " />
			<div className="md:flex justify-between relative z-10">
				<div className="md:flex gap-5 items-center">
					<Image
						src={data?.logo ? process.env.NEXT_PUBLIC_API_URL + data.logo.url : "/"}
						alt=""
						height={66}
						width={92}
						className="mb-1.5 md:mb-0 h-[66px] w-[92px] object-contain"
					/>
					<div>
						<div className="flex items-center gap-1">
							<p className="text-neutral-50 text-[20px] md:text-[32px] font-[700]">{data?.company_name}</p>
							<Image src="/pages/findRooms/location/verified.svg" height={15} width={15} alt="" className="h-[20px] w-[21px]" />
						</div>
						<p className="text-neutral-300 text-[14px] md:text-[16px] font-[400]">
							<span className="font-[600]">Escape Room:</span> {data?.games.length} | <span className="font-[600]">Address:</span>{" "}
							<span>
								<a href={`${data?.location_url}`} target="_blank" className="text-[#99C3FF]">
									{data?.location_details}
								</a>
							</span>{" "}
							| <span className="font-[600]">Visit:</span>{" "}
							<span>
								<a href={`${data?.website_url}`} target="_blank" className="text-[#99C3FF]">
									Website
								</a>
							</span>{" "}
						</p>
					</div>
				</div>
				<Link href={`${data?.location_url}`} target="_blank" className="flex-none flex flex-col items-center mt-3 md:mt-0">
					<Image src={"/pages/findRooms/location/google.svg"} alt="" height={40} width={40} className="h-[20px] md:h-[30px] w-auto" />
					<div className="flex items-center-safe gap-2 flex-row-reverse">
						<RatingsStar rating={data?.google_ratings} idPrefix={data?.id}  />
						<p className="text-neutral-50 font-[600] text-[20px]">{data?.google_ratings}</p>
					</div>
				</Link>
			</div>
			<div className="max-w-[920px] mt-5 mb-12 md:my-[50px] relative z-10">
				<p className="text-neutral-300 text-[18px]  mb-4">{data?.description}</p>
			</div>

			<Swiper
				slidesPerView={1}
				spaceBetween={20}
				pagination={{
					clickable: true,
				}}
				navigation={true}
				modules={[Pagination, Navigation]}
				className="mySwiper boundedSwiper"
				breakpoints={{
					520: { slidesPerView: 1.5, spaceBetween: 20 },
					768: {
						// >= 768px
						slidesPerView: 2.2,
						spaceBetween: 30,
					},
					1024: {
						// >= 768px
						slidesPerView: 3.2,
						spaceBetween: 30,
					},
					1536: {
						// >= 768px
						slidesPerView: 4,
						spaceBetween: 30,
					},
				}}
			>
				{data?.games?.map((game, i) => (
					<SwiperSlide key={i} className="relative z-10">
						<GameCard data={game} />
					</SwiperSlide>
				))}
			</Swiper>

			<div className="mt-[50px] flex justify-center">
				<a
					href={data?.website_url}
					target="_blank"
					className="px-[20px] py-[12px] rounded-[6px] border-[1px] border-primary-600 text-neutral-50 font-[600] hover:text-primary-500 hover:shadow-[0px_0px_14px_#ff492c] duration-300"
				>
					BOOK NOW
				</a>
			</div>
		</div>
	);
}

export default CompanyProfileCard;
