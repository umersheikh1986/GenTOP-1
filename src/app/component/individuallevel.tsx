import React from "react";
import Image from "next/image";
function IndividualLevel() {
  return (
    <div className="mx-auto">
      <hr />
      {/* <section className="grid grid-cols-3 p-10  rounded-[40px] mx-10">
        <div className="pb-10 grid col-span-1 p-3 border-l-white border-l-2  border-t-white border-t-2 border-b-white border-b-2  rounded-l-[40px] ">
          <Image src="/c1.png" alt="arrowil" width={300} height={300} />
        </div>
        <div className="pb-5 grid col-span-2 p-3 border-r-white border-r-2 border-t-white border-t-2 border-b-white border-b-2 rounded-r-[40px]">
          <h1 className="p-2  text-white text-5xl">Join our Community Today</h1>
          <p className=" text-white text-xl">
          22 months after the launch of our community and after reaching over 14,000 members we begin a new journey, one that is going to take us to a path of exponential growth always looking for sustainability, transparency and capitalization for our members, welcome aboard! 
          </p>
        </div>
      </section> */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 md:p-10 rounded-[40px] mx-4 md:mx-10">
        {/* Image Section */}
        <div className="pb-6 md:pb-10 p-3 border-l-white border-l-2 border-t-white border-t-2 border-b-white border-b-2 md:rounded-l-[40px] flex justify-center items-center">
          <Image
            src="/c1.png"
            alt="arrowil"
            width={300}
            height={300}
            className="w-[80%] md:w-[90%] lg:w-auto h-auto"
          />
        </div>

        {/* Text Section */}
        <div className="pb-5 md:pb-6 col-span-2 p-3 border-r-white border-r-2 border-t-white border-t-2 border-b-white border-b-2 md:rounded-r-[40px] flex flex-col justify-center">
          <h1 className="text-white text-3xl md:text-4xl lg:text-5xl p-2 text-center md:text-left leading-tight">
            Join our Community Today
          </h1>
          <p className="text-white text-base md:text-lg lg:text-xl p-2 leading-relaxed text-center md:text-left">
            22 months after the launch of our community and after reaching over
            14,000 members, we begin a new journey, one that is going to take us
            to a path of exponential growth, always looking for sustainability,
            transparency, and capitalization for our members. Welcome aboard!
          </p>
        </div>
      </section>
    </div>
  );
}

export default IndividualLevel;
