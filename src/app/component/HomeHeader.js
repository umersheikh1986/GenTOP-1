// // "use client";
// // import { Fragment, useState } from "react";
// // import { Disclosure, Menu, Transition } from "@headlessui/react";
// // import {
// //   Bars3Icon,
// //   BellIcon,
// //   ChevronDownIcon,
// //   XMarkIcon,
// // } from "@heroicons/react/24/outline";
// // import Link from "next/link";
// // import { classNames } from "@/lib/classNames";
// // import Image from "next/image";
// // const HomeHeader = () => {
// //   const [isMenuOpen, setIsMenuOpen] = useState(false);
// //   const [isMenuOpenn, setIsMenuOpenn] = useState(false);

// //   const enter = () => {
// //     setIsMenuOpen(!isMenuOpen);
// //   };
// //   const leave = () => {
// //     setIsMenuOpen(false);
// //   };
// //   const enterr = () => {
// //     setIsMenuOpenn(!isMenuOpen);
// //   };
// //   const leavee = () => {
// //     setIsMenuOpenn(false);
// //   };

// //   return (
// //     <main className="relative z-10 bg-[#14000b] font-san">
// //       <section className="mx-auto hidden max-w-[1400px]  items-center justify-between px-5 text-3xl md:flex md:h-20 ">
// //         <Link href="/">
// //           <Image
// //             src="/logo1.png"
// //             width={10000}
// //             height={10000}
// //             alt="Picture of the author"
// //             className="h-16 w-16"
// //           />
// //         </Link>

// //         <div className="hidden items-center md:flex">
// //           {/* <Menu as="div" className="relative inline-block text-left">
// //             <div>
// //               <Menu.Button className="mr-10 inline-flex w-full items-center justify-center gap-x-1.5 text-xl  font-bold  text-white   ">
// //                 Download Our Plan
// //                 <ChevronDownIcon
// //                   className="-mr-1 h-5 w-5 text-white"
// //                   aria-hidden="true"
// //                 />
// //               </Menu.Button>
// //             </div>

// //             <Transition
// //               as={Fragment}
// //               enter="transition ease-out duration-100"
// //               enterFrom="transform opacity-0 scale-95"
// //               enterTo="transform opacity-100 scale-100"
// //               leave="transition ease-in duration-75"
// //               leaveFrom="transform opacity-100 scale-100"
// //               leaveTo="transform opacity-0 scale-95"
// //             >
// //               <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-black shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
// //                 <div className="py-1">
// //                   <Menu.Item>
// //                     {({ active }) => (
// //                       <a
// //                         href="assets/Full Genios Club G3X2 G3X5 English.pdf"
// //                         target="_blank"
// //                         className={classNames(
// //                           active ? "bg-gray-700 text-white" : "text-white",
// //                           "block px-4 py-2 text-[18px]"
// //                         )}
// //                       >
// //                         Download Our Plan English
// //                       </a>
// //                     )}
// //                   </Menu.Item>
// //                   <Menu.Item>
// //                     {({ active }) => (
// //                       <a
// //                         href="assets/Genios Club G3X2 G3X5 Español.pdf"
// //                         target="_blank"
// //                         className={classNames(
// //                           active ? "bg-gray-700 text-white" : "text-white",
// //                           "block px-4 py-2 text-[18px]"
// //                         )}
// //                       >
// //                         Download Our Plan Español
// //                       </a>
// //                     )}
// //                   </Menu.Item>
// //                 </div>
// //               </Menu.Items>
// //             </Transition>
// //           </Menu>

