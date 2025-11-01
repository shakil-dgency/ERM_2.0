// "use client";
// import { useEffect, useState, createContext, useContext } from "react";
// import Lenis from "lenis";

// const SmoothScrollContext = createContext();

// export const useSmoothScroller = () => {
// 	return useContext(SmoothScrollContext);
// };

// export default function ScrollContext({ children }) {
// 	const [lenisRef, setLenisRef] = useState(null);
// 	const [refState, setRefState] = useState(null);

// 	useEffect(() => {
// 		const scroller = new Lenis();
// 		let rf;

// 		function raf(time) {
// 			scroller.raf(time);
// 			requestAnimationFrame(raf);
// 		}

// 		rf = requestAnimationFrame(raf);
// 		setRefState(rf);
// 		setLenisRef(scroller);
// 		return () => {
// 			if (lenisRef) {
// 				cancelAnimationFrame(refState);
// 				lenisRef.destroy();
// 			}
// 		};
// 	}, []);

// 	return <SmoothScrollContext.Provider value={lenisRef}>{children}</SmoothScrollContext.Provider>;
// }

"use client";
import { createContext, useContext, useEffect, useMemo, useRef } from "react";
import Lenis from "lenis";

const SmoothScrollContext = createContext(null);
export const useSmoothScroller = () => useContext(SmoothScrollContext);

export default function ScrollContext({ children }) {
	const lenisRef = useRef(null);
	const rafId = useRef(0);

	useEffect(() => {
		// Respect reduced motion
		const prefersReduced = typeof window !== "undefined" && window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

		if (prefersReduced) return; // fall back to native scroll

		// Create once with smoother feel
		const lenis = new Lenis({
			// Use duration+easing OR lerp (don’t mix). Duration feels natural.
			duration: 1.1, // 0.8–1.4 is a good range
			easing: (t) => 1 - Math.pow(1 - t, 3), // cubic ease-out
			smoothWheel: true,
			smoothTouch: false, // enable if you want smoothing on touch
			wheelMultiplier: 1, // bump to 1.2–1.4 if you want stronger wheel
			touchMultiplier: 1.2, // a touch of smoothing on trackpads
			gestureOrientation: "vertical",
		});

		lenisRef.current = lenis;

		const loop = (time) => {
			lenis.raf(time);
			rafId.current = requestAnimationFrame(loop);
		};
		rafId.current = requestAnimationFrame(loop);

		// Avoid page “jump” on mount
		// (optional) lenis.scrollTo(window.scrollY, { immediate: true });

		return () => {
			cancelAnimationFrame(rafId.current);
			lenis.destroy();
			lenisRef.current = null;
		};
	}, []);

	const api = useMemo(
		() => ({
			lenis: lenisRef,
			scrollTo: (target, opts) => lenisRef.current?.scrollTo(target, opts),
			// pause/resume helpers (handy for modals/menus/dragging)
			pause: () => lenisRef.current?.stop(),
			resume: () => lenisRef.current?.start(),
		}),
		[]
	);

	return <SmoothScrollContext.Provider value={api}>{children}</SmoothScrollContext.Provider>;
}
