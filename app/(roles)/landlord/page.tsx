"use client";

import Map from "@/components/map";
import Navbar from "@/components/navbar";
import { LandlordSideLists } from "@/constants/LandlordSidebar";

export default function UserInfo() {
  return (
    <div className="w-full h-screen">
      <Navbar>
        {LandlordSideLists.map((list, index) => (
          <div
            key={index}
            className="hover:bg-primary hover:text-white px-4 py-2 rounded-md cursor-pointer transition-all duration-300 ease-in-out text-sm font-medium text-gray-800"
          >
            <div className="flex items-center gap-3">
              <list.icon />
              {list.name}
            </div>
          </div>
        ))}
      </Navbar>
      <div className="rounded-lg">
        <Map />
      </div>
    </div>
  );
}
