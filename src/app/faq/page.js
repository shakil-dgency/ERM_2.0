import Faq from "@/components/global/faq/Faq";
import FrequentlyAsk from "@/components/global/faq/FrequentlyAsk";
import Hero from "@/components/pages/about/Hero";
import Container from "@/components/ui/Container";
import React from "react";

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

function page() {
	return (
		<div>
			<Hero />
			<div className="bg-secondary-900 py-[140px]">
				<Container>
					<p className="text-[54px] font-[700] text-primary-500 pb-[100px]">General Questions</p>
					<div className="mx-[30px] lg:mx-[120px]">
						<Faq data={faqData} />
					</div>
					<p className="text-[54px] font-[700] text-primary-500 pt-[100px] pb-[100px]">General Questions</p>
					<div className="mx-[30px] lg:mx-[120px]">
						<Faq data={faqData} />
					</div>
				</Container>
			</div>
		</div>
	);
}

export default page;
