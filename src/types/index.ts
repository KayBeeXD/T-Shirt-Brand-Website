export type EmotionVibe =
  | "All"
  | "Overstimulated"
  | "Quiet Luxury on $10"
  | "Delulu"
  | "Existential Chill"
  | "Main Character"
  | "Social Battery: 1%";

export type FabricScrapSource =
  | "All"
  | "Deadstock Denim"
  | "Organic Khadi Scrap"
  | "Recycled Terry"
  | "Corduroy Scrap";

export type GarmentSize = "XS" | "S" | "M" | "L" | "XL" | "2XL" | "3XL";

export type SashikoThreadColor = {
  name: string;
  hex: string;
  badge: string;
};

export interface HotSpotPin {
  id: string;
  xPercent: number;
  yPercent: number;
  title: string;
  subtitle: string;
  description: string;
  category: "Patchwork" | "Embroidery" | "Stitch Craft" | "Mend Guarantee";
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  gsm: number;
  priceUSD: number;
  vibe: EmotionVibe;
  scrapSource: FabricScrapSource;
  originBadge: string;
  lotNumber: string;
  mantra: string;
  frontImage: string;
  macroImage: string;
  fitModelImage: string;
  description: string;
  craftsmanshipNotes: string;
  availableSizes: GarmentSize[];
  stitchDensity: string;
  patchFabric: string;
  handStitchHours: number;
  defaultPatchColor: string;
  availableThreads: SashikoThreadColor[];
  hotSpots?: HotSpotPin[];
  isFeaturedHero?: boolean;
}

export interface CartItem {
  id: string;
  product: Product;
  size: GarmentSize;
  selectedThread: SashikoThreadColor;
  customPatchNote?: string;
  quantity: number;
}

export type CurrencyCode = "USD" | "EUR" | "GBP" | "INR";

export interface CurrencyConfig {
  code: CurrencyCode;
  symbol: string;
  rate: number;
}
