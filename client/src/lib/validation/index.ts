import * as z from "zod";

export const SignupValidation = z.object({
  name: z.string().min(2, { message: "Çok kısa" }),
  username: z.string().min(2, { message: "Çok kısa" }),
  email: z.string().email({ message: "Geçersiz E-posta" }),
  password: z.string().min(8, { message: "Şifre en az 8 karakter olmalı." }),
});

export const SigninValidation = z.object({
  email: z.string().email(),
  password: z.string().min(8, { message: "Şifre en az 8 karakter olmalı." }),
});
