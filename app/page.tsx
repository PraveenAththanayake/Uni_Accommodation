import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { LoginButton } from "@/components/auth/login-button";

import HomePage from "@/components/Home";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

export default function Home() {
  return (
    <main className={cn("h-full flexCenter flex-col", font.className)}>
      {/* <LoginButton>
        <Button variant="secondary" size="lg">
          Get Started
        </Button>
      </LoginButton> */}
      <HomePage />
    </main>
  );
}
