import Container from "@/components/ui/Container";
import ServiceCard from "@/components/global/ServiceCard";
import LazyLoadingVideo from "@/components/global/LazyLoadingVideo";
import VideoStream from "@/components/global/VideoStream";
import ServiceCarusel from "./ServiceCarusel";
import UnderlineHeadline from "@/components/ui/UnderlineHeadline";
import StrokeButton from "@/components/ui/buttons/StrokeButton";
import FillButton from "@/components/ui/buttons/FillButton";
import BookingMaxLongCrad from "./BookingMaxLongCrad";

export default function BookingMax({ data, serviceData }) {
	// Split by the apostrophe
	const [before, highlightedWithQuotes] = data ? data?.headline.split("'") : [];

	// Remove extra quotes if any
	const highlighted = highlightedWithQuotes?.replace(/'/g, "");

	return (
		<section className=" min-h-screen overflow-x-hidden bg-[url('/pages/home/bookingMaxBg.png')] bg-repeat bg-[length:240px_240px] pb-[100px] lg:pb-[140px] ">
			<div className="relative py-[100px] md:py-[140px]">
				{/* Glow/Gradient Backgrounds */}
				<div className="glow_background absolute -left-40 top-[300px] w-[300px] h-[300px] rounded-full blur-[120px] bg-primary-500 " />
				<div className="glow_background absolute z-10 -right-40 bottom-0 w-[300px] h-[300px] rounded-full blur-[120px] bg-primary-500 " />
				{/* <div className="absolute right-0 bottom-0 w-96 h-80 bg-gradient-to-tl from-[#E04828] via-transparent to-transparent opacity-30 rounded-full blur-2xl pointer-events-none" /> */}

				{/* Title & Subheadline */}
				<div className=" px-2.5 flex flex-col items-center mb-[50px] md:mb-[80px] relative z-10">
					<h1 className="text-[clamp(50px,15.6vw,160px)]  font-[400] text-neutral-50 mb-1">
						{before}
						{highlighted && <span className="text-primary-500 font-bold">{highlighted}</span>}
					</h1>
					<UnderlineHeadline text={data?.description} text_light={true} text_center={true} />
				</div>
				<Container>
					{/* Hero Card */}
					<BookingMaxLongCrad data={data?.long_card} />

					{/* Features Cards */}
					<div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6 md:mt-[80px] ">
						{/* Card 1 */}
						{data?.other_card?.map((card, index) => (
							<div key={index} className="group relative rounded-2xl px-5 md:px-[32px] pb-[45px]  flex flex-col justify-end h-[525px] lg:h-[695px]">
								<span className="highlighted_text mb-1 absolute z-20 top-[30px] md:top-[48px]">{card?.tag}</span>
								<div className="relative z-20">
									<h3 className="text-neutral-50 font-[600] text-[20px] md:text-[24px] mb-[10px]">{card?.title}</h3>
									<p className="text-[14px] md:text-[16px] text-neutral-300 leading-[1.4]">{card?.short_description}</p>
								</div>
								<div className="absolute inset-0 z-0 ">
									<LazyLoadingVideo video_url={card?.video_url} />
								</div>
								<div className="absolute shadow-[0px_0px_10px_#ff492c50] top-0 left-0 h-[100.2%] w-full z-10 bg-gradient-to-t from-[#000000] to-[#00000049] group-hover:to-transparent duration-500 rounded-2xl "></div>
							</div>
						))}
					</div>
				</Container>
			</div>

			<ServiceCarusel data={serviceData} />
		</section>
	);
}
