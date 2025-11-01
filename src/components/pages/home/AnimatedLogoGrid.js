"use client";
import React, { useRef } from "react";
import { motion, useMotionValue, useAnimationFrame } from "framer-motion";

const logos = [
  ["Open Door", "Riddle Room", "Shock"],
  ["Red Button", "Clue Avenue", "Open Door"],
  ["Riddle Room", "Shock", "Clue Avenue"],
  ["Shock", "Red Button", "Clue Avenue"],
  ["Open Door", "Riddle Room", "Shock"],
];

const LOGO_HEIGHT = 60; // px
const GAP = 16;          // px
const COLUMN_WIDTH = 150;

function wrapToRange(v, min, max) {
  const range = max - min;
  return ((((v - min) % range) + range) % range) + min;
}

function InfiniteColumn({ items, direction = "up", speed = 0.12 }) {
  // Duplicate for seamless tiling
  const list = [...items, ...items];

  // exact pixel math
  const STRIDE = LOGO_HEIGHT + GAP;
  const totalSetHeight = items.length * STRIDE;
  const visibleHeight = items.length * LOGO_HEIGHT + (items.length - 1) * GAP;

  const y = useMotionValue(0);
  const dirSign = direction === "up" ? -1 : 1;

  useAnimationFrame((_t, delta) => {
    // delta in ms
    const deltaPx = dirSign * (speed * delta) / 2;
    const next = y.get() + deltaPx;
    const wrapped = wrapToRange(next, -totalSetHeight, 0);
    y.set(wrapped);
  });

  return (
    <div
      style={{
        overflow: "hidden",
        height: visibleHeight,
        width: COLUMN_WIDTH,
        background: "transparent",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        willChange: "transform",
      }}
    >
      <motion.div
        style={{
          y,
          width: "100%",
          display: "flex",
          flexDirection: "column",
          rowGap: GAP, // use gap instead of margins so math stays exact
          willChange: "transform",
        }}
      >
        {list.map((logo, i) => (
          <div
            key={`${logo}-${i}`}
            style={{
              height: LOGO_HEIGHT,
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
              fontWeight: "bold",
              fontSize: "1.1rem",
              background: "#222",
              borderRadius: 8,
              boxShadow: "0 2px 8px #0003",
              userSelect: "none",
            }}
          >
            {logo}
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default function AnimatedLogoGrid() {
  return (
    <div
      style={{
        display: "flex",
        gap: "2rem",
        padding: "2rem 0",
        width: "100%",
      }}
    >
      {logos.map((column, i) => (
        <InfiniteColumn
          key={i}
          items={column}
          direction={i % 2 === 0 ? "up" : "down"}
          speed={0.12} // tweak to taste
        />
      ))}
    </div>
  );
}
