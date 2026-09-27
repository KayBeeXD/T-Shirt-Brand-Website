"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export const HeroSection: React.FC = () => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full py-24 lg:py-32 bg-[#F8F8F4] border-b border-[#1C2419]/10 overflow-hidden">
      {/* Full-bleed Background Image with Enhanced Visibility */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
        <img
          src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=2000&q=80"
          alt="Embroidered Clothes Collection Background"
          className="w-full h-full object-cover object-center opacity-85"
        />
        {/* Soft Blend Gradient Overlay ensuring text legibility on the left */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#F8F8F4] via-[#F8F8F4]/60 to-[#F8F8F4]/5" />
      </div>

      {/* Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-2xl space-y-6"
        >
          <span className="text-[11px] font-bold uppercase tracking-widest text-[#475839] bg-[#FFFFFF]/90 backdrop-blur-md px-3 py-1 rounded-md border border-[#1C2419]/10 inline-block shadow-sm">
            HEAVYWEIGHT 300 GSM COLLECTION
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#1C2419] leading-tight tracking-tight">
            WE DON&apos;T HIDE THE SEAM. <br />
            <span className="italic font-normal text-[#B85B35]">
              WE EMBROIDER IT.
            </span>
          </h1>

          <p className="text-sm sm:text-base text-[#1C2419] font-medium max-w-lg leading-relaxed bg-[#F8F8F4]/60 backdrop-blur-xs p-2 rounded-md">
            280+ GSM boxy tees featuring hand-cut deadstock patches, visible sashiko stitches, and embroidered mantras.
          </p>

          {/* Action CTAs */}
          <div className="flex items-center gap-4 pt-2 font-bold">
            <button
              onClick={() => scrollToSection("collection")}
              className="px-7 py-3.5 bg-[#1C2419] text-[#F8F8F4] hover:bg-[#B85B35] transition-all text-xs uppercase tracking-widest rounded-lg flex items-center gap-2 shadow-md"
            >
              <span>Shop Drop</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#C4E869]" />
            </button>

            <button
              onClick={() => scrollToSection("passport")}
              className="px-7 py-3.5 bg-[#FFFFFF]/95 backdrop-blur-md border border-[#1C2419]/30 text-[#1C2419] hover:border-[#1C2419] transition-all text-xs uppercase tracking-widest rounded-lg shadow-md"
            >
              Explore Craft
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
