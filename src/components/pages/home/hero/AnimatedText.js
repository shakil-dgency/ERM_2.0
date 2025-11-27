"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function AnimatedText({ sentences = [] }) {
  const [index, setIndex] = useState(0);

  // Cycle through sentences every 2.5 seconds
  useEffect(() => {
    if (sentences.length === 0) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % sentences.length);
    }, 2500); // 2.5s for each sentence (2s visible + 0.5s transition)

    return () => clearInterval(interval);
  }, [sentences]);

  const variants = {
    enter: {
      y: "100%",
      opacity: 0,
    },
    center: {
      y: "0%",
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1], // smooth easing
      },
    },
    exit: {
      y: "-100%",
      opacity: 0,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  return (
    <span className="relative inline-block h-full w-full  overflow-hidden text-primary">
      <AnimatePresence mode="popLayout" >
        <motion.span
          key={index}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          className="block w-full text-inherit"
        >
          {sentences[index]?.title}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}