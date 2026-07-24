"use client";

import { useId } from "react";

type LogoProps = {
  className?: string;
  title?: string;
  /** light = paper header (sage O, ink N); dark = ink footer (sage O, paper N) */
  variant?: "light" | "dark";
};

/**
 * Interlocking NO monogram in Fraunces — two-tone + quiet hover.
 * O (sage outline) weaves over N (ink / paper fill).
 */
export function Logo({
  className = "h-10 w-10",
  title = "Nader Obeid",
  variant = "light",
}: LogoProps) {
  const uid = useId().replace(/:/g, "");
  const clipId = `no-weave-${uid}`;
  const nFill = variant === "dark" ? "var(--paper)" : "var(--ink)";

  const typeStyle = {
    fontFamily: "var(--font-fraunces), Fraunces, Georgia, serif",
  } as const;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      fill="none"
      className={`block overflow-visible [&_.logo-n]:transition-transform [&_.logo-n]:duration-300 [&_.logo-n]:ease-out group-hover:[&_.logo-n]:translate-x-[1.5px] [&_.logo-o]:transition-[stroke-width] [&_.logo-o]:duration-300 [&_.logo-o]:ease-out group-hover:[&_.logo-o]:[stroke-width:2.6px] ${className}`}
      role="img"
      aria-label={title}
    >
      <title>{title}</title>
      <defs>
        <clipPath id={clipId}>
          <rect x="0" y="0" width="31" height="100" />
          <rect x="69" y="0" width="31" height="100" />
        </clipPath>
      </defs>

      {/* Optical center via dominantBaseline — letters sit mid-navbar */}
      <text
        className="logo-o"
        x="54"
        y="51"
        textAnchor="middle"
        dominantBaseline="central"
        fill="none"
        stroke="var(--sage)"
        strokeWidth="2.1"
        style={{ ...typeStyle, fontWeight: 300, fontSize: 76 }}
      >
        O
      </text>

      <g className="logo-n">
        <text
          x="41"
          y="51"
          textAnchor="middle"
          dominantBaseline="central"
          fill={nFill}
          style={{ ...typeStyle, fontWeight: 600, fontSize: 56 }}
        >
          N
        </text>
      </g>

      <g clipPath={`url(#${clipId})`}>
        <text
          className="logo-o"
          x="54"
          y="51"
          textAnchor="middle"
          dominantBaseline="central"
          fill="none"
          stroke="var(--sage)"
          strokeWidth="2.1"
          style={{ ...typeStyle, fontWeight: 300, fontSize: 76 }}
        >
          O
        </text>
      </g>
    </svg>
  );
}
