"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchServiceData } from "@/lib/features/serviceSlice";

export default function ServiceInitializer() {
	const dispatch = useDispatch();
	const { service, lastFetched } = useSelector((state) => state.service);

	useEffect(() => {
		// Fetch only if data not already in Redux
		setTimeout(() => {
			if (!service && !lastFetched) {
				dispatch(fetchServiceData());
			}
		}, 2000);
	}, [dispatch, service, lastFetched]);

	return null;
}
