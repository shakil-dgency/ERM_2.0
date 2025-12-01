/* eslint-disable react/no-unescaped-entities */
import Container from "@/components/ui/Container";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function ClientCall({ data }) {
	return (
		<div className="bg-neutral-900 relative pt-[100px] lg:pt-[140px] pb-[100px] lg:pb-[140px]">
			<div className="absolute top-0 h-[200px] w-full bg-[linear-gradient(0deg,rgba(13,17,22,0)_0%,rgba(13,17,22,0)_50%,rgba(230,64,39,0.2)_100%)]"></div>
			<Container>
				<div className=" flex flex-col items-center justify-center relative z-10">
					<p className="highlighted_text">{data?.Eyebrow_headline}</p>
					<h2 className="text-neutral-50 text-center pb-2.5 pt-[15px] md:pt-5">{data?.headline}</h2>
					<p className="text-[14px] sm:text-[16px] text-neutral-300 text-center">{data?.description}</p>
				</div>
				<div className=" flex flex-col md:flex-row justify-center items-center mt-[50px]">
					<button className="group relative overflow-hidden w-full md:w-auto px-[30px] lg:px-[60px] py-[16px] text-[16px] lg:text-[20px] font-[700] text-neutral-5 rounded-[6px] shadow bg-[url('/pages/demoCall/demo_btn.png')] bg-repeat bg-[length:100%_100%]">
						<span className="relative z-10 text-neutral-50">Choose Your Time</span>
						<div className="bg-[#546577] group-hover:bg-primary-500 duration-300 absolute left-2 bottom-[-40px] w-[130px] h-[80px] rounded-[50%] blur-[25px] " />
					</button>
					<p className="text-neutral-300 leading-[1] text-[32px]">
						<span className="hidden md:block">⇢</span>
						<span className="md:hidden">⇣</span>
					</p>
					<button className="group relative overflow-hidden w-full md:w-auto px-[30px] lg:px-[60px] py-[16px] text-[16px] lg:text-[20px] font-[700] text-neutral-5 rounded-[6px] shadow bg-[url('/pages/demoCall/demo_btn.png')] bg-repeat bg-[length:100%_100%]">
						<span className="relative z-10 text-neutral-50">Provide Your Details</span>
						<div className="bg-[#546577] group-hover:bg-primary-500 duration-300 absolute left-2 bottom-[-40px] w-[130px] h-[80px] rounded-[50%] blur-[25px] " />
					</button>
					<p className="text-neutral-300 leading-[1] text-[32px]">
						<span className="hidden md:block">⇢</span>
						<span className="md:hidden">⇣</span>
					</p>
					<button className="group relative overflow-hidden w-full md:w-auto px-[30px] lg:px-[60px] py-[16px] text-[16px] lg:text-[20px] font-[700] text-neutral-5 rounded-[6px] shadow bg-[url('/pages/demoCall/demo_btn.png')] bg-repeat bg-[length:100%_100%]">
						<span className="relative z-10 text-neutral-50">Let’s Talk Growth</span>
						<div className="bg-[#546577] group-hover:bg-primary-500 duration-300 absolute left-2 bottom-[-40px] w-[130px] h-[80px] rounded-[50%] blur-[25px] " />
					</button>
				</div>
				<div className="text-center text-neutral-200 mt-[100px] mb-[25px] relative z-20">
					Booking calendar will load in a second (
					<Link href={`${data?.calendar_url ? data?.calendar_url : "/"}`} target="_blank" className="text-blue-500 underline">
						click here
					</Link>{" "}
					if it isn't loading properly):
				</div>

				<div className="bg-neutral-100 max-w-[800px] mx-auto p-2">
					<div
						className="max-w-[800px] mx-auto text-neutral-200 bg-neutral-50 rounded-[10px]
               h-[700px] overflow-auto [scrollbar-width:none] [-ms-overflow-style:none]
               [&::-webkit-scrollbar]:hidden"
					>
						<iframe src={data?.calendar_url} width="100%" height="1200" frameBorder="0" className="block"></iframe>
					</div>
				</div>

				<div className={`pt-[100px] lg:pt-[140px] max-w-[1240px] mx-auto`}>
					<p className="text-[20px] sm:text-[26px] lg:text-[36px] text-center font-[700] text-neutral-50 mb-[50px]">
						{data?.advices?.headline}
					</p>
					<div className=" text-[#222] grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-4">
						{/* {contactData &&
							contactData.data?.attributes.lists.map((data) => {
								return ( */}
						{data?.advices?.cards?.map((card, i) => (
							<div
								key={i}
								className="group bg-[url('/pages/demoCall/demo_card_bg.png')] bg-repeat bg-cover bg-secondary-800 max-w-[512px] mx-auto text-center rounded-lg shadow px-6 pb-[60px]"
							>
								<div className="relative flex justify-center mb-[20px] mt-[60px]">
									<Image
										src={card?.icon ? process.env.NEXT_PUBLIC_API_URL + card?.icon.url : "/"}
										alt=""
										height={60}
										width={60}
										className="group-hover:scale-105 duration-500 h-[60px] w-auto relative z-10"
									/>
									<div
										className={`h-[30px] w-[30px] bg-primary-500 blur-[15px] absolute top-[50%] translate-y-[-45%] opacity-0 group-hover:opacity-100 duration-500`}
									></div>
								</div>
								<p className="text-[20px] sm:text-[24px] font-[700] text-neutral-200 mb-3">{card?.title}</p>
								<p className="text-[16px] font-[600] text-neutral-400">{card?.description}</p>
							</div>
						))}

						{/* // 	);
							// })} */}
					</div>
				</div>
			</Container>
		</div>
	);
}

export default ClientCall;
