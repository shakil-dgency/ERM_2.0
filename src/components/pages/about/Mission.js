
/* eslint-disable react/no-unescaped-entities */
import UnderlineHeadline from "@/components/ui/UnderlineHeadline";
import Image from "next/image";
import React from "react";
import styles from "@/styles/mission.module.css"

function Mission({ data,rotate }) {

	console.log(data?.image?.url);
	
	return (
		<div className={` ${rotate? "lg:flex-row-reverse":"lg:flex-row"} flex flex-col gap-[40px] lg:gap-[60px] relative z-10`}>
			<div className="bg-secondary-800 flex-1 rounded-[20px] h-full w-full">
				<Image src={ data?.image ? process.env.NEXT_PUBLIC_API_URL + data?.image?.url : "/"} alt="Mission" width={757} height={755} className="w-full aspect-[757/455] lg:aspect-[757/755] object-cover rounded-[20px]" />
			</div>
			<div className="flex-1">
				<p className="highlighted_text">{data?.Eyebrow_headline}</p>
				<UnderlineHeadline text={data?.headline} />
				<div className={`mt-[25px] ${styles.card_details}`} dangerouslySetInnerHTML={{__html: data ? data?.description : ""}} />
			</div>
		</div>
	);
}

export default Mission;
