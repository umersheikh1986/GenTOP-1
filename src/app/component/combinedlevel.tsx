import React from "react";
import Image from "next/image";
function CombinedLevel() {
  return (
    <div className=" pb-10">
      <hr />
      <h1 className="text-center text-7xl text-white "> News Letter </h1>
      <section className="grid grid-cols-4 mx-20 gap-4 mt-6">
        {/* Main Subscription Box */}
        <div className="col-span-3 border-2 rounded-[40px] p-8 flex flex-col items-center justify-center border-white">
          <p className="text-white text-center text-xl md:text-5xl mb-4">
            Sign up for Updates
          </p>
          {/* <p className="text-white text-center text-lg md:text-2xl mb-6">
            Email Address
          </p> */}
          <form className="flex flex-col sm:flex-row-2 px-60 gap-4 w-full justify-center">
            <div>
              <label
                htmlFor="email"
                className="text-white  text-lg md:text-2xl "
              >
                {" "}
                Email Address
              </label>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <input
                type="email"
                className="w-full sm:w-auto px-6 py-3 text-gray-900 rounded-md focus:outline-none"
                placeholder="Enter your email"
                required
              />
              <button
                type="submit"
                className="bg-blue-600 px-6 py-3 rounded-md text-white font-semibold hover:bg-blue-700"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>

        {/* Side Info Box */}
        <div className="border-2 border-white rounded-[40px] p-8 col-span-1 flex items-center justify-center">
          <div>
            <Image
              src={`/n1.png`}
              alt="bitcoin-newsLetter"
              width={200}
              height={200}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default CombinedLevel;
