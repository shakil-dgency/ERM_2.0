/* eslint-disable react/no-unescaped-entities */

"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { useMediaQuery } from "@/hooks/useMediaQuery";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import React from "react";
import GameCard from "./GameCard";
import Link from "next/link";
import RatingsStar from "@/components/ui/RatingsStar";

const handleTitleIcon = (text) => {
	if (!text) return null;

	const words = text.trim().split(" ");
	const lastWord = words.pop();
	const firstPart = words.join(" ");

	return (
		<>
			{firstPart}{" "}
			<span className="relative inline-block">
				{lastWord}
				<Image
					src="/pages/findRooms/location/verified.svg"
					height={15}
					width={15}
					alt=""
					className="h-[15px] w-[15px] sm:h-[18px] sm:w-[18px] absolute -right-5 sm:-right-7 top-1/2 translate-y-[-50%]"
				/>
			</span>
		</>
	);
};

function CompanyProfileCard({ data }) {
	const isSmallScreen = useMediaQuery("(max-width: 1024px)");

	// const handleTitleIcon = (text) => {
	// 	if (!text) return null;
	// 	const words = text.trim().split(" ");
	// 	const lastWord = words.pop();
	// 	const firstPart = words;
	// 	const html = `${firstPart}
	// 						<span className="relative ">
	// 							${lastWord} <Image src="/pages/findRooms/location/verified.svg" height={15} width={15} alt="" className="h-[15px] w-[15px] sm:h-[18px] sm:w-[18px] absolute -right-5 sm:-right-7 top-[50%] mt-[2px] translate-y-[-50%] " />
	// 						</span>`;

	// 	return html;
	// };
	return (
		<div className="relative overflow-hidden w-full bg-[url('/pages/home/bookingMaxBg.png')] bg-repeat bg-[length:240px_240px] rounded-[20px] px-[10px] xs:px-[15px] md:px-[30px] lg:px-[60px] py-[30px] lg:py-[60px]">
			{/* Glow/Gradient Backgrounds */}
			<div
				style={{ background: data?.company_color_code }}
				className="glow_background absolute -left-32 top-[-50px] w-[250px] h-[250px] rounded-full blur-[130px]  "
			/>
			<div style={{ background: data?.company_color_code }} className="glow_background absolute -right-32 bottom-[-50px] w-[250px] h-[250px] rounded-full blur-[130px]  " />
			<div className="lg:flex justify-between gap-10 relative z-10">
				<div className="lg:flex gap-5 items-center">
					<Image
						src={data?.logo ? process.env.NEXT_PUBLIC_API_URL + data.logo.url : "/"}
						alt=""
						height={66}
						width={92}
						className="mb-2.5 md:mb-0 h-[60px] sm:h-[72px] lg:h-[66px] w-[75] sm:w-[112px] lg:w-[92px] object-contain"
					/>
					<div>
						<div className=" mr-8">
							<p className="text-neutral-50 text-[20px] md:text-[32px] font-[700]">{handleTitleIcon(data?.company_name)}</p>
						</div>
						<p className="text-neutral-300 text-[14px] md:text-[16px] font-[400] pt-2 sm:pt-0">
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
				<Link
					href={`${data?.location_url}`}
					target="_blank"
					className="absolute lg:relative top-0 sm:top-[10px] right-0 flex-none flex flex-col items-center mt-3 md:mt-0"
				>
					<Image src={"/pages/findRooms/location/google.svg"} alt="" height={40} width={40} className="h-[20px] lg:h-[30px] w-auto" />
					<div className="flex items-center gap-2 ">
						<p className="text-neutral-50 font-[600] text-[16px] lg:text-[20px]">{data?.google_ratings}</p>
						<RatingsStar rating={data?.google_ratings} idPrefix={data?.id} size={isSmallScreen ? 16 : 20} />
					</div>
				</Link>
			</div>
			<div className="max-w-[920px] mt-5 mb-12 md:my-[50px] relative z-10">
				<p className="text-neutral-300 text-[16px] lg:text-[18px]  mb-4">{data?.description}</p>
			</div>

			<Swiper
				slidesPerView={1}
				spaceBetween={20}
				pagination={{
					clickable: true,
					dynamicBullets: true,
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
						slidesPerView: 2.8,
						spaceBetween: 20,
					},
					1536: {
						// >= 768px
						slidesPerView: 4,
						spaceBetween: 28,
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
