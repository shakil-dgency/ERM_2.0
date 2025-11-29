import LazyLoadingVideo from "@/components/global/LazyLoadingVideo";
import VideoPopUp from "@/components/global/VideoPopUp";
import StrokeButton from "@/components/ui/buttons/StrokeButton";
import Image from "next/image";
import Link from "next/link";
const image = "/pages/caseStudies/casestudy.png";

function CaseCard({ data, onOpenPopup }) {
	const handleOpen = () => onOpenPopup(data?.video_url);


	

	const handleFeedbackMessage = (message) => {
		const text = message?.replace(/<[^>]*>/g, "").trim();

		return message ? text.slice(0, 130) + "..." : "";
	};
	return (
		<div className="m-2.5">
			<div style={{backgroundImage: `url(${data?.video_url ? "" :process.env.NEXT_PUBLIC_API_URL + data?.main_image?.url})`}} className="relative shadow-[0px_0px_10px_#ff492c40] bg-no-repeat bg-cover w-full max-w-full mx-auto h-[600px] lg:h-[450px] xl:h-[inherit] xl:aspect-[1316/700] flex flex-col justify-end px-[20px] lg:px-[50px] py-[40px] lg:py-[50px]  rounded-[0.9rem] bg-center overflow-hidden">
				<div className="relative z-20 flex flex-col lg:flex-row items-end gap-[30px] lg:gap-[15px]">
					<div className="flex-2/3">
						<Link href={`/case-studies/${data?.slug}`} className="text-neutral-50 text-[18px] lg:text-[24px] xl:text-[32px] font-[600] leading-[1.4] ">
							{data?.headline}
						</Link>
						<div
							className="feedback_cut pt-[25px] md:pt-[35px] text-neutral-300 text-[14px] xl:text-[16px] pb-[10px] leading-[1.5] italic"
							dangerouslySetInnerHTML={{ __html: handleFeedbackMessage(data?.client_feedback?.feedback) }}
						/>

						<p className="text-neutral-500 text-[14px] font-[600]">
							{data?.client_feedback?.name} – {data?.client_feedback?.designation}
						</p>
					</div>
					<div className="w-full flex gap-5 justify-between lg:justify-end items-center flex-1/3">
						<StrokeButton url={`/case-studies/${data?.slug}`} small={true} right_icon="/icons/Right_Arrow.svg" text="See Details" />
						{data?.video_url && (
							<div onClick={handleOpen}>
								<Image src="/pages/caseStudies/play.svg" alt="" height={40} width={40} className="h-[44px] w-auto cursor-pointer" />
							</div>
						)}
					</div>
				</div>
				<div className=" absolute top-[40px] z-20">
					<p className="text-[48px] lg:text-[66px] xl:text-[96px] font-[500] lg:font-[800] text-neutral-50 leading-[1]">{data?.state_1}</p>
					<p className="text-[14px] xl:text-[16px] font-[600] text-neutral-50 ">{data?.state_description1}</p>
				</div>
				<div className="absolute inset-0 left-[1px]">
					{data?.video_url ? <LazyLoadingVideo key={data?.id} video_url={data?.video_url} /> : <div></div>}
				</div>
				<div className="absolute inset-0 z-10  bg-[radial-gradient(70.2%_75.2%_at_87.31%_3.59%,rgba(13,17,22,0.05)_0%,rgba(13,17,22,0.70)_54.31%,rgba(13,17,22,0.85)_77.7%,rgba(13,17,22,0.95)_100%)]"></div>
			</div>
		</div>
	);
}

export default CaseCard;
