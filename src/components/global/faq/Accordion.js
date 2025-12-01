"use client";

import Image from "next/image";
import React, { createContext, useContext, useEffect, useRef, useState, useCallback, memo } from "react";

const AccordianContext = createContext();

export function Accordion({ children, value = null, onChange, ...props }) {
	const [selected, setSelected] = useState(value.initialSelectedValue ?? null);
	// closedItems tracks items user closed when openAll === true
	const [closedItems, setClosedItems] = useState(() => new Set());

	// when openAll toggles, reset closedItems
	useEffect(() => {
		setClosedItems(new Set());
		// if openAll turns off and selected is null, keep selected as-is or set to first child
		if (!value.openAll && value.initialSelectedValue === undefined && children && children.length > 0) {
			setSelected(children[0]?.props?.value.initialSelectedValue ?? null);
		}

		if (value.openAll) {
			setSelected(null);
		}
	}, [value, children, selected]);

	useEffect(() => {
		onChange?.(selected);
	}, [selected, onChange]);

	const toggleClosedItem = useCallback((val) => {
		setClosedItems((prev) => {
			const next = new Set(prev);
			if (next.has(val)) next.delete(val);
			else next.add(val);
			return next;
		});
	}, []);

	return (
		<ul {...props} itemScope itemType="https://schema.org/FAQPage">
			<AccordianContext.Provider
				value={{
					selected,
					setSelected,
					openAll: value.openAll,
					closedItems,
					toggleClosedItem,
				}}
			>
				{children}
			</AccordianContext.Provider>
		</ul>
	);
}

function AccordianItem({ children, value, trigger, index, ...props }) {
	const { selected, setSelected, openAll, closedItems, toggleClosedItem } = useContext(AccordianContext);
	const ref = useRef(null);
	const [contentHeight, setContentHeight] = useState(0);

	// compute whether this item is open
	const open = openAll ? !closedItems.has(value) : selected === value;

	// measure content height using ResizeObserver so dynamic content is handled
	useEffect(() => {
		if (!ref.current) return;
		const el = ref.current;
		const update = () => setContentHeight(el.offsetHeight);

		update();
		const ro = new ResizeObserver(() => update());
		ro.observe(el);
		return () => ro.disconnect();
	}, [children]);

	const onHeaderClick = () => {
		if (openAll) {
			// toggle this single item closed/open while keeping openAll true
			toggleClosedItem(value);
			// do not change global selected
		} else {
			// single-select behavior
			setSelected(open ? null : value);
		}
	};

	return (
		<li {...props} itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
			<header
				role="button"
				onClick={onHeaderClick}
				className="group relative flex justify-between items-center gap-1 border-t-[1px] border-t-[#191D23] pb-[30px] lg:pb-[50px] pt-[25px] lg:pt-[45px] text-[20px] lg:text-[32px] font-[500] text-[#fff] cursor-pointer"
			>
				<span itemProp="name" className="relative z-10 mt-1">
					{trigger}
				</span>
				<div
					className={`transition-transform flex-none border-[1px] bg-secondary-900 border-secondary-600 group-hover:border-transparent group-hover:drop-shadow-[0px_0px_5px_#ff492c90] duration-300 p-2 sm:p-2.5 rounded-full`}
				>
					{open ? (
						<Image src="/global/lock_open.svg" height={20} width={18} alt="" className="w-[15px] sm:w-[20px] h-[15px] sm:h-[20px] mb-[1px] " />
					) : (
						<Image src="/global/lock.svg" height={20} width={18} alt="" className="w-[15px] sm:w-[20px] h-[15px] sm:h-[20px] " />
					)}
				</div>
				<div className="absolute text-[48px] lg:text-[96px] font-[700] text-[#191d23]">0{index + 1}</div>
			</header>

			<div
				itemScope
				itemProp="acceptedAnswer"
				itemType="https://schema.org/Answer"
				className="overflow-hidden transition-[height] duration-500 max-w-[1184px] lg:ml-[40px] text-[16px] lg:text-[20px] leading-[1.6] text-[#9d9d9d]"
				style={{ height: open ? contentHeight : 0 }}
			>
				<div className="lg:pt-[20px] pb-[50px]" ref={ref} itemProp="text">
					{children}
				</div>
			</div>
		</li>
	);
}

export default memo(AccordianItem);
