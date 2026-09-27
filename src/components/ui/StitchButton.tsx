"use client";

import React, { useState } from "react";
import { Scissors } from "lucide-react";

interface StitchButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  showNeedleIcon?: boolean;
  threadColor?: string;
  className?: string;
}

export const StitchButton: React.FC<StitchButtonProps> = ({
  children,
  variant = "primary",
  showNeedleIcon = false,
  threadColor = "#C4E869",
  className = "",
  onClick,
  ...props
}) => {
  const [isStitching, setIsStitching] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setIsStitching(true);
    setTimeout(() => setIsStitching(false), 500);
    if (onClick) {
      onClick(e);
    }
  };

  const baseStyles =
    "relative inline-flex items-center justify-center font-bold tracking-widest uppercase transition-all duration-200 select-none overflow-hidden";

  const variants = {
    primary: "bg-[#1C2419] text-[#F8F8F4] hover:bg-[#B85B35] shadow-sm",
    secondary: "bg-[#B85B35] text-white hover:bg-[#1C2419]",
    outline: "bg-[#FFFFFF] border border-[#1C2419]/20 text-[#1C2419] hover:border-[#1C2419]",
    ghost: "bg-transparent text-[#1C2419] hover:bg-[#1C2419]/5",
  };

  return (
    <button
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {/* Active Stitch SVG Running Border on Click or Hover */}
      {(isHovered || isStitching) && (
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none z-10"
          style={{ overflow: "visible" }}
        >
          <rect
            x="1"
            y="1"
            width="calc(100% - 2px)"
            height="calc(100% - 2px)"
            fill="none"
            stroke={threadColor}
            strokeWidth="2"
            strokeDasharray="5 3"
            className={isStitching ? "animate-stitch-draw" : "animate-stitch-active"}
          />
        </svg>
      )}

      {/* Button Content */}
      <span className="relative z-0 flex items-center gap-1.5">
        {showNeedleIcon && (
          <Scissors
            className={`w-3.5 h-3.5 ${
              isStitching ? "animate-needle-poke text-[#C4E869]" : ""
            }`}
          />
        )}
        {children}
      </span>
    </button>
  );
};
