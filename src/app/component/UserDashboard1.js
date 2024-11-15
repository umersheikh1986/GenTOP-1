"use client";
import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import Web3Modal from "web3modal";
import { CoinbaseWalletSDK } from "@coinbase/wallet-sdk";

// Set up provider options
const providerOptions = {
  coinbasewallet: {
    package: CoinbaseWalletSDK,
    options: {
      appName: "Web3Modal Demo",
      infuraId: "https://rpc.testnet.fantom.network", // Replace with the correct RPC URL if needed
    },
  },
};

const UDashboard = () => {
  const [walletAddress, setWalletAddress] = useState(null);
  // console.log("this is Wallet Address", walletAddress);
  const [details, setDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const [gentTopBalance, setGentTopBalance] = useState(null);

  const [signer, setSigner] = useState([]);
  console.log("this is signer from state", signer);
  // const [daysLeft, setDaysleft] = useState(null);
  // const [Selectoptions, setSelectoptions] = useState(null);
  const [currentReward, setCurrentReward] = useState(null);
  //  const [timeRemaining, setTimeRemaining] = useState("");
  const [No_Of_Purchases, setNo_Of_Purchases] = useState(null);
  const [EndTime, setEndTime] = useState(null);
  const [remainingTime, setremainingTime] = useState(null);
  const [purchaseArray, setPurchaseArray] = useState([]);
  const [totalStakingRewards, setTotalStakingRewards] = useState(null);

  const [withdrawalLoading, setWithdrawalLoading] = useState(false);
  const [withdrawalSuccess, setWithdrawalSuccess] = useState(null);
  const [endTime, SetendTime] = useState(null);
  // Staking contract address and ABI
  console.log("this is endtime from UseSTate", Number(endTime));
  const contractAddress = "0x8507B64F49CF48e6c90d10AB4E33F6e468573EbF"; // Replace with actual staking contract address
  const stakingAbi = [
    {
      inputs: [
        { internalType: "contract IERC20", name: "__USDT", type: "address" },
        { internalType: "contract IERC20", name: "__GentTop", type: "address" },
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
      inputs: [{ internalType: "address", name: "__preSale", type: "address" }],
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
        { internalType: "uint256", name: "joiningAmount", type: "uint256" },
        { internalType: "uint256", name: "stakingSeconds", type: "uint256" },
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
  const preSaleContractAddress = "0xCFee3B5AeE20c50A713bc5D7cFc10305e805AB30";

  // Fetch staking data using the wallet address
  const fetchStakingDetails = async (walletAddress, signer) => {
    try {
      const contract = new ethers.Contract(contractAddress, stakingAbi, signer);
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
      const contract1 = new ethers.Contract(
        preSaleContractAddress,
        preSaleABI,
        signer
      );

      const No_Of_Purchases = await contract1.UserPurcahases(walletAddress);

      const numPurchases = Number(No_Of_Purchases);
      const purchases = Array.from(
        { length: numPurchases },
        (_, index) => index + 1
      );

      setPurchaseArray(purchases); // Update state with the purchases array
      setLoading(false);
      // console.log(num);
      const currentRewards = await contract.checkCumulativeReward(
        walletAddress,
        numPurchases
      );
      console.log("This is Current Reward", Number(currentRewards));

      // Fetch user data, including staking seconds and joining amount
      const totalStakingRewardss = await contract.GetUserData(
        walletAddress,
        numPurchases
      );

      console.log("this is User data", totalStakingRewardss);
      const [joinTime, endTime, totalReward] = totalStakingRewardss;

      const currentReward = ethers.utils.formatEther(currentRewards); // Format current reward to readable value
      // console.log(currentReward);

      // const currentTime = Math.floor(Date.now() / 1000);
      // let timeRemainingInSeconds = Number(currentTime) - Number(endTime);

      // console.log("this current Time ", currentTime);

      // // let remainingTime = `${hours}H : ${minutes}M : ${seconds}S`;
      const totalStakingRewards = totalReward * 1e9; // Format total staking rewards
      SetendTime(endTime);
      const EndTime = endTime;
      console.log(totalStakingRewards);
      setNo_Of_Purchases(No_Of_Purchases);
      setCurrentReward(currentReward);
      // setTotalStakingRewards((totalStakingRewards * 1e9).toFixed(8));
      setTotalStakingRewards(totalStakingRewards);
      setEndTime(new Date(EndTime * 1000).toLocaleString());
      // setremainingTime(remainingTime);
      // Format the values assuming the returned values are in wei
      // const currentRewardFormatted = ethers.utils.formatEther(currentReward); // Format current reward to readable value

      // console.log(totalStakingRewards);

      // await fetchGentTopBalance();
    } catch (error) {
      console.error("Error fetching staking data:", error);
    }
    return endTime;
  };

  // Connect wallet function with automatic data fetching
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

      if (web3modalProvider) {
        const signer = web3modalProvider.getSigner();
        console.log(signer);
        setSigner(signer);

        const walletAddress = await signer.getAddress();
        console.log(walletAddress);
        // Update state with wallet details
        setWalletAddress(walletAddress);

        // Fetch staking data right after connecting the wallet
        setLoading(true);
        await fetchStakingDetails(walletAddress, signer); // Pass signer directly
        // await updateCountdown();

        setLoading(false);
      }
    } catch (error) {
      console.log("Error connecting wallet:", error);
    }
  };

  // Withdraw function
  const withdrawReward = async () => {
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
        const signers = web3modalProvider.getSigner();
        console.log(signers);
        const walletAddress = await signers.getAddress();
        console.log(walletAddress);
        // Update state with wallet details
        setWalletAddress(walletAddress);
        console.log(Number(No_Of_Purchases), walletAddress);
        const number = Number(No_Of_Purchases);
        const contract = new ethers.Contract(
          contractAddress,
          stakingAbi,
          signers
        );

        // Call the WithdrawReward function from the contract
        const tx = await contract.WithdrawReward(walletAddress, number);
        console.log("nothing ", tx);
        // Wait for transaction to be mined
        await tx.wait();
      }

      console.log("Reward withdrawn successfully!");
    } catch (error) {
      console.error("Error withdrawing reward:", error);
    }
  };

  // const [remainingTime, setRemainingTime] = useState('');

  useEffect(() => {
    const updateCountdown = async () => {
      // const web3Modal = new Web3Modal({
      //   cacheProvider: false,
      //   providerOptions,
      // });

      // const web3modalInstance = await web3Modal.connect();
      // const web3modalProvider = new ethers.providers.Web3Provider(
      //   web3modalInstance
      // );

      // const signer = web3modalProvider.getSigner();
      // console.log(signer);

      // const walletAddress = await signer.getAddress();

      // Fetch staking data right after connecting the wallet

      console.log(`from useEffect : => ${signer}`);

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
      const contract1 = new ethers.Contract(
        preSaleContractAddress,
        preSaleABI,
        signer
      );
      const No_Of_Purchases = await contract1.UserPurcahases(walletAddress);
      const numPurchases = Number(No_Of_Purchases);
      const purchases = Array.from(
        { length: numPurchases },
        (_, index) => index + 1
      );

      const stakingAbi = [
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

      const contract = new ethers.Contract(contractAddress, stakingAbi, signer);
      const totalStakingRewardss = await contract.GetUserData(
        walletAddress,
        numPurchases
      );

      console.log("this is User data", totalStakingRewardss);
      //  const [joinTime, EndTime, totalReward] = totalStakingRewardss;
      const now = new Date().getTime();
      console.log(now);
      // const endTime = 1763189959 * 1000;
      const endTime = Number(EndTime) * 1000;
      const distance = Number(endTime) - Number(now);

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      console.log(`${days}d ${hours}h ${minutes}m ${seconds}s`);

      setremainingTime(`${days}d ${hours}h ${minutes}m ${seconds}s`);

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
  // const fetchGentTopBalance = async (signer) => {
  //   try {
  //     // Instantiate the contract
  //     const contract = new ethers.Contract(contractAddress, stakingAbi, signer);

  //     // Call the checkGentTopBalance function from the contract
  //     const gentTopBalance = await contract.checkGentTopBalance();

  //     // Format the balance (assumes the balance is in wei)
  //     const gentTopBalanceFormatted = ethers.utils.formatEther(gentTopBalance);

  //     // Update state or return the formatted value
  //     setGentTopBalance(Number(gentTopBalanceFormatted));
  //   } catch (error) {
  //     console.error("Error fetching GentTop balance:", error);
  //     setGentTopBalance("0");
  //   }
  // };
  // useEffect(() => {}, []);

  useEffect(() => {
    const interval = setInterval(async () => {
      const endTime = await updateCountdown();
      console.log("this is endTime from useEffect", endTime);
    }, 1000);

    return clearInterval(interval);
  }, [endTime]);

  return (
    <div className="flex flex-col md:flex-row mt-10 min-h-screen text-white p-10 space-x-5">
      {/* Left Side: Connect Wallet Button */}
      <div className="w-full md:w-1/3 p-10 shadow-md rounded-lg">
        <h2 className="text-xl font-semibold mb-6">Connect Wallet</h2>
        <button
          className="w-full p-3 bg-[#F05B76] font-bold text-white rounded-md border-2 border-white text-lg"
          onClick={connectWallet}
        >
          Connect Wallet
        </button>
        <p>Wallet Address: {walletAddress}</p>
        {/* <label
          htmlFor="stacking"
          className="mt-4 block text-sm font-medium text-white"
        >
          Select No Purchases
        </label>
        <select
          id="stacking"
          // value={No_Of_Purchases}
          className="mt-2 block w-full px-3 py-2 border text-center  text-[#14000b] font-bold border-white rounded-md focus:outline-none focus:ring-[#14000b] focus:border-[#14000b]"
          // onChange={(e) => setNo_Of_Purchases(e.target.value)}
        >
          {purchaseArray.map((purchase, index) => (
            <option key={index} value={purchase}>
              Purchase #{purchase}
            </option>
          ))}
        </select> */}

        {loading ? (
          <p>Loading purchases...</p>
        ) : (
          <div className="text-black">
            <label htmlFor="purchaseSelect" className="text-white">
              Select No. of Purchases:
            </label>
            <select id="purchaseSelect">
              {purchaseArray.map((purchase, index) => (
                <option className="text-black" key={index} value={purchase}>
                  Purchase #{purchase}
                </option>
              ))}
            </select>
          </div>
        )}
        <button
          onClick={withdrawReward} // Pass amount if applicable
          className="w-full p-3 mt-4 bg-[#97833d] border-2 border-white font-bold text-white rounded-md text-lg"
        >
          Withdrawal
        </button>
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
            <table className="w-full table-auto border-collapse border border-gray-300 text-xl">
              <thead>
                <tr className="bg-[#2C0219]">
                  <th className="border px- py-8 text-[#9168BF]">Detail</th>
                  <th className="border px-28 py-8 text-[#9168BF]">Value</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-36 py-4">Current Reward</td>
                  <td className="border px-36 py-4 text-[#F7CE3C] font-bold">
                    {currentReward ? `${currentReward}` : "No Data Found"}
                  </td>
                </tr>
                <tr>
                  <td className="border px-36 py-4">Total Staking Rewards</td>
                  <td className="border px-36 py-4 text-[#F7CE3C] font-bold">
                    {totalStakingRewards
                      ? `${totalStakingRewards}`
                      : "No Data Found"}
                  </td>
                </tr>
                <tr>
                  <td className="border px-36 py-4">Days Left</td>
                  <td className="border px-40 py-4 text-[#F7CE3C] font-bold">
                    {/* {remainingTime
                      ? `${remainingTime}`
                      : "Hours:00 ,Min : 00, Secs :00 "} */}
                    {remainingTime}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
        {/* {!loading && !details && walletAddress && (
          <p className="text-red-500 text-lg">
            No staking data found for the connected wallet address.
          </p>
        )} */}
      </div>
    </div>
  );
};

export default UDashboard;
