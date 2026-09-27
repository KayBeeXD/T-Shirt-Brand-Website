"use client";

import React, { useState } from "react";
import { Search, X, ArrowRight, Sparkles, Tag } from "lucide-react";
import { useShopStore } from "@/lib/store";
import { PRODUCTS } from "@/data/products";
import { motion, AnimatePresence } from "framer-motion";

export const SearchModal: React.FC = () => {
  const { isSearchOpen, toggleSearch, openCustomMendModal, formatPrice } = useShopStore();
  const [query, setQuery] = useState("");

  const genericApparelTerms = [
    "t-shirt", "tshirt", "t-shirts", "tshirts", "t shirt", "tee", "tees", "shirt", "shirts",
    "apparel", "clothing", "top", "tops", "sleeve", "full sleeve", "oversized", "heavyweight",
    "slow fashion", "streetwear", "upcycled", "cotton", "wear", "drop", "fashion", "garment"
  ];

  const normalizedQuery = query.trim().toLowerCase();
  const isGenericSearch = genericApparelTerms.some((term) => normalizedQuery.includes(term));

  let directResults = PRODUCTS.filter((p) => {
    if (!normalizedQuery) return true;
    if (isGenericSearch) return true;

    return (
      p.name.toLowerCase().includes(normalizedQuery) ||
      p.vibe.toLowerCase().includes(normalizedQuery) ||
      p.scrapSource.toLowerCase().includes(normalizedQuery) ||
      p.mantra.toLowerCase().includes(normalizedQuery) ||
      p.lotNumber.toLowerCase().includes(normalizedQuery) ||
      p.description.toLowerCase().includes(normalizedQuery) ||
      p.craftsmanshipNotes.toLowerCase().includes(normalizedQuery)
    );
  });

  const isFallback = directResults.length === 0 && normalizedQuery.length > 0;
  const displayProducts = isFallback ? PRODUCTS : directResults;

  return (
    <AnimatePresence>
      {isSearchOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 px-4">
          {/* Animated Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => toggleSearch(false)}
            className="fixed inset-0 bg-[#1C2419]/80 backdrop-blur-sm"
          />

          {/* Animated Window */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: "spring", damping: 25, stiffness: 240 }}
            className="w-full max-w-2xl bg-[#F8F8F4] border border-[#1C2419] rounded-xl shadow-2xl p-6 relative z-10 overflow-hidden"
          >
            {/* Close Button */}
            <button
              onClick={() => toggleSearch(false)}
              className="absolute top-4 right-4 p-1.5 border border-[#1C2419]/20 rounded-lg bg-[#FFFFFF] hover:bg-[#1C2419] hover:text-white transition-colors"
              aria-label="Close Search"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-2 mb-4 text-xs uppercase tracking-widest text-[#B85B35] font-bold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Garment Index & Vibe Search</span>
            </div>

            {/* Input */}
            <div className="relative mb-4">
              <Search className="absolute left-3.5 top-3.5 w-5 h-5 text-[#1C2419]/50" />
              <input
                type="text"
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search 'T-Shirts', 'Full Sleeve', emotion, lot number..."
                className="w-full pl-11 pr-4 py-3 bg-[#FFFFFF] border border-[#1C2419]/30 rounded-lg text-sm text-[#1C2419] focus:outline-none focus:ring-2 focus:ring-[#B85B35]"
              />
            </div>

            {/* Quick Popular Keywords */}
            <div className="mb-5">
              <p className="text-[11px] text-[#5C6656] uppercase mb-2 font-bold flex items-center gap-1">
                <Tag className="w-3 h-3 text-[#475839]" />
                <span>Popular Search Keywords:</span>
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "T-Shirts",
                  "Full Sleeve",
                  "Oversized Tees",
                  "Deadstock Denim",
                  "300 GSM",
                  "Overstimulated",
                ].map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setQuery(tag)}
                    className="text-xs px-2.5 py-1 bg-[#FFFFFF] border border-[#1C2419]/20 rounded-lg hover:border-[#1C2419] hover:bg-[#1C2419] hover:text-[#C4E869] transition-colors font-bold"
                  >
                    #{tag}
                  </button>
                ))}
              </div>
            </div>

            {/* Status Notice if Fallback */}
            {isFallback && (
              <div className="mb-3 px-3 py-2 bg-[#FAFBF6] border border-[#B85B35]/30 rounded-lg text-xs text-[#B85B35] font-bold flex items-center justify-between">
                <span>Showing our top 300+ GSM tees for &quot;{query}&quot;:</span>
                <span className="text-[10px] text-[#5C6656]">FEATURED COLLECTION</span>
              </div>
            )}

            {/* Results List */}
            <div className="max-h-96 overflow-y-auto space-y-3 pr-1">
              {displayProducts.map((product) => (
                <div
                  key={product.id}
                  className="flex items-center justify-between gap-4 p-3 bg-[#FFFFFF] border border-[#1C2419]/15 rounded-lg hover:border-[#B85B35] shadow-sm transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-14 h-16 relative bg-[#1C2419]/5 overflow-hidden flex-shrink-0 rounded-md border border-[#1C2419]/10">
                      <img
                        src={product.frontImage}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[10px] font-bold bg-[#1C2419] text-[#C4E869] px-1.5 py-0.5 rounded">
                          {product.gsm} GSM
                        </span>
                        <span className="text-[10px] text-[#B85B35] font-bold">
                          {product.scrapSource}
                        </span>
                      </div>
                      <h4 className="text-sm font-bold text-[#1C2419]">
                        {product.name}
                      </h4>
                      <p className="text-xs text-[#5C6656] font-bold">
                        {formatPrice(product.priceUSD)} — {product.lotNumber}
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      toggleSearch(false);
                      openCustomMendModal(product);
                    }}
                    className="px-3 py-1.5 bg-[#1C2419] text-[#FAFBF6] hover:bg-[#B85B35] transition-colors text-xs font-bold rounded-lg flex items-center gap-1.5 flex-shrink-0"
                  >
                    <span>Mend & Order</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#C4E869]" />
                  </button>
                </div>
              ))}
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
