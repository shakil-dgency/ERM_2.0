/* eslint-disable react/no-unescaped-entities */
"use client";

import React, { useEffect, useRef, useState } from "react";
import { RiErrorWarningFill } from "react-icons/ri";
// import { sendContactForm } from "@/lib/api";
// import { sendPricingForm } from "@/lib/pricingapi";
import { phoneSchema } from "../../../services/PhoneNumberValidation";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Image from "next/image";

let initValues = {};
let finalobj = {};

const initState = { values: initValues };

function FreeMarketing({ cardData, seoData }) {
	const [state, setState] = useState(initState);
	const [count, setCount] = useState(0);
	const [load, setLoad] = useState(false);
	const [colleps, setColleps] = useState(170);
	const [storeId, setStoreId] = useState();
	const [isColleps, setIsColleps1] = useState(false);
	const [isPhoneValid, setIsphoneValid] = useState("");

	const [phone, setPhone] = useState("");
	const [phoneCountryCode, setPhoneCountryCode] = useState("");

	const { values } = state;

	const screenRef = useRef(null);

	const handleClick = (e) => {
		event.preventDefault();
		//  setBgcolor(!bgcolor)

		setState((prev) => ({
			...prev,
			values: {
				...prev.values,
				[e.target.name]: e.target.value,
			},
		}));

		if (myref.current || secondRef.current) {
			if (e.target.classList.contains("bg-[rgba(53,65,77,0.20)]")) {
				e.target.classList.remove("bg-[rgba(53,65,77,0.20)]");
				e.target.classList.remove("border-[rgba(84,101,119,0.20)]");
				e.target.classList.add("bg-[rgba(212,47,0,0.10)]", "border-[rgba(212,47,0,0.20)]");
				setCount(count + 1);
				alartRef.current.classList.add("hidden");
				alartRef2.current.classList.add("hidden");
			} else if (e.target.classList.contains("bg-[rgba(212,47,0,0.10)]")) {
				e.target.classList.remove("bg-[rgba(212,47,0,0.10)]", "border-[rgba(212,47,0,0.20)]");
				e.target.classList.add("bg-[rgba(53,65,77,0.20)]", "border-[rgba(84,101,119,0.20)]");
				// console.log(e.target.classList);
				setCount(count - 1);
			}
		}

		if (values) {
			alartRef3.current.classList.remove("flex");
			alartRef3.current.classList.add("hidden");
		}
	};

	//phone input function

	const handleKeyDown = (e) => {
		// Prevent the backspace key from removing the country code
		const isBackspaceOrDelete = e.key === "Backspace" || e.key === "Delete";
		const isCursorAtStart = e.target.selectionStart === phoneCountryCode.length;

		if (isBackspaceOrDelete && isCursorAtStart) {
			e.preventDefault();
		}
		console.log(phoneCountryCode.length);
	};

	const handleChange = (value, country, event) => {
		const countryCode = `+${country.dialCode}`;
		setPhoneCountryCode(countryCode);

		setPhone(value);
		// console.log(value);

		setState((prev) => ({
			...prev,
			values: {
				...prev.values,
				phone: value,
				country: country.name,
			},
		}));
	};

	useEffect(() => {
		screenRef.current = window.screen.width;
	}, []);

	const myref = useRef();
	const secondRef = useRef();
	const thirdRef = useRef();
	const alartRef = useRef();
	const alartRef2 = useRef();
	const alartRef3 = useRef();

	const onSubmit = async (e) => {
		// form field validation

		// console.log(values.phone);

		if (values.phone !== "") {
			e.preventDefault();
			const phone = values.phone;
			try {
				await phoneSchema.validate({ phone });
				if (values.name && values.email && values.phone && values.website) {
					const emailIndex = values.email.indexOf("@");
					if (emailIndex !== -1) {
						e.preventDefault();
						setLoad(true);
						setState((prev) => ({
							...prev,
						}));

						finalobj = { data: { ...values }, subject: "Free Marketing - Escape Room Marketer", form: "free-marketing" };

						const thankYouParam = values.name.split(" ")[0];
						let hexValue = [];

						for (let i = 0; i < thankYouParam.length; i++) {
							hexValue.push(
								"%" + (i === 0 ? thankYouParam.charAt(0).toUpperCase().charCodeAt(0).toString(16) : thankYouParam.charCodeAt(i).toString(16))
							);
						}

						let hexString = hexValue.join("");
						let urlEncodedString = encodeURIComponent(hexString);

						setTimeout(() => {
							location.replace(`https://escaperoommarketer.com/thank-you?%256e=${urlEncodedString}`);
							setLoad(false);
						}, 700);

						try {
							// await sendPricingForm(finalobj);
						} catch (error) {
							console.log(error);
						}
					}
				} else {
					e.preventDefault();
					alartRef3.current.classList.remove("hidden");
					alartRef3.current.classList.add("flex");
				}
			} catch (error) {
				console.error(error.errors[0]);
				setIsphoneValid(error.errors[0]);
				setTimeout(() => {
					setIsphoneValid("");
				}, 800);
			}
		}
	};

	const changeHandler = (a, e) => {
		if (screenRef.current < 1024) {
			setTimeout(() => {
				window.scrollTo(0, 400);
			}, 1000);
		}

		if (count !== 0) {
			setLoad(true);
			e.target.classList.add("bg-[#f9868a]");
			setCount(0);
			if (a == 1) {
				// e.target.classList.add("hidden");
				// chakraRef.current.classList.remove("hidden");
				// chakraRef1.current.classList.remove("hidden");
				setTimeout(() => {
					myref.current.classList.remove("block");
					myref.current.classList.add("hidden");
					secondRef.current.classList.remove("hidden");
					// chakraRef.current.classList.add("hidden");
					setLoad(false);
				}, 1000);
			} else if (a == 2) {
				// e.target.classList.add("hidden");
				// chakraRef1.current.classList.remove("hidden");
				setTimeout(() => {
					secondRef.current.classList.add("hidden");
					thirdRef.current.classList.remove("hidden");
					setLoad(false);
				}, 1000);
			}
		} else {
			if (a == 1) {
				alartRef.current.classList.remove("hidden");
				alartRef.current.classList.add("flex");
			} else if (a == 2) {
				alartRef2.current.classList.remove("hidden");
				alartRef2.current.classList.add("flex");
			}
			console.log(alartRef);
		}
	};

	//testimonial mobile view text spand function

	const handleSpanText = (id, message) => {
		setStoreId(id);
		if (isColleps == false) {
			setColleps(message.length);
			setIsColleps1(true);
		} else {
			setColleps(170);
			setIsColleps1(false);
		}
	};

	return (
		<div className="bg-secondary-900">
			{/* <Head>
				<title>{seoData && seoData.data.attributes.seo?.metaTitle}</title>
				<meta name="description" content={`${seoData && seoData.data.attributes.seo?.metaDescription}`} />
				<meta name="keywords" content={`${seoData && seoData.data.attributes.seo?.keywords}`} />
				<meta name="robots" content={`${seoData && seoData.data.attributes.seo?.metaRobots}`} />
				<meta property="og:image" content={`${seoData && seoData.data.attributes.seo?.metaImage.data?.attributes.url}`} />
				<meta property="og:image:width" content="400" />
				<meta property="og:image:height" content="300" />
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:image" content={`${seoData && seoData.data.attributes.seo?.metaImage.data?.attributes.url}`} />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="canonical" href={`${seoData && seoData.data.attributes.seo?.canonicalURL}`} />

				{seoData &&
					seoData.data.attributes.seo?.structuredData?.map((data, i) => {
						return (
							<script
								key={i}
								type="application/ld+json"
								dangerouslySetInnerHTML={{
									__html: JSON.stringify(data),
								}}
							/>
						);
					})}
			</Head> */}
			{/* there are a banner component that is renderd from _app.js page */}
			<div className="">
				<div className="relative pb-[100px] md:pb-20 ">
					<div className="pt-[220px] px-2.5 flex flex-col items-center justify-center">
						<p className="text-primary-500 text-[12px] sm:text-[14px] font-bold leading-[1] tracking-[5.6px] uppercase">Let's Connect</p>
						<h1 className="text-neutral-50 text-[24px] sm:text-[54px] font-[700] text-center">Send Us the Clues</h1>
						<p className="text-[14px] sm:text-[16px] text-neutral-300 text-center">
							Get more first-timers, repeat players, and corporate groups—without lifting a finger.
						</p>
					</div>
					<div className="mx-[10px] min-h-[100vh]">
						<div className="max-w-lg lg:flex justify-between lg:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto pt-[55px]  relative">
							{/* <div className="hero_img ">
								<Image src={`/freemarketing/free-marketing-left.svg`} alt="" height={100} width={220} className="hidden lg:block -mt-8 2xl:ml-20" />
							</div>
							<Image
								src={`/freemarketing/escape-room-free-marketing.svg`}
								alt=""
								height={100}
								width={600}
								className="lg:hidden h-[150px] absolute -top-[55px]   left-[50%] translate-x-[-50%] opacity-[0.1]"
							/> */}
                            <Image src={"/pages/freeMarketing/doller.png"} alt="" height={117} width={112} className="h-[200px] w-auto absolute right-32" />
							<div className="">
								<div
									ref={myref}
									className=" lg:max-w-5xl block lg:absolute z-10 shadow  left-[50%] lg:translate-x-[-50%] bg-[#161A1E] rounded-[20px] w-[100%] lg:w-[1000px] px-4 sm:px-[58px] py-8 "
								>
									<h3 className="font-[700] text-neutral-100 text-center text-[24px] ">Your Success Journey Begins Here</h3>
									<p className=" text-[16px] text-neutral-400 text-center pb-[45px]">Select the services you're interested in...</p>
									<form action="" className=" flex flex-col lg:grid lg:grid-cols-3 items-center gap-3 lg:gap-6">
										<button
											onClick={handleClick}
											name="serveice1"
											value={cardData && cardData.card_view_first.service1}
											className={`rounded border-[1px] border-[rgba(84,101,119,0.20)] bg-[rgba(53,65,77,0.20)] w-full  md:hover:bg-[rgba(212,47,0,0.10)] px-2.5 py-3 text-neutral-50 text-[18px] md:text-[16px] font-[500] duration-300 shadow `}
										>
											{cardData && cardData.card_view_first.service1}
										</button>

										<button
											onClick={handleClick}
											name="serveice2"
											value={cardData && cardData.card_view_first.service2}
											className={`rounded border-[1px] border-[rgba(84,101,119,0.20)] bg-[rgba(53,65,77,0.20)] w-full  md:hover:bg-[rgba(212,47,0,0.10)] px-2.5 py-3 text-neutral-50 text-[18px] md:text-[16px] font-[500] duration-300 shadow`}
										>
											{cardData && cardData.card_view_first.service2}
										</button>
										<button
											onClick={handleClick}
											name="serveice3"
											value={cardData && cardData.card_view_first.service3}
											className="rounded border-[1px] border-[rgba(84,101,119,0.20)] bg-[rgba(53,65,77,0.20)] w-full  md:hover:bg-[rgba(212,47,0,0.10)] px-2.5 py-3 text-neutral-50 text-[18px] md:text-[16px] font-[500] duration-300"
										>
											{cardData && cardData.card_view_first.service3}
										</button>
										<button
											onClick={handleClick}
											name="serveice4"
											value={cardData && cardData.card_view_first.service4}
											className="rounded border-[1px] border-[rgba(84,101,119,0.20)] bg-[rgba(53,65,77,0.20)] w-full  md:hover:bg-[rgba(212,47,0,0.10)] px-2.5 py-3 text-neutral-50 text-[18px] md:text-[16px] font-[500]  duration-300"
										>
											{cardData && cardData.card_view_first.service4}
										</button>
										<button
											onClick={handleClick}
											name="serveice5"
											value={cardData && cardData.card_view_first.service5}
											className="rounded border-[1px] border-[rgba(84,101,119,0.20)] bg-[rgba(53,65,77,0.20)] w-full  md:hover:bg-[rgba(212,47,0,0.10)] px-2.5 py-3 text-neutral-50 text-[18px] md:text-[16px] font-[500]  duration-300"
										>
											{cardData && cardData.card_view_first.service5}
										</button>
										<button
											onClick={handleClick}
											name="serveice6"
											value={cardData && cardData.card_view_first.service6}
											className="rounded border-[1px] border-[rgba(84,101,119,0.20)] bg-[rgba(53,65,77,0.20)] w-full  md:hover:bg-[rgba(212,47,0,0.10)] px-2.5 py-3 text-neutral-50 text-[18px] md:text-[16px] font-[500]  duration-300"
										>
											{cardData && cardData.card_view_first.service6}
										</button>
										<button
											onClick={handleClick}
											name="serveice7"
											value={cardData && cardData.card_view_first.service7}
											className="rounded border-[1px] border-[rgba(84,101,119,0.20)] bg-[rgba(53,65,77,0.20)] w-full  md:hover:bg-[rgba(212,47,0,0.10)] px-2.5 py-3 text-neutral-50 text-[18px] md:text-[16px] font-[500]  duration-300"
										>
											{cardData && cardData.card_view_first.service7}
										</button>
										<button
											onClick={handleClick}
											name="serveice8"
											value={cardData && cardData.card_view_first.service8}
											className="rounded border-[1px] border-[rgba(84,101,119,0.20)] bg-[rgba(53,65,77,0.20)] w-full  md:hover:bg-[rgba(212,47,0,0.10)] px-2.5 py-3 text-neutral-50 text-[18px] md:text-[16px] font-[500]  duration-300"
										>
											{cardData && cardData.card_view_first.service8}
										</button>
										<button
											onClick={handleClick}
											name="serveice9"
											value={cardData && cardData.card_view_first.service9}
											className="rounded border-[1px] border-[rgba(84,101,119,0.20)] bg-[rgba(53,65,77,0.20)] w-full  md:hover:bg-[rgba(212,47,0,0.10)] px-2.5 py-3 text-neutral-50 text-[18px] md:text-[16px] font-[500] duration-300"
										>
											{cardData && cardData.card_view_first.service9}
										</button>
									</form>
									<div className="flex justify-center mt-8">
										{/* <ButtonMagnito> */}
										<button
											onClick={(e) => changeHandler(1, e)}
											className="magneto bg-primary-600 hover:bg-primary-700 duration-300 py-3 px-5 lg:px-8 text-white  md:text-lg rounded-md font-[700] flex justify-center items-center"
										>
											<span className="text select-none">{load === true ? "Please wait..." : "START MY FREE MARKETING PLAN"}</span>
										</button>
										{/* </ButtonMagnito> */}
									</div>

									{/* <div ref={chakraRef} className="chakra_loading  hidden">
						<Skeleton startColor="pink.500" endColor="green.500" height="25px" />
					</div> */}

									<div ref={alartRef} className="alart hidden items-center gap-6 mt-4 bg-orange-100 py-1 pl-6 rounded">
										<RiErrorWarningFill className="text-2xl text-orange-400 font-bold " />
										<p className="text-[12px] md:text-[16px]">You must choose at least one service to continue</p>
									</div>
								</div>
								<div
									ref={secondRef}
									className="second_card hidden lg:max-w-5xl lg:absolute z-10 shadow  left-[50%] lg:translate-x-[-50%] bg-[#161A1E] rounded-[20px] w-[100%] lg:w-[1000px] px-8 md:px-[58px] pt-8 pb-8"
								>
									<h3 className="font-[700] text-neutral-100 text-center text-[24px] ">What Are Your Goals?</h3>
									<p className=" text-[16px] text-neutral-400 text-center pb-[45px]">Select all that apply...</p>
									<form action="" className=" flex flex-col lg:grid lg:grid-cols-6 items-center gap-3 lg:gap-6">
										<button
											onClick={handleClick}
											name="goal1"
											value={cardData && cardData.card_view_second.goal_1}
											className={`rounded border-[1px] border-[rgba(84,101,119,0.20)] bg-[rgba(53,65,77,0.20)] w-full  md:hover:bg-[rgba(212,47,0,0.10)] px-2.5 py-3 text-neutral-50 text-[18px] md:text-[16px] font-[500] col-start-[1] col-end-[3] duration-300 `}
										>
											{cardData && cardData.card_view_second.goal_1}
										</button>

										<button
											onClick={handleClick}
											name="goal3"
											value={cardData && cardData.card_view_second.goal_3}
											className={`rounded border-[1px] border-[rgba(84,101,119,0.20)] bg-[rgba(53,65,77,0.20)] w-full  md:hover:bg-[rgba(212,47,0,0.10)] px-2.5 py-3 text-neutral-50 text-[18px] md:text-[16px] font-[500] col-start-[3] col-end-[5] duration-300 `}
										>
											{cardData && cardData.card_view_second.goal_3}
										</button>
										<button
											onClick={handleClick}
											name="goal4"
											value={cardData && cardData.card_view_second.goal_4}
											className="rounded border-[1px] border-[rgba(84,101,119,0.20)] bg-[rgba(53,65,77,0.20)] w-full  md:hover:bg-[rgba(212,47,0,0.10)] px-2.5 py-3 text-neutral-50 text-[18px] md:text-[16px] font-[500] col-start-[5] col-end-[7] duration-300"
										>
											{cardData && cardData.card_view_second.goal_4}
										</button>
										<button
											onClick={handleClick}
											name="goal2"
											value={cardData && cardData.card_view_second.goal_2}
											className={`rounded border-[1px] border-[rgba(84,101,119,0.20)] bg-[rgba(53,65,77,0.20)] w-full  md:hover:bg-[rgba(212,47,0,0.10)] px-2.5 py-3 text-neutral-50 text-[18px] md:text-[16px] font-[500] col-start-[1] col-end-[4] duration-300`}
										>
											{cardData && cardData.card_view_second.goal_2}
										</button>
										<button
											onClick={handleClick}
											name="goal5"
											value={cardData && cardData.card_view_second.goal_5}
											className="rounded border-[1px] border-[rgba(84,101,119,0.20)] bg-[rgba(53,65,77,0.20)] w-full  md:hover:bg-[rgba(212,47,0,0.10)] px-2.5 py-3 text-neutral-50 text-[18px] md:text-[16px] font-[500] col-start-[4] col-end-[7] duration-300"
										>
											{cardData && cardData.card_view_second.goal_5}
										</button>
										<button
											onClick={handleClick}
											name="goal6"
											value={cardData && cardData.card_view_second.goal_6}
											className="rounded border-[1px] border-[rgba(84,101,119,0.20)] bg-[rgba(53,65,77,0.20)] w-full  md:hover:bg-[rgba(212,47,0,0.10)] px-2.5 py-3 text-neutral-50 text-[18px] md:text-[16px] font-[500] col-start-[2] col-end-[4] duration-300"
										>
											{cardData && cardData.card_view_second.goal_6}
										</button>
										<button
											onClick={handleClick}
											name="goal7"
											value={cardData && cardData.card_view_second.goal_7}
											className={`rounded border-[1px] border-[rgba(84,101,119,0.20)] bg-[rgba(53,65,77,0.20)] w-full  md:hover:bg-[rgba(212,47,0,0.10)] px-2.5 py-3 text-neutral-50 text-[18px] md:text-[16px] font-[500] col-start-[4] col-end-[6] duration-300`}
										>
											{cardData && cardData.card_view_second.goal_7}
										</button>
									</form>
									<div className="flex justify-center mt-8">
										<button
											onClick={(e) => changeHandler(2, e)}
											className="bg-primary-600 hover:bg-primary-700 duration-300 py-3 px-14 text-white  md:text-lg  rounded font-semibold"
										>
											{load === true ? "Please wait..." : "ALMOST THERE"}
										</button>
									</div>
									<div ref={alartRef2} className="alart2 hidden items-center gap-6 mt-4 bg-orange-100 py-1 pl-6 rounded">
										<RiErrorWarningFill className="text-2xl text-orange-400 font-bold " />
										<p className="text-[12px] md:text-[16px]">You must choose at least one goal to continue</p>
									</div>
								</div>
								<div
									ref={thirdRef}
									className="third-form hidden lg:max-w-5xl lg:absolute z-10 shadow  left-[50%] lg:translate-x-[-50%] bg-[#161A1E] rounded-[20px] w-[100%] lg:w-[1000px] "
								>
									<div className="">
										<div className="px-4 md:px-14 py-8 md:py-10">
											<h3 className="font-[700] text-neutral-100 text-center text-[22px] max-w-[600px] mx-auto ">
												We're Putting Your Marketing Plan and Pricing Options Together. Who Can We Send Them To?
											</h3>
											<form action="" className=" text-xl mt-8">
												<div className="flex flex-col items-center gap-3">
													<div className="flex flex-col lg:flex-row justify-center items-center gap-5">
														<div>
															<label htmlFor="name" className="font-[400] text-[16px] text-neutral-300">
																Your name<span className="text-[20px] text-[#FF492C]">*</span>
															</label>{" "}
															<br />
															<input
																type="text"
																id="name"
																name="name"
																required
																onChange={handleClick}
																className="outline-none fo border-[1px] border-[rgba(84,101,119,0.40)] bg-[rgba(53,65,77,0.10)] w-[280px] text-neutral-50 text-base p-2 mt-2 rounded-[4px]"
															/>
														</div>
														<div>
															<label htmlFor="email" className="font-[400] text-[16px] text-neutral-300">
																Your business email<span className="text-[20px] text-[#FF492C]">*</span>
															</label>
															<br />
															<input
																type="email"
																id="email"
																name="email"
																required={true}
																onChange={handleClick}
																className="outline-none border-[1px] border-[rgba(84,101,119,0.40)] bg-[rgba(53,65,77,0.10)] w-[280px] text-neutral-50 text-base p-2 mt-2 rounded-[4px]"
															/>
														</div>
													</div>
													<div className="flex flex-col lg:flex-row justify-center items-center gap-5">
														<div>
															<label htmlFor="email" className="font-[400] text-[16px] text-neutral-300">
																Your website<span className="text-[20px] text-[#FF492C]">*</span>
															</label>
															<br />
															<input
																type="text"
																id="website"
																name="website"
																required={true}
																onChange={handleClick}
																className="outline-none border-[1px] border-[rgba(84,101,119,0.40)] bg-[rgba(53,65,77,0.10)] w-[280px] text-neutral-50 text-base p-2 mt-2 rounded-[4px]"
															/>
														</div>
														<div className="relative">
															<label htmlFor="phone" className="font-[400] text-[16px] text-neutral-300">
																Your phone number<span className="text-[20px] text-[#FF492C]">*</span>
															</label>
															<br />
															<PhoneInput
																country={"us"}
																preferredCountries={["us", "ca", "gb", "au"]}
																inputProps={{
																	required: true,
																}}
																onChange={handleChange}
																onKeyDown={handleKeyDown}
																value={phone}
																type="number"
																id="phone"
																name="phone"
																inputStyle={{
																	width: "280px",
                                                                    color:"#fff",
																	height: "43px",
																	border: "1px solid rgba(84,101,119,0.40)",
																	borderRadius: "4px ",
                                                                    backgroundColor: "rgba(53,65,77,0.10)",
																}}
																className="input-phone-number w-[280px] mt-1"
															/>
															{isPhoneValid !== "" && (
																<p className="text-[14px] text-[] rounded absolute bottom-[-55px] left-[10%] px-[10px] py-[8px] z-10 bg-[#f1f1f1] before:content-[''] before:absolute before:left-[15%] before:top-[-45%] before:rotate-180  before:border-[10px] before:border-solid before:border-[#f1f1f1] before:border-r-[#0000] before:border-b-[#0000] before:border-l-[#0000]">
																	⚠️ {isPhoneValid}
																</p>
															)}
														</div>
													</div>
												</div>

												<div className="flex justify-center mt-8 lg:mt-8">
													<input
														type="submit"
														onClick={onSubmit}
														value={load === true ? "Please Wait..." : "SEND MY MARKETING PLAN TODAY!"}
														className="bg-primary-600 cursor-pointer hover:bg-primary-700 duration-300 py-3 px-5 lg:px-10 text-white text-[15px]  sm:text-lg rounded font-bold"
													/>
												</div>
											</form>
											<div ref={alartRef3} className="alart3 hidden items-center gap-6 mt-4 bg-orange-100 pr-8 py-1 pl-4 md:pl-6 rounded ">
												<RiErrorWarningFill className="text-2xl text-orange-400 font-bold " />
												<p className="text-[12px] md:text-[14px]">You must fill out the required fields to continue</p>
											</div>
										</div>
									</div>
								</div>
							</div>

							{/* <div className="hero_img ">
								<Image
									src={`/freemarketing/free-marketing-right.svg`}
									alt=""
									height={100}
									width={220}
									className=" hidden lg:block -mt-8 2xl:mr-20 absolut"
								/>
							</div> */}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

// export async function getStaticProps(context) {
// 	let URL = `${process.env.NEXT_PUBLIC_API_URL}`;
// 	try {
// 		// Fetch data from external API
// 		let data = await fetch(`${URL}/api/free-marketing-plan`);
// 		let heroData = await data.json();

// 		let card = await fetch(`${URL}/api/free-marketing-plan?populate[card_view][populate]=*`);
// 		let cardData = await card.json();

// 		let videoSection = await fetch(`${URL}/api/free-marketing-plan?populate[video_section][populate]=*`);
// 		let videoSectionData = await videoSection.json();

// 		let marketingPlan = await fetch(
// 			`${URL}/api/free-marketing-plan?populate[0]=marketing_plan&populate[1]=marketing_plan.marketing_card&populate[2]=marketing_plan.marketing_card.image`
// 		);
// 		let marketingPlanData = await marketingPlan.json();

// 		let testimonial = await fetch(
// 			`${URL}/api/free-marketing-plan?populate[0]=testimonial&populate[1]=testimonial.testimonial_data&populate[2]=testimonial.testimonial_data.persons_image&populate[3]=testimonial.testimonial_data.company_logo`
// 		);
// 		let testimonialData = await testimonial.json();

// 		let marketingStrategy = await fetch(
// 			`${URL}/api/free-marketing-plan?populate[0]=marketing_strategy&populate[1]=marketing_strategy.marketing_plan_card&populate[2]=marketing_strategy.marketing_plan_card.image`
// 		);
// 		let marketingStrategyData = await marketingStrategy.json();

// 		let footerData = await fetch(`${URL}/api/free-marketing-plan?populate[footer_top_cta][populate]=*`);
// 		let footerTopCta = await footerData.json();

// 		let seo = await fetch(`${URL}/api/free-marketing-plan?populate[seo][populate]=*`);
// 		let seoData = await seo.json();
// 		// Pass data to the page via props
// 		return {
// 			props: { heroData, cardData, videoSectionData, marketingPlanData, testimonialData, marketingStrategyData, footerTopCta, seoData },
// 			revalidate: 60,
// 		};
// 	} catch (error) {
// 		return { props: { error: { ok: false, reason: "some error description for your own consumption, not for client side" } } };
// 	}
// }

export default FreeMarketing;
