import React from "react";
import Image from "next/image";
function IndividualLevel() {
  return (
    <div className="mx-auto">
      <hr />
      <section className="grid grid-cols-3 p-10  rounded-[40px] mx-10">
        <div className="pb-10 grid col-span-1 p-3 border-l-white border-l-2  border-t-white border-t-2 border-b-white border-b-2  rounded-l-[40px] ">
          <Image src="/c1.png" alt="arrowil" width={300} height={300} />
        </div>
        <div className="pb-5 grid col-span-2 p-3 border-r-white border-r-2 border-t-white border-t-2 border-b-white border-b-2 rounded-r-[40px]">
          <h1 className="p-2  text-white text-5xl">Join our Community Today</h1>
          <p className=" text-white text-xl">
          22 months after the launch of our community and after reaching over 14,000 members we begin a new journey, one that is going to take us to a path of exponential growth always looking for sustainability, transparency and capitalization for our members, welcome aboard! 
          </p>
        </div>
      </section>
    </div>
  );
}

export default IndividualLevel;
