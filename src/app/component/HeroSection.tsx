"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import React from "react";

function HeroSection() {
  const [partyTime, setPartyTime] = useState(false);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const target = 1735292727 * 1000;
      const now = new Date();
      const difference = target - now.getTime();

      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      setDays(d);

      const h = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      setHours(h);

      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      setMinutes(m);

      const s = Math.floor((difference % (1000 * 60)) / 1000);
      setSeconds(s);

      if (d <= 0 && h <= 0 && m <= 0 && s <= 0) {
        setPartyTime(true);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    // <div className="grid grid-rows-1 justify-center items-center pb-20 pt-20 mt-10 bg-[url('/backgroundimage.png')]">
    //   <section>
    //     <div className="">
    //       <div className="relative border-b- rounded-[50%] border-b-white   h-[250px] w-[560px] mx-auto mt-20 mb-20 flex items-center justify-center">
    //         {/* Base Image */}
    //         <Image
    //           src="/Gft-1.png"
    //           width={550}
    //           height={550}
    //           alt="gtf-img"
    //           className="absolute mt-6   "
    //         />

    //         {/* Main Logo */}
    //         <Image
    //           src="/Logo3.png"
    //           alt="logo"
    //           width={600}
    //           height={600}
    //           className="absolute  animate-moveUpDown"
    //         />

    //         {/* Overlay Image */}
    //         <Image
    //           src="/gentop-6.png"
    //           alt="overlay"
    //           width={524}
    //           height={550}
    //           className="ml-3 absolute  "
    //         />

    //         {/* <div className="absolute z-10 bottom-[-50px] w-[300px] h-[20px] bg-blue-500 rounded-full"></div> */}
    //       </div>
    //       <div className="w-[560px]">
    //         <hr className=" " />
    //         <p className="text-center text-white">
    //           Tokens will not be offered or sold in the United States of America
    //           or to U.S. persons and other prohibited persons. See important
    //           considerations on page 1 of the White Paper.
    //         </p>
    //       </div>
    //     </div>

    //     {/* <div className="text-center text-3xl md:text-7xl font-extrabold pb-10"> */}
    //     {/* <div>
    //       {/* <p className="text-center ">
    //         {" "}
    //         Lorem Ipsum is simply dummy text of the printing and typesetting
    //         industry. since the 1500s,
    //       </p> */}
    //     {/* <h1>Tokens</h1> */}
    //     {/* </div> */}
    //     {/* <div className="text-center text-sm md:text-xl">
    //       <h2 className="text-amber-400">
    //         {" "}
    //         Lorem Ipsum is simply dummy text of the printing and typesetting
    //         industry. since the 1500s,
    //       </h2>
    //     </div> */}
    //     {/* <div className="relative bg-blue-500 h-64 w-full">
    //       <div className="absolute top-0 w-full h-32 bg-white clip-path-custom-bottom">
    //         <div className="h-full w-full bg-blue-500"></div>
    //       </div>
    //     </div> */}
    //   </section>
    // </div>
    <div className=" grid grid-rows-1 justify-center items-center pb-10  md:pt-10 bg-[url('/backgroundimage.png')] bg-cover bg-center">
      <section>
        <div className="mt-20 pt-10">
          <div className="relative  rounded-full  h-[250px] w-[90%] md:w-[560px] mx-auto mt-10 mb-10 flex items-center justify-center">
            <Image
              src="/LLLogo3.png"
              alt="logo"
              width={500}
              height={600}
              className="absolute w-[50%] md:w-[250px] animate-moveUpDown "
            />
          </div>

          <div className="w-[90%] md:w-[560px] mx-auto">
            {/* {partyTime ? (
              <>
                <h1>Happy new year!</h1>
                <video autoPlay loop muted>
                  <source src="/party.mp4" />
                </video>
              </>
            )  */}
            {/* : ( */}
            <div className=" flex flex-row gap-4 text-center border-2    items-center justify-center rounded-lg text-sm md:text-4xl text-[rgb(250,204,20)] p-8  border-[rgb(250,204,20)] ">
              <div className="gap-2">
                <span className="animate-blink font-extrabold text-red-600">
                  {days}
                </span>
                <span className=""> days</span>
              </div>
              <span className="">:</span>
              <div className="">
                <span className="animate-blink text-red-600 font-extrabold ">
                  {hours}
                </span>
                <span className=""> hours</span>
              </div>
              <span className="">:</span>
              <div className="gap-2">
                <span className="animate-blink  text-red-600 font-extrabold">
                  {minutes}
                </span>
                <span className=""> minutes</span>
              </div>
              <span className="">:</span>
              <div className="gap-2">
                <span className="animate-blink  text-red-600 font-extrabold">
                  {seconds}
                </span>
                <span className=""> seconds</span>
              </div>
            </div>
            {/* )} */}
            <hr className="text-white mt-5" />
            {/* bronze :{bronzeRemainings} */}
            <p className="text-center text-sm md:text-base text-white mt-4">
              Tokens will not be offered or sold in the United States of America
              or to U.S. persons and other prohibited persons. See important
              considerations on page 1 of the White Paper.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HeroSection;
