import Banner from "@/components/global/Banner";
import Hero from "@/components/pages/about/Hero";
import Mission from "@/components/pages/about/Mission";
import StatsAndClients from "@/components/pages/home/StatsAndClients";
import Container from "@/components/ui/Container";
import React from "react";

function page() {
	return (
		<div>
			<Hero />
			<div className="">
				<div className="bg-tertiary-500 py-[100px] lg:py-[140px]">
					<Container>
						<Mission />
					</Container>
				</div>
				<div className="bg-secondary-900 pt-[140px]">
					<Container>
						<div className="grid md:grid-cols-3 gap-6 mt-[60px]">
							<div className="md:-mt-[60px] w-full h-[350px] rounded-[10px] bg-[rgba(27,33,39,0.40)] backdrop-blur-[25px]"></div>
							<div className=" w-full h-[350px] rounded-[10px] bg-[rgba(27,33,39,0.40)] backdrop-blur-[25px]"></div>
							<div className="md:-mt-[60px] w-full h-[350px] rounded-[10px] bg-[rgba(27,33,39,0.40)] backdrop-blur-[25px]"></div>
						</div>
					</Container>
					<StatsAndClients about={true} />
				</div>
				<Banner />
				<div className="bg-tertiary-500 py-[100px] lg:py-[140px]">
					<Container>
						<Mission  />
					</Container>
				</div>
			</div>
		</div>
	);
}

export default page;
