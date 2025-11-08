import LazyLoadingVideo from "@/components/global/LazyLoadingVideo";
import FillButton from "@/components/ui/buttons/FillButton";
import Container from "@/components/ui/Container";
import UnderlineHeadline from "@/components/ui/UnderlineHeadline";
import React from "react";
import BookingMaxLongCrad from "../home/BookingMaxLongCrad";

function BookingMaxVideo({ data }) {
	return (
		<div className="bg-secondary-900 pt-[100px] lg:pt-[140px]">
			<Container>
				<div className="flex flex-col items-center mb-[80px]">
					<UnderlineHeadline text={data?.headline} text_light={true} text_center={true} />
				</div>
				<BookingMaxLongCrad data={data} isStroke={false} />
			</Container>
		</div>
	);
}

export default BookingMaxVideo;