// //           <div className="relative">
// //             <a
// //               href={"auth/login"}
// //               className="mr-10 font-san  font-bold text-white text-xl"
// //             >
// //               DASHBOARD
// //             </a>
// //           </div> */}
// //           <div className="">
// //             <a
// //               // href={"authgc2/login"}
// //               href={"/"}
// //               className="mr-10 font-san  font-bold text-white text-xl uppercase"
// //             >
// //               Home
// //             </a>
// //             <a
// //               // href={"authgc2/login"}
// //               href={"/"}
// //               className="mr-10 font-san  font-bold text-white text-xl uppercase"
// //             >
// //               About Us
// //             </a>
// //             <a
// //               // href={"authgc2/login"}
// //               href={"/"}
// //               className="mr-10 font-san  font-bold text-white text-xl uppercase"
// //             >
// //               Contact Us
// //             </a>
// //             <a
// //               // href={"authgc2/login"}
// //               href={"/"}
// //               className="mr-10 font-san  font-bold text-white text-xl uppercase"
// //             ></a>
// //           </div>
// //         </div>
// //       </section>
// //       <Disclosure as="nav" className="block bg-[#14000b] md:hidden">
// //         {({ open }) => (
// //           <>
// //             <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
// //               <div className="relative flex h-16 items-center justify-end">
// //                 <div className="flex flex-1 items-center  sm:items-stretch sm:justify-start">
// //                   <div className="flex flex-shrink-0 ">
// //                     <Image
// //                       className="block h-8 w-auto lg:hidden"
// //                       src="/logo1.png"
// //                       alt="Your Company"
// //                       width={10000}
// //                       height={10000}
// //                     />
// //                   </div>
// //                 </div>

// //                 <div className="absolute inset-y-0  flex items-center md:hidden">
// //                   {/* Mobile menu button*/}
// //                   <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-white   ">
// //                     <span className="sr-only">Open main menu</span>
// //                     {open ? (
// //                       <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
// //                     ) : (
// //                       <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
// //                     )}
// //                   </Disclosure.Button>
// //                 </div>
// //               </div>
// //             </div>

// //             <Disclosure.Panel className="sm:hidden">
// //               <div className=" ">
// //                 <div className="items-center space-y-5 px-2 pb-3 pt-2">
// //                   <div className="relative">
// //                     <a
// //                       // href={"auth/login"}
// //                       href={"/"}
// //                       className="mr-10 font-san text-[15px] font-bold text-white"
// //                     >
// //                       DASHBOARD
// //                     </a>
// //                   </div>
// //                 </div>
// //               </div>
// //             </Disclosure.Panel>
// //           </>
// //         )}
// //       </Disclosure>
// //     </main>
// //   );
// // };

// // export default HomeHeader;

// import React from "react";
// import Image from "next/image";
// import Link from "next/link";
// function HomeHeader() {
//   return (
//     <div>
//       <nav className=" bg-[#14000b] font-san fixed w-full z-20 top-0 start-0 border-b ">
//         <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
//           <a
//             href="https://flowbite.com/"
//             className="flex items-center space-x-3 rtl:space-x-reverse"
//           >
//             {/* <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo"/> */}
//             <Link href="/">
//               <Image
//                 src="/logo1.png"
//                 width={10000}
//                 height={10000}
//                 alt="Picture of the author"
//                 className="h-16 w-16"
//               />
//             </Link>
//             <span className="self-center text-2xl font-semibold text-white">
//               Gentop
//             </span>
//           </a>
//           <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
//             <Link
//               href="/trade"
//               className="text-white bg-[#14000b] border border-white hover:bg-transparent focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-8 py-2 text-center "
//             >
//               Connect Wallet
//             </Link>
//             <button
//               data-collapse-toggle="navbar-sticky"
//               type="button"
//               className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
//               aria-controls="navbar-sticky"
//               aria-expanded="false"
//             >
//               <span className="sr-only">Open main menu</span>
//               <svg
//                 className="w-5 h-5"
//                 aria-hidden="true"
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 17 14"
//               >
//                 <path
//                   stroke="currentColor"
//                   stroke-linecap="round"
//                   stroke-linejoin="round"
//                   stroke-width="2"
//                   d="M1 1h15M1 7h15M1 13h15"
//                 />
//               </svg>
//             </button>
//           </div>
//           <div
//             className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
//             id="navbar-sticky"
//           >
//             <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 text-white text-xl rounded-lg bg-[#14000b] md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
//               <li>
//                 <a href="/" className="block py-3 px-3 " aria-current="page">
//                   Home
//                 </a>
//               </li>
//               <li>
//                 <a href="/Audit" className="block py-3 px-3 ">
//                   Audit
//                 </a>
//               </li>
//               <li>
//                 <a href="/whitePaper" className="block py-3 px-3   ">
//                   White Paper
//                 </a>
//               </li>

