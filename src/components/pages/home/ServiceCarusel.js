"use client";
import ServiceCard from "@/components/global/ServiceCard";
import React from "react";
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

	return (
		<div className="text-cyan-50 relative z-20">
			<Container>
				<div className="max-w-[1260px] mb-[50px] md:mb-[80px]">
					<p className="highlighted_text ">{data?.eyebrow_headline}</p>
					<UnderlineHeadline text={data?.headline} text_light={true} />
				</div>
			</Container>

			<div className="pl-2.5 md:pl-0">
				<Swiper
					slidesPerView={1.2}
					spaceBetween={20}
					speed={1000}
	
					centeredSlides={false}
					pagination={{
						clickable: true,
					}}
					navigation={true}
					modules={[Pagination, Navigation]}
					className="mySwiper fullscreen_swiper "
					breakpoints={{
						768: {
							// >= 768px
							slidesPerView: 1.4,
							spaceBetween: 30,
							centeredSlides: true,
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
			</div>
		</div>
	);
}

export default ServiceCarusel;
