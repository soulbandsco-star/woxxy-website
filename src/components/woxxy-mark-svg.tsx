"use client";

/**
 * SVG recreation of the Woxxy W + leaf mark.
 * Faithful to the logo: elegant serif W with two botanical leaves on a stem.
 * All paths use pathLength={1} for stroke-dasharray draw-on animation.
 */

interface WoxxyMarkSvgProps {
  className?: string;
  size?: number;
  strokeColor?: string;
  strokeWidth?: number;
}

export default function WoxxyMarkSvg({
  className = "",
  size = 200,
  strokeColor = "var(--rosegold-line)",
  strokeWidth = 3,
}: WoxxyMarkSvgProps) {
  return (
    <svg
      width={size}
      height={size * 1.15}
      viewBox="0 0 200 230"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* === W LETTERFORM === */}

      {/* Left outer stroke: top-left serif down to left-V bottom */}
      <path
        d="M 22 58 C 22 56, 20 55, 18 55 L 30 55 C 28 55, 26 57, 27 60 L 64 198"
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        pathLength={1}
      />

      {/* Left inner stroke: left-V bottom up to center peak */}
      <path
        d="M 64 198 L 100 68"
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        pathLength={1}
      />

      {/* Right inner stroke: center peak down to right-V bottom */}
      <path
        d="M 100 68 L 136 198"
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        pathLength={1}
      />

      {/* Right outer stroke: right-V bottom up to right top */}
      <path
        d="M 136 198 L 166 60 C 167 57, 165 55, 163 55 L 175 55 C 173 55, 171 57, 172 60"
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        pathLength={1}
      />

      {/* === STEM + LEAVES (the botanical flourish) === */}

      {/* Stem: rises from the right top of the W, curving gracefully */}
      <path
        d="M 170 58 C 170 42, 167 28, 164 16"
        stroke={strokeColor}
        strokeWidth={strokeWidth * 0.65}
        strokeLinecap="round"
        pathLength={1}
      />

      {/* Left leaf: sweeps up and to the left */}
      <path
        d="M 164 16 C 152 4, 132 6, 136 22 C 140 36, 156 26, 164 16"
        stroke={strokeColor}
        strokeWidth={strokeWidth * 0.65}
        strokeLinecap="round"
        strokeLinejoin="round"
        pathLength={1}
      />

      {/* Left leaf midrib */}
      <path
        d="M 164 16 C 155 14, 143 14, 138 19"
        stroke={strokeColor}
        strokeWidth={strokeWidth * 0.35}
        strokeLinecap="round"
        opacity="0.5"
        pathLength={1}
      />

      {/* Right leaf: sweeps up and to the right */}
      <path
        d="M 164 16 C 172 0, 192 4, 188 22 C 184 36, 170 26, 164 16"
        stroke={strokeColor}
        strokeWidth={strokeWidth * 0.65}
        strokeLinecap="round"
        strokeLinejoin="round"
        pathLength={1}
      />

      {/* Right leaf midrib */}
      <path
        d="M 164 16 C 173 14, 183 14, 186 19"
        stroke={strokeColor}
        strokeWidth={strokeWidth * 0.35}
        strokeLinecap="round"
        opacity="0.5"
        pathLength={1}
      />
    </svg>
  );
}

/**
 * Returns the individual path data for animating each path separately.
 * Used by the intro preloader for sequenced draw-on.
 */
export const woxxyPaths = {
  w: [
    // Left outer stroke with serifs
    "M 22 58 C 22 56, 20 55, 18 55 L 30 55 C 28 55, 26 57, 27 60 L 64 198",
    // Left inner
    "M 64 198 L 100 68",
    // Right inner
    "M 100 68 L 136 198",
    // Right outer with serifs
    "M 136 198 L 166 60 C 167 57, 165 55, 163 55 L 175 55 C 173 55, 171 57, 172 60",
  ],
  stem: "M 170 58 C 170 42, 167 28, 164 16",
  leaves: [
    // Left leaf outline
    "M 164 16 C 152 4, 132 6, 136 22 C 140 36, 156 26, 164 16",
    // Right leaf outline
    "M 164 16 C 172 0, 192 4, 188 22 C 184 36, 170 26, 164 16",
  ],
  leafVeins: [
    "M 164 16 C 155 14, 143 14, 138 19",
    "M 164 16 C 173 14, 183 14, 186 19",
  ],
};
