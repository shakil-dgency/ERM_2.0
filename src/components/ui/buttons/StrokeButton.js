import Image from "next/image";
import Link from "next/link";
import React from "react";

function StrokeButton({ url = "/", small, medium, left_icon, right_icon, text = "click here" }) {
	return (
		<div className="">
			<Link href={`${url}`} className={`group flex justify-center items-center gap-1 border-[1px] border-primary-600 hover:border-primary-700 rounded-[6px] text-neutral-50 hover:bg-primary-800 leading-[100%]  ${small? "px-[20px] py-[13px] text-[14px] font-[500px]": medium?"px-[25px] py-[16px] text-[16px] font-[600px]":"px-[35px] py-[18px] text-[18px] font-[700]"}`}>
				{left_icon && <Image src={left_icon} alt="Left Icon" width={20} height={20} className={`inline-block group-hover:translate-x-[2px] duration-300 ${small? "h-[16px] w-[16px]": medium?"h-[20px] w-[20px]":"h-[22px] w-[22px]"}`} />} <span>{text}</span>
                {right_icon && <Image src={right_icon} alt="Right Icon" width={20} height={20} className= {`inline-block group-hover:translate-x-[2px] duration-300 ${small? "h-[16px] w-[16px]": medium?"h-[20px] w-[20px]":"h-[22px] w-[22px]"}`} />}
			</Link>
		</div>
	);
}

export default StrokeButton;
