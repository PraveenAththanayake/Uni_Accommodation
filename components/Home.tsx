"use client";

import Image from "next/image";
import React from "react";
import { ReactTyped } from "react-typed";

function HomePage() {
  return (
    <body>
      <img
        className="w-full h-screen object-cover brightness-75 "
        alt=""
        src={"https://gyc.nsbm.ac.lk/wp-content/uploads/2022/10/c1.jpg"}
      />
      <div className="text-white absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 backdrop-brightness-125 p-7 rounded-2xl backdrop-blur-[6px]">
        <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center items-center">
          <p className="text-green-500 font-bold p-2 md:text-3xl sm:text-2xl text-xl md:py-6">
            NSBM
          </p>
          <h1 className="md:text-5xl sm:text-4xl text-3xl font-bold md:py-6">
            ACCOMADATIONS
          </h1>
          <div>
            <p className="md:text-5xl sm:text-4xl text-xl  md:py-4">
              An ideal hostel for students
            </p>
            <ReactTyped
              className="md:text-5xl sm:text-4xl text-xl  md:pl-4 pl-2"
              strings={["Start fresh", "The place to stay", "Feel Like Home"]}
              typeSpeed={150}
              backSpeed={180}
              loop
            />
          </div>
          <button className="bg-[rgb(156,223,147)] rounded-md w-[180px] font-medium my-6 mx-suto py-3">
            Get Started
          </button>
        </div>
      </div>
    </body>
  );
}

export default HomePage;
