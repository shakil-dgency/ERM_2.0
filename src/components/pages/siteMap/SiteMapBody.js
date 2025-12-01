"use client";
import Link from "next/link";
import React from "react";
import SiteMapService from "./SiteMapService";
import SiteMapDailyDigest from "./SiteMapDailyDigest";

function SiteMapBody({ caseStudy, worksData, blogData, directoryData, locationData, digestData }) {
	return (
		<div className="mt-0">
			<div className="">
				<div className="pb-20">
					<h1 className="text-[48px] font-[700] pt-32 pb-10 text-neutral-50">Site Map</h1>
					<ul className="flex flex-col gap-5 text-[22px] text-neutral-200 list-inside list-disc font-[600]">
						<li>
							<Link href={"/"}>Home</Link>
						</li>
						<div className="">
							<li>
								<Link href={"/services"}>Services</Link>
							</li>
							<div className="ml-14 mt-3 list-none text-[20px] leading-[1.5] flex flex-col gap-3 font-[500]">
								<SiteMapService />
							</div>
						</div>
						<li>
							<Link href={"/bookingmax"}>BookingMAX</Link>
						</li>
						<li>
							<Link href={"/testimonials"}>Testimonials</Link>
						</li>
						<div className="">
							<li>
								<Link href={"/works"}>Work</Link>
							</li>
							<div className="ml-14 mt-3 list-none text-[20px] leading-[1.5] flex flex-col gap-3 font-[500]">
								{worksData &&
									worksData?.map((item, index) => {
										return (
											<li key={item.id}>
												<Link href={`/works/${item.slug}`}>{item.title}</Link>
											</li>
										);
									})}
							</div>
						</div>

						<div className="">
							<li>
								<Link href={`/case-studies`}>Case Study</Link>
							</li>
							<div className="ml-14 mt-3 list-none text-[20px] leading-[1.5] flex flex-col gap-3 font-[500]">
								{caseStudy &&
									caseStudy?.map((item, index) => {
										return (
											<li key={item.id}>
												<Link href={`/case-studies/${item.slug}`}>{item.headline}</Link>
											</li>
										);
									})}
							</div>
						</div>

						<div className="">
							<li>
								<Link href={`/blog`}>Blog</Link>
							</li>
							<div className="ml-14 mt-3 list-none text-[20px] leading-[1.5] flex flex-col gap-3 font-[500]">
								{blogData &&
									blogData?.map((item, index) => {
										return (
											<li key={item.id}>
												<Link href={`/blog/${item.slug}`}>{item.headline}</Link>
											</li>
										);
									})}
							</div>
						</div>

						<div className="">
							<li>
								<Link href={`/escape-rooms`}>Escape Room Directory</Link>
							</li>
							<div className="ml-14 mt-3 list-none text-[20px] leading-[1.5] flex flex-col gap-3 font-[500]">
								{directoryData &&
									directoryData?.map((item, index) => {
										return (
											<li key={item.id}>
												<Link href={`/escape-rooms/${item.slug}`}>{item.city_name}</Link>
											</li>
										);
									})}
							</div>
						</div>

						<li>
							<Link href={`/about`}>About</Link>
						</li>
						<li>
							<Link href={`/team`}>Team</Link>
						</li>
						<li>
							<Link href={`/faqs`}>FAQs</Link>
						</li>
						<li>
							<Link href={`/partner-program`}>Partner Program</Link>
						</li>

						<li>
							<Link href={`/demo-call`}>Book a Demo</Link>
						</li>
						<li>
							<Link href={`/client-call`}>Exclusive Client Call</Link>
						</li>
						<li>
							<Link href={`/contact`}>Contact Us</Link>
						</li>

						<li>
							<Link href={"/free-marketing"}>Free Marketing Plan</Link>
						</li>
						<div className="">
							<li>
								<span>Location</span>
							</li>
							<div className="ml-14 mt-3 list-none text-[20px] leading-[1.5] flex flex-col gap-3 font-[500]">
								{locationData &&
									locationData?.map((item, index) => {
										return (
											<li key={item.id}>
												<Link href={`/location/${item.slug}`}>{item.location_name}</Link>
											</li>
										);
									})}
							</div>
						</div>
						<li>
							<Link href={"/terms-of-service"}>Terms of Service</Link>
						</li>
						<li>
							<Link href={"/privacy-policy"}> Privacy Policy</Link>
						</li>
						<div className="">
							<li>
								<Link href={`/daily-digest`}>Daily Digest</Link>
							</li>
							<div className="ml-14 mt-3 list-none text-[20px] leading-[1.5] flex flex-col gap-3 font-[500]">
								<SiteMapDailyDigest feedData={digestData} />
							</div>
						</div>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default SiteMapBody;
