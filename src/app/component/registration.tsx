import Image from "next/image";
import Link from "next/link";

function Registration() {
  return (
    <div>
      <footer className="bg-[#14000b]">
        <div className="mx-auto w-full sm:mt-20   max-w-screen-xl px-4 pt-6 lg:pt-8">
          {/* Top Section */}
          <div className="flex flex-row items-center gap-2 mt-20  sm:flex-row sm:justify-between sm:gap-4 sm:p-2 sm:text-sm lg:gap-8">
            {/* Logo and Buy Tokens */}
            <div className="flex flex-row items-center  sm:items-start">
              <Link
                href="/trade"
                className="flex flex-col items-center sm:flex-col sm:items-center"
              >
                <Image
                  src="/LLLogo3.png"
                  className="w-24 sm:w-28 lg:w-32" // Adjust image width for responsiveness
                  width={100}
                  height={300}
                  alt="FlowBite Logo"
                />
                <span className="mt-2 sm:mt-0 sm:ml-3 text-lg sm:text-xl lg:text-2xl font-semibold text-white">
                  Buy Tokens
                </span>
              </Link>
            </div>
            {/* Links */}

            <div className="flex flex-col items-center gap-4 sm:flex-col ">
              <p className="text-lg sm:text-lg lg:text-2xl font-semibold text-white">
                {" "}
                <u>Smart Contract Addresses</u>{" "}
              </p>{" "}
              {/* <hr className=" bg-white sm:mx-auto " /> */}
              <div className="sm: gap-2 flex ">
                {" "}
                <a
                  href="https://bscscan.com/address/0xc94cDB70F1ec91437C5d22340d5206B4B8928482"
                  target="_blank"
                  rel="noreferrer"
                  className="text-lg sm:text-lg lg:text-lg font-semibold text-white"
                >
                  Gentop
                </a>
                <a
                  href="https://bscscan.com/address/0xAb1e13E8A7a7d95EE8aDDC1f74aAc3CF6CccA597"
                  target="_blank"
                  rel="noreferrer"
                  className="text-lg sm:text-lg lg:text-xl font-semibold text-white"
                >
                  Presale
                </a>
                <a
                  href="https://bscscan.com/address/0x4DF17Ed886b3237fDbc29EdB6e4dc986433f2377"
                  target="_blank"
                  rel="noreferrer"
                  className="text-lg sm:text-lg lg:text-xl font-semibold text-white"
                >
                  Staking
                </a>
              </div>
            </div>
          </div>

          {/* Divider */}
          <hr className="my-6 border-gray-200  sm:mx-auto lg:my-10" />

          {/* Bottom Section */}
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
            {/* Footer Text */}
            <span className="text-sm text-center text-white">
              2024 all right reserved by gentop
            </span>

            {/* Social Links */}
            <div className="flex gap-5">
              <a href="#" className="text-white">
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 8 19"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="sr-only">Facebook page</span>
              </a>
              {/* Repeat for other social icons */}
              <a href="#" className="text-white">
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 21 16"
                >
                  <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" />
                </svg>
                <span className="sr-only">Discord community</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Registration;
