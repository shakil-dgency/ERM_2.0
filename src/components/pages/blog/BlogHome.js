/* eslint-disable react/no-unescaped-entities */
import BlogCard from "@/components/global/BlogCard";
import Container from "@/components/ui/Container";
import React from "react";

function BlogHome() {
	return (
		<div>
			<div className="hero bg-secondary-900">
				<div className="pt-[150px] lg:pt-[220px] pb-[100px] lg:pb-[140px] px-2.5 flex flex-col items-center justify-center">
					<p className="highlighted_text">Let's Connect</p>
					<h1 className="text-neutral-50 text-[24px] sm:text-[54px] font-[700] text-center">Marketing Updates and Insights</h1>
					<p className="text-[14px] sm:text-[16px] text-neutral-300 text-center">
						Get more first-timers, repeat players, and corporate groups—without lifting a finger.
					</p>
				</div>
			</div>
			<div className="pt-[60px] pb-[150px] bg-[url('/pages/home/papertexture.png')] bg-repeat">
				<Container>
					<h2 className="text-[40px] font-[700] text-neutral-950">Latest Blogs</h2>
					<div
						className="overflow-x-scroll lg:overflow-hidden flex gap-10 lg:gap-[70px] mt-[30px] mb-[50px] lg:mb-[100px] border-b-[1px] border-primary-500 pb-[10px]"
						style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
					>
						{[...Array(6)].map((_, index) => (
							<span key={index}>Marketing</span>
						))}
					</div>
					<div className="grid grid-cols-1 sm:grid-cols-2 gap-[30px]">
						{[...Array(6)].map((_, index) => (
							<BlogCard key={index} />
						))}
					</div>
					<div className="flex justify-center mt-[50px]">
						<button className="flex items-center gap-2 border-[1px] border-primary-500 text-[#161A1E] text-[16px] font-[700] py-2 px-4 rounded">
							<span>Load More</span>{" "}
							<span className="pt-[2px]">
								<svg xmlns="http://www.w3.org/2000/svg" width="11" height="8" viewBox="0 0 11 8" fill="none">
									<path
										d="M6.42859 7.03312L10.2313 1.47851C10.407 1.22198 10.5 0.963519 10.5 0.748684C10.5 0.333343 10.1667 0.076416 9.60869 0.076416L1.39002 0.0764156C0.832694 0.0764156 0.5 0.333019 0.5 0.747389C0.5 0.962547 0.59309 1.21688 0.769312 1.47397L4.5719 7.03117C4.81684 7.38856 5.14646 7.58647 5.50045 7.58647C5.85419 7.58655 6.18372 7.3909 6.42859 7.03312Z"
										fill="#161A1E"
									/>
								</svg>
							</span>
						</button>
					</div>
				</Container>
			</div>
		</div>
	);
}

export default BlogHome;
