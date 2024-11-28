"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";

import CoinbaseWalletSDK from "@coinbase/wallet-sdk";
import WalletConnect from "@walletconnect/web3-provider";
import UserDashboard1 from "../component/UserDashboard1";
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

const UserDashboard = () => {
  function formatAddress(address) {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  }

  return (
    <div className="mt-10 text-white flex flex-col flex-2 md:flex-col md:mt-10  sm:flex-cols-2 items-center justify-center h-screen">
      <h1>User Dashboard</h1>

      <div className="pt-12">
        <UserDashboard1 />
      </div>
    </div>
  );
};

export default UserDashboard;
