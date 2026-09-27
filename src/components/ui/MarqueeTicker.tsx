"use client";

import React from "react";

export const MarqueeTicker: React.FC = () => {
  const items = [
    "VISIBLE SASHIKO TOPSTITCHING",
    "HAND-CUT DEADSTOCK PATCHES",
    "300+ GSM HEAVYWEIGHT",
    "ARTISAN MENDED FOR LIFE",
  ];

  return (
    <div className="w-full bg-[#1C2419] text-[#F8F8F4]/80 py-2 border-b border-[#1C2419] select-none text-[11px] tracking-widest uppercase">
      <div className="animate-marquee whitespace-nowrap flex items-center gap-8">
        {[...items, ...items, ...items, ...items, ...items].map((item, idx) => (
          <div key={idx} className="flex items-center gap-4 inline-flex">
            <span>{item}</span>
            <span className="text-[#B85B35] text-[9px]">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
};
