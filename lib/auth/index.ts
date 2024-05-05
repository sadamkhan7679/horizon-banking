import { z } from "zod";
import { AuthFormType } from "@/types/auth";

export const authFormSchema = (type: AuthFormType) =>
  z.object({
    // both
    email: z.string().email(),
    password: z.string().min(8),
    ...(type === AuthFormType.SignUp && {
      // sign up
      firstName: z.string().min(3),
      lastName: z.string().min(3),
      address1: z.string().max(50),
      city: z.string().max(50),
      state: z.string().min(2).max(2),
      postalCode: z.string().min(3).max(6),
      dateOfBirth: z.string().min(3),
      ssn: z.string().min(3),
    }),
  });
