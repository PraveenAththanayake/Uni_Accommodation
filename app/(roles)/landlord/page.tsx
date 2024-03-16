"use client";

import AddPlaceToMap from "@/components/bottom_card/add-place";
import Map from "@/components/map";
import Navbar from "@/components/navbar";
import { LandlordSideLists } from "@/constants/LandlordSidebar";
import { useState } from "react";
import YourPlaces from "@/components/bottom_card/your-places";
import Requests from "@/components/bottom_card/request";
import Profile from "@/components/bottom_card/profile";

export default function UserInfo() {
  const [selectedTab, setSelectedTab] = useState<number | null>(0);
  const handleTabClick = (index: number): void => {
    setSelectedTab(index === selectedTab ? null : index);
  };

  return (
    <div className="w-full h-screen">
      <Navbar>
        {LandlordSideLists.map((list, index) => (
          <div
            key={index}
            className={`hover:bg-primary hover:text-white px-4 py-2 rounded-md cursor-pointer transition-all duration-300 ease-in-out text-sm font-medium ${
              selectedTab === index ? "text-white bg-primary" : "text-gray-800"
            }`}
            onClick={() => handleTabClick(index)}
          >
            <div className="flex items-center gap-3">
              <list.icon />
              {list.name}
            </div>
          </div>
        ))}
      </Navbar>
      <div className="w-full relative top-24 lg:top-28 flexCenter h-max">
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="w-[90vw] h-[50vw] lg:w-[44vw] lg:min-h-32">
            <Map zoom={16.5} />
          </div>
          <div>
            {selectedTab === 0 ? <AddPlaceToMap /> : null}
            {selectedTab === 1 ? <AddPlaceToMap /> : null}
            {selectedTab === 2 ? <YourPlaces /> : null}
            {selectedTab === 3 ? <Requests /> : null}
            {selectedTab === 4 ? <YourPlaces /> : null}
            {selectedTab === 5 ? <Profile /> : null}
          </div>
        </div>
      </div>
    </div>
  );
}
