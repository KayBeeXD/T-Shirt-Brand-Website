import { create } from "zustand";
import {
  Product,
  CartItem,
  EmotionVibe,
  FabricScrapSource,
  GarmentSize,
  SashikoThreadColor,
  CurrencyCode,
} from "@/types";
import { CURRENCY_CONFIGS } from "@/data/products";

interface ShopStore {
  // Cart
  cart: CartItem[];
  isCartOpen: boolean;
  toggleCart: (open?: boolean) => void;
  addToCart: (
    product: Product,
    size: GarmentSize,
    selectedThread: SashikoThreadColor,
    customPatchNote?: string
  ) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, delta: number) => void;
  clearCart: () => void;

  // Search Modal
  isSearchOpen: boolean;
  toggleSearch: (open?: boolean) => void;

  // Custom Mend Workshop Modal
  isCustomMendOpen: boolean;
  activeMendProduct: Product | null;
  openCustomMendModal: (product: Product) => void;
  closeCustomMendModal: () => void;

  // Artisan Repair Portal Modal
  isRepairModalOpen: boolean;
  openRepairModal: () => void;
  closeRepairModal: () => void;

  // Dual Matrix Filters
  selectedVibe: EmotionVibe;
  selectedScrap: FabricScrapSource;
  setVibe: (vibe: EmotionVibe) => void;
  setScrap: (scrap: FabricScrapSource) => void;
  resetFilters: () => void;

  // Currency
  currency: CurrencyCode;
  setCurrency: (currency: CurrencyCode) => void;
  formatPrice: (usdPrice: number) => string;

  // Derived helpers
  getCartCount: () => number;
  getCartSubtotalUSD: () => number;
  isEligibleForFreeRepairKit: () => boolean;
  amountNeededForFreeKitUSD: () => number;
}

export const useShopStore = create<ShopStore>((set, get) => ({
  cart: [],
  isCartOpen: false,
  toggleCart: (open) =>
    set((state) => ({ isCartOpen: open ?? !state.isCartOpen })),

  addToCart: (product, size, selectedThread, customPatchNote) => {
    const lineId = `${product.id}-${size}-${selectedThread.hex}`;
    set((state) => {
      const existingIndex = state.cart.findIndex((item) => item.id === lineId);
      if (existingIndex > -1) {
        const newCart = [...state.cart];
        newCart[existingIndex].quantity += 1;
        return { cart: newCart, isCartOpen: true };
      }
      return {
        cart: [
          ...state.cart,
          {
            id: lineId,
            product,
            size,
            selectedThread,
            customPatchNote,
            quantity: 1,
          },
        ],
        isCartOpen: true,
      };
    });
  },

  removeFromCart: (id) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== id),
    })),

  updateQuantity: (id, delta) =>
    set((state) => ({
      cart: state.cart
        .map((item) => {
          if (item.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[],
    })),

  clearCart: () => set({ cart: [] }),

  // Search
  isSearchOpen: false,
  toggleSearch: (open) =>
    set((state) => ({ isSearchOpen: open ?? !state.isSearchOpen })),

  // Custom Mend Workshop
  isCustomMendOpen: false,
  activeMendProduct: null,
  openCustomMendModal: (product) =>
    set({ isCustomMendOpen: true, activeMendProduct: product }),
  closeCustomMendModal: () =>
    set({ isCustomMendOpen: false, activeMendProduct: null }),

  // Artisan Repair Portal
  isRepairModalOpen: false,
  openRepairModal: () => set({ isRepairModalOpen: true }),
  closeRepairModal: () => set({ isRepairModalOpen: false }),

  // Matrix filters
  selectedVibe: "All",
  selectedScrap: "All",
  setVibe: (vibe) => set({ selectedVibe: vibe }),
  setScrap: (scrap) => set({ selectedScrap: scrap }),
  resetFilters: () => set({ selectedVibe: "All", selectedScrap: "All" }),

  // Currency
  currency: "USD",
  setCurrency: (currency) => set({ currency }),
  formatPrice: (usdPrice) => {
    const code = get().currency;
    const config = CURRENCY_CONFIGS[code] || CURRENCY_CONFIGS.USD;
    const converted = usdPrice * config.rate;
    if (code === "INR") {
      return `${config.symbol}${Math.round(converted).toLocaleString()}`;
    }
    return `${config.symbol}${converted.toFixed(2)}`;
  },

  // Helpers
  getCartCount: () => {
    return get().cart.reduce((sum, item) => sum + item.quantity, 0);
  },

  getCartSubtotalUSD: () => {
    return get().cart.reduce(
      (sum, item) => sum + item.product.priceUSD * item.quantity,
      0
    );
  },

  isEligibleForFreeRepairKit: () => {
    return get().getCartSubtotalUSD() >= 100;
  },

  amountNeededForFreeKitUSD: () => {
    const subtotal = get().getCartSubtotalUSD();
    const threshold = 100;
    return subtotal >= threshold ? 0 : threshold - subtotal;
  },
}));
