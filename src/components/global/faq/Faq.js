"use client";
import React, { useEffect, useState } from "react";
import AccordianItem, { Accordion } from "./Accordion";
import { IoMdArrowDropleft } from "react-icons/io";

function Faq({ data, allFaq }) {
	const initialSelectedValue = data && data[0]?.id;

	const [openAll, setOpenAll] = useState(false);

	const handleToggleAll = () => {
		setOpenAll(!openAll);
	};

	return (
		<div className=" ">
			{!allFaq && <div className="flex justify-end mb-6">
				<button onClick={handleToggleAll} className="cursor-pointer flex items-center text-[14px] sm:text-[16px] font-[600] text-primary-600 rounded-md transition-all">
					{openAll ? "Collapse all" : "Expand all"}
					<span className="flex flex-col justify-center">
						<IoMdArrowDropleft className={` ml-1.5 text-[16px] sm:text-[20px] transform duration-300 ${openAll ? "rotate-270" : "rotate-90"}`} />
						<IoMdArrowDropleft className={` ml-1.5 text-[16px] sm:text-[20px] -mt-2 sm:-mt-2.5 transform duration-300 ${openAll ? "-rotate-270" : "-rotate-90"}`} />
					</span>
				</button>
			</div>}
			<Accordion className="flex flex-col " value={{ initialSelectedValue, openAll }}>
				{data &&
					data?.map((item, i) => {
						return (
							<AccordianItem value={item?.id} trigger={item?.question} key={item?.id} index={i}>
								{item?.answer}
							</AccordianItem>
						);
					})}
			</Accordion>
		</div>
	);
}

export default Faq;
