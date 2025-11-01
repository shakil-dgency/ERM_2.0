import Container from "@/components/ui/Container";
import React from "react";

function ComparisonBox({data}) {
	return (
		<div>
			<div className="max-w-[814px] mx-auto mb-[50px] lg:mb-[100px] px-2.5">
				<h2 className="text-center mb-3 lg:mb-5 text-neutral-950">{data?.section_header?.headline}</h2>

				<p className="text-center text-[14px] lg:text-lg text-neutral-700 ">
					{data?.section_header?.description}
				</p>
			</div>
			<Container>
				<div className="w-full h-full overflow-x-scroll lg:overflow-hidden">
					<div className="h-full w-[800px] md:w-[1024px] lg:w-full grid grid-cols-8 md:grid-cols-11 gap-0 pt-[20px] pb-[50px]">
						{/* Table Header */}
						<div className=""></div>
						<div className=""></div>
						{/* <div className="relative rounded-t-[10px] bg-[#0a0a0b] text-white text-center font-bold text-lg py-6">
					<span className="text-neutral-50">Escape Room Marketer</span> <span className="text-xs text-white/70">(ERM)</span>
					
				 </div> */}
						<div className="text-center font-bold text-[12px] lg:text-lg py-6  text-[#161a1e] col-start-4 md:col-start-6 col-end-7 md:col-end-9">
							{data?.column_name_2}
						</div>
						<div className="text-center font-bold text-[12px] lg:text-lg py-6  text-[#161a1e] -ml-[50px] md:-ml-0 col-start-7 md:col-start-9 col-end-9 md:col-span-full">
							{data?.column_name_3}
						</div>

						{/* Rows */}
						{data?.comparison_table.map((item, i) => (
							<React.Fragment key={i}>
								{/* Label */}
								<div
									className={`${i === 0 ? "rounded-tl-[20px]" : "border-t border-secondary-700"} ${
										i === data.comparison_table.length - 1 ? "rounded-bl-[20px]" : ""
									} col-start-1 col-end-2 md:col-end-3 flex items-center bg-secondary-800 px-1.5 lg:px-10 py-6 text-neutral-100 font-medium text-[12px] lg:text-base `}
								>
									{item.label}
								</div>

								{/* ERM (Center, Highlighted) */}
								<div
									className={`relative col-start-2 md:col-start-3 col-end-[4] md:col-end-6 bg-[url('/pages/home/bookingMaxBg.png')] bg-repeat bg-[length:240px_240px] overflow-hidden bg-[#0a0a0b] px-1.5 lg:px-6 py-6 text-white text-[12px] lg:text-base text-center flex items-center font-normal  ${
										i == 0 ? "-mt-[70px] md:-mt-[80px] pt-[90px] rounded-t-[10px]" : ""
									} ${i === data.comparison_table.length - 1 ? "-mb-[40px] rounded-b-[10px]" : ""} `}
								>
									<span className="relative z-20">{item.erm}</span>

									{i === 0 && (
										<span className="text-neutral-50 font-bold text-[12px] lg:text-lg absolute z-20 w-full left-[50%] translate-x-[-50%] top-[25px] ">
											{data?.column_name_1}
										</span>
									)}

									{/* <div className={`${i=== rows.length -1 ?"absolute left-0 w-full h-[40px] top-full bg-[#0a0a0b] rounded-b-[10px]":"hidden"}`}></div> */}
									{(i === 0 || i === 1) && (
										<div
											className={`${
												i == 0 ? "-left-10 top-4 " : "-left-10 -top-[150px] md:-top-[170px]"
											} absolute z-10  w-[160px] h-[160px] rounded-full blur-[80px] bg-primary-500`}
										/>
									)}
								</div>

								{/* Agency */}
								<div
									className={`bg-secondary-800  ${
										i === 0 ? "" : "border-t border-secondary-700"
									} col-start-4 md:col-start-6 col-end-7 md:col-end-9 flex items-center justify-center text-center pl-10 pr-[60px] md:pr-10 lg:px-10 py-6 text-neutral-100 text-[12px] lg:text-base font-normal`}
								>
									{item.agencies}
								</div>

								{/* DIY */}
								<div
									className={`bg-secondary-800  ${i === 0 ? "rounded-tr-[20px] " : "border-t border-secondary-700 "} ${
										i === data.comparison_table.length - 1 ? "rounded-br-[20px]" : ""
									} -ml-[50px] md:-ml-0 col-start-7 md:col-start-9 col-end-9 md:col-span-full flex items-center justify-center text-center px-10 lg:px-10 py-6 text-neutral-100 text-[12px] lg:text-base font-normal`}
								>
									{item.freelancers}
								</div>
							</React.Fragment>
						))}
					</div>
				</div>
			</Container>
		</div>
	);
}

export default ComparisonBox;
