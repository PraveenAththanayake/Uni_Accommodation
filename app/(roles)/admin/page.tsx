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

export default function UserInfo() {
  const { session, isLoading, isError } = useSessionData();

  return (
    /*<div className="grid place-items-center h-screen">
      {session?.user?.role === "admin" && (
        <div className="shadow-lg p-8 bg-zince-300/10 flex flex-col gap-2 my-6">
          <div>
            Name: <span className="font-bold">{session.user.name}</span>
          </div>
          <div>
            Email: <span className="font-bold">{session.user.role}</span>
          </div>
          <button
            onClick={() => signOut()}
            className="bg-red-500 text-white font-bold px-6 py-2 mt-3"
          >
            Log Out
          </button>
        </div>
      )}*/
    <div>
        
      

      <div className="pt-20 ">
        <div>
          <h1 className="pl-40 pb-7 pt">Welcome!</h1>
          <h2 className="pl-40">Create accounts</h2>
          <div className="flex justify-center">
            <div>
              <div className="pb-5 pt-5">
                <p>Select Account Type</p>
                <Select>
                  <SelectTrigger className="w-[220px]">
                    <SelectValue placeholder="Account Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">Landlord</SelectItem>
                    <SelectItem value="dark">Warden</SelectItem>
                    <SelectItem value="system">Student</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="pb-5">
                <p>Enter Name</p>
                <Input placeholder="Name" />
              </div>

              <div className="pb-5">
                <p>Enter Email</p>
                <Input type="email" placeholder="Email" />
              </div>

              <div className="pb-5">
                <p>Enter Password</p>
                <Input type="password" placeholder="Password" />
              </div>

              <Button >Create Account</Button>
            </div>
          </div>
        </div>

        <div className="pt-20">
          <Separator />

          <p className="pl-40 pt-20"> Articles</p>
          <div className="pl-40 pt-10 pb-10 pr-40">
            <div>
              <div>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button>Add New Article</Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-80">
                    <Textarea
                      className="h-[200px]"
                      placeholder="Enter article here."
                    />
                  </PopoverContent>
                </Popover>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
