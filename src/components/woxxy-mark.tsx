"use client";

import { motion } from "framer-motion";

interface BotanicalSprigProps {
  className?: string;
  size?: number;
  color?: string;
  strokeWidth?: number;
  animate?: boolean;
}

/**
 * Refined botanical sprig — two leaves on a curved stem.
 * Echoes the leaf motif from the Woxxy logo.
 * Single consistent stroke weight, no fills, delicate line art.
 */
export default function BotanicalSprig({
  className = "",
  size = 400,
  color = "var(--rosegold)",
  strokeWidth = 1.2,
  animate = false,
}: BotanicalSprigProps) {
  return (
    <motion.div
      className={className}
      animate={
        animate
          ? { rotate: [0, 2, -1, 0], y: [0, -6, 0] }
          : undefined
      }
      transition={
        animate
          ? {
              rotate: { duration: 12, repeat: Infinity, ease: "easeInOut" },
              y: { duration: 8, repeat: Infinity, ease: "easeInOut" },
            }
          : undefined
      }
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Main stem — elegant S-curve */}
        <path
          d="M100 185 C100 160, 95 140, 98 120 C101 100, 105 80, 100 55 C96 35, 100 20, 100 15"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          fill="none"
        />

        {/* Left leaf — large, sweeping curve */}
        <path
          d="M98 100 C85 95, 55 85, 40 65 C30 50, 45 35, 60 42 C75 49, 90 70, 98 100Z"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinejoin="round"
          fill="none"
        />
        {/* Left leaf midrib */}
        <path
          d="M98 100 C88 88, 68 68, 52 56"
          stroke={color}
          strokeWidth={strokeWidth * 0.5}
          opacity="0.4"
          fill="none"
        />

        {/* Right leaf — mirrored, slightly higher */}
        <path
          d="M102 78 C115 73, 145 60, 158 42 C168 28, 152 15, 138 22 C124 29, 110 52, 102 78Z"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinejoin="round"
          fill="none"
        />
        {/* Right leaf midrib */}
        <path
          d="M102 78 C112 66, 132 46, 147 34"
          stroke={color}
          strokeWidth={strokeWidth * 0.5}
          opacity="0.4"
          fill="none"
        />

        {/* Small emerging leaf near top */}
        <path
          d="M100 40 C94 32, 82 22, 78 15 C76 10, 82 8, 88 14 C94 20, 98 30, 100 40Z"
          stroke={color}
          strokeWidth={strokeWidth * 0.8}
          fill="none"
        />
      </svg>
    </motion.div>
  );
}
