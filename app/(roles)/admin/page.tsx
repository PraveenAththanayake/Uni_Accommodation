"use client";

import useSessionData from "@/hooks/useSessionData";
import { signOut } from "next-auth/react";
import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Article from "@/components/admin/article";
import { CreateAccount } from "@/components/admin/account";

export default function UserInfo() {
  const { session, isLoading, isError } = useSessionData();

  return (
    <>
      <Navbar />
      <div className="flex justify-around items-center w-full h-screen mt-12">
        <CreateAccount />
        <Article />
      </div>
    </>
  );
}
