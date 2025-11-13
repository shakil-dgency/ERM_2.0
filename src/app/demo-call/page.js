import DemoCall from "@/components/pages/demoCall/DemoCall";
import React from "react";
import qs from "qs";
import { getData } from "@/services/helper";
import { notFound } from "next/navigation";

export const revalidate = 60;

async function page() {
	const query = qs.stringify(
		{
			populate: {
				advices:{
					populate:{
							cards:{
								populate:{
									icon:true
								}
							}
					}
				},
			},
		},
		{ encodeValuesOnly: true }
	);

	const url = `${process.env.NEXT_PUBLIC_API_URL}/api/demo-call?${query}`;

	const { data } = await getData(url, "contact page");

	if (!data) {
		return notFound();
	}
	console.log(data);
	return (
		<div>
			<DemoCall data={data} />
		</div>
	);
}

export default page;
