"use client";

import React, { useState } from "react";
import { useShopStore } from "@/lib/store";
import { GarmentSize, SashikoThreadColor } from "@/types";
import { X, Scissors, Check } from "lucide-react";
import confetti from "canvas-confetti";
import { motion, AnimatePresence } from "framer-motion";

export const CustomMendModal: React.FC = () => {
  const { isCustomMendOpen, activeMendProduct, closeCustomMendModal, addToCart, formatPrice } =
    useShopStore();

  const [selectedSize, setSelectedSize] = useState<GarmentSize>("L");
  const [selectedThread, setSelectedThread] = useState<SashikoThreadColor>(
    activeMendProduct?.availableThreads[0] || {
      name: "Botanical Olive Stitch",
      hex: "#556B43",
      badge: "Signature Olive",
    }
  );
  const [customPatchNote, setCustomPatchNote] = useState("");
  const [isAddedSuccess, setIsAddedSuccess] = useState(false);

  const handleAddToCart = () => {
    if (!activeMendProduct) return;
    addToCart(activeMendProduct, selectedSize, selectedThread, customPatchNote);
    setIsAddedSuccess(true);

    try {
      confetti({
        particleCount: 40,
        spread: 60,
        origin: { y: 0.7 },
        colors: ["#556B43", "#C4E869", "#B85B35", "#1C2419"],
      });
    } catch (e) {
      // ignore
    }

    setTimeout(() => {
      setIsAddedSuccess(false);
      closeCustomMendModal();
    }, 900);
  };

  return (
    <AnimatePresence>
      {isCustomMendOpen && activeMendProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Animated Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCustomMendModal}
            className="fixed inset-0 bg-[#1C2419]/80 backdrop-blur-sm"
          />

          {/* Animated Workshop Window */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 220 }}
            className="w-full max-w-3xl bg-[#F8F8F4] border border-[#1C2419] shadow-2xl relative my-8 overflow-hidden z-10 max-h-[90vh] overflow-y-auto"
          >
            {/* Header Bar */}
            <div className="bg-[#1C2419] text-[#FAFBF6] p-4 flex items-center justify-between text-xs font-bold">
              <div className="flex items-center gap-2">
                <Scissors className="w-4 h-4 text-[#C4E869]" />
                <span className="uppercase tracking-widest text-[#C4E869]">
                  ARTISAN MENDING WORKSHOP & CUSTOMIZER
                </span>
              </div>

              <button
                onClick={closeCustomMendModal}
                className="p-1 hover:text-[#C4E869] transition-colors"
                aria-label="Close Workshop Modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="grid grid-cols-1 md:grid-cols-12 p-6 gap-6">
              {/* Left Column */}
              <div className="md:col-span-5 space-y-3">
                <div className="relative aspect-[3/4] bg-[#1C2419]/5 border border-[#1C2419]/15 overflow-hidden">
                  <img
                    src={activeMendProduct.frontImage}
                    alt={activeMendProduct.name}
                    className="w-full h-full object-cover"
                  />

                  <div className="absolute bottom-2 left-2 bg-[#1C2419]/90 text-[#C4E869] px-2 py-1 text-[10px] font-bold border border-[#1C2419]">
                    {activeMendProduct.originBadge}
                  </div>
                </div>

                <div className="p-3 bg-[#FFFFFF] border border-[#1C2419]/15 text-xs space-y-1">
                  <div className="flex items-center justify-between text-[10px] text-[#5C6656]">
                    <span>STITCH DENSITY</span>
                    <span className="font-bold text-[#B85B35]">{activeMendProduct.stitchDensity}</span>
                  </div>
                  <div className="flex items-center justify-between text-[10px] text-[#5C6656]">
                    <span>ARTISAN HOURS</span>
                    <span className="font-bold text-[#475839]">{activeMendProduct.handStitchHours} Hours</span>
                  </div>
                  <div className="flex items-center justify-between text-[10px] text-[#5C6656]">
                    <span>LOT ID</span>
                    <span className="font-bold">{activeMendProduct.lotNumber}</span>
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="md:col-span-7 space-y-5 flex flex-col justify-between">
                <div>
                  <span className="text-xs text-[#B85B35] uppercase font-bold">
                    {activeMendProduct.scrapSource}
                  </span>
                  <h3 className="text-2xl font-bold text-[#1C2419]">
                    {activeMendProduct.name}
                  </h3>
                  <p className="text-xs text-[#5C6656] mt-1 leading-relaxed">
                    {activeMendProduct.description}
                  </p>

                  <div className="mt-3 text-xl font-black text-[#1C2419]">
                    {formatPrice(activeMendProduct.priceUSD)}
                  </div>
                </div>

                {/* Sizing */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs font-bold">
                    <span className="uppercase text-[#1C2419]">1. Select Size (Relaxed Boxy Cut)</span>
                    <span className="text-[10px] text-[#B85B35]">XS — 3XL Inclusive</span>
                  </div>

                  <div className="grid grid-cols-7 gap-1.5 text-xs font-bold">
                    {activeMendProduct.availableSizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`py-2 border text-center transition-all ${
                          selectedSize === size
                            ? "bg-[#1C2419] text-[#C4E869] border-[#1C2419] shadow-sm"
                            : "bg-[#FFFFFF] text-[#1C2419] border-[#1C2419]/20 hover:border-[#1C2419]"
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Sashiko Thread */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs font-bold">
                    <span className="uppercase text-[#1C2419]">2. Choose Sashiko Mending Thread</span>
                    <span className="text-[10px] text-[#475839]">{selectedThread.name}</span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-xs">
                    {activeMendProduct.availableThreads.map((thread) => {
                      const isSelected = selectedThread.hex === thread.hex;
                      return (
                        <button
                          key={thread.hex}
                          onClick={() => setSelectedThread(thread)}
                          className={`p-2.5 border text-left flex items-center gap-2.5 transition-all ${
                            isSelected
                              ? "bg-[#1C2419] text-[#FAFBF6] border-[#1C2419] font-bold"
                              : "bg-[#FFFFFF] text-[#1C2419] border-[#1C2419]/15 hover:border-[#1C2419]"
                          }`}
                        >
                          <span
                            className="w-4 h-4 rounded-full border border-black/30 flex-shrink-0"
                            style={{ backgroundColor: thread.hex }}
                          />
                          <div className="truncate">
                            <span className="block text-[11px] leading-none font-bold">{thread.name}</span>
                            <span className="text-[9px] text-[#5C6656]">
                              {thread.badge}
                            </span>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Optional Mantra Note */}
                <div className="space-y-1.5 text-xs">
                  <label className="block font-bold uppercase text-[#1C2419]">
                    3. Custom Emotional Mantra / Patch Note (Optional)
                  </label>
                  <input
                    type="text"
                    maxLength={40}
                    value={customPatchNote}
                    onChange={(e) => setCustomPatchNote(e.target.value)}
                    placeholder="e.g. 'Overstimulated but surviving', 'Lot #884'"
                    className="w-full px-3 py-2 bg-[#FFFFFF] border border-[#1C2419]/20 text-xs text-[#1C2419] focus:outline-none focus:ring-1 focus:ring-[#B85B35]"
                  />
                </div>

                {/* Add Button */}
                <div className="pt-2">
                  <button
                    onClick={handleAddToCart}
                    disabled={isAddedSuccess}
                    className={`w-full py-3.5 transition-all text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 ${
                      isAddedSuccess
                        ? "bg-[#475839] text-white"
                        : "bg-[#B85B35] text-white hover:bg-[#1C2419]"
                    }`}
                  >
                    {isAddedSuccess ? (
                      <>
                        <Check className="w-4 h-4 text-[#C4E869]" />
                        <span>Garment Added to Workshop Bag!</span>
                      </>
                    ) : (
                      <>
                        <Scissors className="w-4 h-4 text-[#C4E869]" />
                        <span>Add Custom Garment to Bag</span>
                      </>
                    )}
                  </button>
                </div>

              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
