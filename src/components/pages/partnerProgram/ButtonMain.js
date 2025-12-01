"use client"
import React, { useEffect } from "react";
import { usePathname } from "next/navigation";

import { useDispatch } from "react-redux";
import { setToggle } from "@/lib/features/toggleSlice";

function ButtonMain({text}) {
    const dispatch = useDispatch();
	const pathname = usePathname();

	const handleLocation = () => dispatch(setToggle(true));

	useEffect(() => {
		dispatch(setToggle(false));
	}, [pathname, dispatch]);

	return (
		<button
			onClick={handleLocation}
			className=" cursor-pointer bg-red-600 hover:bg-red-700 uppercase text-white text-[14px] xs:text-[16px] font-semibold px-[30px] xs:px-[35px] py-[12px] xs:py-[15px] rounded flex items-center justify-center gap-2 mx-auto"
		>
			{text? text:"Apply for Partner Program"}
		</button>
	);
}

export default ButtonMain;
