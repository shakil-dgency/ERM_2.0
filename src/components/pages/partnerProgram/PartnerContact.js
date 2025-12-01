/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

import { phoneSchema } from "@/services/PhoneNumberValidation";
import { sendFormData } from "@/services/forms";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setToggle } from "@/lib/features/toggleSlice";

function PartnerContact() {
	const [name, setName] = useState("");
	const [position, setPosition] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [country, setCountry] = useState("");
	const [message, setMessage] = useState("");
	const [isPhoneValid, setIsphoneValid] = useState("");
	const [isPhoneView, setIsphoneView] = useState(false);

	const [phoneCountryCode, setPhoneCountryCode] = useState("+1");

	const toggle = useSelector((state) => state.toggle.toggle);
	const dispatch = useDispatch();

	const handleClose = () => {
		document.body.classList.remove("overflow-hidden");
		document.body.classList.remove("lg:mr-[12.8px]");
		
		dispatch(setToggle(false));
		setName("");
		setEmail("");
		setPhone("");
	};

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

				if (name !== "" && regex.test(email) && position !== "" && message !== "") {
					e.preventDefault();
					contactObj = {
						data: { name, email, phone, country, position, message },
						subject: "Partner Program - Escape Room Marketer",
						form: "partner-program",
					};

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
					if (position === "") {
						setPosition(null);
						setTimeout(() => {
							setPosition("");
						}, 800);
					} else if (name === "") {
						setName(null);
						setTimeout(() => {
							setName("");
						}, 800);
					} else if (email === "" || regex.test(email) == false) {
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

	useEffect(() => {
		if (toggle) {
			document.body.classList.add("overflow-hidden");
			document.body.classList.add("lg:mr-[12.8px]");
			return () => {
				document.body.classList.remove("overflow-hidden");
				document.body.classList.remove("lg:mr-[12.8px]");
			};
		}

		if (window.innerWidth > 640) {
			setIsphoneView(false);
		} else {
			setIsphoneView(true);
		}
	}, [toggle]);

	return (
		<div className="overflow-y-auto">
			<div
				className={`${
					toggle ? "activee" : "popup"
				} w-[300px] xxs:w-[360px] xs:w-[400px] sm:w-[600px] md:w-[750px] xl:w-[1096px]  fixed top-[50%]  z-[999] `}
			>
				<div className="rounded-lg bg-secondary-900 pb-6 pt-10 sm:py-[45px]">
					{/* <Image src="/others/partner-contact.svg" height={100} width={400} alt="" className="w-full" /> */}
					<div
						onClick={handleClose}
						className="group absolute top-2 right-2 h-[25px] md:h-[40px] w-[25px] md:w-[40px] border-[1px] hover:border-primary-400 rounded-full flex justify-center items-center text-neutral-200 cursor-pointer"
					>
						<div className="">
							<p className="text-[30px] md:text-[40px] font-[300] rotate-45 ">+</p>
						</div>
					</div>

					<div className="px-2.5 md:px-5 xl:px-[70px] relative z-20 ">
						<p className="text-[18px] sm:text-[24px] lg:text-[36px] text-neutral-200 text-center font-[800] leading-tight mb-3 sm:mb-6 lg:mb-[55px]">
							Apply for Partner Program
						</p>

						<form action="">
							<div className=" flex flex-col sm:flex-row gap-[6px] sm:gap-[10px] md:gap-[50px] w-full">
								<div className="sm:w-full relative">
									<label htmlFor="" className="font-[400] text-[12px] sm:text-[14px] lg:text-[16px] text-neutral-300">
										Your name<span className="text-primary-600 text-lg">*</span>
									</label>{" "}
									<br />
									<input
										onChange={(e) => setName(e.target.value)}
										type="text"
										required
										className="outline-none border-[1px] border-[rgba(84,101,119,0.40)] bg-[rgba(53,65,77,0.20)] w-full sm:h-[50px] text-neutral-50 text-base px-2 py-1 mt-1 rounded-[4px] "
									/>
									{name === null && (
										<p className="text-[14px] rounded absolute bottom-[-45px] left-[25%] px-[10px] py-[8px] z-10 bg-[#f1f1f1] before:content-[''] before:absolute before:left-[15%] before:top-[-50%] before:rotate-180  before:border-[10px] before:border-solid before:border-[#f1f1f1] before:border-r-[#0000] before:border-b-[#0000] before:border-l-[#0000]">
											⚠️ Please fill out this field
										</p>
									)}
								</div>
								<div className="sm:w-full relative">
									<label htmlFor="" className="font-[400] text-[12px] sm:text-[14px] lg:text-[16px] text-neutral-300">
										Your email<span className="text-primary-600 text-lg">*</span>
									</label>{" "}
									<br />
									<input
										onChange={(e) => setEmail(e.target.value)}
										type="email"
										required
										className="outline-none border-[1px] border-[rgba(84,101,119,0.40)] bg-[rgba(53,65,77,0.20)] w-full sm:h-[50px] text-neutral-50 text-base px-2 py-1 mt-1 rounded-[4px] "
									/>
									{email === null && (
										<p className="text-[13px] rounded absolute bottom-[-45px] left-[15%] px-[10px] py-[8px] z-10 bg-[#f1f1f1] before:content-[''] before:absolute before:left-[15%] before:bottom-[100%] before:rotate-180  before:border-[10px] before:border-solid before:border-[#f1f1f1] before:border-r-[#0000] before:border-b-[#0000] before:border-l-[#0000]">
											⚠️ Please enter a valid email address
										</p>
									)}
								</div>
							</div>
							<div className="flex flex-col sm:flex-row gap-[6px] sm:gap-[10px] md:gap-[50px] my-[6px] md:my-[29px]">
								<div className="sm:w-full relative">
									<label htmlFor="" className="font-[400] text-[12px] sm:text-[14px] lg:text-[16px] text-neutral-300">
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
											height: isPhoneView ? "" : "50px",
											backgroundColor: "rgba(53,65,77,0.20)",
											border: "1px solid rgba(84,101,119,0.40)",
											color: "#fff",
											borderRadius: "4px ",
										}}
										inputProps={{
											required: true,
										}}
										type="number"
										className="input-phone-number text-base mt-1"
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
									<label htmlFor="" className="font-[400] text-[12px] sm:text-[14px] lg:text-[16px] text-neutral-300">
										Your position<span className="text-primary-600 text-lg">*</span>
									</label>{" "}
									<br />
									<input
										onChange={(e) => setPosition(e.target.value)}
										type="text"
										className="outline-none border-[1px] border-[rgba(84,101,119,0.40)] bg-[rgba(53,65,77,0.20)] w-full sm:h-[50px] text-neutral-50 text-base px-2 py-1 mt-1 rounded-[4px] "
									/>
									{position === null && (
										<p className="text-[14px] rounded absolute bottom-[-45px] left-[25%] px-[10px] py-[8px] z-10 bg-[#f1f1f1] before:content-[''] before:absolute before:left-[15%] before:top-[-50%] before:rotate-180  before:border-[10px] before:border-solid before:border-[#f1f1f1] before:border-r-[#0000] before:border-b-[#0000] before:border-l-[#0000]">
											⚠️ Please fill out this field
										</p>
									)}
								</div>
							</div>
							<label htmlFor="" className="font-[400] text-[12px] sm:text-[14px] lg:text-[16px] text-neutral-300">
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
									className="outline-none border-[1px] border-[rgba(84,101,119,0.40)] bg-[rgba(53,65,77,0.20)] w-full h-[100px] sm:h-[150px] resize-none text-[16px] text-neutral-50 font-[400] px-4 py-3 mt-1 rounded-[4px] "
								></textarea>
								{message === null && (
									<p className="text-[14px] rounded absolute bottom-[-45px] left-[15%] px-[10px] py-[8px] z-10 bg-[#f1f1f1] before:content-[''] before:absolute before:left-[15%] before:top-[-50%] before:rotate-180  before:border-[10px] before:border-solid before:border-[#f1f1f1] before:border-r-[#0000] before:border-b-[#0000] before:border-l-[#0000]">
										⚠️ Please fill out this field
									</p>
								)}
							</div>
							<div className="mt-[10px] sm:mt-[20px] ">
								<input
									onClick={handleSubmit}
									type="submit"
									value="Submit your map to success"
									className="w-full shadow py-2 px-2 cursor-pointer rounded-[4px] bg-primary-600 hover:bg-[#E74329] text-white text-[14px] sm:text-[16px] font-[700] uppercase "
								/>
							</div>
						</form>
					</div>
				</div>
			</div>
			<div className={`${toggle ? "block" : "hidden"} popup-cover fixed h-full w-full top-0 left-0 bg-[#000000de] backdrop-blur-[5px] z-50`}></div>
		</div>
	);
}

export default PartnerContact;
