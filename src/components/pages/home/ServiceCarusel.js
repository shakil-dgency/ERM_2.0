"use client";
import ServiceCard from "@/components/global/ServiceCard";
import React, { useRef, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { usePathname } from "next/navigation";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination } from "swiper/modules";
import { Navigation } from "swiper/modules";
import Container from "@/components/ui/Container";
import UnderlineHeadline from "@/components/ui/UnderlineHeadline";

function ServiceCarusel({ data }) {
	const { service } = useSelector((state) => state.service);
	const router = usePathname();

	const prevRef = useRef(null);
	const nextRef = useRef(null);
	const paginationRef = useRef(null);

	const [swiperReady, setSwiperReady] = useState(false);

	useEffect(() => {
		setSwiperReady(true);
	}, []);

	return (
		<div className="text-cyan-50 relative z-20">
			<Container>
				<div className="max-w-[1260px] mb-[50px] md:mb-[80px]">
					<p className="highlighted_text ">{data?.eyebrow_headline}</p>
					<UnderlineHeadline text={data?.headline} text_light={true} />
				</div>
			</Container>

			<div className="px-2.5 md:px-0 dynamicFullScreen">
				{swiperReady && (
					<Swiper
						slidesPerView={1.2}
						spaceBetween={20}
						speed={1000}
						loop={true}
						initialSlide={3}
						centeredSlides={true}
						
						navigation={{
							prevEl: prevRef.current,
							nextEl: nextRef.current,
						}}
						pagination={{
							el: paginationRef.current,
							clickable: true,
							dynamicBullets: true
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
						modules={[Pagination, Navigation]}
						className="mySwiper fullscreen_swiper "
						breakpoints={{
							768: {
								// >= 768px
								slidesPerView: 1.6,
								spaceBetween: 30,
								// centeredSlides: true,
							},
						}}
					>
						{service
							?.filter((item) => item?.slug !== router.slice(1))
							.map((service, i) => {
								return (
									<SwiperSlide key={i}>
										<ServiceCard data={service} />
									</SwiperSlide>
								);
							})}
					</Swiper>
				)}
				<Container carusel={true}>
					<div className="relative mt-[30px]">
						<div className="custom-controls mySwiper absolute top-0 right-0 left-0 flex justify-between items-center pt-4 z-20">
							<button ref={prevRef} className="custom-prev swiper-button-prev "></button>
							<div ref={paginationRef} className="custom-pagination "></div>
							<button ref={nextRef} className="custom-next swiper-button-next "></button>
						</div>
					</div>
				</Container>
			</div>
		</div>
	);
}

export default ServiceCarusel;
