import Image from "next/image";
const Decentralization = () => {
  return (
    <div>
      <hr />
      <div className="mt-8">
        <h1 className="text-center text-7xl text-white"> Security</h1>
      </div>
      <section className=" gap-10 max-w-7xl  mx-auto  p-5">
        <div className="p-8 border-2 flex flex-col items-center justify-between text-white border-white  rounded-[40px]">
          {/* <Image src="/brands.png" width={400} height={400} alt="brands" /> */}

          <div className="">
            <Image src="/s1.png" width={400} height={400} alt="brands" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-extrabold pt-8">
              Advanced Security Measures
            </h1>
          </div>
          <div>
            <p className="mt-2 text-center">
              The Blockchain technology is considered secure because of its use
              of encryption to manage data, decentralization, and consensus.
              Gentop is a token created through a verified smart contract in the
              Binance Smart Chain, complying with all technical requirements
              needed. Our token has been audited to ensure the best practices
              were used building its infrastructure, guaranteeing compliance and
              transparency.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Decentralization;
