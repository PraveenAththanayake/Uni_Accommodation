import mongoose, { Schema } from "mongoose";

const Requests = new Schema(
  {
    accommodation: {
      type: String,
      required: true,
    },
    owner: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

const Request =
  mongoose.models.Requests || mongoose.model("Requests", Requests);

export default Request;
