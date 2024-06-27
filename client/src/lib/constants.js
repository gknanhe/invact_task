import { z, ZodError } from "zod";

export const movieSchema = z.object({
  title: z.string().min(1, { message: "Title is required" }),
  description: z.string().min(1, { message: "Description is required" }),
  releaseYear: z
    .string()
    .regex(/^\d{4}$/, { message: "Release year must be a valid year" }),
  genre: z.string().min(1, { message: "Genre is required" }),
  imgUrl: z.string().url({ message: "Image URL must be a valid URL" }),
  rating: z
    .string()
    .min(1, { message: "Rating must be at least 1" })
    .max(5, { message: "Rating must be at most 5" })
    .refine((value) => value >= 1 && value <= 5, {
      message: "Rating must be between 1 and 5",
    }),
  reviews: z.string().min(1, { message: "Reviews are required" }),
});

export const URL = "http://localhost:8000/api";
