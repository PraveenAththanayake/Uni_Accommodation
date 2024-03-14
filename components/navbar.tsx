/* eslint-disable react/no-unescaped-entities */
"use client";

import { FcMenu } from "react-icons/fc";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Button } from "./ui/button";
import { signOut } from "next-auth/react";

const Navbar = ({ children }: { children: React.ReactNode }) => {
  return (
    <nav className="fixed top-4 w-full flexCenter z-50 rounded-lg">
      <div className="w-[90vw] flexBetween flex-row px-5 sm:px-10 mx-auto py-3 bg-primary rounded-lg xl:py-5">
        <h1 className="text-base font-medium tracking-normal text-white xl:text-3xl">
          Green<span className="text-green-500">Uni</span> Homes
        </h1>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline">
              <FcMenu />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>GreenUni Homes</SheetTitle>
              <SheetDescription>
                Make changes to your profile here. Click save when you're done.
              </SheetDescription>
            </SheetHeader>
            <div className="grid gap-4 py-4">{children}</div>
            <SheetFooter>
              <div>
                <Button
                  onClick={() => signOut({ callbackUrl: "/" })}
                  className="w-full"
                >
                  Logout
                </Button>
              </div>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navbar;
