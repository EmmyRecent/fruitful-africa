import * as z from "zod";

export const AddProductSchema = z.object({
  productName: z.string().trim().min(1, "Product name is required!"),
  productCategory: z.string().trim().min(1, "Product category is required!"),
  productDescription: z.string().trim().min(1, "Product description is required!"),
  productLocation: z.string().trim().min(1, "Product location is required!"),
  productImage: z
    .array(z.string().trim().min(1))
    .min(1, "At least one product image is required!"),
  productPrice: z.string().trim().min(1, "Product price is required!"),
  productStock: z.string().trim().min(1, "Product stock is required!"),
});
