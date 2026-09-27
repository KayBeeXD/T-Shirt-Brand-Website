"use client";

import React, { useState } from "react";
import { Product } from "@/types";
import { useShopStore } from "@/lib/store";
import { Scissors, ZoomIn } from "lucide-react";
import { motion } from "framer-motion";

export const ProductCard: React.FC<{ product: Product; index?: number }> = ({ product, index = 0 }) => {
  const { openCustomMendModal, formatPrice } = useShopStore();
  const [viewMode, setViewMode] = useState<"front" | "macro">("front");

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.08, ease: "easeOut" }}
      className="bg-[#FFFFFF] border border-[#1C2419]/10 rounded-xl p-3 flex flex-col justify-between group shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ease-out overflow-hidden"
    >
      {/* Image */}
      <div className="relative aspect-[3/4] w-full bg-[#F8F8F4] overflow-hidden rounded-lg border border-[#1C2419]/10">
        <img
          src={viewMode === "front" ? product.frontImage : product.macroImage}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
        />

        {/* View Switcher Pill */}
        <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 z-10 bg-[#FFFFFF]/90 backdrop-blur-sm border border-[#1C2419]/20 p-0.5 rounded-full flex items-center gap-1 text-[9px] font-bold shadow-sm">
          <button
            onClick={() => setViewMode("front")}
            className={`px-2.5 py-0.5 uppercase rounded-full transition-colors ${
              viewMode === "front" ? "bg-[#1C2419] text-[#F8F8F4]" : "text-[#1C2419]/60"
            }`}
          >
            Silhouette
          </button>
          <button
            onClick={() => setViewMode("macro")}
            className={`px-2.5 py-0.5 uppercase flex items-center gap-1 rounded-full transition-colors ${
              viewMode === "macro" ? "bg-[#1C2419] text-[#F8F8F4]" : "text-[#1C2419]/60"
            }`}
          >
            <ZoomIn className="w-2.5 h-2.5" />
            Stitch
          </button>
        </div>
      </div>

      {/* Info */}
      <div className="pt-3 space-y-2 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between text-[11px] font-bold text-[#5C6656] mb-1">
            <span>{product.gsm} GSM</span>
            <span className="text-[#B85B35]">{product.scrapSource}</span>
          </div>

          <h3 className="text-base font-bold text-[#1C2419] leading-snug">
            {product.name}
          </h3>

          <p className="text-xs text-[#5C6656] mt-1 line-clamp-1">
            {product.description}
          </p>
        </div>

        {/* Price & Action */}
        <div className="pt-2 border-t border-[#1C2419]/10 flex items-center justify-between gap-2">
          <span className="text-sm font-bold text-[#1C2419]">
            {formatPrice(product.priceUSD)}
          </span>

          <button
            onClick={() => openCustomMendModal(product)}
            className="px-3.5 py-2 bg-[#1C2419] text-[#F8F8F4] hover:bg-[#B85B35] transition-colors text-xs font-bold uppercase rounded-lg flex items-center gap-1.5"
          >
            <Scissors className="w-3 h-3 text-[#C4E869]" />
            <span>Customize</span>
          </button>
        </div>
      </div>
    </motion.div>
  );
};
