"use client";

import React, { useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { useShopStore } from "@/lib/store";

export const Footer: React.FC = () => {
  const { openRepairModal } = useShopStore();
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 3000);
      setEmail("");
    }
  };

  return (
    <footer className="w-full bg-[#1C2419] text-[#F8F8F4] py-16 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-10 border-b border-[#F8F8F4]/15">
          
          {/* Brand */}
          <div className="lg:col-span-4 space-y-3">
            <span className="text-xl font-bold tracking-wider text-[#F8F8F4] block">
              ANONYMOUS
            </span>
            <p className="text-xs text-[#F8F8F4]/70 leading-relaxed max-w-sm">
              Heavyweight 300+ GSM tees crafted with hand-cut deadstock patches and visible sashiko stitching.
            </p>
          </div>

          {/* Links */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <span className="font-bold text-[#C4E869] uppercase block text-[10px]">
                COLLECTION
              </span>
              <ul className="space-y-1.5 text-[#F8F8F4]/70">
                <li><a href="#collection" className="hover:text-[#F8F8F4]">All Garments</a></li>
                <li><a href="#vibe-matrix" className="hover:text-[#F8F8F4]">Vibe Matrix</a></li>
                <li><a href="#passport" className="hover:text-[#F8F8F4]">Blueprint</a></li>
                <li><a href="#fit-matrix" className="hover:text-[#F8F8F4]">Fit Guide</a></li>
              </ul>
            </div>

            <div className="space-y-2">
              <span className="font-bold text-[#B85B35] uppercase block text-[10px]">
                CRAFT & CARE
              </span>
              <ul className="space-y-1.5 text-[#F8F8F4]/70">
                <li>
                  <button onClick={openRepairModal} className="hover:text-[#F8F8F4] text-left">
                    Mend Portal
                  </button>
                </li>
                <li><a href="#manifesto" className="hover:text-[#F8F8F4]">Manifesto</a></li>
                <li>
                  <button onClick={openRepairModal} className="hover:text-[#F8F8F4] text-left">
                    DIY Repair Kit
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-4 space-y-3">
            <span className="font-bold text-[#C4E869] uppercase block text-[10px]">
              DROP ALERTS
            </span>
            <form onSubmit={handleSubscribe} className="flex items-center gap-2">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="enter your email..."
                className="w-full px-3 py-2 bg-[#F8F8F4]/10 border border-[#F8F8F4]/20 text-xs text-[#F8F8F4] focus:outline-none focus:border-[#C4E869]"
              />
              <button
                type="submit"
                className="px-3.5 py-2 bg-[#C4E869] text-[#1C2419] font-bold text-xs uppercase hover:bg-[#B85B35] hover:text-white transition-colors flex-shrink-0"
              >
                {subscribed ? <Check className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
              </button>
            </form>
          </div>

        </div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] text-[#F8F8F4]/50 font-bold">
          <div>© 2026 ANONYMOUS. ALL RIGHTS RESERVED.</div>
          <div className="flex gap-4">
            <span>300+ GSM HEAVYWEIGHT</span>
            <span>•</span>
            <span>HAND SASHIKO STITCH</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
