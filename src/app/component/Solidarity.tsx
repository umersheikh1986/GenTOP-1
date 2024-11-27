import Image from "next/image";
const Solidarity = () => {
  return (
    // <section className="mx-5 grid lg:grid-cols-2   ">
    //   <div className="text-white  border-white border-2   "></div>
    //   <div className="text-white    border-white border-2  "></div>
    // </section>
    //   <div className="">
    //     <h2 className=" text-center text-3xl p-4 text-white">
    //       WHY CHOOSE GENTOP?
    //     </h2>
    //     <div className="grid grid-cols-2 mx-auto gap-2 p-8">
    //       {/* <!-- First Sub Div --> */}
    //       <div className=" border-2 gap-4 border-white rounded-[40px] p-4 text-white">
    //         {" "}
    //         <h2 className="p-4 text-4xl">USABILITY</h2>
    //         <p className="p-4">
    //           Different from many tokens launched in the market, GENTOP Our token
    //           has is bound to be used in several projects by a community that is
    //           set to grow exponentially once that these systems are set in motion.
    //         </p>
    //         <div className="mt-4 p-4">
    //           <Image src={`/w1.jpg`} alt="w1" width={1000} height={500} />
    //         </div>
    //       </div>
    //       {/*
    // <!-- Second Sub Div --> */}

    //       <div className=" grid grid-rows-2 gap-2 text-white">
    //         <div className=" grid grid-cols-2 gap-2 ">
    //           <div className="border-2  border-white rounded-[40px]  p-4 ">
    //             {" "}
    //             <div>
    //               <Image src={`/w2.svg`} alt="expo" width={100} height={100} />
    //             </div>
    //             <h3 className="p-2 text-xl">DECENTRALIZATION</h3>
    //             <p className="p-2 text-base">
    //               GenTop reduce or eliminate the need to rely on a central
    //               authority or third-party intermediary.
    //             </p>
    //           </div>
    //           <div className=" border-2  border-white rounded-[40px]  p-4">
    //             {" "}
    //             <div>
    //               <Image src={`/w3.svg`} alt="expo" width={100} height={100} />
    //             </div>
    //             <h3 className="p-2 text-xl">ACCESIBILITY</h3>
    //             <p className="p-2 text-base">
    //               Anyone (Outside the U.S.) with an internet connection can access
    //               the smart contracts where GenTop is used and benefit from
    //               participating in the different programs.
    //             </p>
    //           </div>
    //         </div>
    //         <div className=" border-2  border-white rounded-[40px] grid grid-cols-2 ">
    //           <div className=" ">
    //             <h3 className="p-8 text-xl">World Class Security System </h3>
    //             <p className="px-8 ">
    //               {" "}
    //               Our token has been audited to ensure the best practices were
    //               used building its infrastructure, guaranteeing compliance and
    //               transparency.
    //             </p>
    //           </div>
    //           <div>
    //             {" "}
    //             <div className="flex justify-center items-center py-5 ">
    //               <Image src={`/w4.png`} alt="expo" width={200} height={100} />
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    <div className="px-4 py-8 bg-black">
      <h2 className="text-center text-2xl md:text-3xl p-4 text-white">
        WHY CHOOSE GENTOP?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 mx-auto gap-4 md:gap-6 p-4 md:p-8">
        {/* First Sub Div */}
        <div className="border-2 gap-4 border-white rounded-[40px] p-4 text-white">
          <h2 className="text-xl md:text-2xl lg:text-3xl p-4">USABILITY</h2>
          <p className="text-sm md:text-base lg:text-lg p-4">
            Different from many tokens launched in the market, GENTOP Our token
            is bound to be used in several projects by a community that is set
            to grow exponentially once these systems are set in motion.
          </p>
          <div className="mt-4 p-4">
            <Image
              src={`/w1.jpg`}
              alt="w1"
              width={1000}
              height={500}
              className="w-full h-auto rounded-md"
            />
          </div>
        </div>

        {/* Second Sub Div */}
        <div className="grid grid-rows-2 gap-4 text-white">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="border-2 border-white rounded-[40px] p-4">
              <div className="flex justify-center">
                <Image
                  src={`/w2.svg`}
                  alt="expo"
                  width={100}
                  height={100}
                  className="w-16 h-16 md:w-20 md:h-20"
                />
              </div>
              <h3 className="text-lg md:text-base  p-2">DECENTRALIZATION</h3>
              <p className="text-sm md:text-base p-2">
                GenTop reduces or eliminates the need to rely on a central
                authority or third-party intermediary.
              </p>
            </div>
            <div className="border-2 border-white rounded-[40px] p-4">
              <div className="flex justify-center">
                <Image
                  src={`/w3.svg`}
                  alt="expo"
                  width={100}
                  height={100}
                  className="w-16 h-16 md:w-20 md:h-20"
                />
              </div>
              <h3 className="text-lg md:text-xl p-2">ACCESSIBILITY</h3>
              <p className="text-sm md:text-base p-2">
                Anyone (outside the U.S.) with an internet connection can access
                the smart contracts where GenTop is used and benefit from
                participating in the different programs.
              </p>
            </div>
          </div>
          <div className="border-2 border-white rounded-[40px] p-4 grid grid-cols-1 md:grid-cols-2 items-center">
            <div className="p-4">
              <h3 className="text-lg md:text-xl lg:text-2xl">
                World Class Security System
              </h3>
              <p className="text-sm md:text-base lg:text-lg mt-4">
                Our token has been audited to ensure the best practices were
                used building its infrastructure, guaranteeing compliance and
                transparency.
              </p>
            </div>
            <div className="flex justify-center items-center py-4">
              <Image
                src={`/w4.png`}
                alt="expo"
                width={200}
                height={100}
                className="w-32 md:w-40 lg:w-48 h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solidarity;
