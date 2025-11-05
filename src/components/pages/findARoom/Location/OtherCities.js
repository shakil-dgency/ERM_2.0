"use client";
import React, { useEffect, useState } from "react";
import LocationCard from "../LocationCard";
import qs from "qs";

function OtherCities({ data }) {
	const query = qs.stringify(
		{
			populate: {
				city_names: {
					populate: {
						city_image: true,
						companies: {
							populate: {
								games: true,
							},
						},
					},
				},
			},
		},
		{ encodeValuesOnly: true }
	);

	const [cities, setCities] = useState();

	useEffect(() => {
		const countryName = data ? data?.country.country_name : null;
		const fetchCities = async () => {
			const cities = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/countries?${query}&filters[country_name][$eq]=${countryName}`)
				.then((res) => res.json())
				.then((res) => res.data);

			const filteredCity = cities[0]?.city_names.filter((city) => city.city_name !== data?.city_name);
			setCities(filteredCity);
		};
		fetchCities();
	}, []);

	return (
		<div>
			<div className="max-w-[970px] mt-[100px] lg:mt-[140px] ">
				<h2>{data?.other_location?.headline}</h2>
				<p className="text-[16px] sm:text-[18px] text-neutral-700 mt-4">{data?.other_location?.description}</p>
			</div>
			<div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-5 xs:gap-2.5 md:gap-[24px] mt-10">
				{cities?.map((item, i) => (
					<LocationCard key={i} city={item} />
				))}
			</div>
		</div>
	);
}

export default OtherCities;
