import LazyLoadingVideo from "@/components/global/LazyLoadingVideo";
import Container from "@/components/ui/Container";
import HeroText from "@/components/ui/HeroText";
import Link from "next/link";
import React from "react";
import { MdOutlineArrowDropDown } from "react-icons/md";

function Hero({ data, video = false, work }) {
	return (
		<div
			style={
				!video
					? {
							background: `${data?.background_image ? `linear-gradient(0deg, rgba(8, 11, 15, 0.80) 0%, rgba(8, 11, 15, 0.80) 100%), url(${
								data?.background_image ? process.env.NEXT_PUBLIC_API_URL + data?.background_image?.url : "/"
							})` : "#0d1116"} `,
							backgroundSize: "cover",
							backgroundPosition: "center",
							width: "100%",
					  }
					: {}
			}
			className={`${
				video ? " shadow-[0px_40px_80px_#ff492c20] relative h-screen flex items-center justify-center" : ""
			} pt-[140px] pb-[140px] bg-secondary-900 bg-cover bg-no-repeat`}
		>
			{work && (
				<Container>
					<div className=" flex -mt-[70px] mb-[70px]">
						<Link
							// onClick={backToPreviousPage}
							href="/find-a-room"
							className="group text-neutral-500 hover:text-primary-500 text-center  font-semibold text-[12px] md:text-[14px] flex items-center underline underline-offset-4 "
						>
							<MdOutlineArrowDropDown className="text-xl rotate-90 group-hover:translate-x-[-2px] duration-300" /> BACK TO ALL LOCATION
						</Link>
					</div>
				</Container>
			)}

			{video && (
				<div className="absolute inset-0 z-10">
					<LazyLoadingVideo video_url={data?.background_video_url} />
					<div className="absolute inset-0 z-10 bg-[#000000c6]"></div>
				</div>
			)}

			<HeroText data={data?.hero_text} />
		</div>
	);
}

export default Hero;
