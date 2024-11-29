import React from "react";
import Image from "next/image";
import { RiInstanceLine } from "react-icons/ri";
const Mentality = () => {
  return (
    <div>
      <hr />
      <div>
        <h1 className="lg:text-6xl md:text-xl sm:base mt-6 text-white text-center">
          {" "}
          Road Map
        </h1>
      </div>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 pb-20 pt-12 items-center">
        {/* First Div */}
        <div className="text-white mx-auto px-4 md:px-6 flex flex-col justify-between h-full">
          <p className="font-medium text-base md:text-lg lg:text-xl leading-relaxed">
            Since its beginning in December 2022, our community has been growing
            on the basis of transparency, sustainability, and decentralization.
            First, we launched the Genios 3x2 and 3x5 gifting matrix system to
            help our members learn how solidarity capitalization works. Now we
            are ready to go on to our next phases:
          </p>
          <div className="py-6 flex justify-center">
            <Image
              src={`/LLLogo3.png`}
              alt="bitcoin"
              width={400}
              height={400}
              className="w-[70%] md:w-[60%] lg:w-[50%] h-auto"
            />
          </div>
        </div>

        {/* Second Div */}
        <div className="text-white flex flex-col gap-4 h-full px-4 md:px-6">
          <div>
            <ol className="space-y-6">
              <li>
                <p className="font-bold text-xl md:text-2xl lg:text-3xl">
                  • 2024 Q4
                </p>
                <ol className="pl-4 mt-2 space-y-2">
                  <li className="font-medium text-base md:text-lg">
                    - Staking
                  </li>
                  <li className="font-medium text-base md:text-lg">
                    - DEX Listing
                  </li>
                  <li className="font-medium text-base md:text-lg">
                    - Raffle System
                  </li>
                </ol>
              </li>
              <li>
                <p className="font-bold text-xl md:text-2xl lg:text-3xl">
                  • 2025 Q1
                </p>
                <ol className="pl-4 mt-2 space-y-2">
                  <li className="font-medium text-base md:text-lg">
                    - Education Platform
                  </li>
                  <li className="font-medium text-base md:text-lg">
                    - Real Estate Tokenization
                  </li>
                  <li className="font-medium text-base md:text-lg">
                    - Digital Assets Listing
                  </li>
                </ol>
              </li>
              <li>
                <p className="font-bold text-xl md:text-2xl lg:text-3xl">
                  • 2025 Q2
                </p>
                <ol className="pl-4 mt-2 space-y-2">
                  <li className="font-medium text-base md:text-lg">
                    - Business Funding Hub
                  </li>
                </ol>
              </li>
              <li>
                <p className="font-bold text-xl md:text-2xl lg:text-3xl">
                  • 2025 Q3
                </p>
                <ol className="pl-4 mt-2 space-y-2">
                  <li className="font-medium text-base md:text-lg">
                    - Art Tokenization
                  </li>
                </ol>
              </li>
              <li>
                <p className="font-bold text-xl md:text-2xl lg:text-3xl">
                  • 2025 Q4
                </p>
                <ol className="pl-4 mt-2 space-y-2">
                  <li className="font-medium text-base md:text-lg">
                    - Shop And Earn System
                  </li>
                </ol>
              </li>
              <li>
                <p className="font-bold text-xl md:text-2xl lg:text-3xl">
                  • 2026 Q2
                </p>
                <ol className="pl-4 mt-2 space-y-2">
                  <li className="font-medium text-base md:text-lg">
                    - Holiday Club
                  </li>
                </ol>
              </li>
              <li>
                <p className="font-bold text-xl md:text-2xl lg:text-3xl">
                  • 2026 Q4
                </p>
                <ol className="pl-4 mt-2 space-y-2">
                  <li className="font-medium text-base md:text-lg">
                    - Dream City
                  </li>
                </ol>
              </li>
            </ol>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Mentality;
