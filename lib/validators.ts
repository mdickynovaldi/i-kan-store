import { z } from "zod";
import { formatNumberWithDecimal } from "./utils";

const currency = z
  .string()
  .refine(
    (value) => /^\d+(\.\d{2})?$/.test(formatNumberWithDecimal(Number(value))),
    "Price must have exactly 2 decimal places"
  );

export const insertProductSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters"),
  slug: z.string().min(3, "slug must be at least 3 characters"),
  category: z.string().min(3, "category must be at least 3 characters"),
  brand: z.string().min(3, "brand must be at least 3 characters"),
  description: z.string().min(3, "description must be at least 3 characters"),
  stock: z.coerce.number(),
  images: z.array(z.string().min(1, "Product must have at least 1 image")),
  isFeatured: z.boolean(),
  banner: z.string().nullable(),
  price: currency,
});

// Schema for sign in users in

export const signInSchema = z.object({
  email: z.string().email("Invalid email"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  // .refine(
  //   (value) => /[A-Z]/.test(value),
  //   "Password must contain at least 1 capital letter"
  // )
  // .refine(
  //   (value) => /[^A-Za-z0-9]/.test(value),
  //   "Password must contain at least 1 symbol"
  // ),
});

// Schema for sign up users

export const signUpSchema = z
  .object({
    name: z.string().min(3, "Name must be at least 3 characters"),
    email: z.string().email("Invalid email"),
    password: z.string().min(8, "Password must be at least 8 characters"),
    confirmPassword: z
      .string()
      .min(8, "Password must be at least 8 characters"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password and confirm password must match",
    path: ["confirmPassword"],
  });
