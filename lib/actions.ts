"use server";

import { State } from "@/types";
import { LoginFormSchema, SignUpFormSchema } from "./schemas";

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
    message: "Sign-up successful! Welcome aboard.",
    data: parsed.data,
  };
};
