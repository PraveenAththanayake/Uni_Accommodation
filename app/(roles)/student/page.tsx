"use client";

import useSessionData from "@/hooks/useSessionData";
import { signOut } from "next-auth/react";
import Map from "@/components/map";
import Navbar from "@/components/navbar";
import AddPlaceToMap from "@/components/bottom_card/add-place";
import { LandlordSideLists } from "@/constants/LandlordSidebar";
import { useState, useEffect } from "react";
import Accommodations from "@/components/student/places";

export default function UserInfo() {
  const { session, isLoading, isError } = useSessionData();
  const [houses, setHouses] = useState([]);
  const [selectedTab, setSelectedTab] = useState<number | null>(0);
  const handleTabClick = (index: number): void => {
    setSelectedTab(index === selectedTab ? null : index);
  };

  useEffect(() => {
    async function getHouses() {
      const response = await fetch("/api/houses");
      const data = await response.json();
      setHouses(data);
    }

    getHouses();
  }, []);

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
      <div className="w-full relative top-24 lg:top-28 flexCenter md:h-max">
        <div className="flex justify-between flex-col lg:flex-row gap-6">
          <div className="w-[90vw] lg:w-[44vw] h-[50vw] md:min-h-[38vw] md:max-h-max">
            <Map zoom={16.5} houses={houses} />
          </div>
          <div>
            {selectedTab === 0 ? <Accommodations /> : null}
            {selectedTab === 1 ? <Accommodations /> : null}
            {selectedTab === 2 ? <AddPlaceToMap /> : null}
            {selectedTab === 3 ? <AddPlaceToMap /> : null}
            {selectedTab === 4 ? <AddPlaceToMap /> : null}
            {selectedTab === 5 ? <AddPlaceToMap /> : null}
          </div>
        </div>
      </div>

      {/* {(session?.user as { role: string }).role === "student" && (
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
