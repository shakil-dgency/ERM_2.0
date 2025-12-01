import React from "react";
import HeroButton from "./buttons/HeroButton";

function HeroText({data,btnText}) {
	return (
		<div className="max-w-[1060px] mx-auto px-2.5 flex flex-col items-center justify-center relative z-20">
			<h1 className="highlighted_text text-center mb-3 md:mb-0">
				{data?.eyebrow_headline}
			</h1>
			<p className="text-neutral-50 text-[clamp(40px,10vw,90px)] font-[700] leading-[1.2] text-center">{data?.headline}</p>
			<p className="max-w-[880px] mx-auto text-[16px] md:text-[20px] text-neutral-300 text-center mb-[50px] mt-3">{data?.description}</p>
			<HeroButton text={btnText} />
		</div>
	);
}

export default HeroText;
