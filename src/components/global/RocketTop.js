"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";


function RocketTop() {
	const [rocketState, setRocketState] = useState(false);
	const [circle, setCircle] = useState(true);
	let previousScroll = 0;
	useEffect(() => {
		const rocket = document.getElementById("Layer_1");
		const handleScroll = () => {
			const scroll = window.scrollY;

			if (previousScroll < scroll) {
				if (scroll > 2600) {
					setRocketState(true);
				} else {
					if (scroll === 0) {
						setRocketState(false);
					}
				}
			} else {
				if (scroll === 0) {
					setRocketState(false);
				}
			}

			if (scroll === 0) {
				setTimeout(() => {
					rocket.style.transform = "translateY(0px)";
					setCircle(true);
				}, 500);
			}

			// console.log(previousScroll < scroll);
			previousScroll = scroll;
		};

		window.addEventListener("scroll", handleScroll);
	});

	const handleRocketLaunch = () => {
		const rocket = document.getElementById("Layer_1");
		const fire = document.getElementById("fire");

		rocket.style.transform = "translateY(-200px)";
		rocket.style.transitionDuration = "900ms";
		fire.classList.add("flameActive");
		fire.classList.remove("fire_active");
		setCircle(false);

		// console.log(fire.classList);

		let currentYOffset = self.scrollY;
		let initYOffset = currentYOffset;

		var intervalId = setInterval(function () {
			currentYOffset -= initYOffset * 0.02;
			document.body.scrollTop = currentYOffset;
			document.documentElement.scrollTop = currentYOffset;

			if (self.scrollY == 0) {
				clearInterval(intervalId);
				fire.classList.remove("flameActive");
				fire.classList.add("fire_active");
			}
		}, 30);
	};

	return (
		<div>
			<div className={`rocket-box group  xl:bottom-16 bottom-8 z-30 right-4 xl:right-16 ${rocketState ? "fixed" : "hidden duration-300"}`}>
				<div className="relative ">
					<svg
						onClick={handleRocketLaunch}
						version="1.1"
						id="Layer_1"
						xmlns="http://www.w3.org/2000/svg"
						xmlnsXlink="http://www.w3.org/1999/xlink"
						x="0px"
						y="0px"
						fill="none"
						viewBox="0 0 80 79"
						xmlSpace="preserve"
					>
						<g>
							<path
								class="st0"
								id="flame"
								d="M39.8,60.6c-9.5,0.5-5.1,13.6-0.8,17.9c0.4,0.5,1.2,0.5,1.5,0C44.9,74.2,49.2,61.2,39.8,60.6z M43.4,66.8
		c-0.1,2.1-0.6,4.1-1.5,6c-0.6,1.2-1.3,2.4-2.1,3.5c-2.1-2.7-3.4-6.1-3.6-9.5C35.8,61.2,43.8,61.2,43.4,66.8z"
							/>
							<g>
								<path
									class="st1"
									id="ring"
									d="M31.6,26.4c-0.1,7.1,9,10.8,14.1,5.7c5.2-5,1.4-13.9-5.8-13.8C35.3,18.3,31.6,21.9,31.6,26.4z M46,26.4
			c-0.2,8.1-12.1,8.1-12.4,0C33.9,18.4,45.7,18.4,46,26.4z"
								/>
								<path
									class="st1"
									id="rocket"
									d="M55.8,31.4c0-0.5,0-0.9-0.1-1.4c-0.1-1.6-0.3-3.3-0.6-5c-1.3-7.4-4.4-14.2-9.3-19.8c-1.3-1.5-2.7-2.8-4.2-4
			c-0.4-0.3-0.7-0.6-1.1-0.9c-0.2-0.1-0.4-0.2-0.6-0.2v0c0,0,0,0,0,0v0c0,0,0,0,0,0c0,0,0,0,0,0c-0.2,0-0.4,0.1-0.6,0.2
			c-0.1,0.1-0.3,0.2-0.4,0.3c-2.2,1.7-4.2,3.7-6,5.9c0,0,0,0-0.1,0.1c-0.1,0.1-0.1,0.1-0.2,0.2c-3.7,4.6-6.2,10.1-7.6,15.9
			c-0.7,2.9-1.1,5.9-1.1,8.7c-10.4,7.8-8.8,20.6-3.7,27.3c0.1,0.2,0.3,0.3,0.6,0.4c0.1,0,0.2,0,0.3,0c0.3,0,0.6-0.1,0.8-0.4l3.2-4
			c0,0,0.1-0.1,0.1-0.1l2.8-3.5c0.4,0,0.8,0,1.2,0h2.5l1.2,3.5c0.4,1.2,1.6,2.1,2.9,2.1h0h4.1h0h0v0h4.1c1.3,0,2.5-0.8,2.9-2.1
			l1.2-3.5h1c1.1,0,2,0,2.7,0l2.7,3.4c0,0.1,0.1,0.1,0.1,0.2l3.2,4c0.2,0.3,0.5,0.4,0.8,0.4c0,0,0,0,0,0c0.3,0,0.6-0.1,0.8-0.4
			C64.6,52,66.2,39.2,55.8,31.4z M42.6,49.1c-0.9,0-1.8,0-2.8,0c0,0,0,0,0,0c0,0,0,0,0,0c-4.2,0-8.5,0-11.6,0
			c-1.6-5.6-3.8-16.8-0.7-28c0-0.2,0.1-0.3,0.1-0.5c0-0.1,0-0.2,0.1-0.2c0.8-2.6,1.8-5.1,3.2-7.4c0.1-0.1,0.1-0.2,0.2-0.3
			c0-0.1,0.1-0.1,0.1-0.2c0.5-0.9,1.1-1.7,1.7-2.6c1.9-2.7,4.3-5.2,6.9-7.4c2.7,2.2,5,4.7,6.9,7.4c10.1,14.3,6.8,31.7,4.7,39.3
			c-0.2,0-0.4,0-0.6,0C48.5,49.1,45.6,49.1,42.6,49.1z M21.2,56.4c-0.1-0.2-0.2-0.3-0.3-0.5c-0.5-1-1.2-2.2-1.7-3.8
			c-1.2-3.9-1.3-8.4,0.6-12.5c1.1-2.3,2.6-4,3.9-5.3c0.1-0.1,0.1-0.1,0.2-0.2c0,1.6,0.1,3.1,0.3,4.5c0,0,0,0.1,0,0.1
			c0.3,3.4,1.2,8.2,2.1,11.2L21.2,56.4z M39.8,54.7h-4.1c-0.4,0-0.8-0.3-1-0.7l-1-2.8c1.9,0,3.9,0,6,0c0,0,0,0,0,0v0
			c0.9,0,1.8,0,2.7,0c1.1,0,2.3,0,3.3,0l-1,2.8c-0.1,0.4-0.5,0.7-1,0.7H39.8L39.8,54.7z M55.5,38.5c0.1-1.4,0.2-2.9,0.2-4.4
			c0.4,0.4,0.9,0.8,1.3,1.2c0,0,0.1,0.1,0.1,0.1c0,0,0,0,0,0c0.6,0.7,1.2,1.4,1.7,2.3c3.9,6.2,2.8,13.8-0.3,18.7l-5.1-6.4
			c0.9-3,1.8-7.7,2.1-11.2C55.5,38.6,55.5,38.5,55.5,38.5z"
								/>
							</g>
						</g>
						<use fill="#FCAB10" xlinkHref="#flame" id="fire" className="fire_active"></use>
						<use fill="#d42f00" xlinkHref="#ring" id="ToTopRocket"></use>
						<use fill="#d42f00" xlinkHref="#rocket" id="ToTopRocket"></use>
					</svg>
					<div
						id="circle"
						className={`${
							circle ? "translate-y-[-50%]" : "translate-y-[200px]"
						} duration-500 xl:h-[55px] h-[45px] w-[45px] xl:w-[55px] rounded-full border-[1px] border-secondary-400 bg-secondary-700 absolute -z-10 top-[45%] md:top-[47%] left-[50%]  translate-x-[-50%]`}
					></div>
				</div>
			</div>
		</div>
	);
}

export default RocketTop;
