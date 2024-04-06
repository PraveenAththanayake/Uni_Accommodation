"use server";

import { connectDB } from "@/lib/db";
import BoardingHouses from "@/models/BoardingHouses";
import { NextResponse } from "next/server";
import { NextApiRequest } from "next";
import { NextApiResponse } from "next";
import { IPlace } from "@/interfaces";
import { deletePlace } from "../places/route";

export const GET = async (req: IPlace) => {
  try {
    await connectDB();
    const houses = await BoardingHouses.find();
    return NextResponse.json(houses);
  } catch (error) {
    console.log("Error: ", error);
  }
};

export const submitHouses = async (place: IPlace) => {
  try {
    await connectDB();
    const newHouse = new BoardingHouses(place);
    const savedHouse = await newHouse.save();
    if (savedHouse) {
      await deletePlace(place);
    }
    return { success: "House successfully added!", data: savedHouse };
  } catch (error) {
    console.error("Error: ", error);
    return { error: "Failed to add house." };
  }
};
