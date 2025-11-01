import Image from "next/image";
import React from "react";

function Testimonial({ data, top_color, bottom_color }) {
	return (
		<div className="mt-[50px]">
			<h2 className="!text-[20px] lg:!text-[36px]">{data?.title}</h2>
			<p className="text-[20px] mt-4 mb-[100px] text-neutral-800">{data?.description}</p>

			<div className=" bg-secondary-950 bg-[url('/pages/home/bookingMaxBg.png')] bg-repeat bg-[length:240px_240px] rounded-[20px] relative">
				<div className="overflow-hidden relative py-[90px] px-[45px] rounded-[20px]">
					{/* Glow Backgrounds */}
					<div style={{background:top_color}} className="glow_backgroun absolute -left-40 top-[-50px] w-[300px] h-[300px] rounded-full blur-[200px] " />
					<div style={{background:bottom_color}} className="glow_backgroun absolute -right-40 bottom-[-50px] w-[300px] h-[300px] rounded-full blur-[200px]" />
					<div className="flex items-center gap-5 mb-[35px] relative z-10">
						<Image
							src={`${data?.image ? process.env.NEXT_PUBLIC_API_URL + data?.image.url : "/"}`}
							alt="Client Feedback"
							width={110}
							height={110}
							className=" h-[110px] w-[110px] object-cover object-center rounded-full"
						/>
						<div>
							<p className="text-[20px] font-[600] text-neutral-100">{data?.name}</p>
							<p className="text-[16px] text-neutral-300">{data?.designation} </p>
							<div className="flex gap-2.5 mt-2">
								{[...Array(5)].map((_, i) => (
									<svg key={i} xmlns="http://www.w3.org/2000/svg" width="18" height="17" viewBox="0 0 19 19" fill="none">
										<path
											d="M18.459 7.39258L12.5051 6.52705L9.84134 1.13138C9.68544 0.816884 9.16666 0.816884 9.01344 1.13138L6.34876 6.52705L0.39578 7.39258C0.221957 7.41856 0.0759106 7.54042 0.023047 7.70797C-0.0316086 7.87552 0.0122951 8.0583 0.140422 8.18016L4.44746 12.3797L3.43141 18.3112C3.40005 18.485 3.47172 18.6597 3.61419 18.7618C3.75665 18.8658 3.94571 18.8792 4.10161 18.7977L9.4265 15.9977L14.7523 18.7977C14.8186 18.8335 14.8921 18.8505 14.9673 18.8505C15.0623 18.8505 15.1573 18.821 15.2388 18.7618C15.3795 18.6597 15.4503 18.485 15.4198 18.3112L14.4037 12.3797L18.7126 8.18016C18.8407 8.0583 18.8837 7.87462 18.8317 7.70797C18.7771 7.54042 18.6337 7.41856 18.459 7.39258Z"
											fill="#E38C00"
										/>
									</svg>
								))}
							</div>
						</div>
					</div>
					<p className="text-[32px] font-[600] text-neutral-100 z-10 relative">{data?.headline}</p>
					<div className="text-[16px] mt-2 mb-6 italic text-neutral-200 z-10 relative">
						<div dangerouslySetInnerHTML={{ __html: data?.feedback ? data?.feedback : "" }} />
					</div>

					{data?.video_link && (
						<button className="px-[35px] py-[15px] mt-2.5 bg-primary-600 rounded-[6px] text-neutral-50 text-[18px] font-[700]">
							<Image src="/pages/caseStudies/play_btn.svg" alt="Play Button" width={20} height={20} className="inline-block mr-2.5" />
							<span>Watch Video</span>
						</button>
					)}
				</div>
				<Image src="/pages/caseStudies/icon.svg" alt="Client Feedback" width={110} height={95} className="absolute bottom-[-47px] right-6 rotate-180" />
				<Image src="/pages/caseStudies/icon.svg" alt="Client Feedback" width={110} height={95} className="absolute top-[-47px] left-6 " />
			</div>
		</div>
	);
}

export default Testimonial;
