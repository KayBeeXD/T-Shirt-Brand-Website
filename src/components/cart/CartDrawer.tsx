"use client";

import React, { useState } from "react";
import { useShopStore } from "@/lib/store";
import { X, Trash2, Plus, Minus, Scissors, CheckCircle2, ArrowRight } from "lucide-react";
import confetti from "canvas-confetti";
import { motion, AnimatePresence } from "framer-motion";

export const CartDrawer: React.FC = () => {
  const {
    isCartOpen,
    toggleCart,
    cart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getCartSubtotalUSD,
    isEligibleForFreeRepairKit,
    amountNeededForFreeKitUSD,
    formatPrice,
  } = useShopStore();

  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [checkoutComplete, setCheckoutComplete] = useState(false);

  const subtotalUSD = getCartSubtotalUSD();
  const isEligibleKit = isEligibleForFreeRepairKit();
  const missingUSD = amountNeededForFreeKitUSD();

  const progressPercent = Math.min(100, (subtotalUSD / 100) * 100);

  const handleCheckout = () => {
    setIsCheckingOut(true);
    setTimeout(() => {
      setIsCheckingOut(false);
      setCheckoutComplete(true);
      try {
        confetti({
          particleCount: 100,
          spread: 80,
          origin: { y: 0.5 },
          colors: ["#C4E869", "#B85B35", "#475839", "#1C2419"],
        });
      } catch (e) {
        // ignore
      }
    }, 1200);
  };

  const handleResetCheckout = () => {
    clearCart();
    setCheckoutComplete(false);
    toggleCart(false);
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          {/* Animated Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => toggleCart(false)}
            className="fixed inset-0 bg-[#1C2419]/80 backdrop-blur-sm"
          />

          {/* Animated Drawer Panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 26, stiffness: 220 }}
            className="w-full max-w-lg bg-[#F8F8F4] border-l border-[#1C2419] h-full flex flex-col justify-between shadow-2xl relative z-10 overflow-hidden"
          >
            {/* Top Header */}
            <div className="bg-[#1C2419] text-[#FAFBF6] p-4 flex items-center justify-between text-xs border-b border-[#1C2419]">
              <div className="flex items-center gap-2 font-bold">
                <span className="w-2.5 h-2.5 rounded-full bg-[#C4E869] animate-pulse" />
                <span className="uppercase tracking-widest text-[#C4E869]">
                  WORKSHOP BAG RECEIPT
                </span>
              </div>

              <button
                onClick={() => toggleCart(false)}
                className="p-1 hover:text-[#C4E869] transition-colors"
                aria-label="Close Cart"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Milestone Repair Kit Progress Bar */}
            <div className="bg-[#FFFFFF] p-3.5 border-b border-[#1C2419]/15 text-xs space-y-1.5">
              <div className="flex items-center justify-between text-[11px]">
                <div className="flex items-center gap-1.5 font-bold text-[#1C2419]">
                  <Scissors className="w-3.5 h-3.5 text-[#B85B35]" />
                  <span>Complimentary Sashiko Repair Kit</span>
                </div>
                {isEligibleKit ? (
                  <span className="text-[#475839] font-bold text-[10px] bg-[#475839]/10 px-1.5 py-0.5">
                    ✓ UNLOCKED
                  </span>
                ) : (
                  <span className="text-[#B85B35] font-bold text-[10px]">
                    Add {formatPrice(missingUSD)} more
                  </span>
                )}
              </div>

              <div className="w-full bg-[#1C2419]/10 h-1.5 relative overflow-hidden">
                <div
                  className="bg-[#B85B35] h-full transition-all duration-500"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>

              <p className="text-[10px] text-[#5C6656]">
                {isEligibleKit
                  ? "Your order includes 3 deadstock patches, organic thread, and sashiko repair needles."
                  : `Add ${formatPrice(missingUSD)} more to receive a complimentary sashiko visible repair kit.`}
              </p>
            </div>

            {/* Cart Items List */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {checkoutComplete ? (
                <div className="py-12 px-4 text-center space-y-4">
                  <CheckCircle2 className="w-16 h-16 text-[#475839] mx-auto animate-bounce" />
                  <h3 className="text-2xl font-bold text-[#1C2419]">
                    Order & Passport Registered!
                  </h3>
                  <p className="text-xs text-[#5C6656] leading-relaxed max-w-sm mx-auto">
                    Thank you for choosing ANONYMOUS. Your heavyweight upcycled garments are being tailored in our artisan guild.
                  </p>
                  <div className="p-4 bg-[#FFFFFF] border border-[#1C2419]/20 text-xs space-y-1 text-left max-w-xs mx-auto">
                    <span className="text-[10px] text-[#5C6656] block font-bold">TRACKING ID:</span>
                    <span className="font-bold text-[#B85B35]">#ANON-DISPATCH-9981</span>
                    <span className="text-[10px] text-[#5C6656] block pt-1 font-bold">PASSPORT QR:</span>
                    <span className="font-bold text-[#1C2419]">INCLUDED IN PARCEL</span>
                  </div>
                  <button
                    onClick={handleResetCheckout}
                    className="px-6 py-3 bg-[#1C2419] text-[#C4E869] text-xs font-bold uppercase tracking-widest hover:bg-[#B85B35] hover:text-white transition-colors"
                  >
                    Back to Brand Collection
                  </button>
                </div>
              ) : cart.length === 0 ? (
                <div className="py-16 text-center space-y-3 text-xs text-[#5C6656]">
                  <Scissors className="w-12 h-12 text-[#1C2419]/20 mx-auto" />
                  <p className="font-bold text-[#1C2419]">Your Workshop Bag is currently empty.</p>
                  <p>Explore our 280+ GSM deadstock tees and customize your patch.</p>
                </div>
              ) : (
                cart.map((item) => (
                  <div
                    key={item.id}
                    className="p-3 bg-[#FFFFFF] border border-[#1C2419]/15 flex gap-3 relative group"
                  >
                    <div className="w-16 h-20 relative bg-[#F8F8F4] border border-[#1C2419]/10 flex-shrink-0">
                      <img
                        src={item.product.frontImage}
                        alt={item.product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="flex-1 space-y-1 text-xs">
                      <div className="flex justify-between items-start">
                        <h4 className="font-bold text-sm text-[#1C2419] leading-tight">
                          {item.product.name}
                        </h4>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-[#1C2419]/40 hover:text-[#B85B35] transition-colors p-1"
                          aria-label="Remove item"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <div className="flex flex-wrap items-center gap-2 text-[10px] text-[#5C6656] font-bold">
                        <span className="bg-[#1C2419] text-[#C4E869] px-1.5 py-0.5">
                          SIZE: {item.size}
                        </span>
                        <span className="flex items-center gap-1 border border-[#1C2419]/20 px-1.5 py-0.5">
                          <span
                            className="w-2 h-2 rounded-full"
                            style={{ backgroundColor: item.selectedThread.hex }}
                          />
                          {item.selectedThread.name}
                        </span>
                      </div>

                      {item.customPatchNote && (
                        <p className="text-[10px] text-[#B85B35] italic">
                          Mantra: &quot;{item.customPatchNote}&quot;
                        </p>
                      )}

                      <div className="flex items-center justify-between pt-2">
                        <span className="font-bold text-sm text-[#1C2419]">
                          {formatPrice(item.product.priceUSD * item.quantity)}
                        </span>

                        <div className="flex items-center border border-[#1C2419]/20 bg-[#F8F8F4]">
                          <button
                            onClick={() => updateQuantity(item.id, -1)}
                            className="p-1 hover:bg-[#1C2419] hover:text-white transition-colors"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-2 font-bold text-xs">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, 1)}
                            className="p-1 hover:bg-[#1C2419] hover:text-white transition-colors"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                      </div>

                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer Summary */}
            {!checkoutComplete && cart.length > 0 && (
              <div className="p-4 bg-[#FFFFFF] border-t border-[#1C2419]/15 text-xs space-y-3">
                <div className="space-y-1">
                  <div className="flex justify-between text-[#5C6656]">
                    <span>Garments Subtotal:</span>
                    <span>{formatPrice(subtotalUSD)}</span>
                  </div>
                  <div className="flex justify-between text-[#5C6656]">
                    <span>Shipping:</span>
                    <span className="text-[#475839] font-bold">COMPLIMENTARY</span>
                  </div>
                  {isEligibleKit && (
                    <div className="flex justify-between text-[#B85B35] font-bold">
                      <span>Visible Sashiko Mend Kit:</span>
                      <span>FREE ($0.00)</span>
                    </div>
                  )}
                  <div className="flex justify-between text-base font-black text-[#1C2419] pt-2 border-t border-[#1C2419]/15">
                    <span>ESTIMATED TOTAL:</span>
                    <span>{formatPrice(subtotalUSD)}</span>
                  </div>
                </div>

                <button
                  onClick={handleCheckout}
                  disabled={isCheckingOut}
                  className="w-full py-4 bg-[#1C2419] text-[#C4E869] hover:bg-[#B85B35] hover:text-white transition-colors text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2"
                >
                  {isCheckingOut ? (
                    <span>Generating Garment Passports...</span>
                  ) : (
                    <>
                      <span>Proceed to One-Click Checkout</span>
                      <ArrowRight className="w-4 h-4 text-[#C4E869]" />
                    </>
                  )}
                </button>
              </div>
            )}

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
