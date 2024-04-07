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
  role: z.enum(["student", "landlord", "warden"], {
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
  userEmail: z.string(),
});

export const RequestSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  userEmail: z.string().email({ message: "Email is required" }),
  phoneNumber: z.string().min(1, { message: "Phone number is required" }),
  message: z.string().min(1, { message: "Message is required" }),
  accommodation: z.string().min(1, { message: "Accommodation is required" }),
  owner: z.string().min(1, { message: "Owner is required" }),
});
