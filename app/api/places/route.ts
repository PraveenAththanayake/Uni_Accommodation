import { connectDB } from "@/lib/db";
import { NextResponse } from "next/server";
import { NextApiRequest } from "next";
import Places from "@/models/Places";

interface IRequest extends NextApiRequest {
  // Add any custom properties you need here
}

export const GET = async (req: IRequest) => {
  try {
    await connectDB();
    const places = await Places.find();
    return NextResponse.json(places);
  } catch (error) {
    console.log("Error: ", error);
  }
};
