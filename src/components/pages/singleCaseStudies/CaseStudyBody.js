import React from "react";
import styles from '@/styles/blog.module.css'

function CaseStudyBody({ data }) {
	return (
		<div>
			<div
				className={`${styles.blog_details} text-[16px] lg:text-[20px] text-neutral-950`}
				dangerouslySetInnerHTML={{ __html: data ? data : "" }}
			/>
		</div>
	);
}

export default CaseStudyBody;
