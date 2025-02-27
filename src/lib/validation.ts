import { z } from "zod";

const requiredString = z.string().trim().min(1, "É Requisito");

export const signUpSchema = z.object({
  email: requiredString.email("Invalid email address"),
  username: requiredString.regex(
    /^[a-zA-Z0-9_-]+$/,
    "Somente letras, numeros, - e _ são permitidos",
  ),
  password: requiredString.min(6, "Deve conter pelo menos 6 palavras"),
});

export type SignUpValues = z.infer<typeof signUpSchema>;

export const loginSchema = z.object({
  username: requiredString,
  password: requiredString,
});

export type LoginValues = z.infer<typeof loginSchema>;