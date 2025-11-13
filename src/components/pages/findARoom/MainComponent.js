"use client";
import React from "react";
import HomeHero from "./HomeHero";
import Locations from "./Locations";
import Container from "@/components/ui/Container";

import { useSelector } from "react-redux";
import PopupLocationForm from "./PopupLocationForm";

function MainComponent({ children,data,newData}) {
	const toggle = useSelector((state) => state.toggle.toggle);

	return (
		<div>
			{!toggle ? (
				children
			) : (
				<PopupLocationForm data={data} newData={newData}  />
			)}
		</div>
	);
}

export default MainComponent;
