
import Image from "next/image";
import React from "react";
import ButtonMain from "./ButtonMain";


function PartnerHero() {
	
	return (
		<div className=" bg-secondary-950 bg-[url('/pages/partnerProgram/partnerProgram.webp')] bg-no-repeat bg-cover bg-center ">
			
			<div className=" text-center ">
				<div className="px-2.5 pt-14 md:pt-20 pb-20 md:pb-28">
					<div className="pt-10 md:pt-20 pb-[35px] md:pb-[60px] ">
						<p className="highlighted_text">120+ design flaws killing bookings</p>
						<h1 className="text-[24px] md:text-[54px] font-[700] text-[#fff_!important] max-w-[1127px] mx-auto">Earn 10% Per Referral</h1>
						<p className="text-[16px] text-neutral-300 max-w-[840px] mx-auto pt-2.5">Look great. Convert better. Stay fully booked.</p>
					</div>

					<ButtonMain />
				</div>
			</div>

			<div className="max-w-[1024px] mx-2.5 lg:mx-auto mt-8 bg-secondary-800 px-[14px] py-[16px] shadow-md rounded-md relative z-30 flex flex-row justify-around  -mb-[60px]">
				<div className=" w-full border-r-[1px] border-secondary-700">
					<div>
						<p className="text-neutral-50 text-center text-[20px] md:text-[36px] font-[700]">$15M</p>
						<p className="text-[12px] md:text-[16px] text-center text-neutral-300">AD BUDGET MANAGED</p>
					</div>
				</div>
				{/* <Image src={"/contactus/Line.svg"} height={50} width={50} alt="" className="w-[30px] rotate-90 lg:rotate-0 self-center" /> */}
				<div className=" w-full border-r-[1px] border-secondary-700">
					<div>
						<p className="text-neutral-50 text-center text-[20px] md:text-[36px] font-[700]">16</p>
						<p className="text-[12px] md:text-[16px] text-center text-neutral-300">MARKETING EXPERTS</p>
					</div>
				</div>
				{/* <Image src={"/contactus/Line.svg"} height={50} width={50} alt="" className=" w-[30px] rotate-90 lg:rotate-0 self-center" /> */}
				<div className=" w-full ">
					<div>
						<p className="text-neutral-50 text-center text-[20px] md:text-[36px] font-[700]">100+</p>
						<p className="text-[12px] md:text-[16px] text-center text-neutral-300">5-STAR TESTIMONIALS</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default PartnerHero;
