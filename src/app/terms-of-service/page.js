import React from "react";

async function page() {
	const url = `${process.env.NEXT_PUBLIC_API_URL}/api/team`;

	const { data } = await getData(url, "team page");

	return <div>page</div>;
}

export default page;
