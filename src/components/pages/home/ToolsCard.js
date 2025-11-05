"use client";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import Image from "next/image";

export default function ToolsCard({ data }) {
	return (
		<div>
			<div className="overflow-hidden relative h-full w-full 2xl:max-w-[536px] px-2.5 sm:px-[30px] lg:px-5 2xl:px-[30px] py-[35px] 2xl:py-[45px] rounded-[10px]   bg-[rgba(27,33,39,0.4)] backdrop-blur-[25px] ">
				{/* <div class="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-l from-white/80 to-transparent rounded-b-[10px]"></div>
                  <div class="absolute top-0 right-0 w-[2px] h-full bg-gradient-to-t from-white/80 to-transparent rounded-r-[10px]"></div> */}
				<div
					style={{ background: data?.card_bg_hex_color }}
					className="glow_backgroun absolute -left-20 top-[-30px] w-[183px] h-[183px] rounded-full blur-[125px] "
				/>
				<div className="flex flex-col sm:flex-row lg:flex-col 2xl:flex-row items-center text-center sm:text-left lg:text-center 2xl:text-left mb-[40px] gap-[20px] relative z-10">
					<Image
						src={data ? process.env.NEXT_PUBLIC_API_URL + data?.image?.url : ""}
						width={151}
						height={138}
						alt="Stats Image"
						className=" object-contain h-[138px] w-[120px] "
					/>
					<div>
						<p className="text-[20px] sm:text-[24px] lg:text-[20px] 2xl:text-[24px] font-[700] text-neutral-100">{data?.headline}</p>
						<p className="text-[14px] sm:text-[16px] lg:text-[14px] pt-1 2xl:text-[16px] font-[400] text-neutral-300">{data?.description}</p>
					</div>
				</div>
				<div>
					<Swiper
						slidesPerView={4}
						spaceBetween={20}
						// pagination={{
						// 	clickable: true,
						// }}
						// navigation={true}
						modules={[]}
						className=" "
						breakpoints={{
							640: {
								slidesPerView: 6,
								spaceBetween: 20,
							},
							768: {
								slidesPerView: 8,
								spaceBetween: 20,
							},
							1024: {
								// >= 768px
								slidesPerView: 4,
								spaceBetween: 20,
							},
							1536: {
								// >= 768px
								slidesPerView: 6,
								spaceBetween: 20,
							},
						
						}}
					>
						{data?.logos_with_alt.map((logo,i)=>(
							<SwiperSlide key={i}>
							<div className="flex flex-col items-center gap-2 relative z-10">
								<Image src={logo ? process.env.NEXT_PUBLIC_API_URL + logo?.url : ""} width={151} height={138} alt="Stats Image" className=" object-cover h-[15px] w-auto " />
								<p className="text-[10px] font-[400] text-neutral-100">{logo?.alternativeText}</p>
							</div>
						</SwiperSlide>
						))}
						
					</Swiper>
				</div>
			</div>
		</div>
	);
}
