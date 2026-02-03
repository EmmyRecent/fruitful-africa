import { Timestamp } from "firebase/firestore";

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

export type State = {
  errors?: {
    firstName?: string[];
    lastName?: string[];
    email?: string[];
    password?: string[];
  };
  message?: string | null;
  data: {
    firstName?: string;
    lastName?: string;
    email: string;
    password: string;
  };
};

export type AddProductState = {
  errors?: {
    productName?: string[];
    productCategory?: string[];
    productLocation?: string[];
    productImage?: string[];
    productPrice?: string[];
    productDescription?: string[];
    productStock?: string[];
  };
  message?: string | null;
  data: {
    productName: string;
    productCategory: string;
    productLocation: string;
    productImage: string[];
    productPrice: string;
    productDescription: string;
    productStock: string;
  };
};

export type UserCustomerData = {
  firstName?: string;
  lastName?: string;
  phone?: number;
  email: string;
  initial: string;
  createdAt: Timestamp;
};

export type ProductDataType = AddProductState["data"] & {
  country?: string;
};

export type ProductWithId = ProductDataType & { id: string };

export type CartItem = ProductDataType & {
  id: string;
  quantity: number;
};
