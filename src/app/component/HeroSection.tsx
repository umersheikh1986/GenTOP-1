import Image from "next/image";
function HeroSection() {
  return (
    <div className="grid grid-rows-1 justify-center items-center pb-20 pt-20  bg-[url('/backgroundimage.png')]">
      <section>
        <div className="border-b- border-b-white rounded-[50%]">
          <div className="relative border-b- rounded-[50%] border-b-white  z-30 h-[250px] w-[560px] mx-auto mt-20 mb-20 flex items-center justify-center">
            {/* Base Image */}
            <Image
              src="/Gft-1.png"
              width={550}
              height={550}
              alt="gtf-img"
              className="absolute mt-6   "
            />

            {/* Main Logo */}
            <Image
              src="/logo1.png"
              alt="logo"
              width={300}
              height={300}
              className="absolute  animate-moveUpDown"
            />

            {/* Overlay Image */}
            <Image
              src="/gentop-6.png"
              alt="overlay"
              width={524}
              height={550}
              className="ml-3 absolute  "
            />

            {/* <div className="absolute z-10 bottom-[-50px] w-[300px] h-[20px] bg-blue-500 rounded-full"></div> */}
          </div>
          <div className="w-[560px]">
            <hr className=" " />
            <p className="text-center text-white">
           Tokens will not be offered or sold in the United States of America or to U.S. persons and other prohibited persons. See important considerations on page 1 of the White Paper. 
            </p>
          </div>
        </div>

        {/* <div className="text-center text-3xl md:text-7xl font-extrabold pb-10"> */}
        {/* <div>
          {/* <p className="text-center ">
            {" "}
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. since the 1500s,
          </p> */}
        {/* <h1>Tokens</h1> */}
        {/* </div> */}
        {/* <div className="text-center text-sm md:text-xl">
          <h2 className="text-amber-400">
            {" "}
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. since the 1500s,
          </h2>
        </div> */}
        {/* <div className="relative bg-blue-500 h-64 w-full">
          <div className="absolute top-0 w-full h-32 bg-white clip-path-custom-bottom">
            <div className="h-full w-full bg-blue-500"></div>
          </div>
        </div> */}
      </section>
    </div>
  );
}

export default HeroSection;
