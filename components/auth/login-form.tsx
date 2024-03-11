/* eslint-disable react/no-unescaped-entities */
"use client";

import { useState, useTransition } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { CardWrapper } from "./card-wrapper";
import { FormError } from "../form-error";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "@radix-ui/react-label";
import useSessionData from "@/hooks/useSessionData";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isPending, startTransition] = useTransition();

  const { session } = useSessionData();

  const router = useRouter();

  if (session) {
    router.replace(`/${session?.user?.role}`); // Or any other appropriate redirect
    return null; // Prevent the form from being rendered
  }
  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
        callbackUrl: "/dashboard",
      });

      if (res?.error) {
        setError("Invalid Credentials");
        return;
      }

      router.replace("dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <CardWrapper
      headerLabel="Welcome back"
      backButtonLabel="Don't have an account?"
      backButtonHref="/register"
      showSocial
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-4">
          <Label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </Label>
          <Input
            disabled={isPending}
            placeholder="john.doe@example.com"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </Label>
          <Input
            disabled={isPending}
            placeholder="******"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <FormError message={error} />
        <Button disabled={isPending} type="submit" className="w-full">
          Login
        </Button>
      </form>
    </CardWrapper>
  );
}
