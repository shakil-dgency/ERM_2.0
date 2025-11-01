import Image from "next/image";
import Link from "next/link";
import React from "react";
import EmailSubscribe from "../ui/EmailSubscribe";

function Footer() {
	return (
		<div className="bg-[#090A0A] relative shadow-[0px_-40px_80px_#ff492c30] ">
			<div className="max-w-[1584px] mx-auto px-2.5 ">
				<div className="flex justify-center pt-24 md:pt-28">
					<Image src="/logo.svg" alt="logo" height={100} width={200} className="grayscale" />
				</div>
				<div className=" pt-[80px] px-2.5 md:px-0">
					<EmailSubscribe />
				</div>
				<div className=" pt-[70px] border-b-[1px] border-[rgba(255,255,255,0.24)]"></div>
				<div className="border-b-[1px] border-[rgba(255,255,255,0.24)] pb-16  fle sm:justify-center md:block ">
					<div className=" flex-content  pl-0 md:pl-0 pt-[30px] grid grid-cols-1 sm:grid-cols-[repeat(30,_minmax(0,_1fr))] sm:grid-row-8 gap-x-3  gap-y-5 xl:gap-y-0">
						<div className="location  sm:col-start-1 sm:col-end-[12] md:col-end-10 xl:col-end-7 sm:row-start-1 sm:row-end-2">
							<div className="pt-4 flex flex-col gap-2 text-[#9a9a9a] font-[400]">
								<p className="text-[16px] text-[#d9d9d9] font-semibold">ADDRESS</p>
								<p className="text-[16px]">7711 Shadowcreek Terrace,</p>
								<p className="text-[16px]">Springfield, VA 22153</p>
								<p className="text-[16px]">United States</p>
							</div>
						</div>

						<div className="agency pt-4 sm:col-start-[16] sm:col-end-[31] md:col-start-[10] md:col-end-[20] lg:col-start-9 lg:col-end-[16] xl:col-start-7 xl:col-end-[15] sm:row-start-1 sm:row-end-4">
							<ul className="flex flex-col gap-4 ">
								<li>
									<p className="text-[16px] text-[#d9d9d9] font-semibold ">SEARCH ENGINE MARKETING</p>
								</li>

								<li className="">
									<Link href={"/google-ads"} className="text-[16px] cursor-pointer text-[#9a9a9a] font-[400] hover:text-[#ff492c]">
										Google Ads
									</Link>{" "}
								</li>

								<li>
									<Link href={"/microsoft-ads"} className="text-[16px] cursor-pointer text-[#9a9a9a] font-[400] hover:text-[#ff492c]">
										Microsoft Ads
									</Link>
								</li>

								<li className="">
									<Link href={"/seo"} className="text-[16px] cursor-pointer text-[#9a9a9a] font-[400] hover:text-[#ff492c]">
										Search Engine Optimization (SEO)
									</Link>{" "}
								</li>
							</ul>
							<div className="seo pt-12">
								<ul className="flex flex-col gap-4">
									<li>
										<p className="text-[16px] text-[#d9d9d9] font-semibold">SOCIAL MEDIA MARKETING</p>
									</li>

									<li className="">
										<Link href={"/facebook-ads"} className="text-[16px] cursor-pointer text-[#9a9a9a] font-[400] hover:text-[#ff492c]">
											Facebook Ads
										</Link>{" "}
									</li>

									<li className="">
										<Link href={"/linkedin-ads"} className="text-[16px] cursor-pointer text-[#9a9a9a] font-[400] hover:text-[#ff492c]">
											LinkedIn Ads
										</Link>{" "}
									</li>

									<li className="">
										<Link href={"/social-media-management"} className="text-[16px] cursor-pointer text-[#9a9a9a] font-[400] hover:text-[#ff492c]">
											Social Media Management
										</Link>{" "}
									</li>
								</ul>
							</div>
						</div>
						<div className="advertising lg:-ml-0 pt-4 sm:pt-12 md:pt-4 sm:col-start-[16] sm:col-end-[31] md:col-start-[20] md:col-end-[32] lg:col-start-[17] lg:col-end-[26] xl:col-start-[14] xl:col-end-[22] sm:row-start-3 sm:row-end-6 md:row-start-1 md:row-end-4 xl:row-start-[1] xl:row-end-[3]">
							<ul className="flex flex-col gap-4">
								<li>
									<p className="text-[16px] text-[#d9d9d9] font-semibold">CONVERSION RATE OPTIMIZATION</p>
								</li>

								<li className="">
									<Link href={"/landing-page-development"} className="text-[16px] cursor-pointer text-[#9a9a9a] font-[400] hover:text-[#ff492c]">
										Landing Page Development
									</Link>
								</li>

								<li className="">
									<Link href={"/website-development"} className="text-[16px] cursor-pointer text-[#9a9a9a] font-[400] hover:text-[#ff492c]">
										Website Development
									</Link>
								</li>
							</ul>
							<div className="conversion pt-12 ">
								<ul className="flex flex-col gap-4">
									<li>
										<p className="text-[16px] text-[#d9d9d9] font-semibold">EMAIL MARKETING</p>
									</li>

									<li className="">
										<Link href={"/email-marketing"} className="text-[16px] cursor-pointer text-[#9a9a9a] font-[400] hover:text-[#ff492c]">
											Email Marketing
										</Link>
									</li>
								</ul>
							</div>
						</div>

						<div className="conversion  lg:-ml-0 pt-4 sm:col-start-[1] sm:col-end-[15] md:col-end-[12] xl:col-start-[22] xl:col-end-[28] sm:row-start-2 xl:row-start-[1] sm:row-end-[4]">
							<ul className="flex flex-col gap-4">
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

								<a href="tel:+1 (707) 681-5030" className="text-[16px] sm:text-[14px]">
									+1 (707) 681-5030
								</a>

								<a href="mailto:contact@escaperoommarketer.com" className="text-[16px] sm:text-[14px]">
									contact@escaperoommarketer.com
								</a>
							</ul>
						</div>
						<div className="seo  lg:-ml-0 pt-4 sm:col-start-1 sm:col-end-10 lg:col-start-[26] lg:col-end-[31] xl:col-start-[28] xl:col-end-[31]  lg:row-start-[1] sm:row-end-[5] ">
							<ul className="flex flex-col gap-4 ">
								<li>
									<p className=" text-[16px] text-[#d9d9d9] font-semibold">AGENCY</p>
								</li>

								<li className="flex ">
									<Link href={"/about"} className="text-[16px] cursor-pointer text-[#9a9a9a] font-[400] hover:text-[#ff492c]">
										About
									</Link>
								</li>
								<li className="flex ">
									<Link href={"/services"} className="text-[16px] cursor-pointer text-[#9a9a9a] font-[400] hover:text-[#ff492c]">
										All Services
									</Link>
								</li>

								<li className="">
									<Link href={"/pricing"} className="text-[16px] cursor-pointer text-[#9a9a9a] font-[400] hover:text-[#ff492c]">
										Pricing
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
									<Link href={"/projects"} className="text-[16px] cursor-pointer text-[#9a9a9a] font-[400] hover:text-[#ff492c]">
										Our Works
									</Link>
								</li>
								<li className="">
									<Link href={"/team"} className="text-[16px] cursor-pointer text-[#9a9a9a] font-[400] hover:text-[#ff492c]">
										Team
									</Link>
								</li>

								<li className="">
									<Link href={"/career"} className="text-[16px] cursor-pointer text-[#9a9a9a] font-[400] hover:text-[#ff492c]">
										Careers
									</Link>
									<span className="bg-[#ff5056] text-[12px]  text-white rounded px-1 py-[5px] font-[500] ml-1">HIRING</span>
								</li>

								<li className="">
									<Link href={"/partner-program"} className="text-[16px] cursor-pointer text-[#9a9a9a] font-[400] hover:text-[#ff492c]">
										Partner Program
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
								<li className="">
									<Link href={"/contact"} className="text-[16px] cursor-pointer text-[#9a9a9a] font-[400] hover:text-[#ff492c]">
										Contact Us
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="flex flex-col md:flex-row justify-center md:justify-between items-center py-8">
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
				{/* <div className="flex flex-wrap gap-3 justify-center md:justify-between py-6">
					<p>
						© ESCAPE ROOM MARKETER -  <span>{new Date().getFullYear()}</span>
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
				</div> */}
			</div>
			{/* <div
				className="w-full h-[511px] absolute bottom-[100%] "
				style={{
					background: "linear-gradient(180deg, rgba(13,17,22,0.00) 0%, rgba(13, 17, 22, 0.00) 50%, rgba(230, 64, 39,0.20) 100%)",
				}}
			></div> */}
			{/* Box with shadow */}
			{/* <div className="mx-auto mt-12 w-[350px] h-[180px] bg-neutral-900 rounded-[16px] shadow-[0px_-10px_20px_#ff492c] flex items-center justify-center">
				<p className="text-neutral-50 text-xl font-semibold">This is a box with shadow</p>
			</div> */}
		</div>
	);
}

export default Footer;
