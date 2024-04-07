"use client";

import Image from "next/image";
import React from "react";
import { ReactTyped } from "react-typed";
import { LoginButton } from "./auth/login-button";
import { Button } from "./ui/button";

function HomePage() {
  return (
    <div className="w-full h-screen">
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
          <div className="mb-8">
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
          <LoginButton>
            <Button variant="secondary" size="lg">
              Get Started
            </Button>
          </LoginButton>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
