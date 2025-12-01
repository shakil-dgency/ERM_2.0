/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useEffect, useState } from "react";
// import styles from "../styles/contactus.module.css";
import Image from "next/image";
// import { sendPricingForm } from "@/lib/pricingapi";
import { phoneSchema } from "@/services/PhoneNumberValidation";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { sendFormData } from "@/services/forms";
// import Head from "next/head";
// import ContactHero from "@/components/others/ContactHero";

function ContactUs({ data }) {
	const [name, setName] = useState("");
	const [websiteAddress, setWebsiteAddress] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [country, setCountry] = useState("");
	const [message, setMessage] = useState("");
	const [isPhoneValid, setIsphoneValid] = useState("");

	const [phoneCountryCode, setPhoneCountryCode] = useState("+1");

	let contactObj = {};

	const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

	const handleKeyDown = (e) => {
		// Prevent the backspace key from removing the country code
		const isBackspaceOrDelete = e.key === "Backspace" || e.key === "Delete";
		const isCursorAtStart = e.target.selectionStart === phoneCountryCode.length;

		if (isBackspaceOrDelete && isCursorAtStart) {
			e.preventDefault();
		}
		console.log(isCursorAtStart);
	};

	const handleChange = (value, country, event) => {
		const countryCode = `+${country.dialCode}`;
		setPhoneCountryCode(countryCode);

		setPhone(value);
		setCountry(country.name);
	};

	const handleSubmit = async (e) => {
		if (name !== "" && phone === "" && email.includes("@")) {
			e.preventDefault();
			setPhone(null);
			setTimeout(() => {
				setPhone("");
			}, 800);
		}

		// let phone = (await "+") + phone;
		if (phone !== "") {
			e.preventDefault();
			try {
				await phoneSchema.validate({ phone });
				console.log("Phone number is valid");
				

				if (name !== "" && regex.test(email) && websiteAddress !== "" && message !== "") {
					e.preventDefault();
					contactObj = { data: { name, email, phone, country, websiteAddress, message }, subject: "Contact - Escape Room Marketer", form: "contact" };

					const thankYouParam = name.split(" ")[0];
					let hexValue = [];

					for (let i = 0; i < thankYouParam.length; i++) {
						hexValue.push(
							"%" + (i === 0 ? thankYouParam.charAt(0).toUpperCase().charCodeAt(0).toString(16) : thankYouParam.charCodeAt(i).toString(16))
						);
					}

					let hexString = hexValue.join("");
					let urlEncodedString = encodeURIComponent(hexString);

					setTimeout(() => {
						location.replace(`${process.env.NEXT_PUBLIC_OWN_DOMAIN}/thank-you?%256e=${urlEncodedString}`);
						setLoad(false);
					}, 500);

					try {
						await sendFormData(contactObj);
					} catch (error) {
						console.log(error);
					}
				} else {
					e.preventDefault();
					if (websiteAddress === "") {
						setWebsiteAddress(null);
						setTimeout(() => {
							setWebsiteAddress("");
						}, 800);
					} else if (name === "") {
						setName(null);
						setTimeout(() => {
							setName("");
						}, 800);
					} else if (email === "" || regex.test(email)== false) {
						setEmail(null);
						setTimeout(() => {
							setEmail("");
						}, 800);
					} else if (message === "") {
						setMessage(null);
						setTimeout(() => {
							setMessage("");
						}, 800);
					}
				}
			} catch (error) {
				console.error(error.errors[0]);
				setIsphoneValid(error.errors[0]);
				setTimeout(() => {
					setIsphoneValid("");
				}, 800);
			}
		}

		// const isValid = await phoneSchema.validate({ phone });
	};

	console.log(phone);

	try {
		return (
			<div className="bg-neutral-900 relative">
				
				<div className="absolute top-0 h-[200px] w-full bg-[linear-gradient(0deg,rgba(13,17,22,0)_0%,rgba(13,17,22,0)_50%,rgba(230,64,39,0.2)_100%)]"></div>
				<div className="relative z-10 pt-[100px] lg:pt-[140px] px-2.5 pb-[60px] lg:pb-[140px] flex flex-col items-center justify-center">
					<p className="highlighted_text">{data?.Eyebrow_headline}</p>
					<h2 className="text-neutral-50 text-center pb-2.5 pt-[15px] md:pt-5">{data?.headline}</h2>
					<p className="text-[14px] sm:text-[16px] text-neutral-300 text-center">{data?.description}</p>
				</div>
				<div className=" px-2.5 ">
					<div className="grid grid-cols-1 xl:grid-cols-3 gap-[65px] xl:gap-7 max-w-[1190px] mx-auto pb-16 md:pb-[150px] font-openSans">
						<div className={` xl:col-start-1 xl:col-end-2 md:max-w-2xl  xl:max-w-[415px] mx-auto`}>
							<h3 className="text-[20px] text-neutral-50 leading-[32.4px] font-[600] pb-[20px]">{data?.description_title}</h3>

							<div className="pb-[60px] pl-[20px] text-neutral-300">
								<ul className="list-disc space-y-[25px]">
									{data?.lists?.map((item, i) => (
										<li key={i}>{item?.title}</li>
									))}
								</ul>
							</div>
							<div className="">
								<Image src={"/pages/contactus/phone.svg"} height={100} width={60} alt="" className="animate_vibe h-[180px] w-auto" />
								<p className="text-[24px] text-neutral-50 leading-[32.4px] font-[600] pt-3">Prefer To Call?</p>
								<p className="text-[16px] text-neutral-300 font-[400] ">Let's talk and get the ball rolling...</p>
								<div className="h-[2px] w-[300px] bg-neutral-800 my-5"></div>
								<p className="text-[24px] text-neutral-50 leading-[32.4px] font-[600]">Call Now</p>
								<a href={`tel:${data?.phone_number}`} className="text-primary-700 text-[24px] font-[700] tracking-[0.9px] cursor-pointer">
									{data?.phone_number}
								</a>
							</div>
						</div>
						<div
							className={` row-start-1 xl:col-start-2 xl:col-end-4  md:max-w-2xl xl:max-w-[735px] mx-auto  shadow bg-secondary-800 px-5 md:px-12 lg:px-[43px] pt-[50px] pb-[70px] relative rounded-[20px]`}
						>
							<Image
								src="/pages/contactus/key.svg"
								alt=""
								height={100}
								width={130}
								className="contact-key_image w-[70px] md:w-[100px] lg:w-[130px] absolute -top-5 md:-top-12 -right-[5px] sm:-right-[0px]  lg:-right-[55px] "
							/>
							<h2 className="text-center text-[#fff] text-[20px] sm:text-[36px] font-[700]">{data?.form_headline}</h2>
							<div className="pt-[40px] md:pt-[50px] ">
								<form action="">
									<div className=" flex flex-col md:flex-row gap-[20px] md:gap-[50px] w-full">
										<div className="sm:w-full relative">
											<label htmlFor="" className="font-[400] text-[16px] text-neutral-300">
												Your name<span className="text-primary-600 text-lg">*</span>
											</label>{" "}
											<br />
											<input
												onChange={(e) => setName(e.target.value)}
												type="text"
												required
												className="outline-none border-[1px] border-[rgba(84,101,119,0.40)] bg-[rgba(53,65,77,0.20)] w-full h-[50px] text-neutral-50 text-base px-2 py-1 mt-2 rounded-[4px] "
											/>
											{name === null && (
												<p className="text-[14px] rounded absolute bottom-[-45px] left-[25%] px-[10px] py-[8px] z-10 bg-[#f1f1f1] before:content-[''] before:absolute before:left-[15%] before:top-[-50%] before:rotate-180  before:border-[10px] before:border-solid before:border-[#f1f1f1] before:border-r-[#0000] before:border-b-[#0000] before:border-l-[#0000]">
													⚠️ Please fill out this field
												</p>
											)}
										</div>
										<div className="sm:w-full relative">
											<label htmlFor="" className="font-[400] text-[16px] text-neutral-300">
												Your business email<span className="text-primary-600 text-lg">*</span>
											</label>{" "}
											<br />
											<input
												onChange={(e) => setEmail(e.target.value)}
												type="email"
												required
												className="outline-none border-[1px] border-[rgba(84,101,119,0.40)] bg-[rgba(53,65,77,0.20)] w-full h-[50px] text-neutral-50 text-base px-2 py-1 mt-2 rounded-[4px] "
											/>
											{email === null && (
												<p className="text-[13px] rounded absolute bottom-[-45px] left-[15%] px-[10px] py-[8px] z-10 bg-[#f1f1f1] before:content-[''] before:absolute before:left-[15%] before:bottom-[100%] before:rotate-180  before:border-[10px] before:border-solid before:border-[#f1f1f1] before:border-r-[#0000] before:border-b-[#0000] before:border-l-[#0000]">
													⚠️ Please enter a valid email address
												</p>
											)}
										</div>
									</div>
									<div className="flex flex-col md:flex-row gap-[20px] md:gap-[50px] my-[20px] md:my-[29px]">
										<div className="sm:w-full relative">
											<label htmlFor="" className="font-[400] text-[16px] text-neutral-300">
												Your phone number<span className="text-primary-600 text-lg">*</span>
											</label>{" "}
											<br />
											<PhoneInput
												country={"us"}
												preferredCountries={["us", "ca", "gb", "au"]}
												// onChange={(value) => setPhone(value)}
												onChange={handleChange}
												value={phone}
												onKeyDown={handleKeyDown}
												inputStyle={{
													width: "100%",
													height: "50px",
													backgroundColor: "rgba(53,65,77,0.20)",
													border: "1px solid rgba(84,101,119,0.40)",
													color: "#fff",
													borderRadius: "4px ",
												}}
												inputProps={{
													required: true,
												}}
												type="number"
												className="input-phone-number text-base mt-2"
											/>
											{phone === null && (
												<p className="text-[14px] rounded absolute bottom-[-45px] left-[25%] px-[10px] py-[8px] z-10 bg-[#f1f1f1] before:content-[''] before:absolute before:left-[15%] before:top-[-50%] before:rotate-180  before:border-[10px] before:border-solid before:border-[#f1f1f1] before:border-r-[#0000] before:border-b-[#0000] before:border-l-[#0000]">
													⚠️ Please fill out this field"
												</p>
											)}
											{isPhoneValid !== "" && (
												<p className="text-[14px] rounded absolute bottom-[-45px] left-[25%] px-[10px] py-[8px] z-10 bg-[#f1f1f1] before:content-[''] before:absolute before:left-[15%] before:top-[-50%] before:rotate-180  before:border-[10px] before:border-solid before:border-[#f1f1f1] before:border-r-[#0000] before:border-b-[#0000] before:border-l-[#0000]">
													⚠️ {isPhoneValid}
												</p>
											)}
										</div>
										<div className="sm:w-full relative">
											<label htmlFor="" className="font-[400] text-[16px] text-neutral-300">
												Website address<span className="text-primary-600 text-lg">*</span>
											</label>{" "}
											<br />
											<input
												onChange={(e) => setWebsiteAddress(e.target.value)}
												type="text"
												className="outline-none border-[1px] border-[rgba(84,101,119,0.40)] bg-[rgba(53,65,77,0.20)] w-full h-[50px] text-neutral-50 text-base px-2 py-1 mt-2.5 rounded-[4px] "
											/>
											{websiteAddress === null && (
												<p className="text-[14px] rounded absolute bottom-[-45px] left-[25%] px-[10px] py-[8px] z-10 bg-[#f1f1f1] before:content-[''] before:absolute before:left-[15%] before:top-[-50%] before:rotate-180  before:border-[10px] before:border-solid before:border-[#f1f1f1] before:border-r-[#0000] before:border-b-[#0000] before:border-l-[#0000]">
													⚠️ Please fill out this field
												</p>
											)}
										</div>
									</div>
									<label htmlFor="" className="font-[400] text-[16px] text-neutral-300">
										Message<span className="text-primary-600 text-lg">*</span>
									</label>{" "}
									<br />
									<div className="relative">
										<textarea
											onChange={(e) => setMessage(e.target.value)}
											name=""
											id=""
											required
											placeholder="Share your greatest marketing challenges or dreams!🙂"
											cols="30"
											rows="7"
											className="outline-none border-[1px] border-[rgba(84,101,119,0.40)] bg-[rgba(53,65,77,0.20)] w-full h-[150px] resize-none text-[16px] text-neutral-50 font-[400] px-4 py-3 mt-2 rounded-[4px] "
										></textarea>
										{message === null && (
											<p className="text-[14px] rounded absolute bottom-[-45px] left-[15%] px-[10px] py-[8px] z-10 bg-[#f1f1f1] before:content-[''] before:absolute before:left-[15%] before:top-[-50%] before:rotate-180  before:border-[10px] before:border-solid before:border-[#f1f1f1] before:border-r-[#0000] before:border-b-[#0000] before:border-l-[#0000]">
												⚠️ Please fill out this field
											</p>
										)}
									</div>
									<div className="mt-[20px] ">
										<input
											onClick={handleSubmit}
											type="submit"
											value="Submit your map to success"
											className="w-full shadow py-2 px-2 cursor-pointer rounded-[4px] bg-primary-600 hover:bg-[#E74329] text-white text-[16px] font-[700] uppercase "
										/>
									</div>
								</form>
							</div>
							<p className="pt-[30px] text-[#848484] text-[12px]">
								Your information will be kept private. We won't ever sell it and we won't ever spam you. We hate that sort of BS as much as you do.
							</p>
							<p className="py-5 text-[#848484] text-[12px]">
								We are not the only competent digital agency out there, so we appreciate you considering us. We take that responsibility seriously.
							</p>
							<p className="text-[#848484] text-[12px] ">Great things ahead!</p>
						</div>
					</div>
				</div>
			</div>
		);
	} catch (error) {
		return (
			<>
				<p>{error.message}</p>
				{/* <div className="md:h-[800px] w-full bg-[#fff7f5] pb-28 md:pb-0 px-[10px]">
					<div className="flex justify-center pt-20">
						<Image src="/under_maintanence.svg" height={400} width={700} alt="this page is under maintanence" />
					</div>
					<h1 className="text-center text-[28px] md:text-[38px] pt-5 font-bold ">This Page Is Under Maintenance 🛠️</h1>
				</div>
				<div className="break_line image bg-[url('/footer_top_cta_bottom.svg')] h-[90px] w-full bg-[length:2000px_90px] absolute z-10 mt-[-65px] rotate-180 bg-center"></div> */}
			</>
		);
	}
}

export default ContactUs;
