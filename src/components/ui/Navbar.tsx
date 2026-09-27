"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Search, Globe, ChevronDown } from "lucide-react";
import { useShopStore } from "@/lib/store";
import { LuggageTagButton } from "./LuggageTagButton";
import { CurrencyCode } from "@/types";

export const Navbar: React.FC = () => {
  const { toggleSearch, currency, setCurrency } = useShopStore();
  const [isCurrencyDropdownOpen, setIsCurrencyDropdownOpen] = useState(false);

  const currencies: CurrencyCode[] = ["USD", "EUR", "GBP", "INR"];

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#F8F8F4]/90 backdrop-blur-md border-b border-[#1C2419]/10 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        
        {/* Left: Brand Wordmark */}
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold tracking-wider text-[#1C2419]">
            ANONYMOUS
          </span>
        </Link>

        {/* Center Links */}
        <nav className="hidden lg:flex items-center gap-8 text-xs tracking-wider uppercase font-bold text-[#1C2419]/70">
          <button
            onClick={() => scrollToSection("collection")}
            className="hover:text-[#1C2419] transition-colors"
          >
            Collection
          </button>
          <button
            onClick={() => scrollToSection("vibe-matrix")}
            className="hover:text-[#1C2419] transition-colors"
          >
            Matrix
          </button>
          <button
            onClick={() => scrollToSection("passport")}
            className="hover:text-[#1C2419] transition-colors"
          >
            Blueprint
          </button>
          <button
            onClick={() => scrollToSection("fit-matrix")}
            className="hover:text-[#1C2419] transition-colors"
          >
            Fit Guide
          </button>
          <button
            onClick={() => scrollToSection("manifesto")}
            className="hover:text-[#1C2419] transition-colors"
          >
            Manifesto
          </button>
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          {/* Currency */}
          <div className="relative">
            <button
              onClick={() => setIsCurrencyDropdownOpen(!isCurrencyDropdownOpen)}
              className="flex items-center gap-1 text-xs px-2.5 py-1.5 border border-[#1C2419]/15 hover:border-[#1C2419] bg-[#FFFFFF] text-[#1C2419] transition-colors"
            >
              <Globe className="w-3.5 h-3.5 text-[#475839]" />
              <span className="font-bold">{currency}</span>
              <ChevronDown className="w-3 h-3 text-[#1C2419]/50" />
            </button>

            {isCurrencyDropdownOpen && (
              <div className="absolute right-0 mt-1 w-24 bg-[#FFFFFF] border border-[#1C2419]/20 shadow-md py-1 z-50 text-xs">
                {currencies.map((c) => (
                  <button
                    key={c}
                    onClick={() => {
                      setCurrency(c);
                      setIsCurrencyDropdownOpen(false);
                    }}
                    className={`w-full text-left px-3 py-1.5 hover:bg-[#1C2419] hover:text-[#F8F8F4] transition-colors flex items-center justify-between ${
                      currency === c ? "font-bold text-[#475839]" : ""
                    }`}
                  >
                    <span>{c}</span>
                    {currency === c && <span className="text-[#B85B35]">✓</span>}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Search */}
          <button
            onClick={() => toggleSearch(true)}
            className="p-1.5 border border-[#1C2419]/15 hover:border-[#1C2419] bg-[#FFFFFF] text-[#1C2419] transition-colors"
            aria-label="Open Search"
          >
            <Search className="w-4 h-4" />
          </button>

          {/* Luggage Tag Bag */}
          <LuggageTagButton />
        </div>

      </div>
    </header>
  );
};
