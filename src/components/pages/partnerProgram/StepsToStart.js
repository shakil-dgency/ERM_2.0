import Container from "@/components/ui/Container";
import Image from "next/image";
import React from "react";

const StepsCard = ({index, item}) => {
	return (
		<div className={`${index % 2 !== 0 ?"lg:mt-[60px]":"lg:mb-[60px]"} w-full text-center sm:text-start flex flex-col items-center sm:items-start max-w-full sm:max-w-[378px] px-4 py-10 md:px-7 md:py-7 rounded-[10px] bg-[radial-gradient(137.98%_137.98%_at_100%_2.3%,_var(--Colors-Secondary-500,_#35414D)_0%,_rgba(24,30,37,0.50)_52.58%,_rgba(24,30,37,0.00)_100%)] hover:bg-[radial-gradient(137.98%_137.98%_at_100%_2.3%,_rgba(204,55,34,0.40)_0%,_rgba(24,30,37,0.50)_52.58%,_rgba(24,30,37,0.00)_100%)] duration-500`}>
			<Image src={item?.icon ? process.env.NEXT_PUBLIC_API_URL + item?.icon.url : "/"} alt="Steps" width={52} height={80} />
			<p className="text-neutral-50 text-[20px] md:text-[24px] font-[600] mt-6 mb-2.5">{item?.title}</p>
			<p className="text-neutral-300 text-[14px] md:text-[16px] font-[400]">
				{item?.description}
			</p>
		</div>
	);
};

function StepsToStart({data}) {
	return (
		<div className="bg-secondary-900 pt-[130px] sm:pt-[195px] pb-[90px]">
			<Container>
				<div className="max-w-[800px] mb-[60px] sm:mb-[110px] text-center sm:text-start">
					<h2 className="text-neutral-50 ">{data?.headline}</h2>
					<p className="text-neutral-300 pt-4 md:text-[18px]">
						{data?.description}
					</p>
				</div>
				<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 justify-items-center">
					{data?.cards?.map((item, i) => (
						<StepsCard key={i} index={i} item={item} />
					))}
				</div>
			</Container>
		</div>
	);
}

export default StepsToStart;
