import type { Metadata } from "next";
import { Montserrat, Cormorant_Garamond } from "next/font/google";
import { ShopProvider } from "@/context/ShopContext";
import CartDrawer from "@/components/common/CartDrawer/CartDrawer";
import QuickView from "@/components/common/QuickView/QuickView";
import "@/styles/globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-montserrat",
});

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant-garamond",
});

export const metadata: Metadata = {
  title: "Kushal Creation's",
  description: "Gift Market",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${montserrat.variable} ${cormorantGaramond.variable}`}>
      <body>
        <ShopProvider>
          {children}
          <CartDrawer />
          <QuickView />
        </ShopProvider>
      </body>
    </html>
  );
}