import type { Metadata } from "next";
import MainLayout from "@/layouts/MainLayout";
import HeroCarousel from "@/components/common/HeroCarousel/HeroCarousel";
import TrustBadges from "@/components/home/TrustBadges/TrustBadges";
import CategoryShowcase from "@/components/home/CategoryShowcase/CategoryShowcase";
import BestSellerSection from "@/components/BestSellerSection/BestSellerSection";
import FeaturedCollections from "@/components/home/FeaturedCollections/FeaturedCollections";
import Testimonials from "@/components/home/Testimonials/Testimonials";
import WhyDifferent from "@/components/home/WhyDifferent/WhyDifferent";
import InstagramGallery from "@/components/home/InstagramGallery/InstagramGallery";
import FAQSection from "@/components/home/FAQSection/FAQSection";
import NewsletterSignup from "@/components/home/NewsletterSignup/NewsletterSignup";
import StructuredData from "@/components/common/StructuredData/StructuredData";

export const metadata: Metadata = {
  title: "Kushal Creation's | Premium Spiritual & Gift Marketplace",
  description: "Shop handcrafted natural incense, bamboo-free dhoop sticks, pure brass puja thalis, and brass god idols. Ethically sourced for a pure, positive home altar.",
  alternates: {
    canonical: "https://kushalcreations.com",
  },
  openGraph: {
    title: "Kushal Creation's | Premium Spiritual & Gift Marketplace",
    description: "Shop handcrafted natural incense, bamboo-free dhoop sticks, pure brass puja thalis, and brass god idols.",
    url: "https://kushalcreations.com",
    siteName: "Kushal Creation's",
    images: [
      {
        url: "https://kushalcreations.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Kushal Creation's Spiritual Marketplace",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kushal Creation's | Premium Spiritual & Gift Marketplace",
    description: "Shop handcrafted natural incense, bamboo-free dhoop sticks, and divine brass god idols.",
    images: ["https://kushalcreations.com/og-image.png"],
  },
};

export default function Page() {
  return (
    <MainLayout>
      {/* Dynamic SEO JSON-LD Schemas */}
      <StructuredData type="Organization" />
      <StructuredData type="WebSite" />

      {/* Homepage Sections */}
      <HeroCarousel />
      <TrustBadges />
      <CategoryShowcase />
      <BestSellerSection />
      <FeaturedCollections />
      <Testimonials />
      <WhyDifferent />
      <InstagramGallery />
      <FAQSection />
      <NewsletterSignup />
    </MainLayout>
  );
}