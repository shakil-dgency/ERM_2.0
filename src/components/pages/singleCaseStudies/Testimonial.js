"use client";
import FillButton from "@/components/ui/buttons/FillButton";
import Image from "next/image";
import React from "react";

function Testimonial({ data, onOpenPopup, text_light }) {
	const handleOpen = () => onOpenPopup(data?.video_link);
	return (
		<div className="mt-[100px] lg:mt-[50px] ">
			{data?.title && <h2 className={` ${text_light ? "text-neutral-50" : "text-neutral-950"} `}>{data?.title}</h2>}
			{data?.description && (
				<p className={`text-[16px] lg:text-[20px] mt-4 mb-[100px] ${text_light ? "text-neutral-500" : "text-neutral-800"}`}>{data?.description}</p>
			)}

			<div
				className=" bg-secondary-950 shadow-[0px_0px_10px_#ff492c50] lg:shadow-[0px] hover:shadow-[0px_0px_10px_#ff492c50] duration-300 bg-[url('/pages/home/bookingMaxBg.png')] bg-repeat bg-[length:240px_240px] rounded-[20px] relative"
				itemScope
				itemType="https://schema.org/Review"
			>
				<div className="overflow-hidden relative py-[60px] md:py-[90px] px-[15px] md:px-[45px] rounded-[20px]">
					{/* Glow Backgrounds */}
					<div
						style={{ background: data?.testimonial_glow_top }}
						className="glow_backgroun absolute -left-40 top-[-50px] w-[300px] h-[300px] rounded-full blur-[200px] "
					/>
					<div
						style={{ background: data?.testimonial_glow_bottom }}
						className="glow_backgroun absolute -right-40 bottom-[-50px] w-[300px] h-[300px] rounded-full blur-[200px]"
					/>
					<div className="flex items-center gap-3 xs:gap-5 mb-[35px] relative z-10" itemProp="author" itemScope itemType="https://schema.org/Person">
						<Image
							src={`${data?.image ? process.env.NEXT_PUBLIC_API_URL + data?.image.url : "/"}`}
							alt="Client Feedback"
							width={110}
							height={110}
							quality={80}
							className=" h-[80px] w-[80px] sm:h-[110px] sm:w-[110px] object-cover object-center rounded-full"
						/>
						<div>
							<p className=" text-[16px] lg:text-[20px] font-[600] text-neutral-100" itemProp="name">
								{data?.name}
							</p>
							<p className="text-[12px] lg:text-[16px] text-neutral-300" itemProp="jobTitle">
								{data?.designation}{" "}
							</p>
							<div className="flex gap-2.5 mt-2">
								{[...Array(5)].map((_, i) => (
									<svg
										key={i}
										xmlns="http://www.w3.org/2000/svg"
										width="18"
										height="17"
										className="h-[14px] lg:h-[17px] w-[15px] lg:w-[18px]"
										viewBox="0 0 19 19"
										fill="none"
									>
										<path
											d="M18.459 7.39258L12.5051 6.52705L9.84134 1.13138C9.68544 0.816884 9.16666 0.816884 9.01344 1.13138L6.34876 6.52705L0.39578 7.39258C0.221957 7.41856 0.0759106 7.54042 0.023047 7.70797C-0.0316086 7.87552 0.0122951 8.0583 0.140422 8.18016L4.44746 12.3797L3.43141 18.3112C3.40005 18.485 3.47172 18.6597 3.61419 18.7618C3.75665 18.8658 3.94571 18.8792 4.10161 18.7977L9.4265 15.9977L14.7523 18.7977C14.8186 18.8335 14.8921 18.8505 14.9673 18.8505C15.0623 18.8505 15.1573 18.821 15.2388 18.7618C15.3795 18.6597 15.4503 18.485 15.4198 18.3112L14.4037 12.3797L18.7126 8.18016C18.8407 8.0583 18.8837 7.87462 18.8317 7.70797C18.7771 7.54042 18.6337 7.41856 18.459 7.39258Z"
											fill="#E38C00"
										/>
									</svg>
								))}
								<div itemProp="reviewRating" itemScope itemType="https://schema.org/Rating">
									<meta itemProp="ratingValue" content="5" />
									<meta itemProp="bestRating" content="5" />
									<meta itemProp="worstRating" content="1" />
								</div>
							</div>
						</div>
					</div>
					<p className="text-[22px] lg:text-[28px] font-[700] text-neutral-100 z-10 relative">{data?.headline}</p>
					<div className="text-[14px] lg:text-[16px] mt-2 mb-6 italic text-neutral-300 z-10 relative leading-[1.6]" itemProp="reviewBody">
						<div dangerouslySetInnerHTML={{ __html: data?.feedback ? data?.feedback : "" }} />
					</div>

					{data?.video_link && (
						<div className="flex">
							<FillButton text="Watch Video" handleClick={handleOpen} left_icon={"/pages/caseStudies/play_btn.svg"} />
						</div>
					)}
				</div>
				<Image
					src="/pages/caseStudies/icon.svg"
					alt="Client Feedback"
					width={110}
					height={95}
					className="absolute bottom-[-30px] md:bottom-[-47px] right-6 rotate-180 h-[65px] md:h-[95px] w-[70px] md:w-[110px]"
				/>
				<Image
					src="/pages/caseStudies/icon.svg"
					alt="Client Feedback"
					width={110}
					height={95}
					className="absolute top-[-30px] md:top-[-47px] left-6 h-[65px] md:h-[95px] w-[70px] md:w-[110px]"
				/>
			</div>
			{/*  GOOGLE REVIEW SCHEMA ADDED HERE FOR BETTER SEO */}
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(
						{
							"@context": "https://schema.org",
							"@type": "Review",
							author: {
								"@type": "Person",
								name: data?.name || "",
							},
							reviewBody: data?.feedback || "",
							reviewRating: {
								"@type": "Rating",
								ratingValue: "5",
								bestRating: "5",
							},
							itemReviewed: {
								"@type": "Organization",
								name: "Escape Room Marketer",
							},
						},
						null,
						2
					),
				}}
			/>
		</div>
	);
}

export default Testimonial;
