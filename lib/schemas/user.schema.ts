import * as z from "zod";

export const SignUpFormSchema = z.object({
  firstName: z.string().trim().min(1, "First name is required"),
  lastName: z.string().trim().min(1, "Last name is required"),
  email: z.email({ message: "Invalid email address" }).trim(),
  password: z
    .string()
    .min(6, {
      error: (iss) => {
        return `Password must be at least ${iss.minimum} characters or more`;
      },
    })
    .trim(),
});

export const LoginFormSchema = z.object({
  email: z.email({ message: "Invalid email address" }).trim(),
  password: z
    .string()
    .min(6, {
      error: (iss) => {
        return `Password must be at least ${iss.minimum} characters or more`;
      },
    })
    .trim(),
});

export type SignUp = z.infer<typeof SignUpFormSchema>;
export type Login = z.infer<typeof LoginFormSchema>;
