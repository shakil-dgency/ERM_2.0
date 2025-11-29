/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import { motion, useMotionValue, useAnimationFrame } from "framer-motion";

const DEFAULT_LOGO_HEIGHT = 60; // px
const DEFAULT_GAP = 16; // px

// Helper to wrap animation value
function wrapToRange(v, min, max) {
  const range = max - min;
  return ((((v - min) % range) + range) % range) + min;
}

// Infinite scrolling column
function InfiniteColumn({ items, direction = "up", speed = 0.12, logoHeight = DEFAULT_LOGO_HEIGHT, gap = DEFAULT_GAP }) {
  if (!items || items.length === 0) return null;

  // Duplicate internally for seamless scroll
const list = useMemo(() => [...items, ...items], [items]);

  const stride = logoHeight + gap;
  const totalSetHeight = items.length * stride;
  const visibleHeight = 240;

  const y = useMotionValue(0);
  const dirSign = direction === "up" ? -1 : 1;

  useAnimationFrame((_t, delta) => {
    const deltaPx = dirSign * (speed * delta);
    const next = y.get() + deltaPx;
    const wrapped = wrapToRange(next, -totalSetHeight, 0);
    y.set(wrapped);
  });


  return (
    <div
      style={{
        overflow: "hidden",
        height: visibleHeight,
        width: "100%",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        willChange: "transform",
      }}
      aria-hidden={false}
    >
      <motion.div
        style={{
          y,
          width: "100%",
          display: "flex",
          flexDirection: "column",
          rowGap: gap,
          willChange: "transform",
        }}
      >
        {list.map((logoSrc, i) => (
          <div
            key={`${logoSrc}-${i}`}
            style={{
              height: logoHeight,
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "var(--secondary-800,#181e2550)",
              borderRadius: 8,
              // boxShadow: "0 2px 8px #0003",
              userSelect: "none",
              padding: 8,
            }}
          >
            <Image
              src={logoSrc? process.env.NEXT_PUBLIC_API_URL + logoSrc.url : "/placeholder-logo.png"}
              alt={`logo-${i}`}
              width={120}
              height={logoHeight - 16}
              style={{ objectFit: "contain", maxHeight: "100%", width: "auto" }}
              placeholder="empty"
              priority={true}
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

InfiniteColumn.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  direction: PropTypes.oneOf(["up", "down"]),
  speed: PropTypes.number,
  logoHeight: PropTypes.number,
  gap: PropTypes.number,
};

// Main Animated Logo Grid
export default function AnimatedLogoGrid({ logos = [], speed = 0.12, logoHeight = DEFAULT_LOGO_HEIGHT, gap = DEFAULT_GAP }) {
  const [columnsCount, setColumnsCount] = useState(5);

  // Responsive column count
  useEffect(() => {
    function calcColumns(width) {
      if (width >= 1024) return 5;
      if (width >= 768) return 3;
      return 2;
    }

    function update() {
      setColumnsCount(calcColumns(window.innerWidth));
    }

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  // Ensure at least 10 logos
  const normalizedLogos = useMemo(() => {
    if (logos.length >= 10) return logos;
    const result = [...logos];
    let i = 0;
    while (result.length < 10) {
      result.push(logos[i % logos.length]);
      i++;
    }
    return result;
  }, [logos]);

  // Split into two halves for replication
  const [firstHalf, secondHalf] = useMemo(() => {
    const mid = Math.ceil(normalizedLogos.length / 2);
    const first = normalizedLogos.slice(0, mid);
    const second = normalizedLogos.slice(mid);
    return [first, second];
  }, [normalizedLogos]);

  // Prepare columns (replicate firstHalf + secondHalf)
 const columns = useMemo(() => {
  const seq = [firstHalf, secondHalf]; // alternating halves
  return Array.from({ length: columnsCount }, (_, i) => {
    return seq[i % 2]; // alternate firstHalf / secondHalf
  });
}, [firstHalf, secondHalf, columnsCount]);

  return (
    <div style={{ width: "100%" }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${columnsCount}, minmax(0, 1fr))`,
          gap: "2rem",
          alignItems: "start",
        }}
      >
        {columns.map((colItems, i) => (
          <InfiniteColumn
            key={i}
            items={colItems.length ? colItems : ["/placeholder-logo.png"]}
            direction={i % 2 === 0 ? "up" : "down"}
            speed={speed}
            logoHeight={logoHeight}
            gap={gap}
          />
        ))}
      </div>
    </div>
  );
}

AnimatedLogoGrid.propTypes = {
  logos: PropTypes.arrayOf(PropTypes.string).isRequired,
  speed: PropTypes.number,
  logoHeight: PropTypes.number,
  gap: PropTypes.number,
};
