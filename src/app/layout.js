import {Open_Sans } from "next/font/google";
import "./globals.css";
import Footer from "@/components/global/Footer";
import ScrollContext from "@/services/ScrollContext";
import Navbar from "@/components/global/Navbar";
import { Providers } from "@/lib/Providers";
import RouteChangeCloser from "@/services/RouteChangeCloser";
import ServiceInitializer from "@/services/ServiceInitializer";
import RocketTop from "@/components/global/RocketTop";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  display: "swap",
});



export const metadata = {
	title: "Escape Room Marketer",
	description: "Escaperoom Marketing Agency",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={`${openSans.variable} antialiased `}>
				{/* <ScrollContext> */}
					<Providers>
						<ServiceInitializer />
						<Navbar />
						{children}
						<Footer />
						<RouteChangeCloser />
						<RocketTop />
					</Providers>
				{/* </ScrollContext> */}
			</body>
		</html>
	);
}
