import React from "react";

function HeroText({data}) {
	return (
		<div className="max-w-[1150px] mx-auto px-2.5 flex flex-col items-center justify-center relative z-20">
			<p className="highlighted_text">
				{data?.eyebrow_headline}
			</p>
			<h1 className="text-neutral-50 text-[clamp(40px,10vw,96px)] font-[700] leading-[1.2] text-center">{data?.headline}</h1>
			<p className="text-[14px] sm:text-[24px] text-neutral-300 text-center mt-3">{data?.description}</p>
			<button className="bg-red-600 hover:bg-red-700 text-white font-semibold mt-[55px] px-6 py-3 rounded flex items-center justify-center gap-2 mx-auto">
				<span>🔒</span> UNLOCK MARKETING PLAN
			</button>
		</div>
	);
}

export default HeroText;
