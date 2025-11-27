import TermsBody from "@/components/pages/others/TermsBody";
import { getData } from "@/services/helper";
import React from "react";


export const revalidate = 60;

async function page() {
	const url = `${process.env.NEXT_PUBLIC_API_URL}/api/terms-of-service`;

	const { data } = await getData(url, "terms-of-service page");


	return (
		<div className="bg-secondary-900 py-[140px] relative">
			<div className="absolute top-0 h-[160px] w-full bg-[linear-gradient(0deg,rgba(13,17,22,0)_0%,rgba(13,17,22,0)_50%,rgba(230,64,39,0.2)_100%)]"></div>
			<div className="max-w-[1048px] mx-auto">
				<h2 className="text-center text-neutral-50 mb-[45px]">{data?.headline}</h2>
				<TermsBody data={data}  />
			</div>
		</div>
	);
}

export default page;
