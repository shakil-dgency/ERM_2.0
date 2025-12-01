import Container from "@/components/ui/Container";
import React from "react";

function ComparisonBox({ data }) {
	return (
		<div>
			<div className="max-w-[814px] mx-auto mb-[50px] lg:mb-[100px] px-2.5">
				<h2 className="text-center mb-3 lg:mb-5 text-neutral-950">{data?.section_header?.headline}</h2>

				<p className="text-center text-[14px] lg:text-lg text-neutral-700 ">{data?.section_header?.description}</p>
			</div>
			<Container>
				<div className="overflow-x-auto overflow-y-hidden">
					<div className="grid grid-cols-4 pt-[10px] pb-[44px] text-[13px] lg:text-[16px] min-w-[900px]">
						{/* Column: Label */}
						<div className="grid " style={{ gridTemplateRows: `repeat(${data?.comparison_table?.length + 1}, 1fr)` }}>
							<div></div>
							{data?.comparison_table?.map((item, i) => (
								<p
									key={i}
									className={`${
										i === 0 ? "rounded-tl-[20px]" : i === data?.comparison_table?.length - 1 ? "rounded-bl-[20px]" : ""
									} text-neutral-100 flex items-center justify-start pl-6 pr-[70px] py-4 sm:py-[28px] border-b border-secondary-700 bg-secondary-800`}
								>
									{item.label}
								</p>
							))}
						</div>

						{/* Column: ERM */}
						<div
							className="grid bg-secondary-800 -ml-[60px] mr-[40px] -mb-[35px] rounded-[10px] relative z-10 overflow-hidden shadow-[0px_0px_10px_#ff492c] bg-[url('/pages/home/bookingMaxBg.png')] bg-repeat bg-[length:240px_240px]"
							style={{ gridTemplateRows: `repeat(${data?.comparison_table?.length + 1}, 1fr) 0.5fr ` }}
						>
							<div className="flex items-center justify-center text-neutral-50 text-[14px] lg:text-[16px] text-center font-[700] relative z-20">{data?.column_name_1}</div>
							{data?.comparison_table?.map((item, i) => (
								<p
									key={i}
									className={`${
										data?.comparison_table?.length - 1 === i ? "" : ""
									} text-neutral-50 relative z-20 flex items-center justify-center text-center px-3 py-4 sm:py-[28px]`}
								>
									{item.erm}
								</p>
							))}

							<div className={` absolute left-[-50px] top-[-60px] z-10  w-[260px] h-[260px] rounded-full blur-[150px] bg-primary-500`} />
							<div className={` absolute right-[-50px] bottom-[-80px] z-10  w-[260px] h-[260px] rounded-full blur-[150px] bg-primary-500`} />
						</div>

						{/* Column: Agencies */}
						<div className="grid -ml-[40px] mr-[20px]" style={{ gridTemplateRows: `repeat(${data?.comparison_table?.length + 1}, 1fr)` }}>
							<div className="flex items-center justify-center font-[700] text-[14px] lg:text-[16px] text-center text-[#161a1e]">{data?.column_name_2}</div>
							{data?.comparison_table?.map((item, i) => (
								<p
									key={i}
									className="text-neutral-200 flex items-center justify-center text-center px-[18px] py-4 sm:py-[28px] border-b border-secondary-700 bg-secondary-800"
								>
									{item.agencies}
								</p>
							))}
						</div>

						{/* Column: Freelancers */}
						<div className="grid -ml-[20px]" style={{ gridTemplateRows: `repeat(${data?.comparison_table?.length + 1}, 1fr)` }}>
							<div className=" flex items-center justify-center text-[14px] lg:text-[16px] text-center font-[700] text-[#161a1e]">{data?.column_name_3}</div>
							{data?.comparison_table?.map((item, i) => (
								<p
									key={i}
									className={`${
										i === 0 ? "rounded-tr-[20px]" : i === data?.comparison_table?.length - 1 ? "rounded-br-[20px]" : ""
									} text-neutral-200 flex items-center justify-center text-center pl-3 pr-6 py-4 sm:py-[28px] border-b border-secondary-700 bg-secondary-800`}
								>
									{item.freelancers}
								</p>
							))}
						</div>
					</div>
				</div>
			</Container>
		</div>
	);
}

export default ComparisonBox;
