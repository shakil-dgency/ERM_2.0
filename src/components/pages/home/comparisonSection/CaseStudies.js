"use client";
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
	return (
		<div>
			<Container>
				<div className="max-w-[1260px] mb-[30px] lg:mb-[80px]">
					<p className="highlighted_text ">{data?.Eyebrow_headline}</p>
					<h2 className={` ${light ? "text-neutral-50" : "text-neutral-950"} `}>{data?.headline}</h2>
				</div>
			</Container>
			<div className="max-w-[1024px] lg:max-w-[inherit] mx-auto px-2.5 lg:px-0">
				<Swiper
					slidesPerView={1}
					spaceBetween={30}
					centeredSlides={false}
					pagination={{
						clickable: true,
					}}
					navigation={true}
					modules={[Pagination, Navigation]}
					className="mySwiper"
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
			</div>
		</div>
	);
}

export default CaseStudies;
