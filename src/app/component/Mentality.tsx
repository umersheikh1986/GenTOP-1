import React from "react";
import Image from "next/image";
import { RiInstanceLine } from "react-icons/ri";
const Mentality = () => {
  return (
    <div>
      <hr />
      <div>
        <h1 className="text-6xl mt-6 text-white text-center"> Road Map</h1>
      </div>
      <section className="grid grid-cols-2 gap-4 p-4 pb-20 pt-12 items-center">
        {/* First Div */}
        <div className="text-white mx-auto px-6 flex flex-col justify-between h-full">
          <p className=" font-medium text-xl">
            Since its beginning in December 2022, our community has been growing
            on the basis of transparency, sustainability, and decentralization.
            First, we launched the Genios 3x2 and 3x5 gifting matrix system to
            help our members learn how solidarity capitalization works. Now we
            are ready to go on to our next phases:
          </p>

          <div className="py-4 flex justify-center">
            <Image
              src={`/bitcoin.png`}
              alt="bitcoin"
              width={400}
              height={400}
            />
          </div>
        </div>

        {/* Second Div */}
        <div className="text-white flex flex-col gap-4 h-full">
          <div className="p-4">
            <ol>
              <hr />
              <li>
                <p className="font bold text-3xl">• 2024 Q4</p>
                <ol>
                  <li className="font bold text-xl">- Staking</li>
                  <li>- DEX Listing</li>
                  <li>- Education Platform</li>
                </ol>
              </li>
              <hr />
              <li>
                <p className="font bold text-3xl">• 2025 Q1</p>
                <ol>
                  <li className="font bold text-xl">
                    - Real Estate Tokenization Platform
                  </li>
                  <li className="font bold text-xl">- DEX Listing</li>
                  <li className="font bold text-xl">- Education Platform</li>
                </ol>
              </li>
              <hr />
              <li>
                <p className="font bold text-3xl">• 2025 Q2</p>
                <ol>
                  <li className="font bold text-xl">- Business Funding Hub</li>
                </ol>
              </li>
              <hr />
              <li>
                <p className="font bold text-3xl">• 2025 Q3</p>
                <ol>
                  <li className="font bold text-xl">- Art Tokenization</li>
                </ol>
              </li>
              <hr />
              <li>
                <p className="font bold text-3xl">• 2025 Q4</p>
                <ol>
                  <li className="font bold text-xl">- Shop And Earn System</li>
                </ol>
              </li>
              <hr />
              <li>
                <p className="font bold text-3xl">• 2026 Q2</p>
                <ol>
                  <li className="font bold text-xl">- Holiday Club</li>
                </ol>
              </li>
              <hr />
              <li>
                <p className="font bold text-3xl">• 2026 Q4</p>
                <ol>
                  <li className="font bold text-xl">- Dream City</li>
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
