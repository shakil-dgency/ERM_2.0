import Image from "next/image";
import React from "react";

function ToolsAlreadyUse() {
	return (
		<div>
			<div className="max-w-[980px] mx-auto mt-[100px] md:mt-[140px] mb-[60px]">
				<h2 className="text-neutral-950 text-center">Works Seamlessly with the Tools You Already Use</h2>
				<p className="text-neutral-700 pt-3 text-[18px] text-center">
					Get more first-timers, repeat players, and corporate groups—without lifting a finger.
				</p>
			</div>
			<div className="max-w-[1310px]  mx-auto grid xs:grid-cols-2 gap-y-2.5 sm:gap-y-[30px] gap-x-2.5 sm:gap-x-5">
				{[...Array(6)].map((_, i) => (
					<div
						key={i}
						
						className="group flex items-center gap-2.5 md:gap-5 max-w-[590px] bg-[#0D1116] rounded-[10px] px-2.5 md:px-5 py-[15px]"
					>
						<div className="relative flex-none">
							<Image src={`/navbar/audit.svg`} alt="" height={50} width={50} className="group-hover:scale-105 duration-500 relative z-10" />
							<div className="h-[30px] w-[30px] bg-primary-500 blur-[15px] absolute top-[50%] translate-y-[-45%] opacity-0 group-hover:opacity-100 duration-500 "></div>
						</div>
						<p className="group-hover:text-primary-500 text-neutral-200 duration-500 font-semibold flex text-[16px] sm:text-[20px] md:text-[24px] ">Must Have Audit Reports</p>
					</div>
				))}
			</div>
		</div>
	);
}

export default ToolsAlreadyUse;
