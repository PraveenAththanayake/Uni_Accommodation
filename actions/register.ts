"use server";

import * as z from "zod";
import bcrypt from "bcryptjs";
import { connectDB } from "@/lib/db";
import { RegisterSchema } from "@/schemas";
import User from "@/models/User";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  await connectDB();

  const validatedFields = RegisterSchema.safeParse(values);
  if (!validatedFields.success) {
    return { error: "Invalid fields!" };
  }

  const { email, password, name, role } = validatedFields.data;
  const hashedPassword = await bcrypt.hash(password, 10);

  const existingUser = await User.findOne({ email });

  if (existingUser) {
    return { error: "Email already in use!" };
  }

  const newUser = new User({ name, email, password: hashedPassword, role });
  await newUser.save();

  // TODO: Send verification token email

  return { success: "User created!" };
};
