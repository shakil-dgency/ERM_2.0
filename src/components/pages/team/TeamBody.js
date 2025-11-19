import Container from "@/components/ui/Container";
import Image from "next/image";
import React from "react";

function TeamBody({ data }) {
	return (
		<div className="bg-tertiary-50 py-[100px] lg:py-[150px] bg-[url('/pages/home/papertexture.png')] bg-[length:240px_240px] bg-repeat">
			<Container>
				<div className="grid lg:block grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 space-y-8 gap-x-5">
					{data?.map((item, i) => (
						<div
							key={i}
							className=" max-w-[1316px] mx-auto grid grid-cols-1 lg:grid-cols-3  items-stretch text-white relative bg-[url('/pages/home/bookingMaxBg.png')] bg-repeat bg-[length:240px_240px] rounded-[10px] overflow-hidden"
						>
							<div className="glow_backgroun absolute z-10 -right-[100px] bottom-[-100px] w-[250px] h-[250px] rounded-full blur-[140px] bg-primary-500 " />

							<Image
								src={item?.profile_image ? process.env.NEXT_PUBLIC_API_URL + item?.profile_image.url : "/"}
								height={400}
								width={430}
								alt=""
								className="w-full lg:w-[430px] h-[460px] lg:h-full object-cover object-top"
							/>

							<div className="relative z-10 w-full h-full col-span-2">
								<div className="max-w-[690px] px-4 lg:pl-[50px] lg:pr-5 py-[50px]">
									<p className="text-[28px] lg:text-[32px] font-[700] mb-1 ">{item?.name}</p>
									<p className="text-neutral-300 mb-[30px] text-[14px] lg:text-[16px]">{item?.designation}</p>
									<p className="text-[16px] lg:text-[18px] text-neutral-300">{item?.description}</p>
									<div className="flex flex-col xs:flex-row sm:flex-col md:flex-row justify-between gap-y-5 gap-x-3 mt-[50px]">
										<div>
											<p className="text-[16px] lg:text-[18px] font-[600] text-neutral-200 mb-2">STRENGTHS</p>
											<ul className="list-disc list-inside space-y-2 ">
												{item?.strengths?.map((el, j) => {
													return <li key={j} className="text-neutral-300 text-[14px] lg:text-[16px]">{el?.title}</li>
												})}
												
											</ul>
										</div>
										<div>
											<p className="text-[16px] lg:text-[18px] font-[600] text-neutral-200 mb-2">WEAKNESSES</p>
											<ul className="list-disc list-inside space-y-2">
												{item?.weaknesses?.map((el, j) => {
													return <li key={j} className="text-neutral-300 text-[14px] lg:text-[16px]">{el?.title}</li>
												})}
											</ul>
										</div>
									</div>
								</div>
								<Image
									src={item?.experience ? process.env.NEXT_PUBLIC_API_URL + item?.experience.url : "/"}
									height={108}
									width={72}
									alt=""
									className="w-auto h-[85px] lg:h-[108px] absolute right-0 lg:right-5 -top-[30px] lg:top-5"
								/>
							</div>
						</div>
					))}
				</div>
			</Container>
		</div>
	);
}

export default TeamBody;
