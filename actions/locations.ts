"use server";

import * as z from "zod";
import { connectDB } from "@/lib/db";
import { LocationSchema } from "@/schemas";
import Places from "@/models/Places";

export const submitLocation = async (
  values: z.infer<typeof LocationSchema>
) => {
  await connectDB();

  const validatedFields = LocationSchema.safeParse(values);
  if (!validatedFields.success) {
    return { error: "Invalid fields!" };
  }

  const { name, location, price, description, latitude, longitude, userEmail } =
    validatedFields.data;

  console.log("Submitting location:", {
    name,
    location,
    price,
    description,
    latitude,
    longitude,
    userEmail,
  });

  const existingLocation = await Places.findOne({ name });

  if (existingLocation) {
    return { error: "Location with this name already exists!" };
  }

  const newLocation = new Places({
    name,
    location,
    price,
    description,
    latitude,
    longitude,
    userEmail,
  });

  await newLocation.save();

  return { success: "Location submitted successfully!" };
};
