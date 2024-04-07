"use server";

import { connectDB } from "@/lib/db";
import { NextResponse } from "next/server";
import Article from "@/models/Article";
import { ArticleSchema } from "@/schemas";
import { z } from "zod";

export const GET = async () => {
  try {
    await connectDB();
    const article = await Article.find();
    return NextResponse.json(article);
  } catch (error) {
    console.log("Error: ", error);
  }
};

export const SubmitArticle = async (values: z.infer<typeof ArticleSchema>) => {
  await connectDB();
  const validatedFields = ArticleSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields!" };
  }

  const { heading, content } = validatedFields.data;

  const newArticle = new Article({
    heading,
    content,
  });

  await newArticle.save();

  return { success: "Article successfully added!" };
};
