"use client";

import React from "react";
import { motion } from "framer-motion";

export const CircularManifestoSection: React.FC = () => {
  return (
    <section id="manifesto" className="w-full py-20 bg-[#F8F8F4] border-b border-[#1C2419]/10">
      <div className="max-w-3xl mx-auto px-4 text-center space-y-6">
        
        <motion.span
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[11px] font-bold uppercase tracking-widest text-[#475839]"
        >
          MANIFESTO
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-5xl font-black text-[#1C2419] leading-tight"
        >
          &quot;DON&apos;T HIDE THE SEAM. <br />
          <span className="italic text-[#B85B35] font-normal">WE EMBROIDER IT.</span>&quot;
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-xs sm:text-sm text-[#5C6656] leading-relaxed max-w-xl mx-auto"
        >
          ANONYMOUS creates heavyweight 300+ GSM boxy tees with hand-cut deadstock denim, khadi, and corduroy patches, finished with visible Japanese sashiko running stitches.
        </motion.p>

      </div>
    </section>
  );
};