//               <li>
//                 <a href="/trade" className="block py-3 px-3    ">
//                   Buy
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
// }

// export default HomeHeader;

"use client";
import React, { useState } from "react";
import { useContext } from "react";
import { WalletContext, WalletContexts } from "../coonectWallet";
import Image from "next/image";
import Link from "next/link";
import { ethers } from "ethers";
import Web3Modal from "web3modal";
import { CoinbaseWalletSDK } from "@coinbase/wallet-sdk";
import WalletConnectProvider from "@walletconnect/web3-provider";
// import { SafePalWalletAdapter } from "@solana/wallet-adapter-safepal";
// import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
// import { clusterApiUrl, Connection } from "@solana/web3.js";
// const network = WalletAdapterNetwork.Testnet; // Use "Mainnet" for mainnet

// const endpoint = clusterApiUrl(network); // Solana RPC URL
// const connection = new Connection(endpoint);

const providerOptions = {
  coinbasewallet: {
    package: CoinbaseWalletSDK,
    options: {
      appName: "Web3Modal Demo",
      infuraId: "https://rpc.testnet.fantom.network", // Replace with the correct RPC URL if needed
    },
  },

  walletconnect: {
    package: WalletConnectProvider,
    options: {
      rpc: {
        4002: "https://rpc.testnet.fantom.network", // Replace with the correct RPC URL
      },
      bridge: "https://bridge.walletconnect.org", // Default WalletConnect bridge
      qrcode: true, // Show QR code for connection
    },
  },
};
function HomeHeader() {
  const { walletAddress, setWalletAddress, signer, setSigner } =
    useContext(WalletContext);

  const [isDashboard, setIsDashboard] = useState(false);
  const [whitePaper, setwhitePaper] = useState(false);
  const [audit, setAudit] = useState(false);
  const [home, setHome] = useState(false);

  const [isBuy, setBuy] = useState(false);
  const [isStaking, setStaking] = useState(false);
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };
  const handleLinkClick = () => {
    setIsNavbarOpen(false); // Close the menu on link click
  };

  // const [walletAddress, setWalletAddress] = useState("");
  // const [signer, setSigner] = useState("");
  // const connectWallet = async () => {
  //   if (walletAddress) {
  //     // Disconnect wallet
  //     setWalletAddress(null);
  //     setSigner(null);
  //     console.log("Wallet disconnected");
  //     return;
  //   }
  //   try {
  //     const web3Modal = new Web3Modal({
  //       cacheProvider: false,
  //       providerOptions,
  //     });

  //     const web3modalInstance = await web3Modal.connect();
  //     const web3modalProvider = new ethers.providers.Web3Provider(
  //       web3modalInstance
  //     );
  //     // let provider;
  //     // if (window.safepalProvider) {
  //     //   provider = new ethers.providers.Web3Provider(getProvider()); // SafePal provider
  //     // } else {
  //     //   // Fallback to Web3Modal provider
  //     //   provider = new ethers.providers.Web3Provider(web3modalInstance);
  //     // }
  //     const signer = web3modalProvider.getSigner();
  //     // const signer = signers;
  //     console.log(signer);
  //     setSigner(signer);

  //     const walletAddres = await signer.getAddress();
  //     console.log(walletAddres);
  //     // Update state with wallet details
  //     setWalletAddress(walletAddres);

  //     // Fetch staking data right after connecting the wallet
  //     // setLoading(true);
  //     // await fetchStakingDetails(signer); // Pass signer directly
  //     // await updateCountdown();

  //     // setLoading(false);
  //   } catch (error) {
  //     console.log("Error connecting wallet:", error);
  //   }
  // };
  const connectWallet = async () => {
    if (walletAddress) {
      // Disconnect wallet
      setWalletAddress("");
      // setSigner(null);
      console.log("Wallet disconnected");
      return;
    }
    try {
      const web3Modal = new Web3Modal({
        cacheProvider: false,
        providerOptions,
      });

      const web3modalInstance = await web3Modal.connect();
      const web3modalProvider = new ethers.providers.Web3Provider(
        web3modalInstance
      );
      // let provider;
      // if (window.safepalProvider) {
      //   provider = new ethers.providers.Web3Provider(getProvider()); // SafePal provider
      // } else {
      //   // Fallback to Web3Modal provider
      //   provider = new ethers.providers.Web3Provider(web3modalInstance);
      // }
      const signer = web3modalProvider.getSigner();
      // const signer = signers;
      console.log(signer);
      setSigner(signer);

      const walletAddres = await signer.getAddress();
      console.log(walletAddres);
      // Update state with wallet details
      setWalletAddress(walletAddres);

      // Fetch staking data right after connecting the wallet
      // setLoading(true);
      // await fetchStakingDetails(signer); // Pass signer directly
      // await updateCountdown();
      web3modalInstance.on("accountsChanged", (accounts) => {
        if (accounts.length > 0) {
          const updatedAddress = accounts[0];
          setWalletAddress(updatedAddress);
          setSigner(web3modalProvider.getSigner());
          console.log("Wallet updated:", updatedAddress);
        } else {
          // Handle case where all accounts are disconnected
          setWalletAddress("");
          setSigner(null);
          console.log("Wallet disconnected");
        }
      });

      // Listen for chain changes (optional)
      web3modalInstance.on("chainChanged", (chainId) => {
        console.log("Chain changed:", chainId);
        window.location.reload();
      });
      // setLoading(false);
    } catch (error) {
      console.log("Error connecting wallet:", error);
    }
  };

  function shortenAddress(address) {
    if (!address) return "";
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  }
  // const handleBuyClick = () => {
  //   setIsDashboard(true); // Switch to "UserDashboard" after clicking "Buy"
  // };
  // const handleUserDashboardClick = () => {
  //   setBuy(true);
  // };
  // const toggleRoute = () => {
  //   setIsDashboard((prevState) => !prevState); // Toggle between "Buy" and "Dashboard"
  // };
  // const toggleRoute1 = () => {
  //   setwhitePaper((prevState) => !prevState);
  // };
  // const toggleRoute2 = () => {
  //   setAudit((prevState) => !prevState);
  // };
  // const toggleRout3 = () => {
  //   setStaking((prevState) => !prevState);
  // };

  return (
    <div>
      <nav className="bg-[#14000b] font-san fixed w-full z-20 top-0 start-0 border-b">
        <div className="max-w-screen flex flex-wrap items-center justify-between mx-auto p-2">
          {/* Logo Section */}
          <div className="flex items-center ">
            <Link href="/">
              <Image
                src="/LLogo3.png"
                width={1000}
                height={1000}
                alt="Picture of the Logo"
                className="h-16 w-16 md:h-24 md:w-24"
              />
            </Link>
            <span className="text-center text-xl md:text-2xl font-semibold text-white">
              Gentop
            </span>
          </div>

          {/* Buttons Section */}
          <div className="flex md:order-2 sm:order-2  ">
            <button
              className="text-white border border-white py-2 px-4 sm:px-2 rounded-lg"
              onClick={connectWallet}
            >
              {walletAddress ? shortenAddress(walletAddress) : "Connect Wallet"}
            </button>
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              aria-controls="navbar-sticky"
              aria-expanded="false"
              onClick={toggleNavbar}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>

          {/* Navigation Links */}
          <div
            className={`${
              isNavbarOpen ? "block" : "hidden"
            } md:flex items-center justify-between w-full md:w-auto md:order-1`}
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 mt-4 font-medium border border-gray-100 text-white text-lg rounded-lg bg-[#14000b] md:flex-row md:mt-0 md:border-0 md:space-x-8 rtl:space-x-reverse">
              <li>
                <Link
                  href="/"
                  className="block py-2 px-3"
                  onClick={handleLinkClick}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/Audit"
                  className="block py-2 px-3"
                  onClick={handleLinkClick}
                >
                  Audit
                </Link>
              </li>
              <li>
                <Link
                  href="/whitePaper"
                  className="block py-2 px-3"
                  onClick={handleLinkClick}
                >
                  White Paper
                </Link>
              </li>
              <li>
                <Link
                  href="/trade"
                  className="block py-2 px-3"
                  onClick={handleLinkClick}
                >
                  Buy
                </Link>
              </li>
              <li>
                <Link
                  href="/userDashboard"
                  className="block py-2 px-3"
                  onClick={handleLinkClick}
                >
                  Staking
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default HomeHeader;
