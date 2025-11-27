
import FrequentlyAsk from "@/components/global/faq/FrequentlyAsk";
import Blog from "@/components/pages/home/Blog";
import BookingMax from "@/components/pages/home/BookingMax";
import ComparisonSection from "@/components/pages/home/comparisonSection/ComparisonSection";
import HeroHome from "@/components/pages/home/hero/HeroHome";
import StatsAndClients from "@/components/pages/home/StatsAndClients";
import { getData } from "@/services/helper";
import Image from "next/image";
import { notFound } from "next/navigation";
import qs from "qs";

// export const dynamic = "force-dynamic"; // This page is dynamic and should not be cached
export const revalidate = 60;

export default async function Home() {
	const query = qs.stringify(
		{
			populate: {
				hero: { populate: ["logos", "title_second_line"] },
				portfolio: {
					populate: {
						statistics: true,
						logos: true,
						cards: { populate: ["image", "logos_with_alt"] },
					},
				},
				bookingmax: { populate: ["long_card", "other_card"] },
				services: true,
				video_testimonial: { populate: ["testimonial_card"] },
				cta: { populate: ["background_image"] },
				comparison: { populate: ["section_header", "comparison_table"] },
				tools: { populate: ["image"] },
				casestudy_section: {
					populate: {
						case_studies: {
							populate: {
								main_image: true,
								client_feedback: {
									fields: ["name", "designation", "feedback"],
								},
							},
							fields: ["headline", "slug", "state_1", "state_description1", "video_url"],
						},
					},
				},
				blog_section: {
					populate: {
						blogs: {
							populate: {
								main_image: true,
							},
							fields: ["headline", "slug", "updated_date", "Eyebrow_headline"],
						},
					},
				},
				faq: {
					populate: {
						question_answer: true,
					},
				},
			},
		},
		{ encodeValuesOnly: true }
	);

	const url = `${process.env.NEXT_PUBLIC_API_URL}/api/home?${query}`;

	const { data } = await getData(url, "Home page");

	if (!data) {
		notFound();
	}

	try {
		return (
			<div>
				<HeroHome data={data?.hero} />
				<StatsAndClients data={data?.portfolio} />
				<BookingMax data={data?.bookingmax} serviceData={data?.services} />

				<ComparisonSection
					data={{
						comparison: data?.comparison,
						tools: data?.tools,
						testimonials: data?.video_testimonial,
						caseStudies: data?.casestudy_section,
						banner: data?.cta,
					}}
				/>
				<Blog data={data?.blog_section} />
				<FrequentlyAsk data={data?.faq} />
			</div>
		);
	} catch (error) {
		notFound()
	}
}
