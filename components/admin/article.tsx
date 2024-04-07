"use client";

import * as z from "zod";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { ArticleSchema } from "@/schemas";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Card,
  CardDescription,
  CardTitle,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FormError } from "@/components/form-error";
import { FormSuccess } from "@/components/form-success";
import { useRouter } from "next/navigation";
import { Textarea } from "../ui/textarea";
import { SubmitArticle } from "@/app/api/articles/route";

export function Article() {
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();

  const router = useRouter();

  const form = useForm<z.infer<typeof ArticleSchema>>({
    resolver: zodResolver(ArticleSchema),
    defaultValues: {
      heading: "",
      content: "",
    },
  });

  const onSubmit = (values: z.infer<typeof ArticleSchema>) => {
    setError("");
    setSuccess("");

    startTransition(() => {
      SubmitArticle(values).then((response) => {
        if ("error" in response) {
          setError(response.error);
          return;
        }

        if ("success" in response) {
          setSuccess(response.success);
          form.reset();
        }
      });
    });
  };

  return (
    <Card className="w-[80vw] md:w-[45vw]">
      <CardHeader>
        <CardTitle>Post a Article</CardTitle>
        <CardDescription>
          Fill out the form below to post an article.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-4">
              <FormField
                control={form.control}
                name="heading"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Heading</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        disabled={isPending}
                        placeholder="Your Article Title"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="content"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Article Content</FormLabel>
                    <FormControl>
                      <Textarea
                        {...field}
                        disabled={isPending}
                        name="content"
                        placeholder="Your Article Content"
                        style={{ height: "240px", resize: "none" }}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormError message={error} />
            <FormSuccess message={success} />
            <Button disabled={isPending} type="submit" className="w-full">
              Post Article
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
