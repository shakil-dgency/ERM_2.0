/* eslint-disable react/no-unescaped-entities */
"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useRef, useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { HiMenu } from "react-icons/hi";
import { BiChevronRight } from "react-icons/bi";
import { MdKeyboardArrowDown } from "react-icons/md";
import NavCard from "../ui/NavCard";
// import Button3D from "./animation/Button3D";
import { useSelector } from "react-redux";

let nav_id;
let mb_service_count = 0;
let mb_count = 0;

function Navbar({ marketingBanner }) {
	const router = usePathname();
	const { service } = useSelector((state) => state.service);
	// console.log(marketingBanner);
	const [open, setOpen] = useState(false);
	const [sidebarOpen, setSidebarOpen] = useState(false);
	const [serviceMenubar, setServiceMenubar] = useState(false);

	const [resourcesOpen, setResourcesOpen] = useState(false);
	const [mobileOpen, setMobileOpen] = useState(false);

	const [quizeState, setQuizeState] = useState(false);
	const [mobileQuizeState, setMobileQuizeState] = useState(false);

	const [moreState, setMoreState] = useState(false);
	const [mobileMoreState, setMobileMoreState] = useState(false);

	const [contact, setContact] = useState(false);
	const [mobileContact, setMobileContact] = useState(false);

	const [quizzData, setQuizzData] = useState();
	const [quizzSortedData, setQuizzSortedData] = useState();

	const serveiceRef = useRef();
	const serviceBtnRef = useRef();
	const sidebarMainref = useRef();
	const sidebarServiceref = useRef();
	const hamburgRef = useRef();
	const resourceBtnRef = useRef();
	const navRef = useRef();

	const quizzesRef = useRef();
	const moreNavRef = useRef();
	const contactRef = useRef();

	const handlePopup = (e) => {
		setServiceMenubar(!serviceMenubar);
	};

	const handleHamburg = () => {
		const navbar = document.getElementById("navbar");
		setSidebarOpen(true);
		document.body.classList.add("overflow-hidden");
		// this is for free marketing page top banner style
		navbar.style.top = "0";
	};

	const closeSidebar = () => {
		const navbar = document.getElementById("navbar");
		setSidebarOpen(false);
		document.body.classList.remove("overflow-hidden");
		// this is for free marketing page top banner style
		if (marketingBanner === true) {
			navbar.style.top = "56px";
		}
		setMobileQuizeState(false);
		setMobileMoreState(false);
		setMobileContact(false);
		setMobileOpen(false);
		setOpen(false);
	};

	useEffect(() => {
		//veriables
		const navbar = document.getElementById("navbar");

		// all popup close functionality , if click outside of the popup then it will close. also navigation select color add or remove

		document.addEventListener("click", (e) => {
			if (sidebarMainref.current) {
				if (!sidebarMainref.current.contains(e.target) && !hamburgRef.current.contains(e.target)) {
					setSidebarOpen(false);
				}
				// mobile nav service item active off
				if (e.target.classList.contains("logo_img") || e.target.classList.contains("marketing_plan")) {
					if (mb_service_count > 0) {
						let mbNavServiceItem = document.querySelector(".mb-nav-service_item");
						mbNavServiceItem.classList.remove("text-primary-500");
						mbNavServiceItem.classList.remove("mb-nav-service_item");
						mb_service_count = 0;
					}
				}
			}

			if (serveiceRef.current) {
				if (!serveiceRef.current.contains(e.target) && !serviceBtnRef.current.contains(e.target)) {
					setServiceMenubar(false);
				}
			}

			if (resourceBtnRef.current) {
				if (!resourceBtnRef.current.contains(e.target)) {
					setResourcesOpen(false);
				}
			}
			if (quizzesRef.current) {
				if (!quizzesRef.current.contains(e.target)) {
					setQuizeState(false);
				}
			}
			if (moreNavRef.current) {
				if (!moreNavRef.current.contains(e.target)) {
					setMoreState(false);
				}
			}
			if (contactRef.current) {
				if (!contactRef.current.contains(e.target)) {
					setContact(false);
				}
			}
		});

		// Navbar OnScroll functionality

		var lastScrollTop = 0;

		window.addEventListener("scroll", function () {
			let scrollTop = window.scrollY || document.documentElement.scrollTop;
			// if (scrollTop > 100) {
			if (scrollTop > lastScrollTop) {
				// if(window.innerWidth < 1024){

				navbar.style.top = "-120px";
				// }
				setServiceMenubar(false);
				setResourcesOpen(false);
				setQuizeState(false);
				setMoreState(false);
				setContact(false);
			} else if (lastScrollTop > scrollTop + 10) {
				navbar.style.top = "0";
			}

			// }

			lastScrollTop = scrollTop;
		});
	});

	//--------------------------//

	// when the route is changed then have to positioned the navbar

	useEffect(() => {
		setQuizeState(false);
		setMoreState(false);
		setServiceMenubar(false);
		setResourcesOpen(false);
		setSidebarOpen(false);
		setContact(false);

		document.body.classList.remove("overflow-hidden");
	}, [router]);
	// marketingBanner

	// mobile menu sub menu style and onclick sub menu NavItem, menu bar will be closed

	const handleMobileMenuService = (e) => {
		setSidebarOpen(false);
		document.body.classList.remove("overflow-hidden");
	};

	//for mobile sidebar menu common function and  nav menu item active color on

	const handleMainSingleMenu = (e) => {
		setOpen(false);
		setMobileQuizeState(false);
		setMobileOpen(false);
		setMobileMoreState(false);
	};

	//for mobile sidebar sub menu list

	const handleSidebarService = (e) => {
		setOpen(!open);
		setMobileQuizeState(false);
		setMobileOpen(false);
		setMobileMoreState(false);
		setMobileContact(false);
	};

	const handleResourcePopup = () => {
		setResourcesOpen(!resourcesOpen);
	};

	const handleResourcePopupMobile = () => {
		setMobileOpen(!mobileOpen);
		setMobileQuizeState(false);
		setMobileMoreState(false);
		setMobileContact(false);
		setOpen(false);
	};

	const handleQuizePopup = () => {
		setQuizeState(!quizeState);
	};

	const handleQuizePopupMobile = () => {
		setMobileQuizeState(!mobileQuizeState);
		setMobileMoreState(false);
		setMobileContact(false);
		setMobileOpen(false);
		setOpen(false);
	};

	const handleMorePopupMobile = () => {
		setMobileMoreState(!mobileMoreState);
		setMobileQuizeState(false);
		setMobileContact(false);
		setMobileOpen(false);
		setOpen(false);
	};

	const handleContactPopupMobile = () => {
		setMobileContact(!mobileContact);
		setMobileQuizeState(false);
		setMobileMoreState(false);
		setMobileOpen(false);
		setOpen(false);
	};

	const handleClick = (e) => {
		e.preventDefault(); // Prevent immediate navigation
		setTimeout(() => {
			router.push("/free-marketing"); // Navigate after delay
		}, 600); // Delay in milliseconds
	};

	

	return (
		<div id="navbar" className={`z-50 sticky w-full bg-secondary-950 duration-700  ${marketingBanner === true ? "top-14" : "top-0"} `}>
			<div className="relative pt-4">
				<div ref={navRef} className=" max-w-[1584px] mx-auto px-2.5 ">
					<div className="flex justify-between items-center  relative ">
						<Link href={"/"} className="cursor-pointer relative z-20">
							<Image
								src="/logo.svg"
								alt="logo"
								height={40}
								width={170}
								quality={100}
								className="logo_img h-[40px] xs:h-auto w-[100px] xs:w-[130px] sm:w-[150px] xl:w-[163px]"
							/>
						</Link>

						<div className="flex items-center gap-[30px]">
							<div className="nav_elements flex gap-2 xs:gap-3 md:gap-[10px] xl:gap-10 items-center text-neutral-200">
								<ul className="hidden xl:flex lg:gap-[14px] xl:gap-[25px] font-[600]  ">
									<li
										id="nav2"
										ref={serviceBtnRef}
										onClick={handlePopup}
										className={` group cursor-pointer flex items-center gap-0 xl:gap-1 text-[14px] xl:text-[15px] hover:text-primary-500 duration-300 relative z-20 ${(service?.find((item)=> item.slug === router.slice(1))) ? "text-primary-500":"" }`}
									>
										Services
										<MdKeyboardArrowDown className={`arrow_rotate text-xl xl:text-[22px] duration-300 ${serviceMenubar ? "rotate-180" : ""}`} />
									</li>

									<li id="nav6" className=" hover:text-primary-500 duration-300 flex items-center text-[14px] xl:text-[15px] relative z-20">
										<Link href={"/case-studies"} className={`${router.asPath === "/blog" ? "text-primary-500" : " "}`}>
											BookingMAX
										</Link>
									</li>
									<li id="nav1" className=" hover:text-primary-500 duration-300 flex items-center text-[14px] xl:text-[15px] relative z-20">
										<Link href={"/blog"} className={`${router.asPath === "/blog" ? "text-primary-500" : " "}`}>
											Testimonials
										</Link>
									</li>
									<li id="nav3" className=" hover:text-primary-500 duration-300 flex items-center text-[14px] xl:text-[15px] relative z-20">
										<Link href={"/blog"} className={`${router.asPath === "/blog" ? "text-primary-500" : " "}`}>
											Works
										</Link>
									</li>
									<li id="nav4" className=" hover:text-primary-500 duration-300 flex items-center text-[14px] xl:text-[15px] relative z-20">
										<Link href={"/blog"} className={`${router.asPath === "/blog" ? "text-primary-500" : " "}`}>
											Insights
										</Link>
									</li>

									<div ref={moreNavRef} className="relative">
										<li
											onClick={() => setMoreState(!moreState)}
											className={` hover:text-primary-500 duration-300 flex items-center gap-0 xl:gap-1 text-[14px] xl:text-[15px] cursor-pointer relative z-20 ${
												router.asPath === "/about" || router.asPath === "/team" || router.asPath === "/career" || router.asPath === "/faqs"
													? "text-primary-500"
													: ""
											}`}
										>
											More <MdKeyboardArrowDown className={`text-xl xl:text-[22px] duration-300 ${moreState ? "rotate-180" : ""}`} />
										</li>
										<div
											className={`serveice_popup bg-secondary-950 space-y-[25px] md:px-8 md:pb-10 pt-[80px] rounded-b-[20px]  absolute top-10 w-[450px] -left-[170px] shadow-[0px_0px_10px_#ff492c30] ${
												moreState ? "block" : "hidden"
											}`}
										>
											<NavCard slug="/about" img="/navbar/about.svg" title="About Us" router={router} />
											<NavCard slug="" img="/navbar/team.svg" title="Team" router={router} />
											<NavCard slug="" img="/navbar/faq.svg" title="FAQs" router={router} />
											<NavCard slug="/blog" img="/navbar/blog.svg" title="Blog" router={router} />
											<NavCard slug="" img="/navbar/testimonial.svg" title="Testimonial" router={router} />
										</div>
									</div>

									<div ref={contactRef} className="relative">
										<li
											onClick={() => setContact(!contact)}
											id="nav7"
											className={`${
												router.asPath === "/contact" || router.asPath === "/client-call" || router.asPath === "/demo-call" ? "text-primary-500" : " "
											} cursor-pointer hover:text-primary-500 duration-300 flex items-center gap-0 xl:gap-1 text-[14px] xl:text-[15px]  relative z-20`}
										>
											Contact
											<MdKeyboardArrowDown className={`text-xl xl:text-[22px] duration-300 ${contact ? "rotate-180" : ""}`} />
										</li>
										<div
											className={`serveice_popup absolute bg-secondary-950 space-y-[25px] md:px-8 md:pb-10 pt-[80px] rounded-b-[20px] w-[450px] -left-[170px] top-10 shadow-[0px_0px_10px_#ff492c30] ${
												contact ? "block" : "hidden"
											}`}
										>
											<NavCard slug="" img="/navbar/demo.svg" title="Book a Demo Call" router={router} />
											<NavCard slug="" img="/navbar/testimonial.svg" title="Exclusive Client Call" router={router} />
											<NavCard slug="/contact" img="/navbar/contact.svg" title="Contact Us" router={router} />
										</div>
									</div>
								</ul>
							</div>
							{/* ..........button........... */}

							<div className="text-neutral-50 flex items-center gap-2 xs:gap-3 md:gap-[10px] lg:gap-[30px]">
								{/* ....login button.......... */}
								<div className="group relative z-20 hidden xl:flex items-center gap-1.5 cursor-pointer">
									{/* <Image src={"/navbar/escape_door.svg"} alt="" height={16} width={17} /> */}
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="18"
										height="17"
										viewBox="0 0 18 17"
										fill="none"
										className="group-hover:scale-105 duration-300"
									>
										<path
											d="M17.2096 0.404053H11.4742C11.106 0.404053 10.8076 0.702496 10.8076 1.07063V2.82842C10.9314 2.86056 11.0512 2.91634 11.1602 2.9973C11.6135 3.33412 11.7079 3.97466 11.371 4.42798L10.8077 5.18615V7.21912H12.4687V7.17696C12.4687 6.58697 13.1504 6.25369 13.616 6.6163L15.4461 8.04178C15.8112 8.32615 15.8117 8.87827 15.4461 9.16309L13.616 10.5886C13.1506 10.9511 12.4687 10.6181 12.4687 10.0279V9.98575H10.8077V15.7375C10.8077 16.1056 11.1061 16.4041 11.4742 16.4041H17.2097C17.5778 16.4041 17.8762 16.1056 17.8762 15.7375V1.07063C17.8762 0.702496 17.5778 0.404053 17.2096 0.404053Z"
											fill="#CCCCCE"
										/>
										<path
											d="M7.2098 3.65665C8.00901 3.65665 8.65689 3.00876 8.65689 2.20955C8.65689 1.41034 8.00901 0.762451 7.2098 0.762451C6.41058 0.762451 5.7627 1.41034 5.7627 2.20955C5.7627 3.00876 6.41058 3.65665 7.2098 3.65665Z"
											fill="#CCCCCE"
										/>
										<path
											d="M10.9419 3.2912C10.651 3.07499 10.2398 3.13556 10.0236 3.42655L8.72936 5.16812L7.47835 4.74035L8.11732 4.82318C8.02399 4.50785 7.7545 4.25972 7.40762 4.21086L5.61318 3.96262C5.248 3.91211 4.87647 3.98589 4.55826 4.17207L2.44062 5.41133C2.22577 5.53729 2.10075 5.77398 2.11777 6.02243L2.32254 9.00783C2.34736 9.36993 2.66127 9.64272 3.02226 9.61776C3.3839 9.59297 3.657 9.27969 3.63218 8.91804L3.45522 6.33817L4.3182 5.83219L3.84773 9.01303C3.8246 9.16936 3.80768 9.32656 3.797 9.48424L3.64795 11.6848L0.809137 12.1745C0.380472 12.2485 0.092915 12.6559 0.166867 13.0846C0.240819 13.5133 0.648232 13.8009 1.07697 13.7269L4.52588 13.1319C4.88392 13.0701 5.15328 12.7714 5.17782 12.4089L5.34053 10.0062L6.27226 10.1592L7.17491 12.0741L7.55809 15.699C7.60375 16.1308 7.9906 16.4452 8.42419 16.3995C8.85677 16.3538 9.1704 15.966 9.12467 15.5334L8.72745 11.776C8.71816 11.6882 8.69424 11.6027 8.65662 11.5229L7.58305 9.24543L7.96092 6.51413L7.05356 5.98246L8.75793 6.56527C9.02915 6.65797 9.32756 6.56388 9.49714 6.33568L11.0771 4.20948C11.2934 3.91856 11.2328 3.5074 10.9419 3.2912Z"
											fill="#CCCCCE"
										/>
										<path
											d="M12.8876 9.56718V10.0278C12.8876 10.2713 13.1675 10.4076 13.3592 10.2583L15.1893 8.83283C15.3394 8.71588 15.3394 8.48886 15.1893 8.37192L13.3592 6.94644C13.1678 6.79729 12.8876 6.93323 12.8876 7.1769V7.6376H10.4133C10.2414 7.6376 10.1021 7.77694 10.1021 7.94883V9.25591C10.1021 9.42781 10.2414 9.56715 10.4133 9.56715H12.8876V9.56718Z"
											// fill="#CCCCCE"
											className="fill-[#CCCCCE] group-hover:fill-primary-500 duration-300"
										/>
									</svg>
									<p className="text-[16px] font-[600] text-neutral-200 group-hover:text-primary-500 duration-300">Login</p>
								</div>

								{/* -----------desktop view nav marketing plan button--------- */}
								{router !== "/free-marketing" && (
									<Link
										href={"/free-marketing"}
										onClick={handleClick}
										className="button group hover:shadow-[3px_3px_5px_#808082] hover:translate-[2px] duration-300 hidden xl:flex items-center gap-1 md:gap-2.5 font-[700] flex-[2] px-[20px] py-[8px] rounded-[6px] border-[2px] border-primary-800 relative z-20"
									>
										<Image
											src="/global/lock.svg"
											height={20}
											width={18}
											alt=""
											className="w-[20px] h-[20px] mb-[1px] hidden md:inline-block group-hover:hidden"
										/>
										<Image
											src="/global/lock_open.svg"
											height={20}
											width={18}
											alt=""
											className="w-[20px] h-[20px] mb-[1px] hidden md:group-hover:inline-block"
										/>

										<span className="">
											<span className="inline-block xl:hidden">FREE</span>
											<span className="hidden xl:inline-block">UNLOCK</span>
											<span> MARKETING PLAN</span>
										</span>
									</Link>
								)}

								{/* -----mobile view nav marketing plan button-------- */}
								{router !== "/free-marketing" && (
									<Link
										href={"/free-marketing"}
										className="group xl:hidden hover:text-primary-500 marketing_plan flex items-center gap-2 xs:gap-2.5 font-[500] flex-[2] px-[5px] py-1 xs:px-[10px] xs:py-[5px] ml-[0] xl:ml-[6px] rounded border-[2px] border-primary-800  text-neutral-50 relative z-20 text-[13px] xs:text-[14px]"
									>
										<Image
											src="/global/lock.svg"
											height={20}
											width={18}
											alt=""
											className="w-auto xs:w-[20px] h-[15px] xs:h-[20px] inline-block group-hover:hidden"
										/>
										<Image
											src="/global/lock_open.svg"
											height={20}
											width={18}
											alt=""
											className="w-[15px] xs:w-[20px] h-[15px] xs:h-[20px] hidden group-hover:inline-block"
										/>
										{/* <span className="inline-block md:hidden">FREE</span> */}
										<span>
											<span className="hidden md:inline-block">UNLOCK</span>
											<span> MARKETING PLAN</span>
										</span>
									</Link>
								)}
								{/* ------------------------- */}
								<div ref={hamburgRef} className="xl:hidden cursor-pointer relative z-20">
									<HiMenu id="hamburg" onClick={handleHamburg} className="text-[28px] xs:text-[34px] md:text-[42px] " />
								</div>
							</div>
						</div>

						{/* ............................ */}
						{/* desktop service popup menu */}

						<div
							ref={serveiceRef}
							className={`serveice_popup max-w-[1316px] shadow-[0px_0px_10px_#ff492c30] md:px-8 md:pb-10 pt-[100px] rounded-b-[20px]  absolute top-12 left-[50%] translate-x-[-50%] w-full  z-0 bg-secondary-950 ${
								serviceMenubar ? "block" : "hidden"
							} `}
						>
							<div className=" grid grid-cols-3  gap-5">
								{service?.map((item, i) => (
									<NavCard key={i} slug={item.slug} img="/navbar/audit.svg" title={item.service_name} router={router} />
								))}

								{/* <NavCard slug="google-ads" img="/navbar/ads.svg" title="Google Ads Management" router={router} />

								<NavCard slug="" img="/navbar/ppc.svg" title="PPC Advertising" router={router} />

								<NavCard slug="" img="/navbar/seo.svg" title="Search Engine Optimization (SEO)" router={router} />

								<NavCard slug="" img="/navbar/aeo.svg" title="Answer Engine Optimization (AEO)" router={router} />

								<NavCard slug="" img="/navbar/social.svg" title="Social Media Advertising" router={router} />

								<NavCard slug="" img="/navbar/web.svg" title="Website Design & Development" router={router} />

								<NavCard slug="" img="/navbar/email.svg" title="Email Marketing" router={router} /> */}
							</div>
						</div>
					</div>

					<div
						ref={sidebarMainref}
						id="sidebar"
						className={` sidebar_shadow sm:drop-shadow  xl:hidden bg-secondary-950  w-full sm:w-[400px]  absolute  top-0 right-0   z-30 ${
							sidebarOpen ? "block sidebar_menu_open" : "hidden"
						}
					`}
					>
						<div className="overflow-y-scroll xl:overflow-y-hidden h-screen xl:h-0 pb-[150px] lg:pb-0">
							<div className={`pl-3 xs:pl-5 md:pl-14 pr-3 xs:pr-5 relative`}>
								<div onClick={closeSidebar} className="w-full h-16 xl:h-0">
									<div className=" rounded-[100%] text-3xl lg:text-[10px] flex justify-center items-center w-10 lg:w-0 h-10 lg:h-0 absolute top-2.5 xs:top-4 right-2.5 xs:right-4">
										<p className="text-[40px] text-neutral-200 rotate-45">+</p>
									</div>
								</div>
								<div onClick={closeSidebar} className="text-neutral-50 flex  relative z-20">
									<Link
										href={"/free-marketing"}
										// onClick={handleClick}
										className="button group hover:shadow-[3px_3px_5px_#808082] hover:translate-[2px] duration-300 flex items-center gap-1 md:gap-2.5 font-[700] px-[20px] py-[8px] rounded-[6px] border-[2px] border-primary-800 "
									>
										<Image src="/global/lock.svg" height={20} width={18} alt="" className="w-[20px] h-[20px] mb-[1px]  inline-block " />

										<span className="">
											<span className="inline-block">FREE</span>
											{/* <span className="hidden xl:inline-block">UNLOCK</span> */}
											<span> MARKETING PLAN</span>
										</span>
									</Link>
								</div>
								<div className="flex  mt-5">
									<div className="group relative z-20 flex items-center gap-1.5 cursor-pointer">
										<Image src={"/navbar/escape_door.svg"} alt="" height={16} width={17} />

										<p className="text-[16px] font-[600] text-neutral-200 group-hover:text-primary-500 duration-300">Login</p>
									</div>
								</div>
								<ul className="text-neutral-200 font-[600] flex flex-col gap-3 mb-12">
									<li
										onClick={handleSidebarService}
										className={`group cursor-pointer flex items-center gap-2 text-[18px] pt-3 ${open ? "text-primary-500" : ""} ${
											router.asPath === "/services" ||
											router.asPath === "/google-ads" ||
											router.asPath === "/microsoft-ads" ||
											router.asPath === "/seo" ||
											router.asPath === "/facebook-ads" ||
											router.asPath === "/linkedin-ads" ||
											router.asPath === "/social-media-management" ||
											router.asPath === "/landing-page-development" ||
											router.asPath === "/website-development" ||
											router.asPath === "/email-marketing"
												? "text-primary-500"
												: ""
										} `}
									>
										Services <MdKeyboardArrowDown className={`arrow_rotate text-2xl transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
									</li>

									<div ref={sidebarServiceref} className={`pb-4 space-y-[25px]  ${open ? "block" : "hidden"}`}>
										<NavCard slug="" img="/navbar/audit.svg" title="Must Have Audit Reports" router={router} />

										<NavCard slug="" img="/navbar/ads.svg" title="Google Ads Management" router={router} />

										<NavCard slug="" img="/navbar/ppc.svg" title="PPC Advertising" router={router} />

										<NavCard slug="" img="/navbar/seo.svg" title="Search Engine Optimization (SEO)" router={router} />

										<NavCard slug="" img="/navbar/aeo.svg" title="Answer Engine Optimization (AEO)" router={router} />

										<NavCard slug="" img="/navbar/social.svg" title="Social Media Advertising" router={router} />

										<NavCard slug="" img="/navbar/web.svg" title="Website Design & Development" router={router} />

										<NavCard slug="" img="/navbar/email.svg" title="Email Marketing" router={router} />
									</div>
									<li className="text-[18px] pt-3">
										<Link
											href={"/blog"}
											onClick={handleMainSingleMenu}
											className={`hover:text-primary-500  ${router.asPath === "/case-studies" ? "text-primary-500" : " "}`}
										>
											Case Studies
										</Link>
									</li>
									<li className="text-[18px] pt-3">
										<Link
											href={"/blog"}
											onClick={handleMainSingleMenu}
											className={`hover:text-primary-500  ${router.asPath === "/works" ? "text-primary-500" : " "}`}
										>
											Works
										</Link>
									</li>

									<div className="mobile_more">
										<li
											onClick={handleMorePopupMobile}
											className={`text-[18px] pt-3 flex items-center gap-2 cursor-pointer ${
												router.asPath === "/about" || router.asPath === "/team" || router.asPath === "/career" || router.asPath === "/faqs"
													? "text-primary-500"
													: ""
											} ${mobileMoreState ? "text-primary-500" : ""}`}
										>
											More <MdKeyboardArrowDown className={`text-2xl transition-transform duration-300 ${mobileMoreState ? "rotate-180" : ""}`} />
										</li>

										<div className={`pt-4 space-y-[25px] text-[16px]  ${mobileMoreState ? "block" : "hidden"}`}>
											<NavCard slug="/about" img="/navbar/about.svg" title="About Us" router={router} />
											<NavCard slug="" img="/navbar/team.svg" title="Team" router={router} />
											<NavCard slug="" img="/navbar/faq.svg" title="FAQs" router={router} />
											<NavCard slug="/blog" img="/navbar/blog.svg" title="Blog" router={router} />
											<NavCard slug="" img="/navbar/testimonial.svg" title="Testimonial" router={router} />
										</div>
									</div>
									<div>
										<li
											onClick={handleContactPopupMobile}
											className={`text-[18px] pt-3 flex items-center gap-2 cursor-pointer ${
												router.asPath === "/contact" || router.asPath === "/client-call" || router.asPath === "/demo-call" ? "text-primary-500" : " "
											}${mobileContact ? "text-primary-500" : ""}`}
										>
											Contact <MdKeyboardArrowDown className={`text-2xl transition-transform duration-300 ${mobileContact ? "rotate-180" : ""}`} />
										</li>
										<div className={`pt-4 space-y-[25px] text-[16px]  ${mobileContact ? "block" : "hidden"}`}>
											<NavCard slug="" img="/navbar/demo.svg" title="Book a Demo Call" router={router} />
											<NavCard slug="" img="/navbar/testimonial.svg" title="Exclusive Client Call" router={router} />
											<NavCard slug="/contact" img="/navbar/contact.svg" title="Contact Us" router={router} />
										</div>
									</div>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<div className="break_line image bg-[url('/page_broke.png')] h-[95px] w-full bg-[length:1920px_95px] absolute z-10 top-0  bg-center"></div>
				{/* <div className="break_line image bg-[url('/page_broke.png')] h-[75px] bg-[length:1600px_90px] bg-center absolute z-40 -mt-6 md:-mt-4 "></div> */}
			</div>
		</div>
	);
}

export default Navbar;
