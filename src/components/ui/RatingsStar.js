import React from "react";
import StarRatings from "react-star-ratings";

function Star({ fill = 0, idx = 0, size = 0, color = "#ff492c", empty = "#E5E7EB",idPrefix = ""  }) {
	const gradId = `${idPrefix}-Grad-${idx}`;

	// clamp fill 0..100
	const clamped = Math.max(0, Math.min(100, Math.round(fill)));

	return (
		<div style={{ width: size, height: size, position: "relative", display: "inline-block" }}>
			{/* Gray (background) star */}
			<svg viewBox="0 0 16 15" width={size} height={size} style={{ position: "absolute", left: 0, top: 0 }} className="h-[13px] lg:h-[16px] w-[14px] lg:w-[17px]" xmlns="http://www.w3.org/2000/svg">
				<path d="M8,0L6.2,5.7H0.5l4.6,3.5L3.4,15L8,11.5l4.6,3.5l-1.8-5.7l4.6-3.5H9.8L8,0z" fill={empty} />
			</svg>

			{/* Colored star that uses a unique gradient */}
			<svg viewBox="0 0 16 15" width={size} height={size} className="h-[13px] lg:h-[16px] w-[14px] lg:w-[17px]" style={{ position: "absolute", left: 0, top: 0 }} xmlns="http://www.w3.org/2000/svg">
				<defs>
					<linearGradient id={gradId} x1="0%" x2="100%" y1="0%" y2="0%">
						{/* left: orange from 0 -> clamped% */}
						<stop offset="0%" stopColor={color} />
						<stop offset={`${clamped}%`} stopColor={color} />

						{/* right: gray from clamped% -> 100% */}
						<stop offset={`${clamped}%`} stopColor={empty} />
						<stop offset="100%" stopColor={empty} />
					</linearGradient>
				</defs>

				<path d="M8,0L6.2,5.7H0.5l4.6,3.5L3.4,15L8,11.5l4.6,3.5l-1.8-5.7l4.6-3.5H9.8L8,0z" fill={`url(#${gradId})`} />
			</svg>
		</div>
	);
}

export function RatingsStar({ rating ,idPrefix="", totalStars = 5, size = 20 }) {
	const stars = [];
	for (let i = 1; i <= totalStars; i++) {
		// compute fill percent for star i
		const fill = Math.min(100, Math.max(0, (rating - i + 1) * 100));
		stars.push(<Star key={i} idx={i} fill={fill} size={size} idPrefix={idPrefix} />);
        
	}
    

	return <div className="flex gap-[0px]">{stars}</div>;
}

export default RatingsStar;
