"use client";

import React from "react";

interface StitchBorderProps {
  isActive?: boolean;
  color?: string; // hex or tailwind class
  strokeWidth?: number;
}

export const StitchBorderOverlay: React.FC<StitchBorderProps> = ({
  isActive = false,
  color = "#B85B35",
  strokeWidth = 2,
}) => {
  if (!isActive) return null;

  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none z-20"
      style={{ overflow: "visible" }}
    >
      <rect
        x="1"
        y="1"
        width="calc(100% - 2px)"
        height="calc(100% - 2px)"
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeDasharray="6 4"
        className="animate-stitch-active"
      />
    </svg>
  );
};
