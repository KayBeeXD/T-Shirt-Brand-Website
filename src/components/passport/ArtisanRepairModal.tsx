"use client";

import React, { useState } from "react";
import { useShopStore } from "@/lib/store";
import { X, Scissors, CheckCircle2, ShieldCheck, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";

export const ArtisanRepairModal: React.FC = () => {
  const { isRepairModalOpen, closeRepairModal } = useShopStore();

  const [lotId, setLotId] = useState("");
  const [repairType, setRepairType] = useState<"diy" | "guild">("diy");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    try {
      confetti({
        particleCount: 50,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#C4E869", "#B85B35", "#1C2419"],
      });
    } catch (err) {
      // ignore
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setLotId("");
    closeRepairModal();
  };

  return (
    <AnimatePresence>
      {isRepairModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Animated Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeRepairModal}
            className="fixed inset-0 bg-[#1C2419]/80 backdrop-blur-sm"
          />

          {/* Animated Window */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 220 }}
            className="relative w-full max-w-lg bg-[#F8F8F4] border border-[#1C2419] shadow-2xl z-10 overflow-hidden"
          >
            {/* Header */}
            <div className="bg-[#1C2419] text-[#F8F8F4] p-4 flex items-center justify-between text-xs font-bold">
              <div className="flex items-center gap-2">
                <Scissors className="w-4 h-4 text-[#C4E869]" />
                <span className="uppercase tracking-widest text-[#C4E869]">
                  LIFETIME MEND PORTAL
                </span>
              </div>
              <button
                onClick={closeRepairModal}
                className="p-1 hover:text-[#C4E869] transition-colors"
                aria-label="Close Repair Window"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Window Content */}
            <div className="p-6">
              {submitted ? (
                <div className="py-8 text-center space-y-4">
                  <CheckCircle2 className="w-14 h-14 text-[#475839] mx-auto animate-bounce" />
                  <h3 className="text-xl font-bold text-[#1C2419]">
                    Repair Ticket Generated!
                  </h3>
                  <p className="text-xs text-[#5C6656] leading-relaxed max-w-sm mx-auto">
                    {repairType === "diy"
                      ? "Your complimentary Sashiko DIY Patch Kit has been dispatched! Includes 3 deadstock patches and rust cotton thread."
                      : "Artisan return label generated. Ship your worn tee to our Bangalore studio for free visible mending."}
                  </p>

                  <div className="p-3 bg-[#FFFFFF] border border-[#1C2419]/15 text-xs text-left max-w-xs mx-auto space-y-1 font-mono">
                    <span className="text-[10px] text-[#5C6656] block font-bold">TICKET NO:</span>
                    <span className="font-bold text-[#B85B35]">#MEND-TK-99482</span>
                    <span className="text-[10px] text-[#5C6656] block pt-1 font-bold">STATUS:</span>
                    <span className="font-bold text-[#1C2419]">CONFIRMED / DISPATCHING</span>
                  </div>

                  <button
                    onClick={handleReset}
                    className="px-6 py-2.5 bg-[#1C2419] text-[#C4E869] text-xs font-bold uppercase tracking-widest hover:bg-[#B85B35] hover:text-white transition-colors"
                  >
                    Done
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5 text-xs">
                  <div className="space-y-1">
                    <span className="text-[11px] font-bold uppercase text-[#475839]">
                      LIFETIME MEND GUARANTEE
                    </span>
                    <h3 className="text-xl font-bold text-[#1C2419]">
                      Initiate Artisan Repair Ticket
                    </h3>
                    <p className="text-xs text-[#5C6656]">
                      Enter your Garment Passport Lot ID found on your shirt neck label.
                    </p>
                  </div>

                  {/* Lot ID Input */}
                  <div className="space-y-1.5">
                    <label className="block font-bold text-[#1C2419] uppercase text-[10px]">
                      Garment Lot ID Code:
                    </label>
                    <input
                      type="text"
                      required
                      value={lotId}
                      onChange={(e) => setLotId(e.target.value)}
                      placeholder="e.g. LOT #0884-A"
                      className="w-full px-3 py-2 bg-[#FFFFFF] border border-[#1C2419]/20 text-xs font-mono focus:outline-none focus:border-[#B85B35]"
                    />
                  </div>

                  {/* Repair Option Selection */}
                  <div className="space-y-2">
                    <label className="block font-bold text-[#1C2419] uppercase text-[10px]">
                      Select Repair Option:
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        type="button"
                        onClick={() => setRepairType("diy")}
                        className={`p-3 border text-left space-y-1 transition-all ${
                          repairType === "diy"
                            ? "bg-[#1C2419] text-[#FAFBF6] border-[#1C2419] font-bold"
                            : "bg-[#FFFFFF] text-[#1C2419] border-[#1C2419]/20"
                        }`}
                      >
                        <span className="block font-bold text-xs">Option A: DIY Kit</span>
                        <span className="block text-[10px] text-[#5C6656]">Free sashiko thread & deadstock patches</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => setRepairType("guild")}
                        className={`p-3 border text-left space-y-1 transition-all ${
                          repairType === "guild"
                            ? "bg-[#1C2419] text-[#FAFBF6] border-[#1C2419] font-bold"
                            : "bg-[#FFFFFF] text-[#1C2419] border-[#1C2419]/20"
                        }`}
                      >
                        <span className="block font-bold text-xs">Option B: Studio Mend</span>
                        <span className="block text-[10px] text-[#5C6656]">Ship garment to studio for free artisan repair</span>
                      </button>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-3 bg-[#1C2419] text-[#C4E869] hover:bg-[#B85B35] hover:text-white transition-colors text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2"
                  >
                    <span>Generate Repair Ticket</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#C4E869]" />
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
