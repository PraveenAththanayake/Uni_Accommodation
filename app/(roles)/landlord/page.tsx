"use client";

import Map from "@/components/map";
import { SideBar } from "@/components/sidebar-landlord";

export default function UserInfo() {
  return (
    <div className="w-full h-screen p-8">
      <div className="flexBetween gap-8">
        <div className="">
          <SideBar />
        </div>
        <Map />
      </div>
    </div>
  );
}
