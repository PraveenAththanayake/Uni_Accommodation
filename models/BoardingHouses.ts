// server/models/BoardingHouses.ts
import mongoose, { Schema } from "mongoose";

const BoardingHouseSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    latitude: {
      type: Number,
      required: true,
    },
    longitude: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const BoardingHouses =
  mongoose.models.BoardingHouses ||
  mongoose.model("BoardingHouses", BoardingHouseSchema);

export default BoardingHouses;
