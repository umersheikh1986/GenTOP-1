"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { WalletContext } from "../coonectWallet";
import { useContext } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Web3Modal from "web3modal";
import { ethers } from "ethers";
import CoinbaseWalletSDK from "@coinbase/wallet-sdk";
import { WalletConnect } from "@web3-react/walletconnect";
("@web3-react/walletconnect");

const usdtABI = [
  {
    inputs: [{ internalType: "address", name: "_owner", type: "address" }],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    constant: true,
    inputs: [],
    name: "_decimals",
    outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "_name",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "_symbol",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      { internalType: "address", name: "owner", type: "address" },
      { internalType: "address", name: "spender", type: "address" },
    ],
    name: "allowance",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      { internalType: "address", name: "spender", type: "address" },
      { internalType: "uint256", name: "amount", type: "uint256" },
    ],
    name: "approve",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [{ internalType: "address", name: "account", type: "address" }],
    name: "balanceOf",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [{ internalType: "uint256", name: "amount", type: "uint256" }],
    name: "burn",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "decimals",
    outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      { internalType: "address", name: "spender", type: "address" },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "getOwner",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      { internalType: "address", name: "spender", type: "address" },
      { internalType: "uint256", name: "addedValue", type: "uint256" },
    ],
    name: "increaseAllowance",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [{ internalType: "uint256", name: "amount", type: "uint256" }],
    name: "mint",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "name",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "owner",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [{ internalType: "address", name: "_newOwner", type: "address" }],
    name: "renounceOwnership",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "symbol",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "totalSupply",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      { internalType: "address", name: "recipient", type: "address" },
      { internalType: "uint256", name: "amount", type: "uint256" },
    ],
    name: "transfer",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      { internalType: "address", name: "sender", type: "address" },
      { internalType: "address", name: "recipient", type: "address" },
      { internalType: "uint256", name: "amount", type: "uint256" },
    ],
    name: "transferFrom",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [{ internalType: "address", name: "newOwner", type: "address" }],
    name: "transferOwnership",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
];
// const preSaleABI = [{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"constant":true,"inputs":[],"name":"_decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"_name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"_symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_newOwner","type":"address"}],"name":"renounceOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}]

const usdtAddress = "0x55d398326f99059fF775485246999027B3197955"; // Replace with Contract 1 address
const gentopAddress = "0x67Cd96b18747333f01668976bF4dF6d3f4a517c3"; // Replace with Contract 2 address
const stakingContractAddress = "0x47F564607D6aCA3e2bDeaB4e09E8133b4dB86f13"; // Replace with Contract 3 address
const preSaleContractAddress = "0xAb1e13E8A7a7d95EE8aDDC1f74aAc3CF6CccA597";

const providerOptions = {
  coinbasewallet: {
    package: CoinbaseWalletSDK,
    options: {
      appName: "Web3Model Demo",
      infuraId: { 3: "https://holesky.drpc.org" },
    },
  },
};

