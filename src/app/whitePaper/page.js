import React from "react";

function page() {
  return (
    <div className="mt-40 text-white flex flex-col justify-center items-center">
      <div className="text-center bg-[rgb(250,204,20)]  mx-auto md:text-left border-2 p-3 border-gray-700 rounded-[40px] text-lg md:text-3xl font-bold mb-6">
        <h3
          className="   cursor-pointer text-3xl  w-auto p-4 inline-block bg-[rgb(250,204,20)] text-black font-semibold "
          initial={{ opacity: 0, scale: 0.2 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 20, // removed quotes around the duration
            delay: 0.3,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          White Paper
        </h3>
      </div>
      <div className=" bg-[rgb(250,204,20)] items-center border-4 border-gray-700 text-black p-10 md:p-20 rounded-[40px] w-full md:w-1/2 mb-6 md:mb-0 flex flex-col justify-center text-center">
        <a
          href="/WhitePaper.pdf"
          download
          className="inline-block mt-4 text-black font-bold underline"
        >
          Download File from here
        </a>
      </div>
    </div>
  );
}

export default page;
