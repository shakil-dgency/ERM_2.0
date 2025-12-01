"use client"
import React, { useState } from "react";
import { FaRegCheckCircle } from "react-icons/fa";
import { RiErrorWarningFill } from "react-icons/ri";
// import { RiErrorWarningFill } from "react-icons/ri";
// import { FaRegCheckCircle } from "react-icons/fa";

function EmailSubscribe() {
	const [subscriber, setSubscriber] = useState("");
	const [error, setError] = useState({
		message: null,
		statusCode:null
	});
	const validateEmail = (email) => {
		const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return re.test(String(email).toLowerCase());
	};

	const handleEmailPost = async (e) => {
		e.preventDefault();

        if(subscriber === ""){
            return
        }

		// Validate email
		if (!validateEmail(subscriber)) {
			setError((prev)=>({...prev,message:"Invalid email address"}));
			setTimeout(() => {
				setError((prev)=>({...prev,message:null}));
			}, 2000);
			return;
		}

		// setError(null); // Clear previous error if email is valid

		try {
			setError((prev)=>({...prev,statusCode:202}));
			const response = await fetch("https://acumbamail.com/webhook/incoming/pcGDyJUUGXJ3okHA0NPJUnzcjzc/nibvykKoZBKdZFYTzu0ZdA==/", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Authorization: "f31dc514133f42e7a1989dcb6cb9f671",
				},
				body: JSON.stringify({
					email: subscriber,
				}), // Make sure 'subscriber' is defined and contains the necessary data
			});

			if (!response.ok) {
				if (response.status === 400) {
					setError((prev)=>({...prev,message:"You have already subscribed with this email.",statusCode:400}));
					setTimeout(() => {
						setError((prev)=>({...prev,message:null,statusCode:null}));
					}, 2500);
				}
				throw new Error(`HTTP error! status: ${response.status}`);
			}

			const data = await response.json();
			if(data){
				setError((prev)=>({...prev,message:"Thank you for being with us.",statusCode:200}))
				setTimeout(() => {
					setError((prev)=>({...prev,message:null,statusCode:null}));
				}, 2500);
			}
			setSubscriber("");
		} catch (error) {
			console.error("Error:", error);
		}
	};

	return (
		<div>
			<form action="" className="   ">
				<div className="relative max-w-[330px] sm:max-w-[550px] mx-auto ">
					<p className="mb-3 text-[16px] md:text-[20px] font-[600] text-neutral-400 text-center">Subscribe for Weekly Insights</p>
					<div className="flex">
						<input
							type="email"
							value={subscriber}
							onChange={(e) => setSubscriber(e.target.value)}
							placeholder=""
							className="outline-none px-2 py-[8px] w-full text-neutral-50 text-[16px] rounded-l-[10px] border border-[#19212B] bg-[#0D1116]"
						/>
						<button onClick={handleEmailPost} className={` bg-[#D42F00]  text-white rounded-r-[10px] text-[16px] font-[700] px-[35px] `}>
							SUBSCRIBE
						</button>
					</div>
					<p className="text-[14px] text-neutral-400 text-center pt-4">Get growth strategies, booking trends, and creative ideas straight to your inbox.</p>
					{error.message && (
						<p className={`${error?.statusCode === null ?"bg-[#ffcdd2] before:border-[#ffcdd2]":"bg-[#d1ffd1] before:border-[#d1ffd1]"} py-1.5 px-5 text-[15px] text-[#101010] absolute top-[80%] shadow rounded flex items-center gap-2 before:content-[''] before:absolute before:left-[15%] before:bottom-[100%]  before:border-[10px] before:border-solid  before:border-r-[#0000] before:border-b-[#0000] before:border-l-[#0000] before:rotate-180 `}>
							{error?.statusCode === null ?<RiErrorWarningFill className="text-xl text-[#ef5350] font-bold " />:
                            <FaRegCheckCircle className="text-lg text-[#62c762] font-bold" />}
							{error.message}
						</p>
					)}
				</div>
				
			</form>
		</div>
	);
}

export default EmailSubscribe;
