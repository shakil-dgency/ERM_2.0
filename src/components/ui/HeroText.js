import React from "react";
import HeroButton from "./buttons/HeroButton";

function HeroText({data}) {
	return (
		<div className="max-w-[1060px] mx-auto px-2.5 flex flex-col items-center justify-center relative z-20">
			<p className="highlighted_text">
				{data?.eyebrow_headline}
			</p>
			<h1 className="text-neutral-50 text-[clamp(40px,10vw,90px)] font-[700] leading-[1.2] text-center">{data?.headline}</h1>
			<p className="text-[14px] sm:text-[24px] text-neutral-300 text-center mb-[50px] mt-3">{data?.description}</p>
			<HeroButton text={data?.button_text} />
		</div>
	);
}

export default HeroText;
