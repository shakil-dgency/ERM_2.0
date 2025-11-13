"use client";
import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import Container from "@/components/ui/Container";
import CaseCard from "../../caseStudies/CaseCard";

function CaseStudies({ light, data }) {
	const prevRef = useRef(null);
	const nextRef = useRef(null);
	const paginationRef = useRef(null);

	const [swiperReady, setSwiperReady] = useState(false);

	useEffect(() => {
		
		setSwiperReady(true);
	}, []);
	return (
		<div>
			<Container>
				<div className="max-w-[1260px] mb-[30px] lg:mb-[80px]">
					<p className="highlighted_text ">{data?.Eyebrow_headline}</p>
					<h2 className={` ${light ? "text-neutral-50" : "text-neutral-950"} `}>{data?.headline}</h2>
				</div>
			</Container>
			<div className=" max-w-[1024px] lg:max-w-[inherit] mx-auto px-2.5 lg:px-0 ">
				<Swiper
					slidesPerView={1}
					spaceBetween={30}
					centeredSlides={false}
					modules={[Navigation, Pagination]}
					navigation={{
						prevEl: prevRef.current,
						nextEl: nextRef.current,
					}}
					speed={1000}
					pagination={{
						el: paginationRef.current,
						clickable: true,
					}}
					onSwiper={(swiper) => {
						// assign refs after first render
						swiper.params.navigation.prevEl = prevRef.current;
						swiper.params.navigation.nextEl = nextRef.current;
						swiper.params.pagination.el = paginationRef.current;
						swiper.navigation.init();
						swiper.navigation.update();
						swiper.pagination.init();
						swiper.pagination.update();
					}}
					className=""
					breakpoints={{
						552: {
							slidesPerView: 1.5,
							spaceBetween: 20,
						},
						768: {
							// >= 768px
							slidesPerView: 2.2,
							spaceBetween: 30,
						},
						1024: {
							// >= 768px
							slidesPerView: 1.4,
							spaceBetween: 30,
							centeredSlides: true,
						},
					}}
				>
					{data?.case_studies.map((item, i) => (
						<SwiperSlide key={i}>
							<CaseCard data={item} />
						</SwiperSlide>
					))}
				</Swiper>
				<Container>
					<div className="relative mt-[60px]">
						<div className="custom-controls mySwiper absolute top-0 right-0 left-0 flex justify-between items-center p-4 z-20">
							<button ref={prevRef} className="custom-prev swiper-button-prev ">
								
							</button>
							<div ref={paginationRef} className="custom-pagination flex gap-2"></div>
							<button ref={nextRef} className="custom-next swiper-button-next ">
								
							</button>
						</div>
					</div>
				</Container>
			</div>
		</div>
	);
}

export default CaseStudies;
