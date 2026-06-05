import INCENSE from "../assets/Categories/INCENSE.webp";
import DHOOP_STICKS from "../assets/Categories/DHOOP STICKS.jpg";
import PUJA_ESSENTIALS from "../assets/Categories/PUJA ESSENTIALS.webp";
import GOD_IDOLS from "../assets/Categories/GOD IDOLS.jpg";
import FESTIVE_GIFT_BOXES from "../assets/Categories/FESTIVE GIFT BOXES.jpg";

import { Category } from "../types/category";

export const categories: Category[] = [
  {
    id: "1",
    slug: "incense",
    title: "Incense",
    description: "Immerse your space in divine aroma with our handcrafted spiritual incense sticks. Sourced from natural herbs and resins to purify your home energy.",
    image: INCENSE,
    seoTitle: "Divine Natural Incense Sticks - Kushal Creation's",
    seoDescription: "Shop natural organic incense sticks for puja and home aromatherapy. Pure ingredients, slow-burning and ethically sourced incense at Kushal Creation's.",
    faqs: [
      {
        question: "Are these incense sticks chemical-free?",
        answer: "Yes, all our incense sticks are 100% natural, charcoal-free, and hand-rolled with pure herbs and flower petals."
      },
      {
        question: "What is the average burn time of each stick?",
        answer: "Each incense stick burns continuously for 40 to 45 minutes, spreading a long-lasting spiritual aroma."
      }
    ]
  },
  {
    id: "2",
    slug: "dhoop-sticks",
    title: "Dhoop Sticks",
    description: "Pure and traditional Dhoop sticks crafted from cow dung, honey, and sacred resins to create a pure vedic atmosphere in your home.",
    image: DHOOP_STICKS,
    seoTitle: "Sacred Traditional Dhoop Sticks - Kushal Creation's",
    seoDescription: "Explore organic, bamboo-free dhoop sticks made with cow dung and essential herbs. Perfect for everyday home purification, prayer, and yoga.",
    faqs: [
      {
        question: "Are these Dhoop sticks bamboo-free?",
        answer: "Yes, our Dhoop sticks do not contain any bamboo, complying strictly with traditional Vedic scriptures."
      },
      {
        question: "Does it help in removing positive energy blockages?",
        answer: "Our dhoop sticks are crafted with Guggul and Loban, which are known scripturally to clear negative energy and purify home air."
      }
    ]
  },
  {
    id: "3",
    slug: "puja-essentials",
    title: "Puja Essentials",
    description: "Everything you need for your daily and festive rituals. From brass thalis to pure camphor and cotton wicks, handpicked for divine purity.",
    image: PUJA_ESSENTIALS,
    seoTitle: "Traditional Puja Essentials & Thali Items - Kushal Creation's",
    seoDescription: "Buy pure puja items, thalis, camphor, and oils. Sourced from authentic artisans, designed to maintain the highest spiritual vibes.",
    faqs: [
      {
        question: "What items are included in the Shubh Puja Thali?",
        answer: "Our thali includes a solid brass plate, diya, incense holder, roli-chawal containers, and a small bell."
      },
      {
        question: "Is the brass rust-resistant?",
        answer: "Yes, our thalis are made of pure, high-grade brass which can be maintained easily with pitambari or lemon juice."
      }
    ]
  },
  {
    id: "4",
    slug: "god-idols",
    title: "God Idols",
    description: "Exquisitely detailed brass and resin idols of Ganesha, Shiva, and Lakshmi. Hand-crafted by local artisans to bring blessings to your home temple.",
    image: GOD_IDOLS,
    seoTitle: "Handcrafted Brass & Resin God Idols - Kushal Creation's",
    seoDescription: "Invite divine blessings with Ganesha, Lakshmi, and Shiva idols. Hand-painted, premium finish god idols for home mandir and gifting.",
    faqs: [
      {
        question: "Are these idols suitable for Abhishekam?",
        answer: "Yes, our solid brass idols are highly durable and completely suitable for traditional Abhishekam rituals."
      },
      {
        question: "Where are these idols crafted?",
        answer: "Each idol is handcrafted by traditional artisans in Aligarh and Jaipur, preserving ancient temple sculpture techniques."
      }
    ]
  },
  {
    id: "5",
    slug: "festive-gift-boxes",
    title: "Festive Gift Boxes",
    description: "Curated spiritual combos and hampers designed to spread peace, joy, and prosperity. The perfect gift for festivals and housewarmings.",
    image: FESTIVE_GIFT_BOXES,
    seoTitle: "Exclusive Spiritual Festive Gift Hampers - Kushal Creation's",
    seoDescription: "Send love with premium gift hampers. Combos of incense, diyas, idols, and pure sweets for Diwali, housewarming, and spiritual occasions.",
    faqs: [
      {
        question: "Can I customize the items in a gift box?",
        answer: "Yes, for corporate and bulk orders, please contact our support team to customize your gift boxes."
      },
      {
        question: "Does it come with gift packaging?",
        answer: "Yes, all our gift boxes are shipped in rigid, beautifully designed premium boxes wrapped in sacred prints."
      }
    ]
  }
];
