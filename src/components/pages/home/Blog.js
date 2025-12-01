import BlogCard from "@/components/global/BlogCard";
import StrokeButton from "@/components/ui/buttons/StrokeButton";
import Container from "@/components/ui/Container";
import Link from "next/link";
import React from "react";

function Blog({ data }) {
	return (
		<div className="bg-secondary-900 py-[100px] lg:py-[120px]">
			<Container>
				<div className="">
					<div className="max-w-[750px] xl:max-w-[920px] ">
						<p className="highlighted_text">{data?.Eyebrow_headline}</p>
						<h2 className=" text-neutral-50">{data?.headline}</h2>
					</div>

					<div className="relative mt-[50px] lg:mt-[80px] ">
						<div className="grid grid-cols-1 md:grid-cols-2 gap-[30px]">
							{data?.blogs.slice(0, 4).map((item, index) => (
								<BlogCard key={index} data={item} />
							))}
						</div>

						<div className=" mt-[50px] lg:mt-0 flex justify-center lg:absolute lg:top-[-160px] right-0">
							<div className="flex justify-center ">
								<StrokeButton url={"/blog"} text="More Blogs" right_icon="/icons/Right_Arrow.svg"  />
							</div>
						</div>
					</div>
				</div>
			</Container>
		</div>
	);
}

export default Blog;
