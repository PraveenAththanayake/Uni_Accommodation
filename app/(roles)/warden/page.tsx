"use client";

import Map from "@/components/map";
import Navbar from "@/components/navbar";
import SidebarCarousel from "@/components/sidebar_carousel";
import { useState, useEffect } from "react";

export default function UserInfo() {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    async function getPlaces() {
      const response = await fetch("/api/places");
      const data = await response.json();
      setPlaces(data);
    }

    getPlaces();
  }, []);
  return (
    <div className="w-full h-screen">
      <Navbar />
      <div className="flexBetween p-5 h-screen w-full gap-5 mt-24">
        <Map zoom={16.5} places={places} />
        <SidebarCarousel />
      </div>
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
