import React from "react";
import ButtonMain from "./ButtonMain";

const PartnerCard = ({ index }) => {
	return (
		<div
			className={` max-w-[512px] px-2.5 sm:px-5 lg:px-7 py-5 sm:py-7 lg:py-[34px] rounded-[10px] bg-[radial-gradient(137.98%_137.98%_at_100%_2.3%,_rgba(151,177,203,0.60)_0%,_rgba(13,17,22,0.95)_42.58%,_#0D1116_100%)]`}
		>
			<p className="text-neutral-200 text-[20px] sm:text-[24px] font-[600] mb-2.5">Escape Room Influencers</p>
			<p className="text-neutral-400 text-[14px] sm:text-[16px] font-[400]">
				We’ll make you look great. Scorpion websites are built to match your brand, tell your story, and drive people to convert. 
			</p>
		</div>
	);
};

function OurPartner() {
	return (
		<div>
			<div className="max-w-[980px] mx-auto mt-[100px] md:mt-[140px] mb-[60px]">
				<h2 className="text-neutral-950 text-center">Who Can Be Our Partner</h2>
				<p className="text-neutral-700 pt-3 text-[18px] text-center">
					Get more first-timers, repeat players, and corporate groups—without lifting a finger.
				</p>
			</div>
            <div className="grid xs:grid-cols-2 md:grid-cols-3 gap-4 lg:gap-[24px] mb-[50px]">
                {[...Array(6)].map((_, i) => (
                    <PartnerCard key={i} />
                ))}
            </div>
            <ButtonMain />
		</div>
	);
}

export default OurPartner;
