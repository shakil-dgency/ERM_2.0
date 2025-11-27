"use client";
import React, { useEffect } from "react";
import styles from "@/styles/blog.module.css";
import { setSafeLinkTargets } from "@/services/helper";

function TermsBody({ data }) {
	useEffect(() => {
        setSafeLinkTargets()
    }, [data]);
	return (
		<div>
			<div className={` ${styles.blog_details} blog_body text-neutral-300`} dangerouslySetInnerHTML={{ __html: data?.terms_body }} />
		</div>
	);
}

export default TermsBody;
