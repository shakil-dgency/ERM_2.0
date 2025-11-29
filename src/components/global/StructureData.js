"use client";
import React from "react";

function StructureData({ data }) {
	return (
		<>
			<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
		</>
	);
}

export default StructureData;
