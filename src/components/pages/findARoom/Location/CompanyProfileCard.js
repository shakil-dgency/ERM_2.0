/* eslint-disable react/no-unescaped-entities */

"use client";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import Image from "next/image";
import React from "react";
import GameCard from "./GameCard";

function CompanyProfileCard() {
	return (
		<div className="relative overflow-hidden w-full bg-[url('/pages/home/bookingMaxBg.png')] bg-repeat bg-[length:240px_240px] rounded-[20px] p-2.5 lg:px-[60px] py-[30px] md:py-[60px]">
			{/* Glow/Gradient Backgrounds */}
			<div className="glow_background absolute -left-32 top-[-50px] w-[250px] h-[250px] rounded-full blur-[150px] bg-primary-500 " />
			<div className="glow_background absolute -right-32 bottom-[-50px] w-[250px] h-[250px] rounded-full blur-[150px] bg-primary-500 " />
			<div className="md:flex justify-between relative z-10">
				<div className="md:flex gap-5 items-center">
					<Image src={"/pages/findRooms/location/company_logo.svg"} alt="" height={66} width={92} className="mb-1.5 md:mb-0" />
					<div>
						<p className="text-neutral-50 text-[20px] md:text-[32px] font-[700]">All In Adventures</p>
						<p className="text-neutral-300 text-[14px] md:text-[18px] font-[400]">Total 8 escape room at East Brunswick NJ, Brunswick Square | Visit Website </p>
					</div>
				</div>
				<div className="flex-none flex gap-2.5 items-center mt-3 md:mt-0">
					<Image src={"/pages/findRooms/location/google.svg"} alt="" height={40} width={40} className="h-[26px] md:h-[40px] w-auto" />
					<div>
						<div className="flex">
							{[...Array(5)].map((_, i) => (
								<Image src={"/pages/findRooms/location/star.svg"} alt="" height={15} width={15} className="h-[8px] md:h-[15px] w-auto" key={i} />
							))}
						</div>
						<p className="text-neutral-300 text-[12px] md:text-[14px]">4.9 of 3578 reviews</p>
					</div>
				</div>
			</div>
			<div className="max-w-[920px] mt-5 mb-12 md:my-[50px] relative z-10">
				<p className="text-neutral-300 text-[18px]  mb-4">
					Most of our facilities offer 8 - 10 different types of escape room themes. The game themes range from Black Ops and Zombie Apocalypse to
					Escape from Alcatraz and Super Hero. Pick the room of your choice or try your best to break out of them all.
				</p>
				<p className="text-neutral-300 text-[18px] ">
					Escape rooms have become super popular over the last couple of years. We've built all our facilities perfect for all ages and skill levels.
					People from all different ages and backgrounds have found themselves enjoying the thrill and challenge of trying to escape one or more of
					our rooms.
				</p>
			</div>

			<Swiper
				slidesPerView={1}
				spaceBetween={20}
				pagination={{
					clickable: true,
				}}
				modules={[Pagination]}
				className="mySwiper"
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
				{[...Array(6)].map((_, i) => (
					<SwiperSlide key={i} className="relative z-10">
						<GameCard />
					</SwiperSlide>
				))}
			</Swiper>

			<div className="mt-[50px] flex justify-center">
				<button className="px-[20px] py-[12px] rounded-[6px] border-[1px] border-primary-600 text-neutral-50 font-[600] hover:text-primary-500 hover:shadow-[0px_0px_14px_#ff492c] duration-300">BOOK NOW</button>
			</div>
		</div>
	);
}

export default CompanyProfileCard;
