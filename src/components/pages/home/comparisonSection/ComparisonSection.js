import React from "react";
import Tools from "./Tools";
import Testimonials from "./Testimonials";
import CaseStudies from "./CaseStudies";
import Container from "@/components/ui/Container";
import ComparisonBox from "./ComparisonBox";
import Banner from "@/components/global/Banner";

const rows = [
	{
		label: "Point of Contact",
		erm: "Dedicated Account Manager + Escape Room Growth Strategist",
		agency: "Junior account rep juggling multiple industries",
		diy: "It's all on you—or someone part-time with no niche focus",
	},
	{
		label: "Results",
		erm: "Weekday traffic boost, repeat play strategies, high-value group bookings",
		agency: "Vague KPIs, hard to tie results to real bookings",
		diy: "Inconsistent, hard to scale, no testing infrastructure",
	},
	{
		label: "Reporting & Accountability",
		erm: "Transparent monthly reports tied to bookings, ROI, cost-per-lead",
		agency: "Confusing vanity metrics (clicks, impressions, CTRs)",
		diy: "No reporting—or you're left interpreting data yourself",
	},
	{
		label: "Strategy",
		erm: "Full-funnel escape room strategy — local SEO, paid ads, CRO, remarketing",
		agency: "One-size-fits-all playbook reused from other industries",
		diy: "Scrappy, limited to tools and tactics they’re familiar with",
	},
	{
		label: "Content & Creative",
		erm: "Custom story-driven ads, themed creatives, conversion-focused landing pages",
		agency: "Stock visuals and generic messaging",
		diy: "DIY Canva graphics or low-effort assets with no testing",
	},
	{
		label: "Performance Optimization",
		erm: "Focused on maximizing booking conversions (not just traffic)",
		agency: "Optimized for impressions or leads that don’t convert",
		diy: "Reactive, not proactive — no ongoing testing or CRO",
	},
	{
		label: "Group & Event Marketing",
		erm: "Specialized campaigns for birthdays, corporate events, schools, etc.",
		agency: "No framework or experience targeting group inquiries",
		diy: "Rarely know how to structure or retarget event segments",
	},
	{
		label: "Industry Knowledge",
		erm: "10+ years in escape room marketing — we speak your language",
		agency: "Learning your business on your dime",
		diy: "Limited exposure to the escape room industry",
	},
];

export default function ComparisonSection({ data }) {
	return (
		<div className={`${data?.caseStudies ? "py-[100px] lg:py-[140px]" : "pt-[100px] lg:pt-[140px]"}bg-white  bg-[url('/pages/home/papertexture.png')] bg-[length:240px_240px] bg-repeat`}>
			<Testimonials data={data?.testimonials} />
			<Banner data={data?.banner} />
			<div className="pt-[100px] lg:pt-[140px]">
				<ComparisonBox data={data?.comparison} />
			</div>
			<Tools data={data?.tools} />
			
			{data?.caseStudies && <CaseStudies data={data?.caseStudies} />}
		</div>
	);
}
