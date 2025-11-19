import Image from "next/image";
import Link from "next/link";
import React from "react";

function NavCard({slug, img, title, description, router}) {
	// console.log(router === slug, router, slug);
	
	return (
		<div>
			<Link href={`/${slug}`} className={`group `}>
				<div
					className={`bg-[linear-gradient(0deg,var(--Colors-Secondary-900,#0D1116)_-93.92%,var(--Colors-Secondary-900,#0D1116)_-0.28%,var(--Colors-Secondary-800,#181E25)_218.2%)]   flex items-center gap-2 px-3 xs:px-[28px] py-5 rounded-[10px] shadow overflow-hidden `}
				>
					<div className="relative ">
						<Image src={`${img}`} alt="" height={50} width={50} className="group-hover:scale-105 duration-500 relative z-10" />
						<div className={`${
						router === "/" + slug
							? "opacity-100"
							: ""
					} h-[30px] w-[30px] bg-primary-500 blur-[15px] absolute top-[50%] translate-y-[-45%] opacity-0 group-hover:opacity-100 duration-500`}></div>
					</div>
					<div className="">
						<p className={`${
						router === "/" + slug
							? "text-primary-500"
							: ""
					} group-hover:text-primary-500 text-neutral-200 duration-500 font-semibold flex text-[12px] xxs:text-[14px] xl:text-[16px] items-center gap-1`}>
							{title}
						</p>
						<p className="text-[11px] xs:text-[12px] leading-[2] xs:leading-[1.8] text-neutral-500">{description}</p>
					</div>
				</div>
			</Link>
		</div>
	);
}

export default NavCard;
