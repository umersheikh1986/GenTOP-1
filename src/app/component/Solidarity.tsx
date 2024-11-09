import Image from "next/image";
const Solidarity = () => {
  return (
    // <section className="mx-5 grid lg:grid-cols-2   ">
    //   <div className="text-white  border-white border-2   "></div>
    //   <div className="text-white    border-white border-2  "></div>
    // </section>
    <div className="">
      <h2 className=" text-center text-3xl p-4 text-white">
      WHY CHOOSE GENTOP? 
      </h2>
      <div className="grid grid-cols-2 mx-auto gap-2 p-8">
        {/* <!-- First Sub Div --> */}
        <div className=" border-2 gap-4 border-white rounded-[40px] p-4 text-white">
          {" "}
          <h2 className="p-4">Low Fees & High Profits</h2>
          <p className="p-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry standard dummy text ever
            since the 1500s
          </p>
          <div className="mt-4 p-4">
            <Image src={`/w1.jpg`} alt="w1" width={1000} height={500} />
          </div>
        </div>
        {/* 
  <!-- Second Sub Div --> */}

        <div className=" grid grid-rows-2 gap-2 text-white">
          <div className=" grid grid-cols-2 gap-2 ">
            <div className="border-2  border-white rounded-[40px]  p-4 ">
              {" "}
              <div>
                <Image src={`/w2.svg`} alt="expo" width={100} height={100} />
              </div>
              <h3 className="p-2 text-xl">DECENTRALIZATION</h3>
              <p className="p-2 text-base">
              GenTop reduce or eliminate the need to rely on a central authority or third-party intermediary. 
              </p>
            </div>
            <div className=" border-2  border-white rounded-[40px]  p-4">
              {" "}
              <div>
                <Image src={`/w3.svg`} alt="expo" width={100} height={100} />
              </div>
              <h3 className="p-2 text-xl">ACCESIBILITY</h3>
              <p className="p-2 text-base">
               Anyone (Outside the U.S.) with an internet connection can access the smart contracts where GenTop is used and benefit from participating in the different programs.  
              </p>
            </div>
          </div>
          <div className=" border-2  border-white rounded-[40px] grid grid-cols-2 ">
            <div className=" ">
              <h3 className="p-8 text-xl">World Class Security System </h3>
              <p className="px-8 ">
                {" "}
               Our token has been audited to ensure the best practices were used building its infrastructure, guaranteeing compliance and transparency.
              </p>
            </div>
            <div>
              {" "}
              <div className="flex justify-center items-center py-5 ">
                <Image src={`/w4.png`} alt="expo" width={200} height={100} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solidarity;
