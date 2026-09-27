"use client";

import React from "react";
import { Navbar } from "@/components/ui/Navbar";
import { HeroSection } from "@/components/home/HeroSection";
import { ProductGridContainer } from "@/components/home/ProductGridContainer";
import { GarmentPassportSection } from "@/components/home/GarmentPassportSection";
import { InclusiveFitShowcase } from "@/components/home/InclusiveFitShowcase";
import { CircularManifestoSection } from "@/components/home/CircularManifestoSection";
import { Footer } from "@/components/ui/Footer";
import { SearchModal } from "@/components/ui/SearchModal";
import { CustomMendModal } from "@/components/product/CustomMendModal";
import { CartDrawer } from "@/components/cart/CartDrawer";
import { ArtisanRepairModal } from "@/components/passport/ArtisanRepairModal";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F8F8F4] text-[#1C2419] relative selection:bg-[#C4E869] selection:text-[#1C2419]">
      {/* 1. Sticky Navbar */}
      <Navbar />

      {/* 2. Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section with Interactive Showcase Card */}
        <HeroSection />

        {/* Dual Axis Vibe & Upcycle Matrix Filtered Collection */}
        <ProductGridContainer />

        {/* Craft Blueprint Hub */}
        <GarmentPassportSection />

        {/* Inclusive Sizing & Fit Showcase */}
        <InclusiveFitShowcase />

        {/* Slow Stitch Manifesto */}
        <CircularManifestoSection />
      </main>

      {/* 3. Footer */}
      <Footer />

      {/* 4. Modals & Animated Windows */}
      <SearchModal />
      <CustomMendModal />
      <CartDrawer />
      <ArtisanRepairModal />
    </div>
  );
}
