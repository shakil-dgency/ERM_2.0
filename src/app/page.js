
import FrequentlyAsk from "@/components/global/faq/FrequentlyAsk";
import Blog from "@/components/pages/home/Blog";
import BookingMax from "@/components/pages/home/BookingMax";
import ComparisonSection from "@/components/pages/home/comparisonSection/ComparisonSection";
import HeroHome from "@/components/pages/home/hero/HeroHome";
import StatsAndClients from "@/components/pages/home/StatsAndClients";
import Image from "next/image";

export const dynamic = "force-dynamic"; // This page is dynamic and should not be cached

export default function Home() {
  return (
   <div>
    <HeroHome />
    <StatsAndClients />
    <BookingMax />
    <ComparisonSection />
    <Blog />
    <FrequentlyAsk />
   </div>
  );
}