export default function Trade() {
  const { walletAddress, setWalletAddress, setSigner, signer } =
    useContext(WalletContext);

  const [selectedOption, setSelectedOption] = useState("1");
  const [web3Provider, setWeb3Provider] = useState(null);
  // const [walletAddress, setWalletAddress] = useState(null);
  const [usdtBalance, setUsdtBalance] = useState(null);
  const [usdtAmount, setUsdtAmount] = useState(null);

  const [transactionHash, setTransactionHash] = useState(null);
  const [contract1, setContract1] = useState(null);
  const [contract2, setContract2] = useState(null);
  const [contract3, setContract3] = useState(null);
  const [contract4, setContract4] = useState(null);

  function getSelectedRunner() {
    const runner = parseInt(selectedOption, 10);

    if (runner < 1 || runner > 3) {
      throw new Error("Invalid runner selection");
    }
    return runner;
  }

  const formatAddress = (address) => {
    return `${address.slice(0, 4)}...${address.slice(-4)}`;
  };

  async function connectWallet() {
    try {
      let web3Modal = new Web3Modal({
        cacheProvider: false,
        providerOptions,
      });

      const web3modalInstance = await web3Modal.connect();
      const web3modalProvider = new ethers.providers.Web3Provider(
        web3modalInstance
      );
      console.log(web3modalProvider);

      if (web3modalProvider) {
        provider = new ethers.providers.JsonRpcProvider(
          "https://1rpc.io/holesky"
        );
        const signer = await provider.getSigner();
        // web3modalProvider.getSigner();
        const address = await signer.getAddress();
        setWalletAddress(address);
        setWeb3Provider(web3modalProvider);
        const usdtABI = [
          {
            inputs: [
              { internalType: "address", name: "_owner", type: "address" },
            ],
            payable: false,
            stateMutability: "nonpayable",
            type: "constructor",
          },
          {
            anonymous: false,
            inputs: [
              {
                indexed: true,
                internalType: "address",
                name: "owner",
                type: "address",
              },
              {
                indexed: true,
                internalType: "address",
                name: "spender",
                type: "address",
              },
              {
                indexed: false,
                internalType: "uint256",
                name: "value",
                type: "uint256",
              },
            ],
            name: "Approval",
            type: "event",
          },
          {
            anonymous: false,
            inputs: [
              {
                indexed: true,
                internalType: "address",
                name: "previousOwner",
                type: "address",
              },
              {
                indexed: true,
                internalType: "address",
                name: "newOwner",
                type: "address",
              },
            ],
            name: "OwnershipTransferred",
            type: "event",
          },
          {
            anonymous: false,
            inputs: [
              {
                indexed: true,
                internalType: "address",
                name: "from",
                type: "address",
              },
              {
                indexed: true,
                internalType: "address",
                name: "to",
                type: "address",
              },
              {
                indexed: false,
                internalType: "uint256",
                name: "value",
                type: "uint256",
              },
            ],
            name: "Transfer",
            type: "event",
          },
          {
            constant: true,
            inputs: [],
            name: "_decimals",
            outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
            payable: false,
            stateMutability: "view",
            type: "function",
          },
          {
            constant: true,
            inputs: [],
            name: "_name",
            outputs: [{ internalType: "string", name: "", type: "string" }],
            payable: false,
            stateMutability: "view",
            type: "function",
          },
          {
            constant: true,
            inputs: [],
            name: "_symbol",
            outputs: [{ internalType: "string", name: "", type: "string" }],
            payable: false,
            stateMutability: "view",
            type: "function",
          },
          {
            constant: true,
            inputs: [
              { internalType: "address", name: "owner", type: "address" },
              { internalType: "address", name: "spender", type: "address" },
            ],
            name: "allowance",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            payable: false,
            stateMutability: "view",
            type: "function",
          },
          {
            constant: false,
            inputs: [
              { internalType: "address", name: "spender", type: "address" },
              { internalType: "uint256", name: "amount", type: "uint256" },
            ],
            name: "approve",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            payable: false,
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            constant: true,
            inputs: [
              { internalType: "address", name: "account", type: "address" },
            ],
            name: "balanceOf",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            payable: false,
            stateMutability: "view",
            type: "function",
          },
          {
            constant: false,
            inputs: [
              { internalType: "uint256", name: "amount", type: "uint256" },
            ],
            name: "burn",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            payable: false,
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            constant: true,
            inputs: [],
            name: "decimals",
            outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
            payable: false,
            stateMutability: "view",
            type: "function",
          },
          {
            constant: false,
            inputs: [
              { internalType: "address", name: "spender", type: "address" },
              {
                internalType: "uint256",
                name: "subtractedValue",
                type: "uint256",
              },
            ],
            name: "decreaseAllowance",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            payable: false,
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            constant: true,
            inputs: [],
            name: "getOwner",
            outputs: [{ internalType: "address", name: "", type: "address" }],
            payable: false,
            stateMutability: "view",
            type: "function",
          },
          {
            constant: false,
            inputs: [
              { internalType: "address", name: "spender", type: "address" },
              { internalType: "uint256", name: "addedValue", type: "uint256" },
            ],
            name: "increaseAllowance",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            payable: false,
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            constant: false,
            inputs: [
              { internalType: "uint256", name: "amount", type: "uint256" },
            ],
            name: "mint",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            payable: false,
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            constant: true,
            inputs: [],
            name: "name",
            outputs: [{ internalType: "string", name: "", type: "string" }],
            payable: false,
            stateMutability: "view",
            type: "function",
          },
          {
            constant: true,
            inputs: [],
            name: "owner",
            outputs: [{ internalType: "address", name: "", type: "address" }],
            payable: false,
            stateMutability: "view",
            type: "function",
          },
          {
            constant: false,
            inputs: [
              { internalType: "address", name: "_newOwner", type: "address" },
            ],
            name: "renounceOwnership",
            outputs: [],
            payable: false,
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            constant: true,
            inputs: [],
            name: "symbol",
            outputs: [{ internalType: "string", name: "", type: "string" }],
            payable: false,
            stateMutability: "view",
            type: "function",
          },
          {
            constant: true,
            inputs: [],
            name: "totalSupply",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            payable: false,
            stateMutability: "view",
            type: "function",
          },
          {
            constant: false,
            inputs: [
              { internalType: "address", name: "recipient", type: "address" },
              { internalType: "uint256", name: "amount", type: "uint256" },
            ],
            name: "transfer",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            payable: false,
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            constant: false,
            inputs: [
              { internalType: "address", name: "sender", type: "address" },
              { internalType: "address", name: "recipient", type: "address" },
              { internalType: "uint256", name: "amount", type: "uint256" },
            ],
            name: "transferFrom",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            payable: false,
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            constant: false,
            inputs: [
              { internalType: "address", name: "newOwner", type: "address" },
            ],
            name: "transferOwnership",
            outputs: [],
            payable: false,
            stateMutability: "nonpayable",
            type: "function",
          },
        ];

        const usdtContract = new ethers.Contract(usdtAddress, usdtABI, signer);
        const balance = await usdtContract.balanceOf(address);
        const decimals = 18;
        setUsdtBalance(ethers.utils.formatUnits(balance, decimals));
        await fetchUsdtBalance();
      }
    } catch (error) {
      console.log(error);
    }
  }
  async function fetchUsdtBalance() {
    try {
      const usdtABI = [
        {
          inputs: [
            { internalType: "address", name: "_owner", type: "address" },
          ],
          payable: false,
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "owner",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "spender",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "value",
              type: "uint256",
            },
          ],
          name: "Approval",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "previousOwner",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "newOwner",
              type: "address",
            },
          ],
          name: "OwnershipTransferred",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "from",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "to",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "value",
              type: "uint256",
            },
          ],
          name: "Transfer",
          type: "event",
        },
        {
          constant: true,
          inputs: [],
          name: "_decimals",
          outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
          payable: false,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: true,
          inputs: [],
          name: "_name",
          outputs: [{ internalType: "string", name: "", type: "string" }],
          payable: false,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: true,
          inputs: [],
          name: "_symbol",
          outputs: [{ internalType: "string", name: "", type: "string" }],
          payable: false,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: true,
          inputs: [
            { internalType: "address", name: "owner", type: "address" },
            { internalType: "address", name: "spender", type: "address" },
          ],
          name: "allowance",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          payable: false,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: false,
          inputs: [
            { internalType: "address", name: "spender", type: "address" },
            { internalType: "uint256", name: "amount", type: "uint256" },
          ],
          name: "approve",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          payable: false,
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          constant: true,
          inputs: [
            { internalType: "address", name: "account", type: "address" },
          ],
          name: "balanceOf",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          payable: false,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: false,
          inputs: [
            { internalType: "uint256", name: "amount", type: "uint256" },
          ],
          name: "burn",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          payable: false,
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          constant: true,
          inputs: [],
          name: "decimals",
          outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
          payable: false,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: false,
          inputs: [
            { internalType: "address", name: "spender", type: "address" },
            {
              internalType: "uint256",
              name: "subtractedValue",
              type: "uint256",
            },
          ],
          name: "decreaseAllowance",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          payable: false,
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          constant: true,
          inputs: [],
          name: "getOwner",
          outputs: [{ internalType: "address", name: "", type: "address" }],
          payable: false,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: false,
          inputs: [
            { internalType: "address", name: "spender", type: "address" },
            { internalType: "uint256", name: "addedValue", type: "uint256" },
          ],
          name: "increaseAllowance",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          payable: false,
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          constant: false,
          inputs: [
            { internalType: "uint256", name: "amount", type: "uint256" },
          ],
          name: "mint",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          payable: false,
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          constant: true,
          inputs: [],
          name: "name",
          outputs: [{ internalType: "string", name: "", type: "string" }],
          payable: false,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: true,
          inputs: [],
          name: "owner",
          outputs: [{ internalType: "address", name: "", type: "address" }],
          payable: false,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: false,
          inputs: [
            { internalType: "address", name: "_newOwner", type: "address" },
          ],
          name: "renounceOwnership",
          outputs: [],
          payable: false,
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          constant: true,
          inputs: [],
          name: "symbol",
          outputs: [{ internalType: "string", name: "", type: "string" }],
          payable: false,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: true,
          inputs: [],
          name: "totalSupply",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          payable: false,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: false,
          inputs: [
            { internalType: "address", name: "recipient", type: "address" },
            { internalType: "uint256", name: "amount", type: "uint256" },
          ],
          name: "transfer",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          payable: false,
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          constant: false,
          inputs: [
            { internalType: "address", name: "sender", type: "address" },
            { internalType: "address", name: "recipient", type: "address" },
            { internalType: "uint256", name: "amount", type: "uint256" },
          ],
          name: "transferFrom",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          payable: false,
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          constant: false,
          inputs: [
            { internalType: "address", name: "newOwner", type: "address" },
          ],
          name: "transferOwnership",
          outputs: [],
          payable: false,
          stateMutability: "nonpayable",
          type: "function",
        },
      ];
      setSigner(signer);
      const usdtContract = new ethers.Contract(
        "0x55d398326f99059fF775485246999027B3197955",
        [
          {
            inputs: [
              { internalType: "address", name: "_owner", type: "address" },
            ],
            payable: false,
            stateMutability: "nonpayable",
            type: "constructor",
          },
          {
            anonymous: false,
            inputs: [
              {
                indexed: true,
                internalType: "address",
                name: "owner",
                type: "address",
              },
              {
                indexed: true,
                internalType: "address",
                name: "spender",
                type: "address",
              },
              {
                indexed: false,
                internalType: "uint256",
                name: "value",
                type: "uint256",
              },
            ],
            name: "Approval",
            type: "event",
          },
          {
            anonymous: false,
            inputs: [
              {
                indexed: true,
                internalType: "address",
                name: "previousOwner",
                type: "address",
              },
              {
                indexed: true,
                internalType: "address",
                name: "newOwner",
                type: "address",
              },
            ],
            name: "OwnershipTransferred",
            type: "event",
          },
          {
            anonymous: false,
            inputs: [
              {
                indexed: true,
                internalType: "address",
                name: "from",
                type: "address",
              },
              {
                indexed: true,
                internalType: "address",
                name: "to",
                type: "address",
              },
              {
                indexed: false,
                internalType: "uint256",
                name: "value",
                type: "uint256",
              },
            ],
            name: "Transfer",
            type: "event",
          },
          {
            constant: true,
            inputs: [],
            name: "_decimals",
            outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
            payable: false,
            stateMutability: "view",
            type: "function",
          },
          {
            constant: true,
            inputs: [],
            name: "_name",
            outputs: [{ internalType: "string", name: "", type: "string" }],
            payable: false,
            stateMutability: "view",
            type: "function",
          },
          {
            constant: true,
            inputs: [],
            name: "_symbol",
            outputs: [{ internalType: "string", name: "", type: "string" }],
            payable: false,
            stateMutability: "view",
            type: "function",
          },
          {
            constant: true,
            inputs: [
              { internalType: "address", name: "owner", type: "address" },
              { internalType: "address", name: "spender", type: "address" },
            ],
            name: "allowance",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            payable: false,
            stateMutability: "view",
            type: "function",
          },
          {
            constant: false,
            inputs: [
              { internalType: "address", name: "spender", type: "address" },
              { internalType: "uint256", name: "amount", type: "uint256" },
            ],
            name: "approve",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            payable: false,
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            constant: true,
            inputs: [
              { internalType: "address", name: "account", type: "address" },
            ],
            name: "balanceOf",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            payable: false,
            stateMutability: "view",
            type: "function",
          },
          {
            constant: false,
            inputs: [
              { internalType: "uint256", name: "amount", type: "uint256" },
            ],
            name: "burn",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            payable: false,
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            constant: true,
            inputs: [],
            name: "decimals",
            outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
            payable: false,
            stateMutability: "view",
            type: "function",
          },
          {
            constant: false,
            inputs: [
              { internalType: "address", name: "spender", type: "address" },
              {
                internalType: "uint256",
                name: "subtractedValue",
                type: "uint256",
              },
            ],
            name: "decreaseAllowance",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            payable: false,
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            constant: true,
            inputs: [],
            name: "getOwner",
            outputs: [{ internalType: "address", name: "", type: "address" }],
            payable: false,
            stateMutability: "view",
            type: "function",
          },
          {
            constant: false,
            inputs: [
              { internalType: "address", name: "spender", type: "address" },
              { internalType: "uint256", name: "addedValue", type: "uint256" },
            ],
            name: "increaseAllowance",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            payable: false,
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            constant: false,
            inputs: [
              { internalType: "uint256", name: "amount", type: "uint256" },
            ],
            name: "mint",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            payable: false,
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            constant: true,
            inputs: [],
            name: "name",
            outputs: [{ internalType: "string", name: "", type: "string" }],
            payable: false,
            stateMutability: "view",
            type: "function",
          },
          {
            constant: true,
            inputs: [],
            name: "owner",
            outputs: [{ internalType: "address", name: "", type: "address" }],
            payable: false,
            stateMutability: "view",
            type: "function",
          },
          {
            constant: false,
            inputs: [
              { internalType: "address", name: "_newOwner", type: "address" },
            ],
            name: "renounceOwnership",
            outputs: [],
            payable: false,
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            constant: true,
            inputs: [],
            name: "symbol",
            outputs: [{ internalType: "string", name: "", type: "string" }],
            payable: false,
            stateMutability: "view",
            type: "function",
          },
          {
            constant: true,
            inputs: [],
            name: "totalSupply",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            payable: false,
            stateMutability: "view",
            type: "function",
          },
          {
            constant: false,
            inputs: [
              { internalType: "address", name: "recipient", type: "address" },
              { internalType: "uint256", name: "amount", type: "uint256" },
            ],
            name: "transfer",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            payable: false,
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            constant: false,
            inputs: [
              { internalType: "address", name: "sender", type: "address" },
              { internalType: "address", name: "recipient", type: "address" },
              { internalType: "uint256", name: "amount", type: "uint256" },
            ],
            name: "transferFrom",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            payable: false,
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            constant: false,
            inputs: [
              { internalType: "address", name: "newOwner", type: "address" },
            ],
            name: "transferOwnership",
            outputs: [],
            payable: false,
            stateMutability: "nonpayable",
            type: "function",
          },
        ],

        signer
      );
      const balance = await usdtContract.balanceOf(walletAddress);
      console.log(balance);
      const decimals = 18;
      setUsdtBalance(ethers.utils.formatUnits(balance, decimals));
    } catch (error) {
      console.error("Error fetching USDT balance:", error);
    }
  }
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

        // Update state with wallet details
        setWalletAddress(address);
        setWeb3Provider(web3modalProvider);

        // Fetch USDT balance right after connection
        // await fetchUsdtBalance(signer, address);
      }
    } catch (error) {
      console.log("Error connecting wallet:", error);
    }
  }

  useEffect(() => {
    if (walletAddress && signer) {
      // const signer = web3Provider.getSigner();
      console.log(
        "this signer and wallet address from UseEffect ",
        signer,
        walletAddress
      );
      setSigner(signer);
      // Fetch balance whenever walletAddress or provider changes
      //  fetchUsdtBalance(signer, walletAddress);

      // Optional: Set up polling to fetch balance periodically (e.g., every 10 seconds)
      const balanceInterval = setInterval(async () => {
        await fetchUsdtBalance();
      }, 100000); // Fetch balance every 10 seconds

      // Clean up interval when component unmounts
      return () => clearInterval(balanceInterval);
    }
  }, [walletAddress, signer]);
  function convertTo18Decimals(usdtValue) {
    const decimals = 18;
    return ethers.utils.parseUnits(usdtValue, decimals);
  }

  async function approveUSDT() {
    if (!signer || !walletAddress) {
      console.log("No provider or wallet connected");
      return;
    }

    try {
      // const signer = web3Provider.getSigner();
      const usdtABI = [
        {
          inputs: [
            { internalType: "address", name: "_owner", type: "address" },
          ],
          payable: false,
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "owner",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "spender",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "value",
              type: "uint256",
            },
          ],
          name: "Approval",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "previousOwner",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "newOwner",
              type: "address",
            },
          ],
          name: "OwnershipTransferred",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "from",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "to",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "value",
              type: "uint256",
            },
          ],
          name: "Transfer",
          type: "event",
        },
        {
          constant: true,
          inputs: [],
          name: "_decimals",
          outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
          payable: false,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: true,
          inputs: [],
          name: "_name",
          outputs: [{ internalType: "string", name: "", type: "string" }],
          payable: false,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: true,
          inputs: [],
          name: "_symbol",
          outputs: [{ internalType: "string", name: "", type: "string" }],
          payable: false,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: true,
          inputs: [
            { internalType: "address", name: "owner", type: "address" },
            { internalType: "address", name: "spender", type: "address" },
          ],
          name: "allowance",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          payable: false,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: false,
          inputs: [
            { internalType: "address", name: "spender", type: "address" },
            { internalType: "uint256", name: "amount", type: "uint256" },
          ],
          name: "approve",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          payable: false,
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          constant: true,
          inputs: [
            { internalType: "address", name: "account", type: "address" },
          ],
          name: "balanceOf",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          payable: false,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: false,
          inputs: [
            { internalType: "uint256", name: "amount", type: "uint256" },
          ],
          name: "burn",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          payable: false,
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          constant: true,
          inputs: [],
          name: "decimals",
          outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
          payable: false,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: false,
          inputs: [
            { internalType: "address", name: "spender", type: "address" },
            {
              internalType: "uint256",
              name: "subtractedValue",
              type: "uint256",
            },
          ],
          name: "decreaseAllowance",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          payable: false,
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          constant: true,
          inputs: [],
          name: "getOwner",
          outputs: [{ internalType: "address", name: "", type: "address" }],
          payable: false,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: false,
          inputs: [
            { internalType: "address", name: "spender", type: "address" },
            { internalType: "uint256", name: "addedValue", type: "uint256" },
          ],
          name: "increaseAllowance",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          payable: false,
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          constant: false,
          inputs: [
            { internalType: "uint256", name: "amount", type: "uint256" },
          ],
          name: "mint",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          payable: false,
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          constant: true,
          inputs: [],
          name: "name",
          outputs: [{ internalType: "string", name: "", type: "string" }],
          payable: false,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: true,
          inputs: [],
          name: "owner",
          outputs: [{ internalType: "address", name: "", type: "address" }],
          payable: false,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: false,
          inputs: [
            { internalType: "address", name: "_newOwner", type: "address" },
          ],
          name: "renounceOwnership",
          outputs: [],
          payable: false,
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          constant: true,
          inputs: [],
          name: "symbol",
          outputs: [{ internalType: "string", name: "", type: "string" }],
          payable: false,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: true,
          inputs: [],
          name: "totalSupply",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          payable: false,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: false,
          inputs: [
            { internalType: "address", name: "recipient", type: "address" },
            { internalType: "uint256", name: "amount", type: "uint256" },
          ],
          name: "transfer",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          payable: false,
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          constant: false,
          inputs: [
            { internalType: "address", name: "sender", type: "address" },
            { internalType: "address", name: "recipient", type: "address" },
            { internalType: "uint256", name: "amount", type: "uint256" },
          ],
          name: "transferFrom",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          payable: false,
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          constant: false,
          inputs: [
            { internalType: "address", name: "newOwner", type: "address" },
          ],
          name: "transferOwnership",
          outputs: [],
          payable: false,
          stateMutability: "nonpayable",
          type: "function",
        },
      ];
      const usdtContract = new ethers.Contract(
        "0x55d398326f99059fF775485246999027B3197955",
        [
          {
            inputs: [
              { internalType: "address", name: "_owner", type: "address" },
            ],
            payable: false,
            stateMutability: "nonpayable",
            type: "constructor",
          },
          {
            anonymous: false,
            inputs: [
              {
                indexed: true,
                internalType: "address",
                name: "owner",
                type: "address",
              },
              {
                indexed: true,
                internalType: "address",
                name: "spender",
                type: "address",
              },
              {
                indexed: false,
                internalType: "uint256",
                name: "value",
                type: "uint256",
              },
            ],
            name: "Approval",
            type: "event",
          },
          {
            anonymous: false,
            inputs: [
              {
                indexed: true,
                internalType: "address",
                name: "previousOwner",
                type: "address",
              },
              {
                indexed: true,
                internalType: "address",
                name: "newOwner",
                type: "address",
              },
            ],
            name: "OwnershipTransferred",
            type: "event",
          },
          {
            anonymous: false,
            inputs: [
              {
                indexed: true,
                internalType: "address",
                name: "from",
                type: "address",
              },
              {
                indexed: true,
                internalType: "address",
                name: "to",
                type: "address",
              },
              {
                indexed: false,
                internalType: "uint256",
                name: "value",
                type: "uint256",
              },
            ],
            name: "Transfer",
            type: "event",
          },
          {
            constant: true,
            inputs: [],
            name: "_decimals",
            outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
            payable: false,
            stateMutability: "view",
            type: "function",
          },
          {
            constant: true,
            inputs: [],
            name: "_name",
            outputs: [{ internalType: "string", name: "", type: "string" }],
            payable: false,
            stateMutability: "view",
            type: "function",
          },
          {
            constant: true,
            inputs: [],
            name: "_symbol",
            outputs: [{ internalType: "string", name: "", type: "string" }],
            payable: false,
            stateMutability: "view",
            type: "function",
          },
          {
            constant: true,
            inputs: [
              { internalType: "address", name: "owner", type: "address" },
              { internalType: "address", name: "spender", type: "address" },
            ],
            name: "allowance",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            payable: false,
            stateMutability: "view",
            type: "function",
          },
          {
            constant: false,
            inputs: [
              { internalType: "address", name: "spender", type: "address" },
              { internalType: "uint256", name: "amount", type: "uint256" },
            ],
            name: "approve",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            payable: false,
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            constant: true,
            inputs: [
              { internalType: "address", name: "account", type: "address" },
            ],
            name: "balanceOf",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            payable: false,
            stateMutability: "view",
            type: "function",
          },
          {
            constant: false,
            inputs: [
              { internalType: "uint256", name: "amount", type: "uint256" },
            ],
            name: "burn",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            payable: false,
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            constant: true,
            inputs: [],
            name: "decimals",
            outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
            payable: false,
            stateMutability: "view",
            type: "function",
          },
          {
            constant: false,
            inputs: [
              { internalType: "address", name: "spender", type: "address" },
              {
                internalType: "uint256",
                name: "subtractedValue",
                type: "uint256",
              },
            ],
            name: "decreaseAllowance",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            payable: false,
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            constant: true,
            inputs: [],
            name: "getOwner",
            outputs: [{ internalType: "address", name: "", type: "address" }],
            payable: false,
            stateMutability: "view",
            type: "function",
          },
          {
            constant: false,
            inputs: [
              { internalType: "address", name: "spender", type: "address" },
              { internalType: "uint256", name: "addedValue", type: "uint256" },
            ],
            name: "increaseAllowance",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            payable: false,
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            constant: false,
            inputs: [
              { internalType: "uint256", name: "amount", type: "uint256" },
            ],
            name: "mint",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            payable: false,
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            constant: true,
            inputs: [],
            name: "name",
            outputs: [{ internalType: "string", name: "", type: "string" }],
            payable: false,
            stateMutability: "view",
            type: "function",
          },
          {
            constant: true,
            inputs: [],
            name: "owner",
            outputs: [{ internalType: "address", name: "", type: "address" }],
            payable: false,
            stateMutability: "view",
            type: "function",
          },
          {
            constant: false,
            inputs: [
              { internalType: "address", name: "_newOwner", type: "address" },
            ],
            name: "renounceOwnership",
            outputs: [],
            payable: false,
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            constant: true,
            inputs: [],
            name: "symbol",
            outputs: [{ internalType: "string", name: "", type: "string" }],
            payable: false,
            stateMutability: "view",
            type: "function",
          },
          {
            constant: true,
            inputs: [],
            name: "totalSupply",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            payable: false,
            stateMutability: "view",
            type: "function",
          },
          {
            constant: false,
            inputs: [
              { internalType: "address", name: "recipient", type: "address" },
              { internalType: "uint256", name: "amount", type: "uint256" },
            ],
            name: "transfer",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            payable: false,
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            constant: false,
            inputs: [
              { internalType: "address", name: "sender", type: "address" },
              { internalType: "address", name: "recipient", type: "address" },
              { internalType: "uint256", name: "amount", type: "uint256" },
            ],
            name: "transferFrom",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            payable: false,
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            constant: false,
            inputs: [
              { internalType: "address", name: "newOwner", type: "address" },
            ],
            name: "transferOwnership",
            outputs: [],
            payable: false,
            stateMutability: "nonpayable",
            type: "function",
          },
        ],
        signer
      );

      const amountToApprove = ethers.utils.parseEther(usdtAmount);
      if (usdtAmount >= 10) {
        const tx = await usdtContract.approve(
          "0xAb1e13E8A7a7d95EE8aDDC1f74aAc3CF6CccA597",
          amountToApprove
        );
        console.log("Approval transaction hash:", tx.hash);
        setTransactionHash(tx.hash); // Store transaction hash

        // Wait for transaction to be confirmed
        await tx.wait();
      } else {
        alert("Value must be greater or equal to 10 ");
        setUsdtAmount("Enter USDT");
      }
    } catch (error) {
      console.log("Error approving USDT:", error);
    }
  }
  async function buyTokens() {
    if (!signer || !walletAddress || !usdtAmount) {
      console.log("No provider or wallet connected");
      return;
    }

    try {
      // const signer = web3Provider.getSigner();
      const usdtABI = [
        {
          inputs: [
            { internalType: "address", name: "_owner", type: "address" },
          ],
          payable: false,
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "owner",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "spender",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "value",
              type: "uint256",
            },
          ],
          name: "Approval",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "previousOwner",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "newOwner",
              type: "address",
            },
          ],
          name: "OwnershipTransferred",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "from",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "to",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "value",
              type: "uint256",
            },
          ],
          name: "Transfer",
          type: "event",
        },
        {
          constant: true,
          inputs: [],
          name: "_decimals",
          outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
          payable: false,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: true,
          inputs: [],
          name: "_name",
          outputs: [{ internalType: "string", name: "", type: "string" }],
          payable: false,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: true,
          inputs: [],
          name: "_symbol",
          outputs: [{ internalType: "string", name: "", type: "string" }],
          payable: false,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: true,
          inputs: [
            { internalType: "address", name: "owner", type: "address" },
            { internalType: "address", name: "spender", type: "address" },
          ],
          name: "allowance",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          payable: false,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: false,
          inputs: [
            { internalType: "address", name: "spender", type: "address" },
            { internalType: "uint256", name: "amount", type: "uint256" },
          ],
          name: "approve",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          payable: false,
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          constant: true,
          inputs: [
            { internalType: "address", name: "account", type: "address" },
          ],
          name: "balanceOf",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          payable: false,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: false,
          inputs: [
            { internalType: "uint256", name: "amount", type: "uint256" },
          ],
          name: "burn",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          payable: false,
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          constant: true,
          inputs: [],
          name: "decimals",
          outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
          payable: false,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: false,
          inputs: [
            { internalType: "address", name: "spender", type: "address" },
            {
              internalType: "uint256",
              name: "subtractedValue",
              type: "uint256",
            },
          ],
          name: "decreaseAllowance",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          payable: false,
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          constant: true,
          inputs: [],
          name: "getOwner",
          outputs: [{ internalType: "address", name: "", type: "address" }],
          payable: false,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: false,
          inputs: [
            { internalType: "address", name: "spender", type: "address" },
            { internalType: "uint256", name: "addedValue", type: "uint256" },
          ],
          name: "increaseAllowance",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          payable: false,
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          constant: false,
          inputs: [
            { internalType: "uint256", name: "amount", type: "uint256" },
          ],
          name: "mint",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          payable: false,
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          constant: true,
          inputs: [],
          name: "name",
          outputs: [{ internalType: "string", name: "", type: "string" }],
          payable: false,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: true,
          inputs: [],
          name: "owner",
          outputs: [{ internalType: "address", name: "", type: "address" }],
          payable: false,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: false,
          inputs: [
            { internalType: "address", name: "_newOwner", type: "address" },
          ],
          name: "renounceOwnership",
          outputs: [],
          payable: false,
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          constant: true,
          inputs: [],
          name: "symbol",
          outputs: [{ internalType: "string", name: "", type: "string" }],
          payable: false,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: true,
          inputs: [],
          name: "totalSupply",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          payable: false,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: false,
          inputs: [
            { internalType: "address", name: "recipient", type: "address" },
            { internalType: "uint256", name: "amount", type: "uint256" },
          ],
          name: "transfer",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          payable: false,
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          constant: false,
          inputs: [
            { internalType: "address", name: "sender", type: "address" },
            { internalType: "address", name: "recipient", type: "address" },
            { internalType: "uint256", name: "amount", type: "uint256" },
          ],
          name: "transferFrom",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          payable: false,
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          constant: false,
          inputs: [
            { internalType: "address", name: "newOwner", type: "address" },
          ],
          name: "transferOwnership",
          outputs: [],
          payable: false,
          stateMutability: "nonpayable",
          type: "function",
        },
      ];

      const usdtContract = new ethers.Contract(usdtAddress, usdtABI, signer);
      const approvedUSDT = await usdtContract.allowance(
        walletAddress,
        preSaleContractAddress
      );
      console.log("Approved USDT:", approvedUSDT);
      const preSaleABI = [
        {
          inputs: [
            {
              internalType: "contract IERC20",
              name: "__USDT",
              type: "address",
            },
            {
              internalType: "contract IERC20",
              name: "__GentTop",
              type: "address",
            },
            { internalType: "address", name: "_staking", type: "address" },
            { internalType: "address", name: "_owner", type: "address" },
            { internalType: "uint256", name: "_price", type: "uint256" },
          ],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          inputs: [
            { internalType: "uint256", name: "_usdtAmount", type: "uint256" },
            { internalType: "address", name: "_buyer", type: "address" },
            { internalType: "uint256", name: "_runner", type: "uint256" },
          ],
          name: "Buy",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "", type: "address" },
            { internalType: "uint256", name: "", type: "uint256" },
          ],
          name: "User",
          outputs: [
            { internalType: "address", name: "userAdd", type: "address" },
            { internalType: "uint256", name: "joinTime", type: "uint256" },
            { internalType: "uint256", name: "joiningAmount", type: "uint256" },
            { internalType: "uint256", name: "percenTage", type: "uint256" },
            { internalType: "uint256", name: "endTime", type: "uint256" },
            { internalType: "uint256", name: "totalReward", type: "uint256" },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "__user", type: "address" },
          ],
          name: "UserPurcahases",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "_BronzePercentage",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "_BronzePrice",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "_GentTop",
          outputs: [
            { internalType: "contract IERC20", name: "", type: "address" },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "_GoldPercentage",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "_GoldPrice",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "_SilverPercentage",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "_SilverPrice",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "_USDT",
          outputs: [
            { internalType: "contract IERC20", name: "", type: "address" },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "_bronzeSold",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "_goldSold",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "_limitSale",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "_silverSold",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "buyer",
          outputs: [{ internalType: "address", name: "", type: "address" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "userAddress", type: "address" },
            { internalType: "uint256", name: "_num", type: "uint256" },
          ],
          name: "checkCumulativeReward",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "getTotalTokenPurchased",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "_userAdd", type: "address" },
            { internalType: "uint256", name: "_num", type: "uint256" },
          ],
          name: "getUserData",
          outputs: [
            { internalType: "address", name: "", type: "address" },
            { internalType: "uint256", name: "", type: "uint256" },
            { internalType: "uint256", name: "", type: "uint256" },
            { internalType: "uint256", name: "", type: "uint256" },
            { internalType: "uint256", name: "", type: "uint256" },
            { internalType: "uint256", name: "", type: "uint256" },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "owner",
          outputs: [{ internalType: "address", name: "", type: "address" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "price",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "salesClosingTime",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "uint256", name: "_percentage", type: "uint256" },
            {
              internalType: "uint256",
              name: "_whichTypeOfPercentage",
              type: "uint256",
            },
          ],
          name: "setPercentage",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "staking",
          outputs: [{ internalType: "address", name: "", type: "address" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "totalTokenpurchased",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [{ internalType: "address", name: "", type: "address" }],
          name: "userPurcahases",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "withdrawAdmin",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
      ];
      const preSaleContract = new ethers.Contract(
        "0xAb1e13E8A7a7d95EE8aDDC1f74aAc3CF6CccA597",
        [
          {
            inputs: [
              {
                internalType: "contract IERC20",
                name: "__USDT",
                type: "address",
              },
              {
                internalType: "contract IERC20",
                name: "__GentTop",
                type: "address",
              },
              { internalType: "address", name: "_staking", type: "address" },
              { internalType: "address", name: "_owner", type: "address" },
              { internalType: "uint256", name: "_price", type: "uint256" },
            ],
            stateMutability: "nonpayable",
            type: "constructor",
          },
          {
            inputs: [
              { internalType: "uint256", name: "_usdtAmount", type: "uint256" },
              { internalType: "address", name: "_buyer", type: "address" },
              { internalType: "uint256", name: "_runner", type: "uint256" },
            ],
            name: "Buy",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "", type: "address" },
              { internalType: "uint256", name: "", type: "uint256" },
            ],
            name: "User",
            outputs: [
              { internalType: "address", name: "userAdd", type: "address" },
              { internalType: "uint256", name: "joinTime", type: "uint256" },
              {
                internalType: "uint256",
                name: "joiningAmount",
                type: "uint256",
              },
              { internalType: "uint256", name: "percenTage", type: "uint256" },
              { internalType: "uint256", name: "endTime", type: "uint256" },
              { internalType: "uint256", name: "totalReward", type: "uint256" },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "__user", type: "address" },
            ],
            name: "UserPurcahases",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "_BronzePercentage",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "_BronzePrice",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "_GentTop",
            outputs: [
              { internalType: "contract IERC20", name: "", type: "address" },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "_GoldPercentage",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "_GoldPrice",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "_SilverPercentage",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "_SilverPrice",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "_USDT",
            outputs: [
              { internalType: "contract IERC20", name: "", type: "address" },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "_bronzeSold",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "_goldSold",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "_limitSale",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "_silverSold",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "buyer",
            outputs: [{ internalType: "address", name: "", type: "address" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "userAddress", type: "address" },
              { internalType: "uint256", name: "_num", type: "uint256" },
            ],
            name: "checkCumulativeReward",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "getTotalTokenPurchased",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "_userAdd", type: "address" },
              { internalType: "uint256", name: "_num", type: "uint256" },
            ],
            name: "getUserData",
            outputs: [
              { internalType: "address", name: "", type: "address" },
              { internalType: "uint256", name: "", type: "uint256" },
              { internalType: "uint256", name: "", type: "uint256" },
              { internalType: "uint256", name: "", type: "uint256" },
              { internalType: "uint256", name: "", type: "uint256" },
              { internalType: "uint256", name: "", type: "uint256" },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "owner",
            outputs: [{ internalType: "address", name: "", type: "address" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "price",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "salesClosingTime",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "uint256", name: "_percentage", type: "uint256" },
              {
                internalType: "uint256",
                name: "_whichTypeOfPercentage",
                type: "uint256",
              },
            ],
            name: "setPercentage",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [],
            name: "staking",
            outputs: [{ internalType: "address", name: "", type: "address" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "totalTokenpurchased",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [{ internalType: "address", name: "", type: "address" }],
            name: "userPurcahases",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "withdrawAdmin",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
        ],
        signer
      );

      const amountToApprove = ethers.utils.parseEther(usdtAmount);

      console.log("amountToBuy", amountToApprove);
      const runner = selectedOption; // Replace this with the actual value if needed
      console.log("Runner option selected:", runner);

      // Call the Buy function
      const tx = await preSaleContract.Buy(
        amountToApprove,
        walletAddress,
        runner
      );
      console.log("Transaction initiated:", tx);

      // Wait for the transaction to be confirmed
      await tx.wait();
      console.log("Transaction confirmed:", tx);
      // router.push("../userDashboard");
    } catch (error) {
      console.log("Error purchasing tokens:", error.message);
    }
  }
  return (
    <div>
      <section>
        <div className=" flex flex-col items-center justify-center px-5 pt-20 sm:pt-20 mt-10 min-h-screen">
          <div className="max-w-[550px] ">
            {/* <h1 className="text-white"> Web3Modal connection</h1> */}
            <div className="text-white  ml-10  flex items-center justify-center">
              {" "}
              <button className="" onClick={connectWallet}>
                {walletAddress}
              </button>
            </div>
            <div className=" sm:gird grid-cols-1  flex items-center justify-center    border-slate-300  max-w-[360px]">
              <div className="block w-full  text-center text-white transition-all">
                Buy Your Own <b>Gentop Token</b>.
              </div>
            </div>
            <hr className=" " />
            <h1 className="text-white text-center ">
              {usdtBalance !== null && <p>USDT Balance: {usdtBalance} USDT</p>}
            </h1>
            <div className="relative flex flex-col items-center bg-[#14000b] shadow-md w-full max-w-md mx-auto rounded-xl px-6">
              <div className="max-w-md mx-auto bg-[#14000b] p-6 rounded-lg shadow-lg">
                <label
                  htmlFor="usdt"
                  className="block text-sm text-center font-medium text-white"
                >
                  Enter USDT
                </label>
                <input
                  type="number"
                  onChange={(e) => setUsdtAmount(e.target.value)} /// parse ether test
                  className="mt-2 block w-full text-center px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[#14000b] focus:border-[#14000b]"
                  placeholder="Enter amount in USDT"
                />

                <label
                  htmlFor="staking"
                  className="mt-4 block text-sm text-center font-medium text-white"
                >
                  Select Staking Option
                </label>
                <select
                  id="staking"
                  value={selectedOption}
                  className="mt-2 block w-full px-3 py-2 border text-center border-gray-300 rounded-md focus:outline-none focus:ring-[#14000b] focus:border-[#14000b]"
                  onChange={(e) => setSelectedOption(e.target.value)}
                >
                  Bronze <option value="1">Bronze</option>
                  Silver <option value="2">Silver</option>
                  Gold <option value="3">Gold</option>
                </select>

                <button
                  onClick={approveUSDT}
                  className="mt-4 w-full bg-white text-[#14000b] font-bold py-2 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
                >
                  Approve
                </button>

                <button
                  onClick={buyTokens}
                  className="mt-4 w-full bg-white text-[#14000b] font-bold py-2 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
                >
                  Buy
                </button>
                <div className="mt-4 text-center">
                  {selectedOption === "1" && (
                    <p className="text-white text-center">120 Days Staking</p>
                  )}
                  {selectedOption === "2" && (
                    <p className="text-white  text-center">90 Days Staking</p>
                  )}
                  {selectedOption === "3" && (
                    <p className="text-white  text-center">45 Days Staking</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
