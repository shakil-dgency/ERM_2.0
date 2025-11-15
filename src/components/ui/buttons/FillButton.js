import Image from "next/image";
import Link from "next/link";
import React from "react";

function FillButton({ url , small, medium, left_icon, right_icon, text = "click here", handleClick }) {
	return (
		<div className="">
			{ !url ? (
				<div onClick={handleClick}
					className={`group cursor-pointer flex justify-center items-center gap-1 border-[1px] border-primary-700 rounded-[6px] text-neutral-50 bg-primary-600 hover:bg-primary-800 duration-300 leading-[100%]  ${
						small
							? "px-[20px] py-[13px] text-[14px] font-[500px]"
							: medium
							? "px-[25px] py-[16px] text-[16px] font-[600px]"
							: "px-[15px] sm:px-[35px] py-[14px] sm:py-[18px] text-[12px] xs:text-[14px] sm:text-[18px] font-[700]"
					}`}
				>
					{left_icon && (
						<Image
							src={left_icon}
							alt="Left Icon"
							width={20}
							height={20}
							className={`inline-block  group-hover:translate-x-[-2px] mr-[2px] duration-300 ${
								small ? "h-[16px] w-[16px]" : medium ? "h-[20px] w-[20px]" : "h-[12px] sm:h-[16px] w-auto"
							}`}
						/>
					)}{" "}
					<span>{text}</span>
					{right_icon && (
						<Image
							src={right_icon}
							alt="Right Icon"
							width={20}
							height={20}
							className={`inline-block group-hover:translate-x-[2px] ml-[2px] duration-300  ${
								small ? "h-[16px] w-[16px]" : medium ? "h-[20px] w-[20px]" : "h-[12px] sm:h-[16px] w-auto"
							}`}
						/>
					)}
				</div>
			) : (
				<Link
					href={`${url}`}
					className={`group flex justify-center items-center gap-1 border-[1px] border-primary-700 rounded-[6px] text-neutral-50 bg-primary-600 hover:bg-primary-800 duration-300 leading-[100%]  ${
						small
							? "px-[20px] py-[13px] text-[14px] font-[500px]"
							: medium
							? "px-[25px] py-[16px] text-[16px] font-[600px]"
							: "px-[15px] sm:px-[35px] py-[14px] sm:py-[18px] text-[12px] xs:text-[14px] sm:text-[18px] font-[700]"
					}`}
				>
					{left_icon && (
						<Image
							src={left_icon}
							alt="Left Icon"
							width={20}
							height={20}
							className={`inline-block group-hover:translate-x-[-2px] mr-[2px] duration-300 ${
								small ? "h-[16px] w-[16px]" : medium ? "h-[20px] w-[20px]" : "h-[12px] sm:h-[16px] w-auto"
							}`}
						/>
					)}{" "}
					<span>{text}</span>
					{right_icon && (
						<Image
							src={right_icon}
							alt="Right Icon"
							width={20}
							height={20}
							className={`inline-block group-hover:translate-x-[2px] ml-[2px] duration-300  ${
								small ? "h-[16px] w-[16px]" : medium ? "h-[20px] w-[20px]" : "h-[12px] sm:h-[16px] w-auto"
							}`}
						/>
					)}
				</Link>
			)}
		</div>
	);
}

export default FillButton;
