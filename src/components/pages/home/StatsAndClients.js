import React from "react";
import AnimatedLogoGrid from "./AnimatedLogoGrid";
import Container from "@/components/ui/Container";
import UnderlineHeadline from "@/components/ui/UnderlineHeadline";
import Image from "next/image";
import ToolsCard from "./ToolsCard";

function StatsAndClients({ data, about }) {
	return (
		<div className="bg-secondary-900 py-[100px] md:py-[140px]">
			<Container>
				<div className="max-w-[1260px] mb-[40px] xs:mb-[60px] lg:mb-[150px]">
					<p className="highlighted_text">{data?.Eyebrow_headline}</p>
					<UnderlineHeadline text={data?.headline} text_light={true} />
				</div>
				<div className={`${about ? "" : "grid grid-cols-1 lg:grid-cols-3 gap-6"}`}>
					<div className="lg:col-start-1 lg:col-end-4 2xl:col-end-3">
						<div className={`${about ? "max-w-[1300px] mx-auto" : ""} grid sm:grid-cols-2 sm:justify-items-start gap-y-[40px] sm:gap-y-[100px]`}>
							{data?.statistics.map((stat, i) => (
								<div className="group" key={i}>
									<div className="relative mb-2 sm:mb-0">
										<p className="text-[48px] sm:text-[74px] lg:text-[96px] font-[500] text-neutral-50">{stat?.title}</p>
										{/* <div className="w-full sm:h-[20px] lg:h-[70px] bg-gradient-to-t from-secondary-900 from-40% to-transparent to-100% absolute -left-2 bottom-3 z-10"></div> */}
									</div>
									<span className="text-[12px] sm:text-[14px] lg:text-[16px] px-[25px] py-2.5 text-neutral-400 group-hover:text-neutral-100 duration-300 rounded-[10px] bg-secondary-800">
										{stat?.short_description}
									</span>
								</div>
							))}
						</div>
						{!about && (
							<div className=" 2xl:hidden  mt-[100px] grid grid-cols-1 lg:grid-cols-3 gap-5 ">
								{data?.cards.map((card, i) => (
									<ToolsCard key={i} data={card} />
								))}
							</div>
						)}
						<div className="mt-[100px] lg:mt-[136px]">
							<p className="text-[24px] sm:text-[36px] font-[700] text-neutral-50 mb-[50px]">Trusted by Escape Room Companies Globally</p>
							<div className="relative ">
								<AnimatedLogoGrid logos={data?.logos} speed={0.08} />
								<div className="w-full h-[50px] bg-gradient-to-t from-secondary-900 to-transparent absolute -bottom-0 left-0"></div>
								<div className="w-full h-[50px] bg-gradient-to-b from-secondary-900 to-transparent absolute top-0 left-0"></div>
							</div>
						</div>
					</div>
					{!about && (
						<div className="hidden 2xl:block space-y-[30px] col-start-3 col-end-4">
							{data?.cards.map((card, i) => (
								<ToolsCard key={i} data={card} />
							))}
							{/* <div className="relative p-[2px] rounded-[10px] bg-[linear-gradient(to_right,_#fff,_transparent)]">
								<div className="rounded-[8px] bg-[rgba(27,33,39,0.4)] p-6">
									<h3 className="text-white font-bold text-lg mb-2">Gradient Border</h3>
									<p className="text-white/80">This border uses a gradient background trick.</p>
								</div>
							</div> */}
						</div>
					)}
				</div>
			</Container>
		</div>
	);
}

export default StatsAndClients;
