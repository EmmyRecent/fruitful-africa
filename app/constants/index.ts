import { CategoryType, FeaturesType, NavLinksType, ProductType } from "@/types";

export const navLinks: NavLinksType[] = [
  {
    href: "marketplace",
    text: "Marketplace",
  },
  {
    href: "makers",
    text: "Meet The Makers",
  },
  {
    href: "vendor",
    text: "Become a Vendor",
  },
];

export const features: FeaturesType[] = [
  {
    icon: "shield",
    title: "Verified Vendors",
    description:
      "All artisans are carefully vetted and verified for authenticity",
  },
  {
    icon: "world",
    title: "Global Shipping",
    description: "We deliver authentic African products worldwide",
  },
  {
    icon: "van",
    title: "Track Orders",
    description: "Real-time tracking with major couriers and local partners",
  },
  {
    icon: "love",
    title: "Impact Stories",
    description: "Every purchase supports African communities and artisans",
  },
];

export const category: CategoryType[] = [
  {
    img: "textile",
    category: "textile",
    amount: 240,
  },
  {
    img: "crafts",
    category: "crafts",
    amount: 180,
  },
  {
    img: "pottery",
    category: "pottery",
    amount: 96,
  },
  {
    img: "baskets",
    category: "baskets",
    amount: 120,
  },
];

export const products: ProductType[] = [
  {
    id: 1,
    country: "Ghana",
    img: "pottery",
    name: "Kente Cloth Runner",
    sellerName: "Ama's Textiles",
    rating: 5,
    category: "textile",
    amount: 89.99,
    verified: true,
  },
  {
    id: 2,
    country: "Nigeria",
    img: "textile",
    name: "Hand-Woven Basket Set",
    sellerName: "Zuri Crafts",
    rating: 5,
    category: "baskets",
    amount: 45,
    verified: true,
  },
  {
    id: 3,
    country: "Ghana",
    img: "baskets",
    name: "Kente Cloth Runner",
    sellerName: "Ama's Textiles",
    rating: 5,
    category: "textile",
    amount: 89.99,
    verified: true,
  },
  {
    id: 4,
    country: "Nigeria",
    img: "pottery",
    name: "Hand-Woven Basket Set",
    sellerName: "Zuri Crafts",
    rating: 5,
    category: "baskets",
    amount: 45,
    verified: true,
  },
];
