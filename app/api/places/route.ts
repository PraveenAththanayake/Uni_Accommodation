import { connectDB } from "@/lib/db";
import { NextResponse } from "next/server";
import { NextApiRequest } from "next";
import Places from "@/models/Places";
import { IPlace } from "@/interfaces";

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

export const deletePlace = async (place: IPlace) => {
  try {
    await connectDB();
    const placeToDelete = await Places.findOne({ name: place.name });
    if (placeToDelete) {
      await Places.deleteOne({ name: place.name });
      return NextResponse.json({ message: "Place deleted successfully" });
    } else {
      return NextResponse.json({ message: "Place not found" });
    }
  } catch (error) {
    console.log("Error: ", error);
  }
};
