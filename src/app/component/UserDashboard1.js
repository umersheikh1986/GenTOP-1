"use client";
import React, { useState, useEffect } from "react";
import { useContext } from "react";
import { WalletContext } from "../coonectWallet";
import { ethers } from "ethers";
import Web3Modal from "web3modal";
import { CoinbaseWalletSDK } from "@coinbase/wallet-sdk";
import Link from "next/link";
import Image from "next/image";

// const usdtAddress = "0x2dac9264BCb152c49fBe12cA45d84621fF91e8AA"; // Replace with Contract 1 address
// const gentopAddress = "0x67Cd96b18747333f01668976bF4dF6d3f4a517c3"; // Replace with Contract 2 address
const stakingContractAddress = "0xc94cDB70F1ec91437C5d22340d5206B4B8928482"; // Replace with Contract 3 address
const preSaleContractAddress = "0xAb1e13E8A7a7d95EE8aDDC1f74aAc3CF6CccA597";

const UserDashboard1 = () => {
  const { walletAddress, setWalletAddress, setSigner, signer } =
    useContext(WalletContext);
  const [loading, setLoading] = useState(false);

  const [totalPurchasedToken, settotalPurchasedToken] = useState(null);
  const [wa, setWA] = useState(walletAddress);

  const [No_Of_Purchases, setNo_Of_Purchases] = useState([]);
  const [EndTime, setEndTime] = useState([]);
  const [joiningTime, setJoiningTime] = useState([]);
  const [remainingTime, setremainingTime] = useState(null);
  const [purchaseArray, setPurchaseArray] = useState([]);
  const [purchaseData, setPurchaseData] = useState({});
  const [totalStakingRewardSum, setTotalStakingRewardSum] = useState(null);
  const [totalUptoDateRewardSum, setTotalUptoDateRewardSum] = useState(null);
  const [purchasedNumber, setPurchasedNumber] = useState([]);
  const [endTime, SetendTime] = useState([]);
  const [rewardStatus, setRewardStatus] = useState(null);

  // Staking contract address and ABI
  // console.log("this is endtime from UseSTate", Number(endTime));
  const contractAddress = "0xc94cDB70F1ec91437C5d22340d5206B4B8928482"; // Replace with actual staking contract address

  const preSaleContractAddress = "0xAb1e13E8A7a7d95EE8aDDC1f74aAc3CF6CccA597";

  const formatIndianNumber = (num) => {
    if (!num) return "";

    // Remove existing commas and split into integer and fractional parts
    const [integer, fraction] = num.toString().replace(/,/g, "").split(".");

    // Format the integer part with commas
    let lastThreeDigits = integer.slice(-3);
    let otherDigits = integer.slice(0, -3);

    // Add commas for every two digits in the remaining part
    otherDigits = otherDigits.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    // Combine the formatted integer part with the last three digits
    const formattedInteger = otherDigits
      ? `${otherDigits},${lastThreeDigits}`
      : lastThreeDigits;

    // Return the formatted number with fractional part if present
    return fraction ? `${formattedInteger}.${fraction}` : formattedInteger;
  };

  async function fetchStakingDetails() {
    try {
      // const provider = new ethers.providers.JsonRpcProvider();
      // const signer = provider.getSigner();
      // const walletADDRESS = walletAddress;
      setSigner(signer);
      setWalletAddress(walletAddress);

      // Define the presale contract

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
      ];

      const stakingABI = [
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
            { internalType: "address", name: "owner", type: "address" },
          ],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          inputs: [
            { internalType: "address", name: "userAddress", type: "address" },
            { internalType: "uint256", name: "_num", type: "uint256" },
          ],
          name: "GetUserData",
          outputs: [
            { internalType: "uint256", name: "", type: "uint256" },
            { internalType: "uint256", name: "", type: "uint256" },
            { internalType: "uint256", name: "", type: "uint256" },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "SECONDS_IN_A_DAY",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "STAKING_120_DAYS",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "STAKING_45_DAYS",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "STAKING_90_DAYS",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "userAddress", type: "address" },
            { internalType: "uint256", name: "_num", type: "uint256" },
          ],
          name: "WithdrawReward",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "_preSale",
          outputs: [
            { internalType: "contract IpreSale", name: "", type: "address" },
          ],
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
          name: "checkGentTopBalance",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "__preSale", type: "address" },
          ],
          name: "setPreSale",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "totalRewardsGiven",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [{ internalType: "address", name: "", type: "address" }],
          name: "userDatas",
          outputs: [
            { internalType: "address", name: "userAddress", type: "address" },
            { internalType: "uint256", name: "joinTime", type: "uint256" },
            {
              internalType: "uint256",
              name: "joiningAmount",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "stakingSeconds",
              type: "uint256",
            },
          ],
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
          inputs: [
            { internalType: "address", name: "", type: "address" },
            { internalType: "uint256", name: "", type: "uint256" },
          ],
          name: "userPurcahasesS",
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

      // Provide the actual ABI here
      const contract1 = new ethers.Contract(
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

      // Fetch the number of purchases
      const No_Of_Purchases = await contract1.UserPurcahases(walletAddress);
      const numPurchases = Number(No_Of_Purchases);
      // console.log("Number of purchases:", numPurchases);
      // if (numPurchases === "0") {
      //   numPurchases = 1;
      // }
      const purchases = Array.from(
        { length: numPurchases },
        (_, index) => index + 1
      );
      setPurchaseArray(purchases);

      const contract = new ethers.Contract(
        "0xc94cDB70F1ec91437C5d22340d5206B4B8928482",
        stakingABI,
        signer
      );

      // console.log("Staking Contract:", walletAddress, contract);

      const purchaseData = {};
      let totalStakingRewardSum = 0;
      let totalUptoDateRewardSum = 0; // Sum of up-to-date rewards

      const getTotalGentopBalance = await contract1.getTotalTokenPurchased();
      console.log(
        "this is total token Purchased",
        Number(getTotalGentopBalance)
      );
      const totalPurchasedToken = Number(getTotalGentopBalance);

      for (let i = 1; i <= numPurchases; i++) {
        // const statusOfReward = await contract.userPurchasesS(walletAddress, i);
        const [userAdd, JoinTime, JoiningAmount, Percenatge] =
          await contract1.getUserData(walletAddress, i);
        // console.log(
        //   "This is joining Amount from fetching Details function",
        //   Number(JoiningAmount)
        // );
        const [joinTime, EndTime, totalReward] = await contract.GetUserData(
          walletAddress,
          i
        );

        const statusOfReward = await contract.userPurcahasesS(walletAddress, i); // Fetch reward status
        // console.log("This is status of reward", Number(statusOfReward));
        const ENDTIME = Number(EndTime);
        // const currentRewards = await contract.checkCumulativeReward(
        //   walletAddress,
        //   i
        // );
        // const currentRewards = JoiningAmount;
        // const isRewardClaimed = statusOfReward; // Assuming statusOfReward returns true/false

        const stakingReward = totalReward / 1e18; // Convert reward from wei
        const uptoDateReward = Number(JoiningAmount / 1e18);
        // console.log(
        //   "This is stored value of joining Amount in ",
        //   uptoDateReward
        // );
        totalStakingRewardSum += stakingReward; // Add to the sum
        totalUptoDateRewardSum += uptoDateReward; // Add to up-to-date rewards sum
        // Determine the plan based on `endTime`
        let plan;
        if (ENDTIME === 10368000) {
          plan = "Bronze";
        } else if (ENDTIME === 7776000) {
          plan = "Silver";
        } else if (ENDTIME === 3888000) {
          plan = "Gold";
        } else {
          plan = "Unknown"; // Fallback for unexpected `endTime` values
        }
        let rewardStatuses;
        if (statusOfReward == 2) {
          rewardStatuses = 2;
        } else if (statusOfReward == 0) {
          rewardStatuses = 0;
        }

        // Calculate time remaining
        const now = new Date().getTime();
        const endTime = (Number(EndTime) + Number(joinTime)) * 1000;
        const distance = endTime - now;

        let remainingTime = "Completed"; // Default status if time has passed
        if (distance > 0) {
          const days = Math.floor(distance / (1000 * 60 * 60 * 24));
          const hours = Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          );
          const minutes = Math.floor(
            (distance % (1000 * 60 * 60)) / (1000 * 60)
          );
          const seconds = Math.floor((distance % (1000 * 60)) / 1000);
          remainingTime = `${days}d ${hours}h ${minutes}m ${seconds}s`;
        }

        purchaseData[i] = {
          joiningDate: new Date(Number(joinTime) * 1000).toLocaleString(),
          stacking: formatIndianNumber((totalReward / 1e18).toFixed(2)),
          uptoDateRewards: formatIndianNumber(uptoDateReward),
          plan,
          status: distance <= 0 ? "Completed" : remainingTime,
          remainingTime,
          rewardStatuses,
        };
      }

      setPurchaseData(purchaseData); // Save all purchase details to state
      setTotalStakingRewardSum(
        formatIndianNumber(totalStakingRewardSum.toFixed(2))
      ); // Save sum in state
      setTotalUptoDateRewardSum(
        formatIndianNumber(totalUptoDateRewardSum.toFixed(2))
      ); // Save up-to-date rewards sum in state
      settotalPurchasedToken(
        formatIndianNumber((totalPurchasedToken / 1e18).toFixed(2))
      );

      setLoading(false);
    } catch (error) {
      console.error("Error fetching staking details:", error);
    }
  }

  useEffect(() => {
    const updateCountdown = async () => {
      if (!walletAddress || !signer) {
        console.log("Execution stopped: Wallet address or signer is null.");
        return; // Stop further execution
      }
      await fetchStakingDetails();
      // await withdrawReward();
      // console.log(`from useEffect : => ${signer}`);

      // const preSaleABI = [
      //   {
      //     inputs: [
      //       {
      //         internalType: "contract IERC20",
      //         name: "__USDT",
      //         type: "address",
      //       },
      //       {
      //         internalType: "contract IERC20",
      //         name: "__GentTop",
      //         type: "address",
      //       },
      //       { internalType: "address", name: "_staking", type: "address" },
      //       { internalType: "address", name: "_owner", type: "address" },
      //       { internalType: "uint256", name: "_price", type: "uint256" },
      //     ],
      //     stateMutability: "nonpayable",
      //     type: "constructor",
      //   },
      //   {
      //     inputs: [
      //       { internalType: "uint256", name: "_usdtAmount", type: "uint256" },
      //       { internalType: "address", name: "_buyer", type: "address" },
      //       { internalType: "uint256", name: "_runner", type: "uint256" },
      //     ],
      //     name: "Buy",
      //     outputs: [],
      //     stateMutability: "nonpayable",
      //     type: "function",
      //   },
      //   {
      //     inputs: [
      //       { internalType: "address", name: "", type: "address" },
      //       { internalType: "uint256", name: "", type: "uint256" },
      //     ],
      //     name: "User",
      //     outputs: [
      //       { internalType: "address", name: "userAdd", type: "address" },
      //       { internalType: "uint256", name: "joinTime", type: "uint256" },
      //       { internalType: "uint256", name: "joiningAmount", type: "uint256" },
      //       { internalType: "uint256", name: "percenTage", type: "uint256" },
      //       { internalType: "uint256", name: "endTime", type: "uint256" },
      //       { internalType: "uint256", name: "totalReward", type: "uint256" },
      //     ],
      //     stateMutability: "view",
      //     type: "function",
      //   },
      //   {
      //     inputs: [
      //       { internalType: "address", name: "__user", type: "address" },
      //     ],
      //     name: "UserPurcahases",
      //     outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      //     stateMutability: "view",
      //     type: "function",
      //   },
      //   {
      //     inputs: [],
      //     name: "_BronzePercentage",
      //     outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      //     stateMutability: "view",
      //     type: "function",
      //   },
      //   {
      //     inputs: [],
      //     name: "_BronzePrice",
      //     outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      //     stateMutability: "view",
      //     type: "function",
      //   },
      //   {
      //     inputs: [],
      //     name: "_GentTop",
      //     outputs: [
      //       { internalType: "contract IERC20", name: "", type: "address" },
      //     ],
      //     stateMutability: "view",
      //     type: "function",
      //   },
      //   {
      //     inputs: [],
      //     name: "_GoldPercentage",
      //     outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      //     stateMutability: "view",
      //     type: "function",
      //   },
      //   {
      //     inputs: [],
      //     name: "_GoldPrice",
      //     outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      //     stateMutability: "view",
      //     type: "function",
      //   },
      //   {
      //     inputs: [],
      //     name: "_SilverPercentage",
      //     outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      //     stateMutability: "view",
      //     type: "function",
      //   },
      //   {
      //     inputs: [],
      //     name: "_SilverPrice",
      //     outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      //     stateMutability: "view",
      //     type: "function",
      //   },
      //   {
      //     inputs: [],
      //     name: "_USDT",
      //     outputs: [
      //       { internalType: "contract IERC20", name: "", type: "address" },
      //     ],
      //     stateMutability: "view",
      //     type: "function",
      //   },
      //   {
      //     inputs: [],
      //     name: "_bronzeSold",
      //     outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      //     stateMutability: "view",
      //     type: "function",
      //   },
      //   {
      //     inputs: [],
      //     name: "_goldSold",
      //     outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      //     stateMutability: "view",
      //     type: "function",
      //   },
      //   {
      //     inputs: [],
      //     name: "_limitSale",
      //     outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      //     stateMutability: "view",
      //     type: "function",
      //   },
      //   {
      //     inputs: [],
      //     name: "_silverSold",
      //     outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      //     stateMutability: "view",
      //     type: "function",
      //   },
      //   {
      //     inputs: [],
      //     name: "buyer",
      //     outputs: [{ internalType: "address", name: "", type: "address" }],
      //     stateMutability: "view",
      //     type: "function",
      //   },
      //   {
      //     inputs: [
      //       { internalType: "address", name: "userAddress", type: "address" },
      //       { internalType: "uint256", name: "_num", type: "uint256" },
      //     ],
      //     name: "checkCumulativeReward",
      //     outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      //     stateMutability: "view",
      //     type: "function",
      //   },
      //   {
      //     inputs: [],
      //     name: "getTotalTokenPurchased",
      //     outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      //     stateMutability: "view",
      //     type: "function",
      //   },
      //   {
      //     inputs: [
      //       { internalType: "address", name: "_userAdd", type: "address" },
      //       { internalType: "uint256", name: "_num", type: "uint256" },
      //     ],
      //     name: "getUserData",
      //     outputs: [
      //       { internalType: "address", name: "", type: "address" },
      //       { internalType: "uint256", name: "", type: "uint256" },
      //       { internalType: "uint256", name: "", type: "uint256" },
      //       { internalType: "uint256", name: "", type: "uint256" },
      //       { internalType: "uint256", name: "", type: "uint256" },
      //       { internalType: "uint256", name: "", type: "uint256" },
      //     ],
      //     stateMutability: "view",
      //     type: "function",
      //   },
      //   {
      //     inputs: [],
      //     name: "owner",
      //     outputs: [{ internalType: "address", name: "", type: "address" }],
      //     stateMutability: "view",
      //     type: "function",
      //   },
      //   {
      //     inputs: [],
      //     name: "price",
      //     outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      //     stateMutability: "view",
      //     type: "function",
      //   },
      //   {
      //     inputs: [],
      //     name: "salesClosingTime",
      //     outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      //     stateMutability: "view",
      //     type: "function",
      //   },
      //   {
      //     inputs: [
      //       { internalType: "uint256", name: "_percentage", type: "uint256" },
      //       {
      //         internalType: "uint256",
      //         name: "_whichTypeOfPercentage",
      //         type: "uint256",
      //       },
      //     ],
      //     name: "setPercentage",
      //     outputs: [],
      //     stateMutability: "nonpayable",
      //     type: "function",
      //   },
      //   {
      //     inputs: [],
      //     name: "staking",
      //     outputs: [{ internalType: "address", name: "", type: "address" }],
      //     stateMutability: "view",
      //     type: "function",
      //   },
      //   {
      //     inputs: [],
      //     name: "totalTokenpurchased",
      //     outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      //     stateMutability: "view",
      //     type: "function",
      //   },
      //   {
      //     inputs: [{ internalType: "address", name: "", type: "address" }],
      //     name: "userPurcahases",
      //     outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      //     stateMutability: "view",
      //     type: "function",
      //   },
      //   {
      //     inputs: [],
      //     name: "withdrawAdmin",
      //     outputs: [],
      //     stateMutability: "nonpayable",
      //     type: "function",
      //   },
      // ];
      // const contract1 = new ethers.Contract(
      //   "0xAb1e13E8A7a7d95EE8aDDC1f74aAc3CF6CccA597",
      //   preSaleABI,
      //   signer
      // );
      // const No_Of_Purchases = await contract1.UserPurcahases(walletAddress);
      // const numPurchases = Number(No_Of_Purchases);
      // const purchases = Array.from(
      //   { length: numPurchases },
      //   (_, index) => index + 1
      // );

      // const stakingAbi = [
      //   {
      //     inputs: [
      //       {
      //         internalType: "contract IERC20",
      //         name: "__USDT",
      //         type: "address",
      //       },
      //       {
      //         internalType: "contract IERC20",
      //         name: "__GentTop",
      //         type: "address",
      //       },
      //       { internalType: "address", name: "owner", type: "address" },
      //     ],
      //     stateMutability: "nonpayable",
      //     type: "constructor",
      //   },
      //   {
      //     inputs: [
      //       { internalType: "address", name: "userAddress", type: "address" },
      //       { internalType: "uint256", name: "_num", type: "uint256" },
      //     ],
      //     name: "GetUserData",
      //     outputs: [
      //       { internalType: "uint256", name: "", type: "uint256" },
      //       { internalType: "uint256", name: "", type: "uint256" },
      //       { internalType: "uint256", name: "", type: "uint256" },
      //     ],
      //     stateMutability: "view",
      //     type: "function",
      //   },
      //   {
      //     inputs: [],
      //     name: "SECONDS_IN_A_DAY",
      //     outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      //     stateMutability: "view",
      //     type: "function",
      //   },
      //   {
      //     inputs: [],
      //     name: "STAKING_120_DAYS",
      //     outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      //     stateMutability: "view",
      //     type: "function",
      //   },
      //   {
      //     inputs: [],
      //     name: "STAKING_45_DAYS",
      //     outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      //     stateMutability: "view",
      //     type: "function",
      //   },
      //   {
      //     inputs: [],
      //     name: "STAKING_90_DAYS",
      //     outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      //     stateMutability: "view",
      //     type: "function",
      //   },
      //   {
      //     inputs: [
      //       { internalType: "address", name: "userAddress", type: "address" },
      //       { internalType: "uint256", name: "_num", type: "uint256" },
      //     ],
      //     name: "WithdrawReward",
      //     outputs: [],
      //     stateMutability: "nonpayable",
      //     type: "function",
      //   },
      //   {
      //     inputs: [],
      //     name: "_preSale",
      //     outputs: [
      //       { internalType: "contract IpreSale", name: "", type: "address" },
      //     ],
      //     stateMutability: "view",
      //     type: "function",
      //   },
      //   {
      //     inputs: [
      //       { internalType: "address", name: "userAddress", type: "address" },
      //       { internalType: "uint256", name: "_num", type: "uint256" },
      //     ],
      //     name: "checkCumulativeReward",
      //     outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      //     stateMutability: "view",
      //     type: "function",
      //   },
      //   {
      //     inputs: [],
      //     name: "checkGentTopBalance",
      //     outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      //     stateMutability: "view",
      //     type: "function",
      //   },
      //   {
      //     inputs: [
      //       { internalType: "address", name: "__preSale", type: "address" },
      //     ],
      //     name: "setPreSale",
      //     outputs: [],
      //     stateMutability: "nonpayable",
      //     type: "function",
      //   },
      //   {
      //     inputs: [],
      //     name: "totalRewardsGiven",
      //     outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      //     stateMutability: "view",
      //     type: "function",
      //   },
      //   {
      //     inputs: [{ internalType: "address", name: "", type: "address" }],
      //     name: "userDatas",
      //     outputs: [
      //       { internalType: "address", name: "userAddress", type: "address" },
      //       { internalType: "uint256", name: "joinTime", type: "uint256" },
      //       { internalType: "uint256", name: "joiningAmount", type: "uint256" },
      //       {
      //         internalType: "uint256",
      //         name: "stakingSeconds",
      //         type: "uint256",
      //       },
      //     ],
      //     stateMutability: "view",
      //     type: "function",
      //   },
      //   {
      //     inputs: [{ internalType: "address", name: "", type: "address" }],
      //     name: "userPurcahases",
      //     outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      //     stateMutability: "view",
      //     type: "function",
      //   },
      //   {
      //     inputs: [
      //       { internalType: "address", name: "", type: "address" },
      //       { internalType: "uint256", name: "", type: "uint256" },
      //     ],
      //     name: "userPurcahasesS",
      //     outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      //     stateMutability: "view",
      //     type: "function",
      //   },
      //   {
      //     inputs: [],
      //     name: "withdrawAdmin",
      //     outputs: [],
      //     stateMutability: "nonpayable",
      //     type: "function",
      //   },
      // ];

      // const contract = new ethers.Contract(contractAddress, stakingAbi, signer);
      // const totalStakingRewardss = await contract.GetUserData(
      //   walletAddress,
      //   numPurchases
      // );

      // console.log("this is User data", totalStakingRewardss);
      // const [joinTime, EndTime, totalReward] = totalStakingRewardss;

      // console.log("This is Joining Time from smart contract", Number(joinTime));
      // console.log(
      //   "this is End Time from smart Contract  ",
      //   Number(EndTime) + Number(joinTime)
      // );
      // console.log(
      //   "this is value at 3rd index of object at Userdata",
      //   Number(totalReward)
      // );
      const now = new Date().getTime();
      console.log(now);
      const endTime1 = 1763189959 * 1000;
      const endTime = (Number(EndTime) + Number(endTime1)) * 1000;
      const distance = endTime - now;
      console.log("this difference of time", distance, now, endTime);
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      console.log(`${days}d ${hours}h ${minutes}m ${seconds}s`);

      setremainingTime(`${days} D, ${hours} H, ${minutes} M, ${seconds} S`);

      if (distance < 0) {
        clearInterval(interval);
        setremainingTime("Now you can witdraw your Reward");
      }
    };

    // Update the countdown every second
    const interval = setInterval(updateCountdown, 1000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(interval);
  }, [walletAddress, signer]);

  useEffect(() => {
    const interval = setInterval(async () => {
      const endTime = await updateCountdown();
    }, 1000);

    return clearInterval(interval);
  }, [endTime]);

  function shortenAddress(address) {
    if (!address) return "";
    return `${address.slice(0, 9)}...${address.slice(-4)}`;
  }
  return (
    <div>
      <div className="flex flex-col md:flex-row pt-5 sm:pt-20  min-h-screen text-white   space-x-5">
        {/* Left Side: Connect Wallet Button */}
        <div className=" md:w-1/4 p-10 shadow-md rounded-lg">
          <h2 className="text-xl font-semibold mb-6">User Dashboard</h2>
          <div className="   font-bold text-white rounded-md border-2 border-white text-lg">
            <p className="text-center">Your Address</p>
            <p className="text-center">
              {" "}
              {walletAddress ? shortenAddress(walletAddress) : ""}
            </p>
          </div>
          <div className=" mt-5  font-bold text-white rounded-md border-2 border-white text-lg">
            <p className="text-center">Total Gentop Staked</p>
            <p className="text-center"> {totalUptoDateRewardSum} </p>
          </div>
          <div className=" mt-5  font-bold text-white rounded-md border-2 border-white text-lg">
            <p className="text-center">Total Rewards</p>
            <p className="text-center"> {totalStakingRewardSum}</p>
          </div>
          <div className=" mt-5  font-bold text-white rounded-md border-2 border-white text-lg">
            <p className="text-center">Total Token Purchased </p>
            <p className="text-center"> {totalPurchasedToken}</p>
          </div>
          {loading ? (
            <p>Loading purchases...</p>
          ) : (
            <div className="text-black"></div>
          )}
          {/* <button
            onClick={withdrawReward} // Pass amount if applicable
            className="w-full p-3 mt-4 bg-[#97833d] border-2 border-white font-bold text-white rounded-md text-lg"
          >
            Withdrawal
          </button> */}
        </div>

        {/* Right Side: Address Information Table */}

        <div className="w-full md:w-2/3 p-10 shadow-md rounded-lg">
          <h2 className="text-xl font-semibold mb-6">Address Information</h2>

          {/* Show loading, wallet connection status, or data */}
          {loading ? (
            <p className="text-yellow-500">Loading...</p>
          ) : !walletAddress ? (
            <p className="text-red-500 text-lg">
              Please connect your wallet to view staking data.
            </p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-auto table-auto border-collapse border border-gray-300 text-xl">
                <thead>
                  <tr className="bg-[#2C0219]">
                    <th className="border px-2 text-[#9168BF]">#</th>
                    <th className="border px-8 py-8 text-[#9168BF]">
                      Joining Date
                    </th>
                    <th className="border px-8 py-8 text-[#9168BF]">Staking</th>
                    <th className="border px-8 py-8 text-[#9168BF]">
                      Total Reward
                    </th>
                    <th className="border px-8 py-8 text-[#9168BF]">Plan</th>
                    <th className="border px-8 py-8 text-[#9168BF]">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {Object.keys(purchaseData).length > 0 ? (
                    Object.entries(purchaseData).map(([key, data]) => (
                      <tr key={key}>
                        <td className="border px-8 py-4  text-[#F7CE3C] font-bold">
                          {key}
                        </td>
                        <td className="border px-10 py-4  text-[#F7CE3C] font-bold">
                          {data.joiningDate ? data.joiningDate : "0"}
                        </td>
                        <td className="border px-20 py-4  text-[#F7CE3C] font-bold">
                          {data.uptoDateRewards
                            ? `${data.uptoDateRewards}`
                            : "0"}
                        </td>
                        <td className="border px-10 py-4 text-[#F7CE3C] font-bold">
                          {data.stacking ? `${data.stacking}` : "0"}
                        </td>
                        <td className="border px-10 py-4 text-[#F7CE3C]">
                          {data.plan ? `${data.plan}` : "No Plan"}
                        </td>
                        <td className="border px-10 py-4 text-[#F7CE3C] font-bold">
                          {data.status
                            ? data.status === "Completed"
                              ? (console.log(
                                  "Reward Status: ",
                                  data.rewardStatuses
                                ), // Debugging log
                                data.rewardStatuses === 0 ? ( // If rewardStatuses is 0, show the Withdraw button
                                  // If rewardStatuses is 0, show the Withdraw button
                                  <button
                                    onClick={async () => {
                                      // withdrawReward(key)
                                      const contract = new ethers.Contract(
                                        contractAddress,
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
                                              {
                                                internalType: "address",
                                                name: "owner",
                                                type: "address",
                                              },
                                            ],
                                            stateMutability: "nonpayable",
                                            type: "constructor",
                                          },
                                          {
                                            inputs: [
                                              {
                                                internalType: "address",
                                                name: "userAddress",
                                                type: "address",
                                              },
                                              {
                                                internalType: "uint256",
                                                name: "_num",
                                                type: "uint256",
                                              },
                                            ],
                                            name: "GetUserData",
                                            outputs: [
                                              {
                                                internalType: "uint256",
                                                name: "",
                                                type: "uint256",
                                              },
                                              {
                                                internalType: "uint256",
                                                name: "",
                                                type: "uint256",
                                              },
                                              {
                                                internalType: "uint256",
                                                name: "",
                                                type: "uint256",
                                              },
                                            ],
                                            stateMutability: "view",
                                            type: "function",
                                          },
                                          {
                                            inputs: [],
                                            name: "SECONDS_IN_A_DAY",
                                            outputs: [
                                              {
                                                internalType: "uint256",
                                                name: "",
                                                type: "uint256",
                                              },
                                            ],
                                            stateMutability: "view",
                                            type: "function",
                                          },
                                          {
                                            inputs: [],
                                            name: "STAKING_120_DAYS",
                                            outputs: [
                                              {
                                                internalType: "uint256",
                                                name: "",
                                                type: "uint256",
                                              },
                                            ],
                                            stateMutability: "view",
                                            type: "function",
                                          },
                                          {
                                            inputs: [],
                                            name: "STAKING_45_DAYS",
                                            outputs: [
                                              {
                                                internalType: "uint256",
                                                name: "",
                                                type: "uint256",
                                              },
                                            ],
                                            stateMutability: "view",
                                            type: "function",
                                          },
                                          {
                                            inputs: [],
                                            name: "STAKING_90_DAYS",
                                            outputs: [
                                              {
                                                internalType: "uint256",
                                                name: "",
                                                type: "uint256",
                                              },
                                            ],
                                            stateMutability: "view",
                                            type: "function",
                                          },
                                          {
                                            inputs: [
                                              {
                                                internalType: "address",
                                                name: "userAddress",
                                                type: "address",
                                              },
                                              {
                                                internalType: "uint256",
                                                name: "_num",
                                                type: "uint256",
                                              },
                                            ],
                                            name: "WithdrawReward",
                                            outputs: [],
                                            stateMutability: "nonpayable",
                                            type: "function",
                                          },
                                          {
                                            inputs: [],
                                            name: "_preSale",
                                            outputs: [
                                              {
                                                internalType:
                                                  "contract IpreSale",
                                                name: "",
                                                type: "address",
                                              },
                                            ],
                                            stateMutability: "view",
                                            type: "function",
                                          },
                                          {
                                            inputs: [
                                              {
                                                internalType: "address",
                                                name: "userAddress",
                                                type: "address",
                                              },
                                              {
                                                internalType: "uint256",
                                                name: "_num",
                                                type: "uint256",
                                              },
                                            ],
                                            name: "checkCumulativeReward",
                                            outputs: [
                                              {
                                                internalType: "uint256",
                                                name: "",
                                                type: "uint256",
                                              },
                                            ],
                                            stateMutability: "view",
                                            type: "function",
                                          },
                                          {
                                            inputs: [],
                                            name: "checkGentTopBalance",
                                            outputs: [
                                              {
                                                internalType: "uint256",
                                                name: "",
                                                type: "uint256",
                                              },
                                            ],
                                            stateMutability: "view",
                                            type: "function",
                                          },
                                          {
                                            inputs: [
                                              {
                                                internalType: "address",
                                                name: "__preSale",
                                                type: "address",
                                              },
                                            ],
                                            name: "setPreSale",
                                            outputs: [],
                                            stateMutability: "nonpayable",
                                            type: "function",
                                          },
                                          {
                                            inputs: [],
                                            name: "totalRewardsGiven",
                                            outputs: [
                                              {
                                                internalType: "uint256",
                                                name: "",
                                                type: "uint256",
                                              },
                                            ],
                                            stateMutability: "view",
                                            type: "function",
                                          },
                                          {
                                            inputs: [
                                              {
                                                internalType: "address",
                                                name: "",
                                                type: "address",
                                              },
                                            ],
                                            name: "userDatas",
                                            outputs: [
                                              {
                                                internalType: "address",
                                                name: "userAddress",
                                                type: "address",
                                              },
                                              {
                                                internalType: "uint256",
                                                name: "joinTime",
                                                type: "uint256",
                                              },
                                              {
                                                internalType: "uint256",
                                                name: "joiningAmount",
                                                type: "uint256",
                                              },
                                              {
                                                internalType: "uint256",
                                                name: "stakingSeconds",
                                                type: "uint256",
                                              },
                                            ],
                                            stateMutability: "view",
                                            type: "function",
                                          },
                                          {
                                            inputs: [
                                              {
                                                internalType: "address",
                                                name: "",
                                                type: "address",
                                              },
                                            ],
                                            name: "userPurcahases",
                                            outputs: [
                                              {
                                                internalType: "uint256",
                                                name: "",
                                                type: "uint256",
                                              },
                                            ],
                                            stateMutability: "view",
                                            type: "function",
                                          },
                                          {
                                            inputs: [
                                              {
                                                internalType: "address",
                                                name: "",
                                                type: "address",
                                              },
                                              {
                                                internalType: "uint256",
                                                name: "",
                                                type: "uint256",
                                              },
                                            ],
                                            name: "userPurcahasesS",
                                            outputs: [
                                              {
                                                internalType: "uint256",
                                                name: "",
                                                type: "uint256",
                                              },
                                            ],
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
                                      console.log(
                                        "this is number of PurChases",
                                        key,
                                        walletAddress,
                                        signer
                                      );
                                      // Call the WithdrawReward function from the contract
                                      const tx = await contract.WithdrawReward(
                                        walletAddress,
                                        key,
                                        { gasLimit: 500000 }
                                      );
                                      console.log("this is reward ", tx);
                                      // Wait for transaction to be mined
                                      // const StatusOFReward =
                                      //   await contract.userPurcahasesS(
                                      //     walletAddress,
                                      //     key
                                      //   );

                                      // console.log(
                                      //   "this is status of reward claimed ",
                                      //   StatusOFReward
                                      // );
                                      // await tx.wait();

                                      console.log(
                                        "Reward withdrawn successfully!"
                                      );

                                      // setRewardStatus("Reward Claimed");
                                    }}
                                    className="bg-[#97833d] text-white font-bold py-2 px-4 rounded"
                                  >
                                    Withdraw
                                  </button>
                                ) : data.rewardStatuses === 2 ? ( // If rewardStatuses is 2, show "Closed"
                                  "Closed"
                                ) : null)
                              : data.status
                            : "No Data Found"}
                        </td>
                        {/* <td className="border px-10 py-4 text-[#F7CE3C] font-bold">
                          {" "}
                          {data.rewardStatuses}
                        </td> */}
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td className="border px-8 py-4 text-[#F7CE3C] text-center font-bold">
                        0
                      </td>
                      <td className="border px-10 py-4 text-[#F7CE3C] text-center font-bold">
                        0
                      </td>
                      <td className="border px-20 py-4 text-[#F7CE3C] text-center font-bold">
                        0
                      </td>
                      <td className="border px-10 py-4 text-[#F7CE3C] text-center font-bold">
                        0
                      </td>
                      <td className="border px-10 py-4 text-[#F7CE3C] text-center font-bold">
                        No Plan
                      </td>
                      <td className="border px-10 py-4 text-[#F7CE3C] text-center font-bold">
                        No Status
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserDashboard1;
