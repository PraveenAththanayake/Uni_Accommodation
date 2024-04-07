"use server";

import { connectDB } from "@/lib/db";
import { NextResponse } from "next/server";
import Request from "@/models/Requests";
import { IRequest } from "@/interfaces";

export const GET = async () => {
  try {
    await connectDB();
    const requests = await Request.find();
    return NextResponse.json(requests);
  } catch (error) {
    console.log("Error: ", error);
  }
};

export const PostRequest = async (details: IRequest) => {
  try {
    await connectDB();

    const existingRequest = await Request.findOne({
      name: details.name,
      accommodation: details.accommodation,
    });

    if (existingRequest) {
      return {
        error: "Request already exists",
      };
    }

    const newRequest = new Request(details);
    const savedRequest = await newRequest.save();
    return { success: "Request successfully added!", data: savedRequest };
  } catch (error) {
    console.error("Error: ", error);
    return { error: "Failed to add Request." };
  }
};
