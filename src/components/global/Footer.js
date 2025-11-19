"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import EmailSubscribe from "../ui/EmailSubscribe";
import { useSelector } from "react-redux";
import { BiChevronLeft } from "react-icons/bi";

function Footer() {
	const { service } = useSelector((state) => state.service);
	const [worksData, setWorksData] = useState(null);

	// fatching data for workes menu
	useEffect(() => {
		async function fetchWorks() {
			try {
				const res = await fetch("https://cms.escaperoommarketer.com/api/works?populate[0]=nav_icon");

				if (!res.ok) throw new Error("Failed to fetch");

				const json = await res.json();
				setWorksData(json.data);
			} catch (err) {
				console.error("Fetch error:", err);
			}
		}

		fetchWorks();
	}, []);

	return (
		<div className="bg-secondary-900 relative shadow-[0px_-40px_80px_#ff492c30] bg-[url('/footer/footer_bg.png')] bg-no-repeat bg-[length:100%_100%] ">
			<div className="max-w-[1584px] mx-auto px-2.5 ">
				<div className="flex justify-center pt-24 md:pt-28">
					<Image src="/logo.svg" alt="logo" height={100} width={200} className="" />
				</div>
				<div className="max-w-[970px] mx-auto text-center">
					<p className="mt-[40px] text-[18px] md:text-[32px] font-[600] text-neutral-300 uppercase">Escape Room Marketing Agency</p>
					<p className="mt-[8px] text-[14px] md:text-[18px] font-[400] text-neutral-400">
						Partnered with escape room brands across the United States, the United Kingdom, Europe, and beyond. We combine data-driven strategy,
						creative storytelling, and deep industry knowledge to help you attract more players, increase revenue, and grow with confidence.
					</p>
				</div>
				<div className=" pt-[50px] px-2.5 md:px-0">
					<EmailSubscribe />
				</div>

				<div className=" pt-[70px] border-b-[1px] border-secondary-800"></div>
				<div className="border-b-[1px] border-secondary-800 pb-16  fle sm:justify-center md:block ">
					<div className=" flex-content  pl-0 md:pl-0 pt-[30px] grid grid-cols-1 sm:grid-cols-[repeat(30,_minmax(0,_1fr))] sm:grid-row-8 gap-x-3  gap-y-5 xl:gap-y-0">
						<div className="location pt-4 sm:col-start-1 sm:col-end-[12] md:col-end-10 xl:col-end-7 sm:row-start-1 sm:row-end-2">
							<ul className="flex flex-col gap-4 ">
								<li>
									<p className="text-[16px] text-[#d9d9d9] font-semibold ">LOCATION</p>
								</li>

								<li className="">
									<Link href={"/google-ads"} className="text-[16px] cursor-pointer text-[#9a9a9a] font-[400] hover:text-[#ff492c]">
										United States
									</Link>{" "}
								</li>

								<li>
									<Link href={"/microsoft-ads"} className="text-[16px] cursor-pointer text-[#9a9a9a] font-[400] hover:text-[#ff492c]">
										Canada
									</Link>
								</li>

								<li className="">
									<Link href={"/seo"} className="text-[16px] cursor-pointer text-[#9a9a9a] font-[400] hover:text-[#ff492c]">
										United Kingdom
									</Link>{" "}
								</li>
								
							</ul>
						</div>

						<div className="agency pt-4 sm:col-start-[16] sm:col-end-[31] md:col-start-[10] md:col-end-[20] lg:col-start-9 lg:col-end-[16] xl:col-start-7 xl:col-end-[15] sm:row-start-1 sm:row-end-3">
							<ul className="flex flex-col gap-4 ">
								<li>
									<p className="text-[16px] text-[#d9d9d9] font-semibold ">OUR SERVICES</p>
								</li>
								

								{service?.map((item, i) => (
									<li className="" key={i}>
										<Link href={`${item?.slug}`} className="text-[16px] cursor-pointer text-[#9a9a9a] font-[400] hover:text-[#ff492c]">
											{item?.service_name}
										</Link>{" "}
									</li>
								))}
							</ul>
						</div>
						<div className="advertising lg:-ml-0 pt-4 sm:pt-12 md:pt-4 sm:col-start-[16] sm:col-end-[31] md:col-start-[20] md:col-end-[32] lg:col-start-[17] lg:col-end-[26] xl:col-start-[14] xl:col-end-[22] sm:row-start-3 sm:row-end-6 md:row-start-1 md:row-end-4 xl:row-start-[1] xl:row-end-[3]">
							<ul className="flex flex-col gap-4">
								<li>
									<p className="text-[16px] text-[#d9d9d9] font-semibold">CREATIVE WORKS</p>
								</li>

								{worksData?.slice(0, 7).map((item, i) => (
									<li className="" key={i}>
										<Link href={`${item?.slug}`} className="text-[16px] cursor-pointer text-[#9a9a9a] font-[400] hover:text-[#ff492c]">
											{item?.title}
										</Link>
									</li>
								))}
								<div className=" flex pb-6">
									<Link
										// onClick={backToPreviousPage}
										href="/works"
										className="text-neutral-500 hover:text-primary-500 text-center  font-semibold text-[12px] md:text-[14px] flex items-center underline underline-offset-4 "
									>
										All Works
									</Link>
								</div>
							</ul>
						</div>

						<div className="conversion  lg:-ml-0 pt-4 sm:col-start-[1] sm:col-end-[15] md:col-end-[12] xl:col-start-[22] xl:col-end-[28] sm:row-start-2 xl:row-start-[1] sm:row-end-[4]">
							<ul className="flex flex-col gap-4 ">
								<li>
									<p className=" text-[16px] text-[#d9d9d9] font-semibold">AGENCY</p>
								</li>

								<li className="flex ">
									<Link href={"/bookingmax"} className="text-[16px] cursor-pointer text-[#9a9a9a] font-[400] hover:text-[#ff492c]">
										BookingMAX
									</Link>
								</li>
								<li className="flex ">
									<Link href={"/about"} className="text-[16px] cursor-pointer text-[#9a9a9a] font-[400] hover:text-[#ff492c]">
										About
									</Link>
								</li>
								<li className="">
									<Link href={"/partner-program"} className="text-[16px] cursor-pointer text-[#9a9a9a] font-[400] hover:text-[#ff492c]">
										Partner Program
									</Link>
								</li>
								<li className="">
									<Link href={"/case-studies"} className="text-[16px] cursor-pointer text-[#9a9a9a] font-[400] hover:text-[#ff492c]">
										Case Studies
									</Link>
								</li>
								<li className="">
									<Link href={"/testimonials"} className="text-[16px] cursor-pointer text-[#9a9a9a] font-[400] hover:text-[#ff492c]">
										Testimonials
									</Link>
								</li>
								<li className="">
									<Link href={"/team"} className="text-[16px] cursor-pointer text-[#9a9a9a] font-[400] hover:text-[#ff492c]">
										Team
									</Link>
								</li>
								<li className="">
									<Link href={"/faqs"} className="text-[16px] cursor-pointer text-[#9a9a9a] font-[400] hover:text-[#ff492c]">
										FAQs
									</Link>
								</li>
								<li className="">
									<Link href={"/blog"} className="text-[16px] cursor-pointer text-[#9a9a9a] font-[400] hover:text-[#ff492c]">
										Blog
									</Link>
								</li>
							</ul>
						</div>
						<div className="seo  lg:-ml-0 pt-4 sm:col-start-1 sm:col-end-10 md:col-start-[10] md:col-end-[20] lg:col-start-[26] lg:col-end-[31] xl:col-start-[28] xl:col-end-[31] md:row-start-[3]  lg:row-start-[1] sm:row-end-[5] ">
							<ul className="flex flex-col gap-4 text-[#9a9a9a]">
								<li>
									<p className="text-[16px] text-[#d9d9d9] font-semibold">CONTACT</p>
								</li>

								<li className="">
									<Link href={"/client-call"} className="text-[16px] cursor-pointer text-[#9a9a9a] font-[400] hover:text-[#ff492c]">
										Exclusive Client Call
									</Link>{" "}
								</li>
								<li className="">
									<Link href={"/demo-call"} className="text-[16px] cursor-pointer text-[#9a9a9a] font-[400] hover:text-[#ff492c]">
										Book a Demo
									</Link>{" "}
								</li>
							</ul>
							<div className="conversion pt-[30px]">
								<div className="pt-4 flex flex-col gap-2 text-[#9a9a9a] font-[400]">
									<p className="text-[16px] text-[#d9d9d9] font-semibold">ADDRESS</p>
									<p className="text-[16px]">7711 Shadowcreek Terrace,</p>
									<p className="text-[16px]">Springfield, VA 22153</p>
									<p className="text-[16px]">United States</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="border-b-[1px] border-secondary-800 flex flex-col md:flex-row justify-center md:justify-between items-center py-8">
					<div className="flex gri grid-cols-3 justify-center flex-wrap gap-2 md:gap-4 pt-6 md:pt-0">
						<Image
							src="/footer/Escape-room-marketer-google-premier-partner-2024.png"
							alt="logo"
							height={50}
							width={400}
							style={{ filter: "grayscale(100)" }}
							className="h-[60px] w-[60px] object-contain shadow"
						/>
						<Image
							src="/footer/Escape-room-marketer-meta-business-partner-2022.png"
							alt="logo"
							height={50}
							width={400}
							style={{ filter: "grayscale(100)" }}
							className="h-[60px] w-[100px] object-contain shadow bg-white"
						/>
						<Image
							src="/footer/Escape-room-marketer-microsoft-elite-channel-partner-2024.svg"
							alt="logo"
							height={50}
							width={400}
							style={{ filter: "grayscale(100%)" }}
							className="h-[60px] w-[140px] object-contain shadow bg-white"
						/>
						{/* <Image
							src="/footer/digitalmarketer-logo.webp"
							alt="logo"
							height={50}
							width={200}
							className="h-[60px] w-[140px] object-contain shadow bg-white"
						/> */}
					</div>
					<div className="social_media">
						<p className="font-semibold text-base md:text-lg  text-center pt-9 md:pt-0 pb-2 text-[#d9d9d9]">CURRENTLY ACCEPTING FOLLOWERS</p>
						<div className="flex justify-center gap-3 pb-6 md:pb-0">
							<div className="cursor-pointer relative before:content-[''] before:absolute before:top-[0] before:right-0 before:bottom-[0] before:left-0 z-10 hover:before:bg-[#ffff] before:w-[40px] before:h-[40px] before:rounded-full before:opacity-20 before:bg-center">
								<Image
									src="/footer/social-icon-facebook-escape-room-marketer-01.svg"
									alt=""
									height={40}
									width={40}
									className="hover:fill-[#FF8081]  "
								/>
							</div>
							<div className="cursor-pointer relative before:content-[''] before:absolute before:top-[0] before:right-0 before:bottom-[0] before:left-0 z-10 hover:before:bg-[#ffff] before:w-[40px] before:h-[40px] before:rounded-full before:opacity-20 before:bg-center">
								<Image src="/footer/social-icon-linkedin-escape-room-marketer-01.svg" alt="" height={40} width={40} className="" />
							</div>
							<div className="cursor-pointer relative before:content-[''] before:absolute before:top-[0] before:right-0 before:bottom-[0] before:left-0 z-10 hover:before:bg-[#ffff] before:w-[40px] before:h-[40px] before:rounded-full before:opacity-20 before:bg-center">
								<Image
									src="/footer/social-icon-instagram-escape-room-marketer-01.svg"
									alt=""
									height={40}
									width={40}
									className="hover:fill-[#FF8081]"
								/>
							</div>
							<div className="cursor-pointer relative before:content-[''] before:absolute before:top-[0] before:right-0 before:bottom-[0] before:left-0 z-10 hover:before:bg-[#ffff] before:w-[40px] before:h-[40px] before:rounded-full before:opacity-20 before:bg-center">
								<Image src="/footer/social-icon-dribble-escape-room-marketer-01.svg" alt="" height={40} width={40} className="hover:fill-[#FF8081]" />
							</div>
							<div className="cursor-pointer relative before:content-[''] before:absolute before:top-[0] before:right-0 before:bottom-[0] before:left-0 z-10 hover:before:bg-[#ffff] before:w-[40px] before:h-[40px] before:rounded-full before:opacity-20 before:bg-center">
								<Image src="/footer/social-icon-twiter-escape-room-marketer-01.svg" alt="" height={40} width={40} className="hover:fill-[#FF8081]" />
							</div>
							<div className="cursor-pointer relative before:content-[''] before:absolute before:top-[0] before:right-0 before:bottom-[0] before:left-0 z-10 hover:before:bg-[#ffff] before:w-[40px] before:h-[40px] before:rounded-full before:opacity-20 before:bg-center">
								<Image src="/footer/social-icon-youtube-escape-room-marketer-01.svg" alt="" height={40} width={40} className="hover:fill-[#FF8081]" />
							</div>
						</div>
					</div>
				</div>

				<div className="flex flex-wrap gap-3 justify-center md:justify-between py-6 text-neutral-200">
					<p>
						© ESCAPE ROOM MARKETER - <span>{new Date().getFullYear()}</span>
					</p>
					<div>
						<Link href={"/terms-of-service"} className="hover:text-red-500 cursor-pointer">
							Terms of Service{" "}
						</Link>{" "}
						|{" "}
						<Link href={"/privacy-policy"} className="hover:text-red-500 cursor-pointer">
							{" "}
							Privacy Policy
						</Link>
						|
						<Link href={"/site-map"} className="hover:text-red-500 cursor-pointer">
							{" "}
							Site Map
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Footer;
