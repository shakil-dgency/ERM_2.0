import LazyLoadingVideo from "@/components/global/LazyLoadingVideo";
import Container from "@/components/ui/Container";
import HeroText from "@/components/ui/HeroText";
import Link from "next/link";
import React from "react";
import { MdOutlineArrowDropDown } from "react-icons/md";

function Hero({ data, video = false, work, lightShadow }) {
	return (
		<div className={`relative ${lightShadow? "shadow-[0px_40px_80px_#ff492c20]": ""} `} >
			<div
				style={
					!video
						? {
								backgroundImage: `url(${data?.background_image ? process.env.NEXT_PUBLIC_API_URL + data?.background_image?.url : "/"}) `,
						  }
						: {}
				}
				className={`${
					video ? " shadow-[0px_40px_80px_#ff492c20] relative h-screen flex items-center justify-center" : ""
				} pt-[140px] pb-[140px] bg-secondary-900 bg-cover bg-no-repeat bg-center`}
			>
				{work && (
					<Container>
						<div className=" flex -mt-[70px] mb-[70px] relative z-20">
							<Link
								// onClick={backToPreviousPage}
								href="/works"
								className="group text-neutral-500 hover:text-primary-500 text-center  font-semibold text-[12px] md:text-[14px] flex items-center underline underline-offset-4 "
							>
								<MdOutlineArrowDropDown className="text-xl rotate-90 group-hover:translate-x-[-2px] duration-300" /> BACK TO ALL WORK
							</Link>
						</div>
					</Container>
				)}

				{video && (
					<div className="absolute inset-0 z-10">
						<LazyLoadingVideo video_url={data?.background_video_url} />
						{/* <div className="absolute inset-0 z-10 bg-[#000000c6]"></div> */}
					</div>
				)}

				<HeroText data={data?.hero_text} btnText={data?.button_text} />
			</div>
			<div className="absolute inset-0 z-10 bg-[#000000d4] h-full"></div>
		</div>
	);
}

export default Hero;
