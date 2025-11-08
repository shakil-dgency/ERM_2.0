/* eslint-disable react/no-unescaped-entities */
import Container from "@/components/ui/Container";
import React from "react";

function Banner({ data }) {

	return (
		<div className="bg-secondary-900">
			<div
				style={{ backgroundImage: data?.background_image && `url(${process.env.NEXT_PUBLIC_API_URL}${data.background_image.url})` }}
				className="bg-secondary-900 relative pt-[300px] pb-[50px] md:py-[100px] lg:py-[140px] px-2.5 bg-no-repeat bg-center bg-cover "
			>
				<Container>
					<div className=" relative z-20 hidden md:block">
						<div className="max-w-[650px]">
							<p className="highlighted_text mb-[15px]">{data?.eyebrow_headline}</p>
							<h2 className="max-w-[1222px] text-neutral-50">{data?.headline}</h2>
							<p className="text-[18px] md:text-[32px] font-[500] text-neutral-300 mt-4 md:mt-[30px]">{data?.description}</p>
							<button className="mt-[40px] md:mt-[100px] bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded flex items-center justify-center gap-2 ">
								<span>🔒</span> UNLOCK MARKETING PLAN
							</button>
						</div>
					</div>
				</Container>
				<div className="absolute inset-0 z-10 bg-[radial-gradient(242.88%_109.11%_at_96.43%_9.37%,rgba(13,17,22,0)_43.96%,rgba(13,17,22,0.9)_60.06%,rgba(13,17,22,0.98)_99.64%)] md:bg-[radial-gradient(102.88%_85.11%_at_96.43%_9.37%,rgba(13,17,22,0)_43.96%,rgba(13,17,22,0.9)_60.06%,rgba(13,17,22,0.98)_99.64%)] md:mix-blend-multiply"></div>
			</div>
			<div className=" relative z-20 md:hidden pb-[60px] pt-[40px] px-2.5">
				<div className="max-w-[650px]">
					<p className="highlighted_text mb-[15px]">{data?.eyebrow_headline}</p>
					<h2 className="max-w-[1222px] text-neutral-50">{data?.headline}</h2>
					<p className="text-[18px] md:text-[32px] font-[500] text-neutral-300 mt-4 md:mt-[30px]">{data?.description}</p>
					<button className="mt-[40px] md:mt-[100px] bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded flex items-center justify-center gap-2 ">
						<span>🔒</span> UNLOCK MARKETING PLAN
					</button>
				</div>
			</div>
		</div>
	);
}

export default Banner;
