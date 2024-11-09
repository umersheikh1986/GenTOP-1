"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Web3Modal from "web3modal";
import { ethers } from "ethers";
import CoinbaseWalletSDK from "@coinbase/wallet-sdk";
import WalletConnect from "@walletconnect/web3-provider";
import UserDashboard1 from "../component/UserDashboard1.tsx";
const providerOptions = {
  walletconnect: {
    package: WalletConnect,
    options: {
      infuraId: "YOUR_INFURA_ID", // Replace with your Infura project ID
    },
  },
  coinbasewallet: {
    package: CoinbaseWalletSDK,
    options: {
      appName: "Gentop",
      infuraId: "YOUR_INFURA_ID", // Replace with your Infura project ID
    },
  },
};

const userDashboard = () => {
  const [web3Provider, setWeb3Provider] = useState(null);
  const [walletAddress, setWalletAddress] = useState(null);

  async function connectWallet() {
    try {
      const web3Modal = new Web3Modal({
        cacheProvider: false,
        providerOptions,
      });

      const web3modalInstance = await web3Modal.connect();
      const web3modalProvider = new ethers.providers.Web3Provider(
        web3modalInstance
      );

      if (web3modalProvider) {
        const signer = web3modalProvider.getSigner();
        const address = await signer.getAddress();
        setWalletAddress(address);
        setWeb3Provider(web3modalProvider);
      }
    } catch (error) {
      console.log("Error connecting wallet:", error);
    }
  }

  function formatAddress(address) {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  }

  return (
    <div className="mt-4 text-white flex flex-col items-center justify-center h-screen">
      <h1>User Dashboard</h1>
      <nav className="bg-[#14000b] font-san fixed w-full z-20 top-0 start-0 border-b">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <Image
              src="/logo1.png"
              width={10000}
              height={10000}
              alt="Logo"
              className="h-16 w-16"
            />
            <span className="self-center text-2xl font-semibold text-white">
              Gentop
            </span>
          </Link>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            {web3Provider == null ? (
              <button
                className="text-white bg-[#14000b] border border-white hover:bg-transparent focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-8 py-2 text-center"
                onClick={connectWallet}
              >
                Connect Wallet
              </button>
            ) : (
              <div>{walletAddress ? formatAddress(walletAddress) : ""}</div>
            )}
          </div>
          <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 text-white text-xl rounded-lg bg-[#14000b] md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
              <li>
                <a href="/" className="block py-3 px-3">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="block py-3 px-3">
                  About
                </a>
              </li>
              <li>
                <a href="/" className="block py-3 px-3">
                  Services
                </a>
              </li>
              <li>
                <a href="/" className="block py-3 px-3">
                  Contact
                </a>
              </li>
              <li>
                <a href="/userDashboard" className="block py-3 px-3">
                  User Dashboard
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div>
        <UserDashboard1 />
      </div>
    </div>
  );
};

export default userDashboard;
