"use client";

import React, { useState } from "react";
import { GarmentSize } from "@/types";
import { motion } from "framer-motion";

interface FitProfile {
  size: GarmentSize;
  chestInches: string;
  shoulderDrop: string;
  lengthInches: string;
  modelInfo: string;
  image: string;
}

export const InclusiveFitShowcase: React.FC = () => {
  const fitProfiles: FitProfile[] = [
    {
      size: "S",
      chestInches: '22.5"',
      shoulderDrop: '4.5" Drop',
      lengthInches: '28.0"',
      modelInfo: 'Alex (5\'8" / Size S)',
      image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1000&q=80",
    },
    {
      size: "L",
      chestInches: '25.5"',
      shoulderDrop: '5.5" Drop',
      lengthInches: '30.0"',
      modelInfo: 'Jordan (6\'1" / Size L)',
      image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1000&q=80",
    },
    {
      size: "XL",
      chestInches: '27.0"',
      shoulderDrop: '6.0" Drop',
      lengthInches: '31.0"',
      modelInfo: 'Sam (6\'2" / Size XL)',
      image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=1000&q=80",
    },
    {
      size: "2XL",
      chestInches: '28.5"',
      shoulderDrop: '6.5" Drop',
      lengthInches: '32.0"',
      modelInfo: 'Devon (6\'2" / Size 2XL)',
      image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=1000&q=80",
    },
    {
      size: "3XL",
      chestInches: '30.0"',
      shoulderDrop: '7.0" Drop',
      lengthInches: '33.0"',
      modelInfo: 'KAI (6\'3" / Size 3XL)',
      image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=1000&q=80",
    },
  ];

  const [activeSize, setActiveSize] = useState<GarmentSize>("L");
  const activeProfile = fitProfiles.find((p) => p.size === activeSize) || fitProfiles[1];

  return (
    <section id="fit-matrix" className="w-full py-20 bg-[#F8F8F4] border-b border-[#1C2419]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center max-w-xl mx-auto space-y-2"
        >
          <span className="text-[11px] font-bold uppercase tracking-widest text-[#475839]">
            FIT GUIDE
          </span>
          <h2 className="text-3xl font-black text-[#1C2419]">
            BOXY FIT FOR EVERY BODY.
          </h2>
          <p className="text-xs text-[#5C6656]">
            XS to 3XL pattern drafting with proportional dropped shoulders.
          </p>
        </motion.div>

        {/* Fit Showcase Grid Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#FFFFFF] border border-[#1C2419]/12 rounded-xl p-6 sm:p-8 shadow-sm hover:shadow-lg transition-all overflow-hidden"
        >
          {/* Controls */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex flex-wrap gap-2 text-xs font-bold">
              {fitProfiles.map((p) => (
                <button
                  key={p.size}
                  onClick={() => setActiveSize(p.size)}
                  className={`px-4 py-2 border rounded-lg transition-all ${
                    activeSize === p.size
                      ? "bg-[#1C2419] text-[#F8F8F4] border-[#1C2419]"
                      : "bg-[#F8F8F4] text-[#1C2419]/70 border-[#1C2419]/15 hover:border-[#1C2419]"
                  }`}
                >
                  Size {p.size}
                </button>
              ))}
            </div>

            {/* Specs */}
            <div className="grid grid-cols-3 gap-3 text-xs">
              <div className="p-3 bg-[#F8F8F4] border border-[#1C2419]/10 rounded-lg">
                <span className="text-[10px] text-[#5C6656] block uppercase font-bold">CHEST</span>
                <span className="text-sm font-bold text-[#1C2419]">{activeProfile.chestInches}</span>
              </div>
              <div className="p-3 bg-[#F8F8F4] border border-[#1C2419]/10 rounded-lg">
                <span className="text-[10px] text-[#5C6656] block uppercase font-bold">SHOULDER</span>
                <span className="text-sm font-bold text-[#B85B35]">{activeProfile.shoulderDrop}</span>
              </div>
              <div className="p-3 bg-[#F8F8F4] border border-[#1C2419]/10 rounded-lg">
                <span className="text-[10px] text-[#5C6656] block uppercase font-bold">LENGTH</span>
                <span className="text-sm font-bold text-[#475839]">{activeProfile.lengthInches}</span>
              </div>
            </div>

            <p className="text-xs text-[#5C6656] font-bold">
              Model Spec: {activeProfile.modelInfo}
            </p>
          </div>

          {/* Image */}
          <div className="lg:col-span-6">
            <div className="relative aspect-[3/4] max-w-sm mx-auto bg-[#F8F8F4] border border-[#1C2419]/10 rounded-lg overflow-hidden">
              <img
                src={activeProfile.image}
                alt={activeProfile.modelInfo}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
