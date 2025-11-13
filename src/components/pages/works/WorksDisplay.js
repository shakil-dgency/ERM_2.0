"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import Container from "@/components/ui/Container";
import React from "react";

import { Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";

function WorksDisplay({ data }) {
	const generateBreakpoints = (slidesFromDB) => {
		// Define your desired breakpoint order (mobile → desktop)
		const breakpointKeys = [480, 768, 1024, 1280];

		// Always ensure the minimum slides per view is 1
		const minSlides = 1;
		const space = 30;

		const step = slidesFromDB < 3 ? 0.5 : 1;

		// Build breakpoints dynamically
		const breakpoints = {};
		let slidesPerView;

		breakpointKeys.forEach((bp, index) => {
			// Calculate slidesPerView
			let slidesPerView = slidesFromDB - (breakpointKeys.length - 1 - index) * step;

			// Ensure it never goes below 1
			slidesPerView = Math.max(slidesPerView, minSlides);

			breakpoints[bp] = {
				slidesPerView,
				spaceBetween: space,
			};
		});

		return breakpoints;
	};

	const slidesFromDB = data?.image_view; // dynamic value from API or CMS
	const breakpoints = generateBreakpoints(slidesFromDB);

	return (
		<div className=" pt-[140px]">
			<Container>
				<div className="max-w-[1096px] mb-10">
					<h2 className="text-neutral-50">{data?.title}</h2>
					<p className="text-[20px] text-neutral-300">{data?.description}</p>
				</div>
				<div>
					{/* <Swiper
						slidesPerView={1}
						spaceBetween={20}
						pagination={{
							clickable: true,
						}}
						navigation={true}
						modules={[Pagination, Navigation]}
						className="mySwiper boundedSwiper"
						breakpoints={{
							1024: {
								// >= 768px
								slidesPerView: 2,
								spaceBetween: 30,
							},
						}}
					>
						<SwiperSlide>
							<div className="aspect-[728/90]">
								<Image src={"/pages/caseStudies/Black-OPS-728x90.jpg"} height={250} width={970} alt="" className="h-full w-full" />
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="aspect-[728/90]">
								<Image src={"/pages/caseStudies/Black-OPS-728x90.jpg"} height={250} width={970} alt="" className="h-full w-full" />
							</div>
						</SwiperSlide>
					</Swiper> */}
					<Swiper
						slidesPerView={1}
						spaceBetween={20}
						pagination={{
							clickable: true,
						}}
						navigation={true}
						modules={[Pagination, Navigation]}
						className="mySwiper boundedSwiper"
						breakpoints={breakpoints}
					>
						{data?.images?.map((image, i) => (
							<SwiperSlide key={i}>
								<div style={{ aspectRatio: image?.width / image?.height }} className="">
									<Image
										src={image ? process.env.NEXT_PUBLIC_API_URL + image?.url : "/"}
										height={image?.height}
										width={image?.width}
										alt=""
										className="h-full w-full"
									/>
								</div>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</Container>
		</div>
	);
}

export default WorksDisplay;
