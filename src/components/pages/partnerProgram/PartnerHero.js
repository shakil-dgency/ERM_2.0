import Image from "next/image";
import React from "react";
import ButtonMain from "./ButtonMain";

function PartnerHero({ data, stat }) {
	return (
		<div
			style={{
				backgroundImage: `linear-gradient(0deg, rgba(8, 11, 15, 0.80) 0%, rgba(8, 11, 15, 0.80) 100%), url(${
					data?.background_image ? process.env.NEXT_PUBLIC_API_URL + data?.background_image?.url : "/"
				}) `,
				
			}}
			className="  bg-secondary-900 bg-cover bg-no-repeat bg-center"
		>
			<div className=" text-center ">
				<div className="max-w-[1060px] mx-auto px-2.5 pt-14 md:pt-20 pb-20 md:pb-28">
					<div className="pt-10 md:pt-20 pb-[35px] md:pb-[60px] ">
						<p className="highlighted_text">{data?.hero_text?.eyebrow_headline}</p>
						<h1 className="text-neutral-50 text-[clamp(40px,10vw,90px)] font-[700] leading-[1.2] text-center">{data?.hero_text?.headline}</h1>
						<p className="max-w-[880px] mx-auto text-[16px] sm:text-[20px] text-neutral-300 text-center  mt-3">{data?.hero_text?.description}</p>
					</div>

					<ButtonMain text={data?.button_text} />
				</div>
			</div>

			<div className="max-w-[1024px] mx-2.5 lg:mx-auto mt-8 bg-secondary-800 px-[14px] py-[16px] shadow-md rounded-md relative z-30 flex flex-row justify-around  -mb-[60px]">
				{stat?.map((item, i) => (
					<div key={i} className={`${i !== stat.length - 1 ? "border-r-[1px] border-neutral-800 " : ""} w-full`}>
						<div>
							<p className="text-neutral-50 text-center text-[20px] md:text-[36px] font-[700]">{item?.value}</p>
							<p className="text-[12px] md:text-[16px] text-center text-neutral-300">{item?.short_description}</p>
						</div>
					</div>
				))}
				
			</div>
		</div>
	);
}

export default PartnerHero;
