export type NavLinksType = {
  href: string;
  text: string;
};

export type FeaturesType = {
  icon: "shield" | "world" | "van" | "love";
  title: string;
  description: string;
};

export type CategoryType = {
  img: string;
  category: "textile" | "crafts" | "pottery" | "baskets";
  amount: number;
};

export type ProductType = {
  id: number;
  country: string;
  img: string;
  name: string;
  sellerName: string;
  verified: boolean;
  rating: number;
  category: CategoryType["category"];
  amount: number;
};
