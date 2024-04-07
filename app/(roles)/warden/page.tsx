"use client";

import Map from "@/components/map";
import Navbar from "@/components/navbar";
import SidebarCarousel from "@/components/sidebar_carousel";

export default function UserInfo() {
  return (
    <div className="flexBetween p-5 h-screen w-full gap-5">
      <Navbar />
      <Map zoom={16.5} />
      <SidebarCarousel />
      {/* {(session?.user as { role: string }).role === "warden" && (
        <div className="shadow-lg p-8 bg-zince-300/10 flex flex-col gap-2 my-6">
          <div>
            Name: <span className="font-bold">{session?.user?.name}</span>
          </div>
          <div>
            Email:{" "}
            <span className="font-bold">
              {(session?.user as { role: string }).role}
            </span>
          </div>
          <button
            onClick={() => signOut({ callbackUrl: "/" })}
            className="bg-red-500 text-white font-bold px-6 py-2 mt-3"
          >
            Log Out
          </button>
        </div>
      )} */}
    </div>
  );
}
