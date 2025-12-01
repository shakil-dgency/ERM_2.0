"use client";
import React, { useEffect } from "react";
import styles from '@/styles/blog.module.css'
import { setSafeLinkTargets } from "@/services/helper";

function CaseStudyBody({ data }) {
	useEffect(()=>{
		setSafeLinkTargets()
	},[])
	return (
		<div>
			<div
				className={`${styles.blog_details} ${styles.global_text_color} blog_body text-[16px] lg:text-[20px] text-neutral-950`}
				dangerouslySetInnerHTML={{ __html: data ? data : "" }}
			/>
		</div>
	);
}

export default CaseStudyBody;
