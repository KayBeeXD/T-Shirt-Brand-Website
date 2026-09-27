"use client";

import React from "react";
import { Scissors, Layers, RefreshCw } from "lucide-react";
import { motion } from "framer-motion";
import { useShopStore } from "@/lib/store";

export const GarmentPassportSection: React.FC = () => {
  const { openRepairModal } = useShopStore();

  return (
    <section id="passport" className="w-full py-20 bg-[#F8F8F4] text-[#1C2419] border-b border-[#1C2419]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto space-y-3"
        >
          <span className="text-[11px] font-bold uppercase tracking-widest text-[#475839]">
            CRAFT BLUEPRINT
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#1C2419] tracking-tight">
            EVERY SEAM EMBROIDERED BY HAND.
          </h2>
          <p className="text-xs text-[#5C6656] leading-relaxed">
            2.5 hours of artisan sashiko topstitching and raw-edge deadstock patch appliqué per garment.
          </p>
        </motion.div>

        {/* 3 Pillars Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="p-6 bg-[#FFFFFF] border border-[#1C2419]/10 rounded-xl space-y-3 flex flex-col justify-between shadow-sm hover:shadow-lg transition-all"
          >
            <div className="space-y-3">
              <Scissors className="w-5 h-5 text-[#475839]" />
              <h3 className="text-base font-bold text-[#1C2419]">Visible Sashiko Stitch</h3>
              <p className="text-[#5C6656] leading-relaxed">
                Japanese sashiko topstitching reinforcing high-stress chest and shoulder seams with thick cotton thread.
              </p>
            </div>
            <button
              onClick={openRepairModal}
              className="text-[#B85B35] font-bold text-[11px] uppercase tracking-wider hover:underline text-left pt-2"
            >
              Request DIY Kit →
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="p-6 bg-[#FFFFFF] border border-[#1C2419]/10 rounded-xl space-y-3 flex flex-col justify-between shadow-sm hover:shadow-lg transition-all"
          >
            <div className="space-y-3">
              <Layers className="w-5 h-5 text-[#B85B35]" />
              <h3 className="text-base font-bold text-[#1C2419]">300+ GSM Boxy Cut</h3>
              <p className="text-[#5C6656] leading-relaxed">
                Ultra-heavy organic cotton knit providing a clean structured drape that maintains shape over time.
              </p>
            </div>
            <span className="text-[#475839] font-bold text-[11px] uppercase tracking-wider pt-2 block">
              100% Cotton Base
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="p-6 bg-[#FFFFFF] border border-[#1C2419]/10 rounded-xl space-y-3 flex flex-col justify-between shadow-sm hover:shadow-lg transition-all"
          >
            <div className="space-y-3">
              <RefreshCw className="w-5 h-5 text-[#475839]" />
              <h3 className="text-base font-bold text-[#1C2419]">Lifetime Mend Guarantee</h3>
              <p className="text-[#5C6656] leading-relaxed">
                Every tee includes free artisan repair patches or complimentary DIY sashiko repair kits.
              </p>
            </div>
            <button
              onClick={openRepairModal}
              className="text-[#B85B35] font-bold text-[11px] uppercase tracking-wider hover:underline text-left pt-2"
            >
              Initiate Repair Request →
            </button>
          </motion.div>
        </div>

      </div>
    </section>
  );
};
