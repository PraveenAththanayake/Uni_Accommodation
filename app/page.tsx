import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";

import HomePage from "@/components/Home";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

export default function Home() {
  return (
    <main className={cn("h-full flexCenter flex-col", font.className)}>
      <HomePage />
    </main>
  );
}
