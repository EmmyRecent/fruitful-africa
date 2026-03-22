"use server";

import { AddProductState, State } from "@/types";
import { LoginFormSchema, SignUpFormSchema } from "./schemas";
import { AddProductSchema } from "./schemas/addProduct.schema";

export const handleSignUpFormValidation = async (
  prevState: State,
  formData: FormData,
): Promise<State> => {
  const parsed = SignUpFormSchema.safeParse({
    firstName: formData.get("firstName"),
    lastName: formData.get("lastName"),
    email: formData.get("email"),
    password: formData.get("password"),
  });

  // If validation fails, return errors
  if (!parsed.success) {
    const fieldErrors: Record<string, string[]> = {};

    for (const issue of parsed.error.issues) {
      const fieldName = issue.path[0] as string;

      if (!fieldErrors[fieldName]) fieldErrors[fieldName] = [];

      fieldErrors[fieldName].push(issue.message);
    }

    return {
      errors: fieldErrors,
      message: "Missing fields, failed to submit form",
      data: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
      },
    };
  }

  return {
    errors: {},
    message: "Sign-up successful! Welcome aboard.",
    data: parsed.data,
  };
};

export const handleLoginValidation = async (
  prevState: State,
  formData: FormData,
): Promise<State> => {
  const parsed = LoginFormSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  // If validation fails, return errors
  if (!parsed.success) {
    const fieldErrors: Record<string, string[]> = {};

    for (const issue of parsed.error.issues) {
      const fieldName = issue.path[0] as string;

      if (!fieldErrors[fieldName]) fieldErrors[fieldName] = [];

      fieldErrors[fieldName].push(issue.message);
    }

    return {
      errors: fieldErrors,
      message: "Missing fields, failed to submit form",
      data: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
      },
    };
  }

  return {
    errors: {},
    message: "login successful! Welcome aboard.",
    data: parsed.data,
  };
};

export const handleAddProductValidation = async (
  prevState: AddProductState,
  formData: FormData,
): Promise<AddProductState> => {
  const rawImages = formData.get("productImage");
  let productImages: string[] = [];

  if (typeof rawImages === "string") {
    try {
      productImages = JSON.parse(rawImages);
    } catch {
      productImages = [];
    }
  }

  const parsed = AddProductSchema.safeParse({
    productName: formData.get("productName"),
    productCategory: formData.get("productCategory"),
    productLocation: formData.get("productLocation"),
    productDescription: formData.get("productDescription"),
    productImage: productImages,
    productPrice: formData.get("productPrice"),
    productStock: formData.get("productStock"),
  });

  // Return validation errors
  if (!parsed.success) {
    const fieldErrors: Record<string, string[]> = {};

    for (const issue of parsed.error.issues) {
      const fieldName = issue.path[0] as string;

      if (!fieldErrors[fieldName]) fieldErrors[fieldName] = [];

      fieldErrors[fieldName].push(issue.message);
    }

    return {
      errors: fieldErrors,
      message: "Missing fields, failed to submit form",
      data: {
        productName: "",
        productCategory: "",
        productLocation: "",
        productImage: [],
        productPrice: "",
        productDescription: "",
        productStock: "",
      },
    };
  }

  return {
    errors: {},
    message: "Product has been successfully added!",
    data: parsed.data,
  };
};
