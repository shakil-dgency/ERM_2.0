/* eslint-disable react/no-unescaped-entities */
"use client";
import BlogCard from "@/components/global/BlogCard";
import Container from "@/components/ui/Container";
import React, { useEffect, useRef, useState } from "react";
import qs from "qs";
import { InfinitySpin } from "react-loader-spinner";
import StrokeButton from "@/components/ui/buttons/StrokeButton";

function BlogHome({ initialData, initialMeta, BLOG_TAGS }) {
	const [blogs, setBlogs] = useState(initialData);
	const [meta, setMeta] = useState(initialMeta);
	const [loading, setLoading] = useState(false);
	const [tag, setTag] = useState(null);
	const ref = useRef();

	async function loadMore() {
		if (meta.pagination.page >= meta.pagination.pageCount) return;

		setLoading(true);

		const nextPage = meta.pagination.page + 1;

		const query = qs.stringify(
			{
				populate: { main_image: true },
				pagination: {
					page: nextPage,
					pageSize: meta.pagination.pageSize,
				},
			},
			{ encodeValuesOnly: true }
		);

		const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/blogs?${query}`);
		const json = await res.json();

		setBlogs((prev) => [...prev, ...json.data]);
		setMeta(json.meta);
		setLoading(false);
	}

	// console.log(blogs);

	const allBlogquery = qs.stringify(
		{
			populate: { main_image: true },
			pagination: {
				page: 1,
				pageSize: 100,
			},
		},
		{ encodeValuesOnly: true }
	);

	useEffect(() => {
		async function loadAllBlog() {
			const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/blogs?${allBlogquery}`);
			const json = await res.json();

			console.log("All blog:", json);
		}

		loadAllBlog();
	}, []);

	// tab onclick filtered data

	useEffect(() => {
		async function loadFilteredBlogs() {
			if (!tag) {
				setBlogs(initialData);
				setMeta(initialMeta);
				return;
			}
			const allBlogquery = qs.stringify(
				{
					filters: {
						tag: {
							$eq: tag, // or $eq, $startsWith, etc.
						},
					},
					populate: {
						main_image: true,
					},
					pagination: false, // ← no pagination
				},
				{ encodeValuesOnly: true }
			);

			const filteredRes = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/blogs?${allBlogquery}`);
			const filteredJson = await filteredRes.json();

			setBlogs(filteredJson.data);
			setMeta(null);
		}
		loadFilteredBlogs();
	}, [tag]);

	useEffect(() => {
		const el = ref.current;
		let isDown = false;
		let startX, scrollLeft;

		const start = (e) => {
			isDown = true;
			startX = e.pageX || e.touches[0].pageX;
			scrollLeft = el.scrollLeft;
		};

		const move = (e) => {
			if (!isDown) return;
			const x = e.pageX || e.touches[0].pageX;
			el.scrollLeft = scrollLeft - (x - startX);
		};

		const stop = () => (isDown = false);

		el.addEventListener("mousedown", start);
		el.addEventListener("mousemove", move);
		el.addEventListener("mouseup", stop);
		el.addEventListener("mouseleave", stop);

		return () => {
			el.removeEventListener("mousedown", start);
			el.removeEventListener("mousemove", move);
			el.removeEventListener("mouseup", stop);
			el.removeEventListener("mouseleave", stop);
		};
	}, []);

	return (
		<div>
			<div className="pt-[60px] pb-[150px] bg-[url('/pages/home/papertexture.png')] bg-repeat">
				<Container>
					<h2 className="text-[40px] font-[700] text-neutral-950">Latest Blogs</h2>
					<div
						ref={ref}
						style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
						className=" ml-1 overflow-x-scroll blog_tabs flex gap-10 lg:gap-[70px] mt-[30px] mb-[50px] lg:mb-[100px] border-b-[1px] border-primary-500 pb-[10px]"
					>
						<span
							onClick={() => setTag(null)}
							className={`${
								tag === null ? "underline decoration-primary-500 underline-offset-[14px] decoration-[3px]" : ""
							} flex-none select-none cursor-pointer duration-300`}
						>
							All Blogs
						</span>
						{BLOG_TAGS?.map((item, index) => (
							<span
								onClick={() => setTag(item)}
								key={index}
								className={`${
									item === tag ? "underline decoration-primary-500 underline-offset-[14px] decoration-[3px]" : ""
								} flex-none select-none cursor-pointer duration-300`}
							>
								{item}
							</span>
						))}
					</div>
					{blogs.length !== 0 ? (
						<div className="grid grid-cols-1 sm:grid-cols-2 gap-[30px]">
							{blogs?.map((blog, index) => (
								<BlogCard key={index} data={blog} />
							))}
						</div>
					): <p className="text-[24px] text-center font-[700] text-neutral-700">No Blogs Found</p>}
					{meta && (
						<div className="flex justify-center mt-[50px]">
							{meta.pagination.page < meta.pagination.pageCount && (
								<>
									{loading ? (
										<div className="flex justify-center ">
											<InfinitySpin width="200" color="#FF492C" />
										</div>
									) : (
										<div className="flex justify-center mt-4">
											<StrokeButton medium={true} text="Load More" handleClick={loadMore} text_light={false} />
										</div>
									)}
								</>
							)}
						</div>
					)}
				</Container>
			</div>
		</div>
	);
}

export default BlogHome;
