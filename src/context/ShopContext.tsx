"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Product } from "../types/product";

export interface CartItem {
  product: Product;
  quantity: number;
}

interface ShopContextType {
  cart: CartItem[];
  wishlist: Product[];
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  addToWishlist: (product: Product) => void;
  removeFromWishlist: (productId: string) => void;
  isInWishlist: (productId: string) => boolean;
  cartCount: number;
  cartTotal: number;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  quickViewProduct: Product | null;
  setQuickViewProduct: (product: Product | null) => void;
}

const ShopContext = createContext<ShopContextType | undefined>(undefined);

export const ShopProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [wishlist, setWishlist] = useState<Product[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

  // Load state from localStorage on client mount
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    const savedWishlist = localStorage.getItem("wishlist");
    if (savedCart) {
      try {
        setCart(JSON.parse(savedCart));
      } catch (e) {
        console.error("Failed to parse cart data");
      }
    }
    if (savedWishlist) {
      try {
        setWishlist(JSON.parse(savedWishlist));
      } catch (e) {
        console.error("Failed to parse wishlist data");
      }
    }
  }, []);

  // Sync state to localStorage on update
  const saveCart = (newCart: CartItem[]) => {
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  const saveWishlist = (newWishlist: Product[]) => {
    setWishlist(newWishlist);
    localStorage.setItem("wishlist", JSON.stringify(newWishlist));
  };

  const addToCart = (product: Product, quantity = 1) => {
    const existing = cart.find((item) => item.product.id === product.id);
    let newCart: CartItem[];
    if (existing) {
      newCart = cart.map((item) =>
        item.product.id === product.id
          ? { ...item, quantity: item.quantity + quantity }
          : item
      );
    } else {
      newCart = [...cart, { product, quantity }];
    }
    saveCart(newCart);
    setIsCartOpen(true); // Auto-open cart drawer on add
  };

  const removeFromCart = (productId: string) => {
    const newCart = cart.filter((item) => item.product.id !== productId);
    saveCart(newCart);
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    const newCart = cart.map((item) =>
      item.product.id === productId ? { ...item, quantity } : item
    );
    saveCart(newCart);
  };

  const clearCart = () => {
    saveCart([]);
  };

  const addToWishlist = (product: Product) => {
    if (wishlist.some((item) => item.id === product.id)) return;
    const newWishlist = [...wishlist, product];
    saveWishlist(newWishlist);
  };

  const removeFromWishlist = (productId: string) => {
    const newWishlist = wishlist.filter((item) => item.id !== productId);
    saveWishlist(newWishlist);
  };

  const isInWishlist = (productId: string) => {
    return wishlist.some((item) => item.id === productId);
  };

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
  const cartTotal = cart.reduce(
    (total, item) => total + item.product.offerPrice * item.quantity,
    0
  );

  return (
    <ShopContext.Provider
      value={{
        cart,
        wishlist,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        addToWishlist,
        removeFromWishlist,
        isInWishlist,
        cartCount,
        cartTotal,
        isCartOpen,
        setIsCartOpen,
        quickViewProduct,
        setQuickViewProduct,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export const useShop = () => {
  const context = useContext(ShopContext);
  if (!context) {
    throw new Error("useShop must be used within a ShopProvider");
  }
  return context;
};
