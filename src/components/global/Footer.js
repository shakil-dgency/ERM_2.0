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
	const [locationData, setLocationData] = useState(null);

	// fatching data for workes menu
	useEffect(() => {
		async function fetchWorks() {
			try {
				const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/works?populate[0]=nav_icon`);

				if (!res.ok) throw new Error("Failed to fetch");

				const json = await res.json();
				setWorksData(json.data);

				const locationRes = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/locations?fields[0]=location_name&fields[1]=slug`);
				const locationData = await locationRes.json();
				setLocationData(locationData.data);
			} catch (err) {
				console.error("Fetch error:", err);
			}
		}

		fetchWorks();
	}, []);

	console.log(locationData);

	return (
		<div className="bg-secondary-900 relative shadow-[0px_-40px_80px_#ff492c30] bg-[url('/footer/footer_bg.png')] bg-no-repeat bg-cover md:bg-[length:100%_100%] ">
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
						<div className="location pt-4 sm:col-start-1 sm:col-end-[12] md:col-end-10 xl:col-end-5 sm:row-start-1 sm:row-end-2">
							<ul className="flex flex-col gap-4 ">
								<li>
									<p className="text-[16px] text-[#d9d9d9] font-semibold ">LOCATION</p>
								</li>

								{locationData?.map((item, i) => (
									<li className="" key={i}>
										<Link href={`/location/${item?.slug}`} className="text-[16px] cursor-pointer text-[#9a9a9a] font-[400] hover:text-[#ff492c]">
											{item?.location_name}
										</Link>{" "}
									</li>
								))}
							</ul>
						</div>

						<div className="service pt-4 sm:col-start-[16] sm:col-end-[31] md:col-start-[10] md:col-end-[20] lg:col-start-7 lg:col-end-[16] xl:col-start-6 xl:col-end-[15] sm:row-start-1 sm:row-end-3">
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
						<div className="works lg:-ml-0 pt-4 sm:pt-12 md:pt-4 sm:col-start-[16] sm:col-end-[31] md:col-start-[20] md:col-end-[32] lg:col-start-[17] lg:col-end-[25] xl:col-start-[14] xl:col-end-[21] sm:row-start-3 sm:row-end-6 md:row-start-1 md:row-end-4 xl:row-start-[1] xl:row-end-[3]">
							<ul className="flex flex-col gap-4">
								<li>
									<p className="text-[16px] text-[#d9d9d9] font-semibold">CREATIVE WORKS</p>
								</li>

								{worksData?.slice(0, 7).map((item, i) => (
									<li className="" key={i}>
										<Link href={`/works/${item?.slug}`} className="text-[16px] cursor-pointer text-[#9a9a9a] font-[400] hover:text-[#ff492c]">
											{item?.title}
										</Link>
									</li>
								))}
								<div className=" flex pb-6">
									<Link
										// onClick={backToPreviousPage}
										href="/works"
										className="text-neutral-500 hover:text-primary-500 text-center  font-semibold text-[14px] md:text-[14px] flex items-center underline underline-offset-4 "
									>
										All Works
									</Link>
								</div>
							</ul>
						</div>

						<div className="agency  lg:-ml-0 pt-4 sm:col-start-[1] sm:col-end-[15] md:col-end-[9] xl:col-start-[21] xl:col-end-[26] sm:row-start-2 xl:row-start-[1] sm:row-end-[4]">
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
						<div className="seo  lg:-ml-0 pt-4 sm:col-start-1 sm:col-end-12 md:col-start-[10] md:col-end-[20] lg:col-start-[25] lg:col-end-[32] xl:col-start-[26] xl:col-end-[32] md:row-start-[3]  lg:row-start-[1] sm:row-end-[5] ">
							<ul className="flex flex-col gap-4 text-[#9a9a9a]">
								<li>
									<p className="text-[16px] text-[#d9d9d9] font-semibold">CONTACT</p>
								</li>

								<li className="">
									<Link href={"/demo-call"} className="text-[16px] cursor-pointer text-[#9a9a9a] font-[400] hover:text-[#ff492c]">
										Book a Demo
									</Link>{" "}
								</li>

								<li className="">
									<Link href={"/client-call"} className="text-[16px] cursor-pointer text-[#9a9a9a] font-[400] hover:text-[#ff492c]">
										Exclusive Client Call
									</Link>{" "}
								</li>
								<li className="flex ">
									<Link href={"/contact"} className="text-[16px] cursor-pointer text-[#9a9a9a] font-[400] hover:text-[#ff492c]">
										Contact Us
									</Link>
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
						<div className="grayscale">
							<Image src="/footer/google.svg" alt="logo" height={50} width={400} className="h-[60px] w-[60px] object-contain shadow" />
						</div>
						<div className="grayscale">
							<Image src="/footer/meta.svg" alt="logo" height={50} width={400} className="h-[60px] w-[100px] object-contain shadow bg-white" />
						</div>
						<div className="grayscale">
							<Image src="/footer/microsoft.svg" alt="logo" height={50} width={400} className="h-[60px] w-[140px] object-contain shadow bg-white" />
						</div>
						<div className="grayscale">
							<Image src="/footer/partner.svg" alt="logo" height={50} width={200} className="h-[60px] w-[140px] object-contain shadow bg-white" />
						</div>
					</div>
					<div className="social_media">
						<p className="font-semibold text-base md:text-lg  text-center pt-9 md:pt-0 pb-2 text-[#d9d9d9]">CURRENTLY ACCEPTING FOLLOWERS</p>
						<div className="flex justify-center gap-3 pb-6 md:pb-0">
							<Link href={"https://www.facebook.com/EscapeRoomMarketer/"} target="_blank" className="cursor-pointer relative ">
								<Image src="/footer/facebook.svg" alt="" height={40} width={40} className="h-[34px] w-auto" />
							</Link>
							<Link href={"https://www.instagram.com/escaperoommktg/"} target="_blank" className="cursor-pointer relative ">
								<Image src="/footer/Instagram.svg" alt="" height={40} width={40} className="h-[34px] w-auto" />
							</Link>
							<Link href={"https://www.linkedin.com/company/escaperoommarketer/"} target="_blank" className="cursor-pointer relative ">
								<Image src="/footer/Linkedin.svg" alt="" height={40} width={40} className="h-[34px] w-auto " />
							</Link>

							<Link href={"https://www.youtube.com/@escaperoommarketer3422"} target="_blank" className="cursor-pointer relative ">
								<Image src="/footer/Youtube.svg" alt="" height={40} width={40} className="h-[34px] w-auto" />
							</Link>
							<Link href={"https://www.pinterest.com/EscapeRoomMktg/"} target="_blank" className="cursor-pointer relative ">
								<Image src="/footer/pinterest.svg" alt="" height={40} width={40} className="h-[34px] w-auto" />
							</Link>
							<Link href={"https://www.behance.net/escaperoommarketer"} target="_blank" className="cursor-pointer relative ">
								<Image src="/footer/behence.svg" alt="" height={40} width={40} className="h-[34px] w-auto" />
							</Link>

							<Link href={"https://dribbble.com/escape-room-marketer"} target="_blank" className="cursor-pointer relative ">
								<Image src="/footer/Drible.svg" alt="" height={40} width={40} className="h-[34px] w-auto" />
							</Link>
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
