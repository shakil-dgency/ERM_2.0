import React from "react";
import Faq from "./Faq";

// async function getFaqData() {
// 	const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/profile?populate[0]=faq.section_head&populate[1]=faq.faq_item`, {
// 		next: { revalidate: 10 },
// 	});

// 	const faqData = await res.json();
// 	return faqData;
// }

const faqData = [
	{
		id: 1,
		faq_id: "faq-001",
		question: "What is your return policy?",
		answer:
			"Escape Room Marketer is built exclusively for the escape room industry. We’re not a generalist agency that happens to work with one or two escape room brands. Everything we do—from campaign strategy to website design—is rooted in deep industry knowledge and player behavior insights. We understand what drives bookings, how families, gamers, and corporate teams make decisions, and how to target them at the right time with the right message. Our clients don’t just get more traffic—they get more games played, more birthday parties, more corporate events, and ultimately, more revenue.",
	},
	{
		id: 2,
		faq_id: "faq-002",
		question: "Do you ship internationally?",
		answer: "Yes, we offer international shipping to most countries worldwide.",
	},
	{
		id: 3,
		faq_id: "faq-003",
		question: "How can I track my order?",
		answer: "Once your order is shipped, we’ll send you an email with the tracking number.",
	},
	{
		id: 4,
		faq_id: "faq-004",
		question: "Can I change my order after placing it?",
		answer: "Yes, you can change your order within 12 hours by contacting our support team.",
	},
];

async function FrequentlyAsk({ data }) {
	// const faqData = await getFaqData();
	return (
		<div>
			<div id="FrequentlyAsk" className="bg-secondary-900 pt-[80px] md:pt-[100px] pb-[100px] md:pb-[140px]">
				<div className=" max-w-[1316px] mx-auto px-2.5">
					<div>
						<p className="text-[44px] xs:text-[64px] lg:text-[128px] font-[700] text-[#fff] text-center leading-[1] whitespace-nowrap">
							<span className="relative -ml-[50px] lg:-ml-[100px] inline-block align-baseline">
								<span className="highlighted_text absolute right-[40%] translate-x-[50%] 2xl:translate-x-0 2xl:right-full top-[-20px] 2xl:top-6  ">{data?.Eyebrow_headline}</span>
								Common
							</span>
							<br />
							<span className="ml-[50px] lg:ml-[200px]"> Questions</span>
						</p>
					</div>
					<div className="mt-[50px] lg:mt-20">
						<Faq data={data?.question_answer} />
					</div>
				</div>
			</div>
		</div>
	);
}

export default FrequentlyAsk;
