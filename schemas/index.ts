import * as z from "zod";

export const RegisterSchema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
  password: z.string().min(6, {
    message: "Minimum 6 characters required",
  }),
  name: z.string().min(1, {
    message: "Name is required",
  }),
  role: z.enum(["student", "landlord"], {
    required_error: "You need to select a notification type.",
  }),
});

export const LocationSchema = z.object({
  name: z.string().min(1, { message: "Accommodation Name is required" }),
  location: z.string().min(1, { message: "Location is required" }),
  price: z.string().min(1, { message: "Monthly Price is required" }),
  description: z.string().min(1, { message: "Description is required" }),
  latitude: z.number(),
  longitude: z.number(),
});
