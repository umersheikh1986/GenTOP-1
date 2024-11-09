import Image from "next/image";
const Decentralization = () => {
  return (
    <div>
      <hr />
      <div className="mt-8">
        <h1 className="text-center text-7xl text-white"> Security</h1>
      </div>
      <section className="grid lg:grid-cols-2 gap-10 max-w-7xl items-center mx-auto  p-5">
        <div className="p-8 border-2 border-white  rounded-[40px]">
          {/* <Image src="/brands.png" width={400} height={400} alt="brands" /> */}
          <Image src="/s1.png" width={400} height={400} alt="brands" />

          <div className="text-white">
            <h1 className="text-2xl md:text-3xl font-extrabold pt-8">
              Advanced Security Measures
            </h1>
            <p className="mt-2">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry standard dummy text
              ever since the 1500s,
            </p>
          </div>
        </div>
        <div className="text-white gap-16 ">
          <div className="grid place-items-center rounded-[40px] justify-between border-2 border-white grid-cols-2 gap-4 p-2">
            <h2 className="text-xl md:text-2xl  p-8">
              Lorem Ipsum is simply a text
            </h2>
            <Image
              src="/s2.png"
              alt="arrow"
              width={200}
              height={200}
              className="p-5 "
            />
          </div>
          <div className="grid grid-cols-2 place-items-center rounded-[40px] justify-between border-2 border-white gap-4">
            <h2 className="text-xl md:text-2xl  p-8">
              Lorem Ipsum is simply a text
            </h2>
            <Image
              src="/s3.png"
              alt="arrow"
              width={200}
              height={200}
              className="pt-5  "
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Decentralization;
