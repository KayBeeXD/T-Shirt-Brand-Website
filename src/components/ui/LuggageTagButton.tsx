"use client";

import React from "react";
import { Tag } from "lucide-react";
import { useShopStore } from "@/lib/store";

export const LuggageTagButton: React.FC = () => {
  const { toggleCart, getCartCount } = useShopStore();
  const count = getCartCount();

  return (
    <button
      onClick={() => toggleCart(true)}
      aria-label="Open Cart"
      className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#FFFFFF] text-[#1C2419] border border-[#1C2419]/20 text-xs tracking-wider hover:border-[#1C2419] transition-all duration-200"
    >
      <Tag className="w-3.5 h-3.5 text-[#475839]" />
      <span className="font-bold uppercase tracking-wider">BAG ({count})</span>
    </button>
  );
};
