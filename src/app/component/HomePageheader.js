"use client";
import React, { useState } from "react";
import { useContext } from "react";
import { WalletContext } from "../coonectWallet";
import Image from "next/image";
import Link from "next/link";
import { ethers } from "ethers";
import Web3Modal from "web3modal";
import { CoinbaseWalletSDK } from "@coinbase/wallet-sdk";
import WalletConnectProvider from "@walletconnect/web3-provider";

function getProvider() {
  const provider = window.safepalProvider; // Check if SafePal provider is injected
  if (!provider) {
    // If SafePal provider is not found, open the download link
    window.open("https://www.safepal.com/download");
    throw new Error(
      "Please go to our official website to download SafePal wallet."
    );
  }
  return provider;
}
const providerOptions = {
  coinbasewallet: {
    package: CoinbaseWalletSDK,
    options: {
      appName: "Web3Modal Demo",
      infuraId: "https://rpc.testnet.fantom.network", // Replace with the correct RPC URL if needed
    },
  },
  // injected: {
  //   package: null, // SafePal uses window.ethereum (no additional package needed)
  //   display: {
  //     name: "SafePal", // Name to display in Web3Modal
  //     description: "Connect to SafePal Wallet",
  //     logo: "data:image/gif;base64,INSERT_BASE64_STRING", // SafePal logo (you can update this logo if needed)
  //   },
  // },
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
function HomePageHeader() {
  const { walletAddress, setWalletAddress, signer, setSigner } =
    useContext(WalletContext);

  const [isDashboard, setIsDashboard] = useState(false);
  const [isBuy, setBuy] = useState(false);
  // const [walletAddress, setWalletAddress] = useState("");
  // const [signer, setSigner] = useState("");
  const connectWallet = async () => {
    try {
      const web3Modal = new Web3Modal({
        cacheProvider: false,
        providerOptions,
      });

      const web3modalInstance = await web3Modal.connect();
      const web3modalProvider = new ethers.providers.Web3Provider(
        web3modalInstance
      );
      let provider;
      if (window.safepalProvider) {
        provider = new ethers.providers.Web3Provider(getProvider()); // SafePal provider
      } else {
        // Fallback to Web3Modal provider
        provider = new ethers.providers.Web3Provider(web3modalInstance);
      }
      const signer = web3modalProvider.getSigner();
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

      // setLoading(false);
    } catch (error) {
      console.log("Error connecting wallet:", error);
    }
  };

  function shortenAddress(address) {
    if (!address) return "";
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  }
  const handleBuyClick = () => {
    setIsDashboard(true); // Switch to "UserDashboard" after clicking "Buy"
  };
  const handleUserDashboardClick = () => {
    setBuy(true);
  };
  const toggleRoute = () => {
    setIsDashboard((prevState) => !prevState); // Toggle between "Buy" and "Dashboard"
  };
  return (
    <div>
      <nav className=" bg-[#14000b] font-san fixed w-full z-20 top-0 start-0 border-b ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="https://flowbite.com/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            {/* <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo"/> */}
            <Link href="/">
              <Image
                src="/logo1.png"
                width={10000}
                height={10000}
                alt="Picture of the author"
                className="h-16 w-16"
              />
            </Link>
            <span className="self-center text-2xl font-semibold text-white">
              Gentop
            </span>
          </a>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            {/* <button
              className="text-white border border-white p-4 rounded-lg"
            //   onClick={connectWallet}
            >
              {walletAddress ? shortenAddress(walletAddress) : "Connect Wallet"}
            </button> */}
            <Link
              href="/trade"
              className="text-white border border-white p-4 rounded-lg"
            >
              Menu
            </Link>
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
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
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 text-white text-xl rounded-lg bg-[#14000b] md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
              <li>
                <a href="/" className="block py-3 px-3 " aria-current="page">
                  Home
                </a>
              </li>
              <li>
                <a href="/Audit" className="block py-3 px-3 ">
                  Audit
                </a>
              </li>
              <li>
                <a href="/whitePaper" className="block py-3 px-3   ">
                  White Paper
                </a>
              </li>
              <li>
                {!isDashboard ? (
                  <Link
                    href="/trade"
                    className="block py-3 px-3"
                    onClick={toggleRoute}
                  >
                    Buy
                  </Link>
                ) : (
                  <Link
                    href="/userDashboard"
                    className="block py-3 px-3"
                    onClick={toggleRoute}
                  >
                    Dashboard
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default HomePageHeader;
