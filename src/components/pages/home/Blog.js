import BlogCard from "@/components/global/BlogCard";
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
							<Link
								href="/blog"
								className="border-[#ff492c] border-[1px] rounded-[4px] px-[20px] py-[16px] flex items-center gap-[8px] bg-[rgba(53,65,77,0.40)] group"
							>
								<span className="text-neutral-50">More Blogs</span>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="5"
									height="8"
									viewBox="0 0 5 8"
									fill="none"
									className="mt-[2px] transition-transform duration-300 ease-in-out transform group-hover:translate-x-1 group-hover:scale-110"
								>
									<path
										d="M0.689453 1.07009L0.689453 4.41199L0.689453 7.42132C0.689453 7.93629 1.3117 8.19377 1.67647 7.829L4.45513 5.05033C4.90036 4.6051 4.90036 3.88093 4.45513 3.4357L3.39838 2.37896L1.67647 0.657045C1.3117 0.297644 0.689453 0.555126 0.689453 1.07009Z"
										fill="#fff"
									/>
								</svg>
							</Link>
						</div>
					</div>
				</div>
			</Container>
		</div>
	);
}

export default Blog;
