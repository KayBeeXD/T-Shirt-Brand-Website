"use client";

import React from "react";
import { EmotionVibe, FabricScrapSource } from "@/types";
import { useShopStore } from "@/lib/store";
import { RefreshCw } from "lucide-react";

export const VibeMatrixFilter: React.FC<{ totalCount: number }> = ({ totalCount }) => {
  const { selectedVibe, selectedScrap, setVibe, setScrap, resetFilters } = useShopStore();

  const vibes: EmotionVibe[] = [
    "All",
    "Overstimulated",
    "Quiet Luxury on $10",
    "Delulu",
    "Existential Chill",
    "Main Character",
    "Social Battery: 1%",
  ];

  const scraps: FabricScrapSource[] = [
    "All",
    "Deadstock Denim",
    "Organic Khadi Scrap",
    "Recycled Terry",
    "Corduroy Scrap",
  ];

  const isFiltered = selectedVibe !== "All" || selectedScrap !== "All";

  return (
    <div id="vibe-matrix" className="w-full bg-[#FFFFFF] border-y border-[#1C2419]/10 py-5 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-4">
        
        {/* Header */}
        <div className="flex items-center justify-between text-xs pb-2 border-b border-[#1C2419]/10 font-bold">
          <span className="text-[#1C2419] tracking-wider uppercase">
            Filter Matrix ({totalCount})
          </span>

          {isFiltered && (
            <button
              onClick={resetFilters}
              className="flex items-center gap-1 text-[#B85B35] hover:underline"
            >
              <RefreshCw className="w-3 h-3" />
              <span>Reset</span>
            </button>
          )}
        </div>

        {/* Emotion Axis */}
        <div className="flex flex-wrap gap-2 text-xs">
          <span className="py-1 text-[#5C6656] uppercase font-bold mr-1">Vibe:</span>
          {vibes.map((vibe) => {
            const isActive = selectedVibe === vibe;
            return (
              <button
                key={vibe}
                onClick={() => setVibe(vibe)}
                className={`px-3 py-1 border rounded-lg transition-all ${
                  isActive
                    ? "bg-[#1C2419] text-[#F8F8F4] border-[#1C2419] font-bold"
                    : "bg-[#F8F8F4] text-[#1C2419]/80 border-[#1C2419]/15 hover:border-[#1C2419]"
                }`}
              >
                {vibe}
              </button>
            );
          })}
        </div>

        {/* Scrap Axis */}
        <div className="flex flex-wrap gap-2 text-xs pt-1">
          <span className="py-1 text-[#5C6656] uppercase font-bold mr-1">Patch:</span>
          {scraps.map((scrap) => {
            const isActive = selectedScrap === scrap;
            return (
              <button
                key={scrap}
                onClick={() => setScrap(scrap)}
                className={`px-3 py-1 border rounded-lg transition-all ${
                  isActive
                    ? "bg-[#475839] text-[#F8F8F4] border-[#475839] font-bold"
                    : "bg-[#F8F8F4] text-[#1C2419]/80 border-[#1C2419]/15 hover:border-[#1C2419]"
                }`}
              >
                {scrap}
              </button>
            );
          })}
        </div>

      </div>
    </div>
  );
};
