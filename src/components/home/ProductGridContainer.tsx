"use client";

import React from "react";
import { useShopStore } from "@/lib/store";
import { PRODUCTS } from "@/data/products";
import { ProductCard } from "@/components/product/ProductCard";
import { VibeMatrixFilter } from "./VibeMatrixFilter";
import { motion, AnimatePresence } from "framer-motion";
import { Scissors, RefreshCw } from "lucide-react";

export const ProductGridContainer: React.FC = () => {
  const { selectedVibe, selectedScrap, resetFilters } = useShopStore();

  const filteredProducts = PRODUCTS.filter((product) => {
    const matchesVibe = selectedVibe === "All" || product.vibe === selectedVibe;
    const matchesScrap = selectedScrap === "All" || product.scrapSource === selectedScrap;
    return matchesVibe && matchesScrap;
  });

  return (
    <section id="collection" className="w-full py-12 bg-[#F4F5EC]">
      {/* Dual Axis Filter Bar */}
      <VibeMatrixFilter totalCount={filteredProducts.length} />

      {/* Main Product Grid Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        
        {filteredProducts.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="py-20 text-center space-y-4 border border-dashed border-[#1C2419]/30 bg-[#FAFBF6] p-8"
          >
            <Scissors className="w-12 h-12 text-[#B85B35] mx-auto animate-pulse" />
            <h3 className="text-2xl font-bold text-[#1C2419]">
              No Deadstock Garments Match This Matrix Combo
            </h3>
            <p className="text-xs text-[#1C2419]/70 max-w-md mx-auto">
              We couldn&apos;t find a tee matching vibe &quot;{selectedVibe}&quot; with scrap fiber &quot;{selectedScrap}&quot;. Try selecting another axis or reset filters.
            </p>
            <button
              onClick={resetFilters}
              className="px-6 py-2.5 bg-[#1C2419] text-[#C4E869] text-xs font-bold uppercase tracking-widest hover:bg-[#B85B35] hover:text-white transition-colors inline-flex items-center gap-2"
            >
              <RefreshCw className="w-4 h-4 text-[#C4E869]" />
              <span>Reset Dual-Axis Filters</span>
            </button>
          </motion.div>
        ) : (
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredProducts.map((product, idx) => (
                <ProductCard key={product.id} product={product} index={idx} />
              ))}
            </AnimatePresence>
          </motion.div>
        )}

      </div>
    </section>
  );
};
