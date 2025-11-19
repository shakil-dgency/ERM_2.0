
import HeroText from "@/components/ui/HeroText";
import React from "react";

function Hero({ data}) {
	return (
		<div
			style={{
				background: `linear-gradient(0deg, rgba(8, 11, 15, 0.80) 0%, rgba(8, 11, 15, 0.80) 100%), url(${
					data?.background_image ? process.env.NEXT_PUBLIC_API_URL + data?.background_image?.url : "/"
				}) lightgray no-repeat`,
				backgroundSize: "cover",
				backgroundPosition: "center",
				width: "100%",
			}}
			className={`h-screen pt-[140px] pb-[140px] flex items-center`}
		>
			<HeroText data={data?.hero_text} />
		</div>
	);
}

export default Hero;
