import React from "react";
import Tools from "../home/comparisonSection/Tools";

function Letter() {
	return (
		<section className="bg-tertiary-50 min-h-screen ">
			<div className="max-w-[1182px] mx-auto px-2.5 pt-[100px] lg:pt-[200px] pb-[100px] w-full relative  text-neutral-700 font-[500] leading-[1.3]">
				{/* Updated date */}
				<p className="mb-[30px] lg:mb-[70px]">
					<span
						style={{
							background: "linear-gradient(180deg, rgba(255, 247, 225, 1) 50%, #ff9f99 100%)",
						}}
						className="text-[20px] lg:text-[24px] font-bold "
					>
						Updated: 18th of Aug, 2025
					</span>
				</p>

				{/* Heading */}
				<p className=" font-semibold text-neutral-950 mb-[35px] text-[20px] lg:text-[32px]">Dear Escape Room Owner,</p>

				{/* Intro */}
				<div className="space-y-[20px] lg:space-y-[40px] relative text-[18px] lg:text-[32px]">
					<p className="  ">We see you.</p>
					<p className="  ">You didn’t build an escape room just to stress over traffic, bookings, or broken marketing promises.</p>
					<p className="">
						<span className="bg-gradient-to-b from-[#F2C5BE] to-[#FFAEA1]">You built it to bring joy. Mystery. Adventure.</span>
					</p>
					<p className="  ">
						To see strangers high-five after cracking your toughest puzzle. To watch families finally put their phones down and actually connect.
					</p>
					<p className="  ">But lately?</p>
					<p className="">
						<span className="bg-gradient-to-b from-[#F2C5BE] to-[#FFAEA1]">
							You’re stuck wondering why the bookings aren’t flowing like they used to.
						</span>
					</p>
					<p className="  ">Why your calendar looks like a ghost town on weekdays. Why your ads feel more like donations than investments.</p>
					<p className="  ">
						And in the middle of it all... you’re wearing 27 hats. Writing emails.
						<span className="font-semibold">Updating your website.</span>
					</p>

					{/* Social + SEO block */}
					<p className="  ">Posting on Instagram (because someone on Reddit said “you should”).</p>
					<ul className="ml-6 space-y-[20px] lg:space-y-[40px]">
						{[1, 2, 3, 4].map((n) => (
							<li key={n} className="flex items-center  ">
								<span className="w-3 h-3 rounded-full bg-[#FFB690] inline-block mr-2" />
								Checking SEO rankings.
							</li>
						))}
					</ul>
					<p className="  ">Trying to figure out if TikTok is worth it, even though you’d rather wrestle a live alligator.</p>
					<p className="  ">Your passion project is turning into a full-time puzzle—without clues.</p>
					<p className=" ">And no, there’s no timer on the wall telling you how much longer you can keep winging it.</p>
					<p className="   font-semibold">Look, you’re not alone.</p>
					<p className="  ">
						Every escape room owner we work with has felt this same pressure. The weight of doing everything. Being everywhere. And still not getting
						fully booked.
					</p>

					{/* Main hook/repeat */}
					<p className="font-semibold text-gray-900 ">But here’s the thing:</p>
					<p className=" ">Your passion project is turning into a full-time puzzle—without clues.</p>
					<p className="  ">And no, there’s no timer on the wall telling you how much longer you can keep winging it.</p>
					<p className="   font-semibold">Look, you’re not alone.</p>
					<p className=" select-none ">
						Every escape room owner we work with has felt this same pressure.
						<br />
						The weight of doing everything. Being everywhere. And still not getting fully booked.
					</p>
					<div
						style={{
							background: "linear-gradient(0deg, rgba(255, 247, 225) 0%, #FFF7E190 28.65%, #FFF7E170 56.96%, rgba(255, 247, 225, 0.00) 100%)",
						}}
						className={` pointer-events-none absolute bottom-0 left-0 right-0 h-[150px] `}
					/>
				</div>

				{/* Read more button */}
				<div className="flex justify-center mt-4">
					<button className="text-[18px] px-[35px] py-[20px] border border-primary-600 rounded-[5px] text-neutral-950 font-[700] leading-[1]">
						Read More
					</button>
				</div>
			</div>
			{/* <div className="bg-[url('/pages/home/papertexture.png')] bg-repeat relative">
				<div
					style={{
						background: "linear-gradient(180deg, rgba(255, 247, 225) 0%, #FFF7E195 28.65%, #FFF7E170 56.96%, rgba(255, 247, 225, 0.00) 100%)",
					}}
					className={` pointer-events-none absolute top-0 left-0 right-0 h-[70px] `}
				/>
				<Tools />
			</div> */}
		</section>
	);
}

export default Letter;
