import Product1 from "../assets/Products/Product1.jpeg";
import Product2 from "../assets/Products/Product2.jpeg";
import Product3 from "../assets/Products/Product3.jpeg";
import Product4 from "../assets/Products/Product4.jpeg";

import { Product } from "../types/product";

export const products: Product[] = [
  {
    id: "1",
    slug: "dhoop-sticks-pack-of-3",
    title: "Dhoop Sticks Pack Of 3",
    subtitle: "Bring Spiritual Purity",
    description: "Experience absolute divine purity with our organic Dhoop Sticks Pack of 3. Formulated with sacred temple flowers, herbs, and pure cow dung, these sticks create a highly positive atmosphere in your home. Bamboo-free and charcoal-free, they are completely safe for everyday inhalation during puja, meditation, and spiritual concentration.",
    benefits: [
      "Bamboo-free structure protects the environmental code of traditional scriptures.",
      "Blended with natural essential oils of Sandalwood, Jasmine, and Rose.",
      "Purifies the surrounding atmosphere and repels insects naturally.",
      "Perfect for deep meditation, enhancing cognitive focus, and stress relief."
    ],
    price: 753,
    oldPrice: 870,
    offerPrice: 640,
    discount: "-15%",
    badge: "FLASH DEAL",
    categorySlug: "dhoop-sticks",
    images: [Product1, Product3, Product4],
    specifications: [
      { label: "Quantity", value: "3 Packs (Total 90 Sticks)" },
      { label: "Burn Time", value: "45 minutes per stick" },
      { label: "Ingredients", value: "Cow dung, Honey, Guggul, Loban, Floral extracts" },
      { label: "Bamboo Used", value: "No (100% Bamboo-Free)" },
      { label: "Weight", value: "350g" }
    ],
    reviews: [
      {
        id: "r1",
        author: "Aarav Sharma",
        rating: 5,
        date: "2026-05-10",
        title: "Aromatherapy at its best!",
        content: "Extremely pure scent. The sandalwood aroma lingers for hours even after the stick has burned down completely.",
        verified: true
      },
      {
        id: "r2",
        author: "Meera Patel",
        rating: 5,
        date: "2026-05-18",
        title: "Very calming",
        content: "Perfect for my morning rituals. Knowing it is bamboo-free gives me immense peace of mind.",
        verified: true
      }
    ],
    rating: 5,
    stock: 42,
    sku: "KC-DHOOP-3P",
    frequentlyBoughtTogetherSlugs: ["shubh-puja-thali", "amrit-vayu-combo"]
  },
  {
    id: "2",
    slug: "shubh-puja-thali",
    title: "Shubh Puja Thali",
    subtitle: "Elevates Ritual Purity",
    description: "Crafted from heavy-gauge pure brass, the Shubh Puja Thali brings classic Vedic elegance to your home mandir. This beautifully polished plate is engraved with sacred design work and comes complete with dedicated holders for diyas, roli-chawal, and incense, ensuring all your ritual requirements are laid out with absolute dignity.",
    benefits: [
      "Crafted from 100% pure premium brass for lifelong durability.",
      "Traditional designs hand-engraved by native Indian artisans.",
      "Includes complete accessories: Diya, Incense Holder, Roli containers.",
      "Easy to clean and polish, retaining its sacred golden shine."
    ],
    price: 2199,
    oldPrice: 2750,
    offerPrice: 1869,
    discount: "-20%",
    badge: "BEST SELLER",
    categorySlug: "puja-essentials",
    images: [Product2, Product4, Product1],
    specifications: [
      { label: "Material", value: "Pure Brass" },
      { label: "Diameter", value: "10 inches" },
      { label: "Weight", value: "480g" },
      { label: "Package Contents", value: "Plate, Diya, incense stand, 2 bowls, 1 small bell" },
      { label: "Craft Type", value: "Moradabad Brass Work" }
    ],
    reviews: [
      {
        id: "r3",
        author: "Karan Iyer",
        rating: 5,
        date: "2026-04-22",
        title: "Incredible craftsmanship",
        content: "The weight of the thali feels premium. Very easy to clean with pitambari. Highly recommended for gifting.",
        verified: true
      },
      {
        id: "r4",
        author: "Pooja Gupta",
        rating: 4.8,
        date: "2026-05-02",
        title: "Elegant mandir addition",
        content: "Absolutely gorgeous brass work. Adds a beautiful shine to our family altar during festivals.",
        verified: true
      }
    ],
    rating: 4.9,
    stock: 18,
    sku: "KC-BRASS-THALI",
    frequentlyBoughtTogetherSlugs: ["dhoop-sticks-pack-of-3", "positive-energy-combo"]
  },
  {
    id: "3",
    slug: "amrit-vayu-combo",
    title: "Amrit Vayu Combo",
    subtitle: "Purifies Home Energy",
    description: "The Amrit Vayu Combo combines our premium incense sticks and herbal dhoops to deliver a powerful home purification experience. Made with purifying resins like Guggul and Loban alongside floral essential oils, it clears positive energy blockages and generates a tranquil sanctuary in any room.",
    benefits: [
      "Combines both Dhoops and Incense sticks for complete aromatherapy.",
      "Specially formulated to remove stale indoor air and negative vibrations.",
      "Ethically sourced botanicals, free from toxic burning agents.",
      "Includes a terracotta incense burner plate absolutely free."
    ],
    price: 1209,
    oldPrice: 1299,
    offerPrice: 1027,
    discount: "-7%",
    badge: "EXCLUSIVE",
    categorySlug: "festive-gift-boxes",
    images: [Product3, Product1, Product2],
    specifications: [
      { label: "Combo Includes", value: "1 Sandalwood Incense, 1 Loban Dhoop, 1 Guggul Dhoop" },
      { label: "Total Weight", value: "520g" },
      { label: "Free Gift", value: "Terracotta Incense Burner" },
      { label: "Aroma Type", value: "Woody, Earthy, Resin-rich" }
    ],
    reviews: [
      {
        id: "r5",
        author: "Rajesh Varma",
        rating: 5,
        date: "2026-05-20",
        title: "Amazing clearing energy",
        content: "The terracotta holder is beautiful and the Loban scent completely changes the feel of the house.",
        verified: true
      }
    ],
    rating: 4.8,
    stock: 35,
    sku: "KC-COMBO-AV",
    frequentlyBoughtTogetherSlugs: ["dhoop-sticks-pack-of-3", "positive-energy-combo"]
  },
  {
    id: "4",
    slug: "positive-energy-combo",
    title: "Positive Energy Combo",
    subtitle: "Removes Negative Energy",
    description: "Invite divine vibes and prosperity with the Positive Energy Combo. Specially curated for housewarmings and office openings, this hamper includes a handcrafted miniature Ganesha idol, two boxes of organic incense cones, and a pure brass camphor burner that diffuses purification across large spaces.",
    benefits: [
      "Curated for deep space purification and positive alignment.",
      "Includes a premium brass camphor burner that does not emit soot.",
      "Exquisite miniature Ganesha idol crafted from premium marble dust.",
      "Packaged in a luxurious rigid gift box lined with velvet."
    ],
    price: 2999,
    oldPrice: 3199,
    offerPrice: 2549,
    discount: "-6%",
    badge: "POPULAR",
    categorySlug: "festive-gift-boxes",
    images: [Product4, Product2, Product3],
    specifications: [
      { label: "Items Included", value: "Ganesha Idol, Brass Camphor Burner, 2 Incense boxes, Gift Box" },
      { label: "Idol Dimensions", value: "4 x 3 inches" },
      { label: "Box Weight", value: "850g" },
      { label: "Burner Material", value: "100% Pure Brass" }
    ],
    reviews: [
      {
        id: "r6",
        author: "Anjali Deshmukh",
        rating: 5,
        date: "2026-05-15",
        title: "Best housewarming gift",
        content: "Gave this to my brother for his new apartment. The packaging looks super premium and the items inside are of very high quality.",
        verified: true
      }
    ],
    rating: 5,
    stock: 25,
    sku: "KC-COMBO-PE",
    frequentlyBoughtTogetherSlugs: ["shubh-puja-thali", "amrit-vayu-combo"]
  }
];
