import Container from "@/components/ui/Container";
import Image from "next/image";
import React from "react";

const StepsCard = ({index}) => {
	return (
		<div className={`${index % 2 !== 0 ?"lg:mt-[60px]":"lg:mb-[60px]"} max-w-[378px] p-4 md:p-7 rounded-[10px] bg-[radial-gradient(137.98%_137.98%_at_100%_2.3%,_var(--Colors-Secondary-500,_#35414D)_0%,_rgba(24,30,37,0.50)_52.58%,_rgba(24,30,37,0.00)_100%)] hover:bg-[radial-gradient(137.98%_137.98%_at_100%_2.3%,_rgba(204,55,34,0.40)_0%,_rgba(24,30,37,0.50)_52.58%,_rgba(24,30,37,0.00)_100%)] duration-500`}>
			<Image src="/pages/partnerProgram/step1.svg" alt="Step 1" width={52} height={80} />
			<p className="text-neutral-50 text-[20px] md:text-[24px] font-[600] mt-6 mb-2.5">Refer Clients</p>
			<p className="text-neutral-300 text-[14px] md:text-[16px] font-[400]">
				Introduce your client in seconds—whether through email, a quick phone call, or your custom referral link that tracks everything for you.
			</p>
		</div>
	);
};

function StepsToStart() {
	return (
		<div className="bg-secondary-900 pt-[130px] sm:pt-[195px] pb-[90px]">
			<Container>
				<div className="max-w-[800px] mb-[60px] sm:mb-[110px]">
					<h2 className="text-neutral-50 ">Follow These Steps to Start</h2>
					<p className="text-neutral-300 pt-4 md:text-[18px]">
						That’s why you’re missing out on weekday bookings, packed weekends, and high-value group inquiries for birthdays, team-building, school
						trips, and private events.
					</p>
				</div>
				<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
					{[...Array(4)].map((_, i) => (
						<StepsCard key={i} index={i} />
					))}
				</div>
			</Container>
		</div>
	);
}

export default StepsToStart;
