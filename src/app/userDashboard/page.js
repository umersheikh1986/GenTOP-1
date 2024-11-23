// // "use client";
// // import Image from "next/image";
// // import React, { useState, useEffect } from "react";
// // import Link from "next/link";
// // import Web3Modal from "web3modal";
// // import { ethers } from "ethers";
// // import CoinbaseWalletSDK from "@coinbase/wallet-sdk";
// // import WalletConnect from "@walletconnect/web3-provider";
// // import UserDashboard1 from "../component/UserDashboard1";
// // const providerOptions = {
// //   walletconnect: {
// //     package: WalletConnect,
// //     options: {
// //       infuraId: "YOUR_INFURA_ID", // Replace with your Infura project ID
// //     },
// //   },
// //   coinbasewallet: {
// //     package: CoinbaseWalletSDK,
// //     options: {
// //       appName: "Gentop",
// //       infuraId: "YOUR_INFURA_ID", // Replace with your Infura project ID
// //     },
// //   },
// // };

// // const userDashboard = () => {
// //   const [web3Provider, setWeb3Provider] = useState(null);
// //   const [walletAddress, setWalletAddress] = useState(null);

// //   async function connectWallet() {
// //     try {
// //       const web3Modal = new Web3Modal({
// //         cacheProvider: false,
// //         providerOptions,
// //       });

// //       const web3modalInstance = await web3Modal.connect();
// //       const web3modalProvider = new ethers.providers.Web3Provider(
// //         web3modalInstance
// //       );

// //       if (web3modalProvider) {
// //         const signer = web3modalProvider.getSigner();
// //         const address = await signer.getAddress();
// //         setWalletAddress(address);
// //         setWeb3Provider(web3modalProvider);
// //       }
// //     } catch (error) {
// //       console.log("Error connecting wallet:", error);
// //     }
// //   }

// //   function formatAddress(address) {
// //     return `${address.slice(0, 6)}...${address.slice(-4)}`;
// //   }

// //   return (
// //     <div className="mt-4 text-white flex flex-col items-center justify-center h-screen">
// //       <h1>User Dashboard</h1>
// //       <nav className="bg-[#14000b] font-san fixed w-full z-20 top-0 start-0 border-b">
// //         <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
// //           <Link
// //             href="/"
// //             className="flex items-center space-x-3 rtl:space-x-reverse"
// //           >
// //             <Image
// //               src="/logo1.png"
// //               width={10000}
// //               height={10000}
// //               alt="Logo"
// //               className="h-16 w-16"
// //             />
// //             <span className="self-center text-2xl font-semibold text-white">
// //               Gentop
// //             </span>
// //           </Link>
// //           <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
// //             {web3Provider == null ? (
// //               <button
// //                 className="text-white bg-[#14000b] border border-white hover:bg-transparent focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-8 py-2 text-center"
// //                 onClick={connectWallet}
// //               >
// //                 Connect Wallet
// //               </button>
// //             ) : (
// //               <div>{walletAddress ? formatAddress(walletAddress) : ""}</div>
// //             )}
// //           </div>
// //           <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
// //             <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 text-white text-xl rounded-lg bg-[#14000b] md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
// //               <li>
// //                 <a href="/" className="block py-3 px-3">
// //                   Home
// //                 </a>
// //               </li>
// //               <li>
// //                 <a href="/Audit" className="block py-3 px-3">
// //                   Audit
// //                 </a>
// //               </li>
// //               <li>
// //                 <a href="/whitePaper" className="block py-3 px-3">
// //                   White Paper
// //                 </a>
// //               </li>

// //               <li>
// //                 <a href="/userDashboard" className="block py-3 px-3">
// //                   User Dashboard
// //                 </a>
// //               </li>
// //             </ul>
// //           </div>
// //         </div>
// //       </nav>
// //       <div>
// //         <UserDashboard1 />
// //       </div>
// //     </div>
// //   );
// // };

// // export default userDashboard;

// // "use client";
// // import React, { useState, useEffect } from "react";
// // import { ethers } from "ethers";
// // import Web3Modal from "web3modal";
// // import { CoinbaseWalletSDK } from "@coinbase/wallet-sdk";
// // import Link from "next/link";
// // import Image from "next/image";
// // // Set up provider options
// // const providerOptions = {
// //   coinbasewallet: {
// //     package: CoinbaseWalletSDK,
// //     options: {
// //       appName: "Web3Modal Demo",
// //       infuraId: "https://rpc.testnet.fantom.network", // Replace with the correct RPC URL if needed
// //     },
// //   },
// // };

// // const UDashboard = () => {
// //   const [walletAddress, setWalletAddress] = useState(null);
// //   // console.log("this is Wallet Address", walletAddress);
// //   const [details, setDetails] = useState(null);
// //   const [loading, setLoading] = useState(false);
// //   const [gentTopBalance, setGentTopBalance] = useState(null);

// //   const [signer, setSigner] = useState([]);
// //   console.log("this is signer from state", signer);
// //   // const [daysLeft, setDaysleft] = useState(null);
// //   // const [Selectoptions, setSelectoptions] = useState(null);
// //   const [currentReward, setCurrentReward] = useState(null);
// //   //  const [timeRemaining, setTimeRemaining] = useState("");
// //   const [No_Of_Purchases, setNo_Of_Purchases] = useState(null);
// //   const [EndTime, setEndTime] = useState(null);
// //   const [remainingTime, setremainingTime] = useState(null);
// //   const [purchaseArray, setPurchaseArray] = useState([]);
// //   const [totalStakingRewards, setTotalStakingRewards] = useState(null);

// //   const [withdrawalLoading, setWithdrawalLoading] = useState(false);
// //   const [withdrawalSuccess, setWithdrawalSuccess] = useState(null);
// //   const [endTime, SetendTime] = useState(null);
// //   // Staking contract address and ABI
// //   console.log("this is endtime from UseSTate", Number(endTime));
// //   const contractAddress = "0x809688E623c7a8aa4B8a8be0Efd8Bd32eC654E34"; // Replace with actual staking contract address
// //   const stakingAbi = [
// //     {
// //       inputs: [
// //         { internalType: "contract IERC20", name: "__USDT", type: "address" },
// //         { internalType: "contract IERC20", name: "__GentTop", type: "address" },
// //         { internalType: "address", name: "owner", type: "address" },
// //       ],
// //       stateMutability: "nonpayable",
// //       type: "constructor",
// //     },
// //     {
// //       inputs: [
// //         { internalType: "address", name: "userAddress", type: "address" },
// //         { internalType: "uint256", name: "_num", type: "uint256" },
// //       ],
// //       name: "GetUserData",
// //       outputs: [
// //         { internalType: "uint256", name: "", type: "uint256" },
// //         { internalType: "uint256", name: "", type: "uint256" },
// //         { internalType: "uint256", name: "", type: "uint256" },
// //       ],
// //       stateMutability: "view",
// //       type: "function",
// //     },
// //     {
// //       inputs: [],
// //       name: "SECONDS_IN_A_DAY",
// //       outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
// //       stateMutability: "view",
// //       type: "function",
// //     },
// //     {
// //       inputs: [],
// //       name: "STAKING_120_DAYS",
// //       outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
// //       stateMutability: "view",
// //       type: "function",
// //     },
// //     {
// //       inputs: [],
// //       name: "STAKING_45_DAYS",
// //       outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
// //       stateMutability: "view",
// //       type: "function",
// //     },
// //     {
// //       inputs: [],
// //       name: "STAKING_90_DAYS",
// //       outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
// //       stateMutability: "view",
// //       type: "function",
// //     },
// //     {
// //       inputs: [
// //         { internalType: "address", name: "userAddress", type: "address" },
// //         { internalType: "uint256", name: "_num", type: "uint256" },
// //       ],
// //       name: "WithdrawReward",
// //       outputs: [],
// //       stateMutability: "nonpayable",
// //       type: "function",
// //     },
// //     {
// //       inputs: [],
// //       name: "_preSale",
// //       outputs: [
// //         { internalType: "contract IpreSale", name: "", type: "address" },
// //       ],
// //       stateMutability: "view",
// //       type: "function",
// //     },
// //     {
// //       inputs: [
// //         { internalType: "address", name: "userAddress", type: "address" },
// //         { internalType: "uint256", name: "_num", type: "uint256" },
// //       ],
// //       name: "checkCumulativeReward",
// //       outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
// //       stateMutability: "view",
// //       type: "function",
// //     },
// //     {
// //       inputs: [],
// //       name: "checkGentTopBalance",
// //       outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
// //       stateMutability: "view",
// //       type: "function",
// //     },
// //     {
// //       inputs: [{ internalType: "address", name: "__preSale", type: "address" }],
// //       name: "setPreSale",
// //       outputs: [],
// //       stateMutability: "nonpayable",
// //       type: "function",
// //     },
// //     {
// //       inputs: [],
// //       name: "totalRewardsGiven",
// //       outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
// //       stateMutability: "view",
// //       type: "function",
// //     },
// //     {
// //       inputs: [{ internalType: "address", name: "", type: "address" }],
// //       name: "userDatas",
// //       outputs: [
// //         { internalType: "address", name: "userAddress", type: "address" },
// //         { internalType: "uint256", name: "joinTime", type: "uint256" },
// //         { internalType: "uint256", name: "joiningAmount", type: "uint256" },
// //         { internalType: "uint256", name: "stakingSeconds", type: "uint256" },
// //       ],
// //       stateMutability: "view",
// //       type: "function",
// //     },
// //     {
// //       inputs: [{ internalType: "address", name: "", type: "address" }],
// //       name: "userPurcahases",
// //       outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
// //       stateMutability: "view",
// //       type: "function",
// //     },
// //     {
// //       inputs: [
// //         { internalType: "address", name: "", type: "address" },
// //         { internalType: "uint256", name: "", type: "uint256" },
// //       ],
// //       name: "userPurcahasesS",
// //       outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
// //       stateMutability: "view",
// //       type: "function",
// //     },
// //     {
// //       inputs: [],
// //       name: "withdrawAdmin",
// //       outputs: [],
// //       stateMutability: "nonpayable",
// //       type: "function",
// //     },
// //   ];
// //   const preSaleContractAddress = "0xaAedC2b2598250191203d72909af156b08cEA4e5";

// //   // Fetch staking data using the wallet address
// //   const fetchStakingDetails = async (walletAddress, signer) => {
// //     try {
// //       const contract = new ethers.Contract(contractAddress, stakingAbi, signer);
// //       const preSaleABI = [
// //         {
// //           inputs: [
// //             {
// //               internalType: "contract IERC20",
// //               name: "__USDT",
// //               type: "address",
// //             },
// //             {
// //               internalType: "contract IERC20",
// //               name: "__GentTop",
// //               type: "address",
// //             },
// //             { internalType: "address", name: "_staking", type: "address" },
// //             { internalType: "address", name: "_owner", type: "address" },
// //             { internalType: "uint256", name: "_price", type: "uint256" },
// //           ],
// //           stateMutability: "nonpayable",
// //           type: "constructor",
// //         },
// //         {
// //           inputs: [
// //             { internalType: "uint256", name: "_usdtAmount", type: "uint256" },
// //             { internalType: "address", name: "_buyer", type: "address" },
// //             { internalType: "uint256", name: "_runner", type: "uint256" },
// //           ],
// //           name: "Buy",
// //           outputs: [],
// //           stateMutability: "nonpayable",
// //           type: "function",
// //         },
// //         {
// //           inputs: [
// //             { internalType: "address", name: "", type: "address" },
// //             { internalType: "uint256", name: "", type: "uint256" },
// //           ],
// //           name: "User",
// //           outputs: [
// //             { internalType: "address", name: "userAdd", type: "address" },
// //             { internalType: "uint256", name: "joinTime", type: "uint256" },
// //             { internalType: "uint256", name: "joiningAmount", type: "uint256" },
// //             { internalType: "uint256", name: "percenTage", type: "uint256" },
// //             { internalType: "uint256", name: "endTime", type: "uint256" },
// //             { internalType: "uint256", name: "totalReward", type: "uint256" },
// //           ],
// //           stateMutability: "view",
// //           type: "function",
// //         },
// //         {
// //           inputs: [
// //             { internalType: "address", name: "__user", type: "address" },
// //           ],
// //           name: "UserPurcahases",
// //           outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
// //           stateMutability: "view",
// //           type: "function",
// //         },
// //         {
// //           inputs: [],
// //           name: "_BronzePercentage",
// //           outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
// //           stateMutability: "view",
// //           type: "function",
// //         },
// //         {
// //           inputs: [],
// //           name: "_BronzePrice",
// //           outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
// //           stateMutability: "view",
// //           type: "function",
// //         },
// //         {
// //           inputs: [],
// //           name: "_GentTop",
// //           outputs: [
// //             { internalType: "contract IERC20", name: "", type: "address" },
// //           ],
// //           stateMutability: "view",
// //           type: "function",
// //         },
// //         {
// //           inputs: [],
// //           name: "_GoldPercentage",
// //           outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
// //           stateMutability: "view",
// //           type: "function",
// //         },
// //         {
// //           inputs: [],
// //           name: "_GoldPrice",
// //           outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
// //           stateMutability: "view",
// //           type: "function",
// //         },
// //         {
// //           inputs: [],
// //           name: "_SilverPercentage",
// //           outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
// //           stateMutability: "view",
// //           type: "function",
// //         },
// //         {
// //           inputs: [],
// //           name: "_SilverPrice",
// //           outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
// //           stateMutability: "view",
// //           type: "function",
// //         },
// //         {
// //           inputs: [],
// //           name: "_USDT",
// //           outputs: [
// //             { internalType: "contract IERC20", name: "", type: "address" },
// //           ],
// //           stateMutability: "view",
// //           type: "function",
// //         },
// //         {
// //           inputs: [],
// //           name: "_bronzeSold",
// //           outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
// //           stateMutability: "view",
// //           type: "function",
// //         },
// //         {
// //           inputs: [],
// //           name: "_goldSold",
// //           outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
// //           stateMutability: "view",
// //           type: "function",
// //         },
// //         {
// //           inputs: [],
// //           name: "_limitSale",
// //           outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
// //           stateMutability: "view",
// //           type: "function",
// //         },
// //         {
// //           inputs: [],
// //           name: "_silverSold",
// //           outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
// //           stateMutability: "view",
// //           type: "function",
// //         },
// //         {
// //           inputs: [],
// //           name: "buyer",
// //           outputs: [{ internalType: "address", name: "", type: "address" }],
// //           stateMutability: "view",
// //           type: "function",
// //         },
// //         {
// //           inputs: [
// //             { internalType: "address", name: "userAddress", type: "address" },
// //             { internalType: "uint256", name: "_num", type: "uint256" },
// //           ],
// //           name: "checkCumulativeReward",
// //           outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
// //           stateMutability: "view",
// //           type: "function",
// //         },
// //         {
// //           inputs: [],
// //           name: "getTotalTokenPurchased",
// //           outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
// //           stateMutability: "view",
// //           type: "function",
// //         },
// //         {
// //           inputs: [
// //             { internalType: "address", name: "_userAdd", type: "address" },
// //             { internalType: "uint256", name: "_num", type: "uint256" },
// //           ],
// //           name: "getUserData",
// //           outputs: [
// //             { internalType: "address", name: "", type: "address" },
// //             { internalType: "uint256", name: "", type: "uint256" },
// //             { internalType: "uint256", name: "", type: "uint256" },
// //             { internalType: "uint256", name: "", type: "uint256" },
// //             { internalType: "uint256", name: "", type: "uint256" },
// //             { internalType: "uint256", name: "", type: "uint256" },
// //           ],
// //           stateMutability: "view",
// //           type: "function",
// //         },
// //         {
// //           inputs: [],
// //           name: "owner",
// //           outputs: [{ internalType: "address", name: "", type: "address" }],
// //           stateMutability: "view",
// //           type: "function",
// //         },
// //         {
// //           inputs: [],
// //           name: "price",
// //           outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
// //           stateMutability: "view",
// //           type: "function",
// //         },
// //         {
// //           inputs: [],
// //           name: "salesClosingTime",
// //           outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
// //           stateMutability: "view",
// //           type: "function",
// //         },
// //         {
// //           inputs: [
// //             { internalType: "uint256", name: "_percentage", type: "uint256" },
// //             {
// //               internalType: "uint256",
// //               name: "_whichTypeOfPercentage",
// //               type: "uint256",
// //             },
// //           ],
// //           name: "setPercentage",
// //           outputs: [],
// //           stateMutability: "nonpayable",
// //           type: "function",
// //         },
// //         {
// //           inputs: [],
// //           name: "staking",
// //           outputs: [{ internalType: "address", name: "", type: "address" }],
// //           stateMutability: "view",
// //           type: "function",
// //         },
// //         {
// //           inputs: [],
// //           name: "totalTokenpurchased",
// //           outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
// //           stateMutability: "view",
// //           type: "function",
// //         },
// //         {
// //           inputs: [{ internalType: "address", name: "", type: "address" }],
// //           name: "userPurcahases",
// //           outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
// //           stateMutability: "view",
// //           type: "function",
// //         },
// //         {
// //           inputs: [],
// //           name: "withdrawAdmin",
// //           outputs: [],
// //           stateMutability: "nonpayable",
// //           type: "function",
// //         },
// //       ];
// //       const contract1 = new ethers.Contract(
// //         preSaleContractAddress,
// //         preSaleABI,
// //         signer
// //       );

// //       const No_Of_Purchases = await contract1.UserPurcahases(walletAddress);

// //       const numPurchases = Number(No_Of_Purchases);
// //       const purchases = Array.from(
// //         { length: numPurchases },
// //         (_, index) => index + 1
// //       );

// //       setPurchaseArray(purchases); // Update state with the purchases array
// //       setLoading(false);
// //       // console.log(num);
// //       const currentRewards = await contract.checkCumulativeReward(
// //         walletAddress,
// //         numPurchases
// //       );
// //       console.log("This is Current Reward", Number(currentRewards));

// //       // Fetch user data, including staking seconds and joining amount
// //       const totalStakingRewardss = await contract.GetUserData(
// //         walletAddress,
// //         numPurchases
// //       );

// //       console.log("this is User data", totalStakingRewardss);
// //       const [joinTime, endTime, totalReward] = totalStakingRewardss;

// //       const currentReward = ethers.utils.formatEther(currentRewards); // Format current reward to readable value
// //       // console.log(currentReward);

// //       // const currentTime = Math.floor(Date.now() / 1000);
// //       // let timeRemainingInSeconds = Number(currentTime) - Number(endTime);

// //       // console.log("this current Time ", currentTime);

// //       // // let remainingTime = `${hours}H : ${minutes}M : ${seconds}S`;
// //       const totalStakingRewards = totalReward / 1e18; // Format total staking rewards
// //       SetendTime(endTime);
// //       const EndTime = endTime;
// //       console.log(totalStakingRewards);
// //       setNo_Of_Purchases(No_Of_Purchases);
// //       setCurrentReward(currentReward);
// //       // setTotalStakingRewards((totalStakingRewards * 1e9).toFixed(8));
// //       setTotalStakingRewards(totalStakingRewards);
// //       setEndTime(new Date(EndTime * 1000).toLocaleString());
// //       // setremainingTime(remainingTime);
// //       // Format the values assuming the returned values are in wei
// //       // const currentRewardFormatted = ethers.utils.formatEther(currentReward); // Format current reward to readable value

// //       // console.log(totalStakingRewards);

// //       // await fetchGentTopBalance();
// //     } catch (error) {
// //       console.error("Error fetching staking data:", error);
// //     }
// //     return endTime;
// //   };

// //   // Connect wallet function with automatic data fetching
// //   const connectWallet = async () => {
// //     try {
// //       const web3Modal = new Web3Modal({
// //         cacheProvider: false,
// //         providerOptions,
// //       });

// //       const web3modalInstance = await web3Modal.connect();
// //       const web3modalProvider = new ethers.providers.Web3Provider(
// //         web3modalInstance
// //       );

// //       if (web3modalProvider) {
// //         const signer = web3modalProvider.getSigner();
// //         console.log(signer);
// //         setSigner(signer);

// //         const walletAddress = await signer.getAddress();
// //         console.log(walletAddress);
// //         // Update state with wallet details
// //         setWalletAddress(walletAddress);

// //         // Fetch staking data right after connecting the wallet
// //         setLoading(true);
// //         await fetchStakingDetails(walletAddress, signer); // Pass signer directly
// //         // await updateCountdown();

// //         setLoading(false);
// //       }
// //     } catch (error) {
// //       console.log("Error connecting wallet:", error);
// //     }
// //   };

// //   // Withdraw function
// //   const withdrawReward = async () => {
// //     try {
// //       const web3Modal = new Web3Modal({
// //         cacheProvider: false,
// //         providerOptions,
// //       });

// //       const web3modalInstance = await web3Modal.connect();
// //       const web3modalProvider = new ethers.providers.Web3Provider(
// //         web3modalInstance
// //       );

// //       if (web3modalProvider) {
// //         const signers = web3modalProvider.getSigner();
// //         console.log(signers);
// //         const walletAddress = await signers.getAddress();
// //         console.log(walletAddress);
// //         // Update state with wallet details
// //         setWalletAddress(walletAddress);
// //         console.log(Number(No_Of_Purchases), walletAddress);
// //         const number = Number(No_Of_Purchases);
// //         const contract = new ethers.Contract(
// //           contractAddress,
// //           stakingAbi,
// //           signers
// //         );

// //         // Call the WithdrawReward function from the contract
// //         const tx = await contract.WithdrawReward(walletAddress, number);
// //         console.log("nothing ", tx);
// //         // Wait for transaction to be mined
// //         await tx.wait();
// //       }

// //       console.log("Reward withdrawn successfully!");
// //     } catch (error) {
// //       console.error("Error withdrawing reward:", error);
// //     }
// //   };

// //   // const [remainingTime, setRemainingTime] = useState('');

// //   useEffect(() => {
// //     const updateCountdown = async () => {
// //       // const web3Modal = new Web3Modal({
// //       //   cacheProvider: false,
// //       //   providerOptions,
// //       // });

// //       // const web3modalInstance = await web3Modal.connect();
// //       // const web3modalProvider = new ethers.providers.Web3Provider(
// //       //   web3modalInstance
// //       // );

// //       // const signer = web3modalProvider.getSigner();
// //       // console.log(signer);

// //       // const walletAddress = await signer.getAddress();

// //       // Fetch staking data right after connecting the wallet

// //       console.log(`from useEffect : => ${signer}`);

// //       const preSaleABI = [
// //         {
// //           inputs: [
// //             {
// //               internalType: "contract IERC20",
// //               name: "__USDT",
// //               type: "address",
// //             },
// //             {
// //               internalType: "contract IERC20",
// //               name: "__GentTop",
// //               type: "address",
// //             },
// //             { internalType: "address", name: "_staking", type: "address" },
// //             { internalType: "address", name: "_owner", type: "address" },
// //             { internalType: "uint256", name: "_price", type: "uint256" },
// //           ],
// //           stateMutability: "nonpayable",
// //           type: "constructor",
// //         },
// //         {
// //           inputs: [
// //             { internalType: "uint256", name: "_usdtAmount", type: "uint256" },
// //             { internalType: "address", name: "_buyer", type: "address" },
// //             { internalType: "uint256", name: "_runner", type: "uint256" },
// //           ],
// //           name: "Buy",
// //           outputs: [],
// //           stateMutability: "nonpayable",
// //           type: "function",
// //         },
// //         {
// //           inputs: [
// //             { internalType: "address", name: "", type: "address" },
// //             { internalType: "uint256", name: "", type: "uint256" },
// //           ],
// //           name: "User",
// //           outputs: [
// //             { internalType: "address", name: "userAdd", type: "address" },
// //             { internalType: "uint256", name: "joinTime", type: "uint256" },
// //             {
// //               internalType: "uint256",
// //               name: "joiningAmount",
// //               type: "uint256",
// //             },
// //             { internalType: "uint256", name: "percenTage", type: "uint256" },
// //             { internalType: "uint256", name: "endTime", type: "uint256" },
// //             { internalType: "uint256", name: "totalReward", type: "uint256" },
// //           ],
// //           stateMutability: "view",
// //           type: "function",
// //         },
// //         {
// //           inputs: [
// //             { internalType: "address", name: "__user", type: "address" },
// //           ],
// //           name: "UserPurcahases",
// //           outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
// //           stateMutability: "view",
// //           type: "function",
// //         },
// //         {
// //           inputs: [],
// //           name: "_BronzePercentage",
// //           outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
// //           stateMutability: "view",
// //           type: "function",
// //         },
// //         {
// //           inputs: [],
// //           name: "_BronzePrice",
// //           outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
// //           stateMutability: "view",
// //           type: "function",
// //         },
// //         {
// //           inputs: [],
// //           name: "_GentTop",
// //           outputs: [
// //             { internalType: "contract IERC20", name: "", type: "address" },
// //           ],
// //           stateMutability: "view",
// //           type: "function",
// //         },
// //         {
// //           inputs: [],
// //           name: "_GoldPercentage",
// //           outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
// //           stateMutability: "view",
// //           type: "function",
// //         },
// //         {
// //           inputs: [],
// //           name: "_GoldPrice",
// //           outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
// //           stateMutability: "view",
// //           type: "function",
// //         },
// //         {
// //           inputs: [],
// //           name: "_SilverPercentage",
// //           outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
// //           stateMutability: "view",
// //           type: "function",
// //         },
// //         {
// //           inputs: [],
// //           name: "_SilverPrice",
// //           outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
// //           stateMutability: "view",
// //           type: "function",
// //         },
// //         {
// //           inputs: [],
// //           name: "_USDT",
// //           outputs: [
// //             { internalType: "contract IERC20", name: "", type: "address" },
// //           ],
// //           stateMutability: "view",
// //           type: "function",
// //         },
// //         {
// //           inputs: [],
// //           name: "_bronzeSold",
// //           outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
// //           stateMutability: "view",
// //           type: "function",
// //         },
// //         {
// //           inputs: [],
// //           name: "_goldSold",
// //           outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
// //           stateMutability: "view",
// //           type: "function",
// //         },
// //         {
// //           inputs: [],
// //           name: "_limitSale",
// //           outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
// //           stateMutability: "view",
// //           type: "function",
// //         },
// //         {
// //           inputs: [],
// //           name: "_silverSold",
// //           outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
// //           stateMutability: "view",
// //           type: "function",
// //         },
// //         {
// //           inputs: [],
// //           name: "buyer",
// //           outputs: [{ internalType: "address", name: "", type: "address" }],
// //           stateMutability: "view",
// //           type: "function",
// //         },
// //         {
// //           inputs: [
// //             { internalType: "address", name: "userAddress", type: "address" },
// //             { internalType: "uint256", name: "_num", type: "uint256" },
// //           ],
// //           name: "checkCumulativeReward",
// //           outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
// //           stateMutability: "view",
// //           type: "function",
// //         },
// //         {
// //           inputs: [],
// //           name: "getTotalTokenPurchased",
// //           outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
// //           stateMutability: "view",
// //           type: "function",
// //         },
// //         {
// //           inputs: [
// //             { internalType: "address", name: "_userAdd", type: "address" },
// //             { internalType: "uint256", name: "_num", type: "uint256" },
// //           ],
// //           name: "getUserData",
// //           outputs: [
// //             { internalType: "address", name: "", type: "address" },
// //             { internalType: "uint256", name: "", type: "uint256" },
// //             { internalType: "uint256", name: "", type: "uint256" },
// //             { internalType: "uint256", name: "", type: "uint256" },
// //             { internalType: "uint256", name: "", type: "uint256" },
// //             { internalType: "uint256", name: "", type: "uint256" },
// //           ],
// //           stateMutability: "view",
// //           type: "function",
// //         },
// //         {
// //           inputs: [],
// //           name: "owner",
// //           outputs: [{ internalType: "address", name: "", type: "address" }],
// //           stateMutability: "view",
// //           type: "function",
// //         },
// //         {
// //           inputs: [],
// //           name: "price",
// //           outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
// //           stateMutability: "view",
// //           type: "function",
// //         },
// //         {
// //           inputs: [],
// //           name: "salesClosingTime",
// //           outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
// //           stateMutability: "view",
// //           type: "function",
// //         },
// //         {
// //           inputs: [
// //             { internalType: "uint256", name: "_percentage", type: "uint256" },
// //             {
// //               internalType: "uint256",
// //               name: "_whichTypeOfPercentage",
// //               type: "uint256",
// //             },
// //           ],
// //           name: "setPercentage",
// //           outputs: [],
// //           stateMutability: "nonpayable",
// //           type: "function",
// //         },
// //         {
// //           inputs: [],
// //           name: "staking",
// //           outputs: [{ internalType: "address", name: "", type: "address" }],
// //           stateMutability: "view",
// //           type: "function",
// //         },
// //         {
// //           inputs: [],
// //           name: "totalTokenpurchased",
// //           outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
// //           stateMutability: "view",
// //           type: "function",
// //         },
// //         {
// //           inputs: [{ internalType: "address", name: "", type: "address" }],
// //           name: "userPurcahases",
// //           outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
// //           stateMutability: "view",
// //           type: "function",
// //         },
// //         {
// //           inputs: [],
// //           name: "withdrawAdmin",
// //           outputs: [],
// //           stateMutability: "nonpayable",
// //           type: "function",
// //         },
// //       ];
// //       const contract1 = new ethers.Contract(
// //         preSaleContractAddress,
// //         preSaleABI,
// //         signer
// //       );
// //       const No_Of_Purchases = await contract1.UserPurcahases(walletAddress);
// //       const numPurchases = Number(No_Of_Purchases);
// //       const purchases = Array.from(
// //         { length: numPurchases },
// //         (_, index) => index + 1
// //       );

// //       const stakingAbi = [
// //         {
// //           inputs: [
// //             {
// //               internalType: "contract IERC20",
// //               name: "__USDT",
// //               type: "address",
// //             },
// //             {
// //               internalType: "contract IERC20",
// //               name: "__GentTop",
// //               type: "address",
// //             },
// //             { internalType: "address", name: "owner", type: "address" },
// //           ],
// //           stateMutability: "nonpayable",
// //           type: "constructor",
// //         },
// //         {
// //           inputs: [
// //             { internalType: "address", name: "userAddress", type: "address" },
// //             { internalType: "uint256", name: "_num", type: "uint256" },
// //           ],
// //           name: "GetUserData",
// //           outputs: [
// //             { internalType: "uint256", name: "", type: "uint256" },
// //             { internalType: "uint256", name: "", type: "uint256" },
// //             { internalType: "uint256", name: "", type: "uint256" },
// //           ],
// //           stateMutability: "view",
// //           type: "function",
// //         },
// //         {
// //           inputs: [],
// //           name: "SECONDS_IN_A_DAY",
// //           outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
// //           stateMutability: "view",
// //           type: "function",
// //         },
// //         {
// //           inputs: [],
// //           name: "STAKING_120_DAYS",
// //           outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
// //           stateMutability: "view",
// //           type: "function",
// //         },
// //         {
// //           inputs: [],
// //           name: "STAKING_45_DAYS",
// //           outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
// //           stateMutability: "view",
// //           type: "function",
// //         },
// //         {
// //           inputs: [],
// //           name: "STAKING_90_DAYS",
// //           outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
// //           stateMutability: "view",
// //           type: "function",
// //         },
// //         {
// //           inputs: [
// //             { internalType: "address", name: "userAddress", type: "address" },
// //             { internalType: "uint256", name: "_num", type: "uint256" },
// //           ],
// //           name: "WithdrawReward",
// //           outputs: [],
// //           stateMutability: "nonpayable",
// //           type: "function",
// //         },
// //         {
// //           inputs: [],
// //           name: "_preSale",
// //           outputs: [
// //             { internalType: "contract IpreSale", name: "", type: "address" },
// //           ],
// //           stateMutability: "view",
// //           type: "function",
// //         },
// //         {
// //           inputs: [
// //             { internalType: "address", name: "userAddress", type: "address" },
// //             { internalType: "uint256", name: "_num", type: "uint256" },
// //           ],
// //           name: "checkCumulativeReward",
// //           outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
// //           stateMutability: "view",
// //           type: "function",
// //         },
// //         {
// //           inputs: [],
// //           name: "checkGentTopBalance",
// //           outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
// //           stateMutability: "view",
// //           type: "function",
// //         },
// //         {
// //           inputs: [
// //             { internalType: "address", name: "__preSale", type: "address" },
// //           ],
// //           name: "setPreSale",
// //           outputs: [],
// //           stateMutability: "nonpayable",
// //           type: "function",
// //         },
// //         {
// //           inputs: [],
// //           name: "totalRewardsGiven",
// //           outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
// //           stateMutability: "view",
// //           type: "function",
// //         },
// //         {
// //           inputs: [{ internalType: "address", name: "", type: "address" }],
// //           name: "userDatas",
// //           outputs: [
// //             { internalType: "address", name: "userAddress", type: "address" },
// //             { internalType: "uint256", name: "joinTime", type: "uint256" },
// //             {
// //               internalType: "uint256",
// //               name: "joiningAmount",
// //               type: "uint256",
// //             },
// //             {
// //               internalType: "uint256",
// //               name: "stakingSeconds",
// //               type: "uint256",
// //             },
// //           ],
// //           stateMutability: "view",
// //           type: "function",
// //         },
// //         {
// //           inputs: [{ internalType: "address", name: "", type: "address" }],
// //           name: "userPurcahases",
// //           outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
// //           stateMutability: "view",
// //           type: "function",
// //         },
// //         {
// //           inputs: [
// //             { internalType: "address", name: "", type: "address" },
// //             { internalType: "uint256", name: "", type: "uint256" },
// //           ],
// //           name: "userPurcahasesS",
// //           outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
// //           stateMutability: "view",
// //           type: "function",
// //         },
// //         {
// //           inputs: [],
// //           name: "withdrawAdmin",
// //           outputs: [],
// //           stateMutability: "nonpayable",
// //           type: "function",
// //         },
// //       ];

// //       const contract = new ethers.Contract(contractAddress, stakingAbi, signer);
// //       const totalStakingRewardss = await contract.GetUserData(
// //         walletAddress,
// //         numPurchases
// //       );

// //       console.log("this is User data", totalStakingRewardss);
// //       //  const [joinTime, EndTime, totalReward] = totalStakingRewardss;
// //       const now = new Date().getTime();
// //       console.log(now);
// //       // const endTime = 1763189959 * 1000;
// //       const endTime = Number(EndTime) * 1000;
// //       const distance = Number(endTime) - Number(now);

// //       const days = Math.floor(distance / (1000 * 60 * 60 * 24));
// //       const hours = Math.floor(
// //         (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
// //       );
// //       const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
// //       const seconds = Math.floor((distance % (1000 * 60)) / 1000);

// //       console.log(`${days}d ${hours}h ${minutes}m ${seconds}s`);

// //       setremainingTime(`${days}d ${hours}h ${minutes}m ${seconds}s`);

// //       if (distance < 0) {
// //         clearInterval(interval);
// //         setremainingTime("Now you can witdraw your Reward");
// //       }
// //     };

// //     // Update the countdown every second
// //     const interval = setInterval(updateCountdown, 1000);

// //     // Clean up the interval when the component unmounts
// //     return () => clearInterval(interval);
// //   }, [walletAddress, signer]);
// //   // const fetchGentTopBalance = async (signer) => {
// //   //   try {
// //   //     // Instantiate the contract
// //   //     const contract = new ethers.Contract(contractAddress, stakingAbi, signer);

// //   //     // Call the checkGentTopBalance function from the contract
// //   //     const gentTopBalance = await contract.checkGentTopBalance();

// //   //     // Format the balance (assumes the balance is in wei)
// //   //     const gentTopBalanceFormatted = ethers.utils.formatEther(gentTopBalance);

// //   //     // Update state or return the formatted value
// //   //     setGentTopBalance(Number(gentTopBalanceFormatted));
// //   //   } catch (error) {
// //   //     console.error("Error fetching GentTop balance:", error);
// //   //     setGentTopBalance("0");
// //   //   }
// //   // };
// //   // useEffect(() => {}, []);

// //   useEffect(() => {
// //     const interval = setInterval(async () => {
// //       const endTime = await updateCountdown();
// //       console.log("this is endTime from useEffect", endTime);
// //     }, 1000);

// //     return clearInterval(interval);
// //   }, [endTime]);

// //   function shortenAddress(address) {
// //     if (!address) return "";
// //     return `${address.slice(0, 6)}...${address.slice(-4)}`;
// //   }
// //   return (
// //     <div>
// //       <nav className=" bg-[#14000b] font-san fixed w-full z-20 top-0 start-0 border-b ">
// //         <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
// //           <a
// //             href="https://flowbite.com/"
// //             className="flex items-center space-x-3 rtl:space-x-reverse"
// //           >
// //             <Link href="/">
// //               <Image
// //                 src="/logo1.png"
// //                 width={10000}
// //                 height={10000}
// //                 alt="Logo"
// //                 className="h-16 w-16"
// //               />
// //             </Link>
// //             <span className="self-center text-2xl font-semibold text-white">
// //               Gentop
// //             </span>
// //           </a>
// //           {/* <ToastContainer position="top-right" autoClose={50000} /> */}

// //           <div className="flex md:order-2 border-2 p-2 rounded-lg text-white space-x-3 md:space-x-0 rtl:space-x-reverse">
// //             <button className="" onClick={connectWallet}>
// //               {walletAddress
// //                 ? shortenAddress(walletAddress)
// //                 : "Connect Wallet To View Your Data"}
// //             </button>
// //           </div>
// //           <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
// //             <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 text-white text-xl rounded-lg bg-[#14000b] md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
// //               <li>
// //                 <a href="/" className="block py-3 px-3 " aria-current="page">
// //                   Home
// //                 </a>
// //               </li>
// //               <li>
// //                 <a href="/about" className="block py-3 px-3 ">
// //                   Audit
// //                 </a>
// //               </li>
// //               <li>
// //                 <a href="/" className="block py-3 px-3   ">
// //                   White Paper
// //                 </a>
// //               </li>
// //             </ul>
// //           </div>
// //         </div>
// //       </nav>
// //       <div className="flex flex-col md:flex-row mt-10 min-h-screen text-white p-10 space-x-5">
// //         {/* Left Side: Connect Wallet Button */}
// //         <div className="w-full md:w-1/3 p-10 shadow-md rounded-lg">
// //           <h2 className="text-xl font-semibold mb-6">User Dashboard</h2>
// //           {/* <button
// //             className="w-full p-3 bg-[#F05B76] font-bold text-white rounded-md border-2 border-white text-lg"
// //             onChange={connectWallet}
// //           >
// //             {walletAddress
// //               ? shortenAddress(walletAddress)
// //               : "Connect Wallet To View Your Data"}
// //           </button> */}

// //           {loading ? (
// //             <p>Loading purchases...</p>
// //           ) : (
// //             <div className="text-black">
// //               <label htmlFor="purchaseSelect" className="text-white">
// //                 Select No. of Purchases:
// //               </label>
// //               <br />
// //               <select id="purchaseSelect">
// //                 {purchaseArray.map((purchase, index) => (
// //                   <option className="text-black" key={index} value={purchase}>
// //                     Purchase #{purchase}
// //                   </option>
// //                 ))}
// //               </select>
// //             </div>
// //           )}
// //           <button
// //             onClick={withdrawReward} // Pass amount if applicable
// //             className="w-full p-3 mt-4 bg-[#97833d] border-2 border-white font-bold text-white rounded-md text-lg"
// //           >
// //             Withdrawal
// //           </button>
// //         </div>

// //         {/* Right Side: Address Information Table */}
// //         <div className="w-full md:w-2/3 p-10 shadow-md rounded-lg">
// //           <h2 className="text-xl font-semibold mb-6">Address Information</h2>

// //           {/* Show loading, wallet connection status, or data */}
// //           {loading ? (
// //             <p className="text-yellow-500">Loading...</p>
// //           ) : !walletAddress ? (
// //             <p className="text-red-500 text-lg">
// //               Please connect your wallet to view staking data.
// //             </p>
// //           ) : (
// //             <div className="overflow-x-auto">
// //               <table className="w-full table-auto border-collapse border border-gray-300 text-xl">
// //                 <thead>
// //                   <tr className="bg-[#2C0219]">
// //                     <th className="border px- py-8 text-[#9168BF]">Detail</th>
// //                     <th className="border px-28 py-8 text-[#9168BF]">Value</th>
// //                   </tr>
// //                 </thead>
// //                 <tbody>
// //                   <tr>
// //                     <td className="border px-36 py-4">Current Reward</td>
// //                     <td className="border px-36 py-4 text-[#F7CE3C] font-bold">
// //                       {currentReward ? `${currentReward}` : "No Data Found"}
// //                     </td>
// //                   </tr>
// //                   <tr>
// //                     <td className="border px-36 py-4">Total Staking Rewards</td>
// //                     <td className="border px-36 py-4 text-[#F7CE3C] font-bold">
// //                       {totalStakingRewards
// //                         ? `${totalStakingRewards}`
// //                         : "No Data Found"}
// //                     </td>
// //                   </tr>
// //                   <tr>
// //                     <td className="border px-36 py-4">Days Left</td>
// //                     <td className="border px-36 py-4 text-[#F7CE3C] font-bold">
// //                       {/* {remainingTime
// //                       ? `${remainingTime}`
// //                       : "Hours:00 ,Min : 00, Secs :00 "} */}
// //                       {remainingTime}
// //                     </td>
// //                   </tr>
// //                 </tbody>
// //               </table>
// //             </div>
// //           )}
// //           {/* {!loading && !details && walletAddress && (
// //           <p className="text-red-500 text-lg">
// //             No staking data found for the connected wallet address.
// //           </p>
// //         )} */}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default UDashboard;

// "use client";
// import React, { useState, useEffect } from "react";
// import { ethers } from "ethers";
// import Web3Modal from "web3modal";
// import { CoinbaseWalletSDK } from "@coinbase/wallet-sdk";
// import Link from "next/link";
// import Image from "next/image";
// // Set up provider options
// const providerOptions = {
//   coinbasewallet: {
//     package: CoinbaseWalletSDK,
//     options: {
//       appName: "Web3Modal Demo",
//       infuraId: "https://rpc.testnet.fantom.network", // Replace with the correct RPC URL if needed
//     },
//   },
// };

// const UDashboard = () => {
//   const [walletAddress, setWalletAddress] = useState(null);
//   const [web3Provider, setWeb3Provider] = useState(null);
//   // console.log("this is Wallet Address", walletAddress);
//   const [details, setDetails] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [gentTopBalance, setGentTopBalance] = useState(null);
//   const provider = new ethers.providers.JsonRpcProvider(
//     "https://1rpc.io/holesky"
//   );
//   const [signer, setSigner] = useState([]);
//   console.log("this is signer from state", signer);
//   // const [daysLeft, setDaysleft] = useState(null);
//   // const [Selectoptions, setSelectoptions] = useState(null);
//   const [currentReward, setCurrentReward] = useState(null);
//   const [stakingContract, setStakingContract] = useState();
//   //  const [timeRemaining, setTimeRemaining] = useState("");
//   const [No_Of_Purchases, setNo_Of_Purchases] = useState(null);
//   const [EndTime, setEndTime] = useState(null);
//   const [remainingTime, setremainingTime] = useState(null);
//   const [purchaseArray, setPurchaseArray] = useState([]);
//   const [totalStakingRewards, setTotalStakingRewards] = useState(null);

//   const [withdrawalLoading, setWithdrawalLoading] = useState(false);
//   const [withdrawalSuccess, setWithdrawalSuccess] = useState(null);
//   const [endTime, SetendTime] = useState(null);
//   // Staking contract address and ABI
//   console.log("this is endtime from UseSTate", Number(endTime));
//   const contractAddress = "0x47F564607D6aCA3e2bDeaB4e09E8133b4dB86f13"; // Replace with actual staking contract address

//   const preSaleContractAddress = "0xE6627fb6916e40D438068f6106B674Dba8CAb3CA";

//   // Fetch staking data using the wallet address
//   async function fetchStakingDetails(signer) {
//     try {
//       const walletAddress = await signer.getAddress();

//       const preSaleABI = [
//         {
//           inputs: [
//             {
//               internalType: "contract IERC20",
//               name: "__USDT",
//               type: "address",
//             },
//             {
//               internalType: "contract IERC20",
//               name: "__GentTop",
//               type: "address",
//             },
//             { internalType: "address", name: "_staking", type: "address" },
//             { internalType: "address", name: "_owner", type: "address" },
//             { internalType: "uint256", name: "_price", type: "uint256" },
//           ],
//           stateMutability: "nonpayable",
//           type: "constructor",
//         },
//         {
//           inputs: [
//             { internalType: "uint256", name: "_usdtAmount", type: "uint256" },
//             { internalType: "address", name: "_buyer", type: "address" },
//             { internalType: "uint256", name: "_runner", type: "uint256" },
//           ],
//           name: "Buy",
//           outputs: [],
//           stateMutability: "nonpayable",
//           type: "function",
//         },
//         {
//           inputs: [
//             { internalType: "address", name: "", type: "address" },
//             { internalType: "uint256", name: "", type: "uint256" },
//           ],
//           name: "User",
//           outputs: [
//             { internalType: "address", name: "userAdd", type: "address" },
//             { internalType: "uint256", name: "joinTime", type: "uint256" },
//             { internalType: "uint256", name: "joiningAmount", type: "uint256" },
//             { internalType: "uint256", name: "percenTage", type: "uint256" },
//             { internalType: "uint256", name: "endTime", type: "uint256" },
//             { internalType: "uint256", name: "totalReward", type: "uint256" },
//           ],
//           stateMutability: "view",
//           type: "function",
//         },
//         {
//           inputs: [
//             { internalType: "address", name: "__user", type: "address" },
//           ],
//           name: "UserPurcahases",
//           outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
//           stateMutability: "view",
//           type: "function",
//         },
//         {
//           inputs: [],
//           name: "_BronzePercentage",
//           outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
//           stateMutability: "view",
//           type: "function",
//         },
//         {
//           inputs: [],
//           name: "_BronzePrice",
//           outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
//           stateMutability: "view",
//           type: "function",
//         },
//         {
//           inputs: [],
//           name: "_GentTop",
//           outputs: [
//             { internalType: "contract IERC20", name: "", type: "address" },
//           ],
//           stateMutability: "view",
//           type: "function",
//         },
//         {
//           inputs: [],
//           name: "_GoldPercentage",
//           outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
//           stateMutability: "view",
//           type: "function",
//         },
//         {
//           inputs: [],
//           name: "_GoldPrice",
//           outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
//           stateMutability: "view",
//           type: "function",
//         },
//         {
//           inputs: [],
//           name: "_SilverPercentage",
//           outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
//           stateMutability: "view",
//           type: "function",
//         },
//         {
//           inputs: [],
//           name: "_SilverPrice",
//           outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
//           stateMutability: "view",
//           type: "function",
//         },
//         {
//           inputs: [],
//           name: "_USDT",
//           outputs: [
//             { internalType: "contract IERC20", name: "", type: "address" },
//           ],
//           stateMutability: "view",
//           type: "function",
//         },
//         {
//           inputs: [],
//           name: "_bronzeSold",
//           outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
//           stateMutability: "view",
//           type: "function",
//         },
//         {
//           inputs: [],
//           name: "_goldSold",
//           outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
//           stateMutability: "view",
//           type: "function",
//         },
//         {
//           inputs: [],
//           name: "_limitSale",
//           outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
//           stateMutability: "view",
//           type: "function",
//         },
//         {
//           inputs: [],
//           name: "_silverSold",
//           outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
//           stateMutability: "view",
//           type: "function",
//         },
//         {
//           inputs: [],
//           name: "buyer",
//           outputs: [{ internalType: "address", name: "", type: "address" }],
//           stateMutability: "view",
//           type: "function",
//         },
//         {
//           inputs: [
//             { internalType: "address", name: "userAddress", type: "address" },
//             { internalType: "uint256", name: "_num", type: "uint256" },
//           ],
//           name: "checkCumulativeReward",
//           outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
//           stateMutability: "view",
//           type: "function",
//         },
//         {
//           inputs: [],
//           name: "getTotalTokenPurchased",
//           outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
//           stateMutability: "view",
//           type: "function",
//         },
//         {
//           inputs: [
//             { internalType: "address", name: "_userAdd", type: "address" },
//             { internalType: "uint256", name: "_num", type: "uint256" },
//           ],
//           name: "getUserData",
//           outputs: [
//             { internalType: "address", name: "", type: "address" },
//             { internalType: "uint256", name: "", type: "uint256" },
//             { internalType: "uint256", name: "", type: "uint256" },
//             { internalType: "uint256", name: "", type: "uint256" },
//             { internalType: "uint256", name: "", type: "uint256" },
//             { internalType: "uint256", name: "", type: "uint256" },
//           ],
//           stateMutability: "view",
//           type: "function",
//         },
//         {
//           inputs: [],
//           name: "owner",
//           outputs: [{ internalType: "address", name: "", type: "address" }],
//           stateMutability: "view",
//           type: "function",
//         },
//         {
//           inputs: [],
//           name: "price",
//           outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
//           stateMutability: "view",
//           type: "function",
//         },
//         {
//           inputs: [],
//           name: "salesClosingTime",
//           outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
//           stateMutability: "view",
//           type: "function",
//         },
//         {
//           inputs: [
//             { internalType: "uint256", name: "_percentage", type: "uint256" },
//             {
//               internalType: "uint256",
//               name: "_whichTypeOfPercentage",
//               type: "uint256",
//             },
//           ],
//           name: "setPercentage",
//           outputs: [],
//           stateMutability: "nonpayable",
//           type: "function",
//         },
//         {
//           inputs: [],
//           name: "staking",
//           outputs: [{ internalType: "address", name: "", type: "address" }],
//           stateMutability: "view",
//           type: "function",
//         },
//         {
//           inputs: [],
//           name: "totalTokenpurchased",
//           outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
//           stateMutability: "view",
//           type: "function",
//         },
//         {
//           inputs: [{ internalType: "address", name: "", type: "address" }],
//           name: "userPurcahases",
//           outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
//           stateMutability: "view",
//           type: "function",
//         },
//         {
//           inputs: [],
//           name: "withdrawAdmin",
//           outputs: [],
//           stateMutability: "nonpayable",
//           type: "function",
//         },
//       ];
//       const contract1 = new ethers.Contract(
//         "0xE6627fb6916e40D438068f6106B674Dba8CAb3CA",
//         [
//           {
//             inputs: [
//               {
//                 internalType: "contract IERC20",
//                 name: "__USDT",
//                 type: "address",
//               },
//               {
//                 internalType: "contract IERC20",
//                 name: "__GentTop",
//                 type: "address",
//               },
//               { internalType: "address", name: "_staking", type: "address" },
//               { internalType: "address", name: "_owner", type: "address" },
//               { internalType: "uint256", name: "_price", type: "uint256" },
//             ],
//             stateMutability: "nonpayable",
//             type: "constructor",
//           },
//           {
//             inputs: [
//               { internalType: "uint256", name: "_usdtAmount", type: "uint256" },
//               { internalType: "address", name: "_buyer", type: "address" },
//               { internalType: "uint256", name: "_runner", type: "uint256" },
//             ],
//             name: "Buy",
//             outputs: [],
//             stateMutability: "nonpayable",
//             type: "function",
//           },
//           {
//             inputs: [
//               { internalType: "address", name: "", type: "address" },
//               { internalType: "uint256", name: "", type: "uint256" },
//             ],
//             name: "User",
//             outputs: [
//               { internalType: "address", name: "userAdd", type: "address" },
//               { internalType: "uint256", name: "joinTime", type: "uint256" },
//               {
//                 internalType: "uint256",
//                 name: "joiningAmount",
//                 type: "uint256",
//               },
//               { internalType: "uint256", name: "percenTage", type: "uint256" },
//               { internalType: "uint256", name: "endTime", type: "uint256" },
//               { internalType: "uint256", name: "totalReward", type: "uint256" },
//             ],
//             stateMutability: "view",
//             type: "function",
//           },
//           {
//             inputs: [
//               { internalType: "address", name: "__user", type: "address" },
//             ],
//             name: "UserPurcahases",
//             outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
//             stateMutability: "view",
//             type: "function",
//           },
//           {
//             inputs: [],
//             name: "_BronzePercentage",
//             outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
//             stateMutability: "view",
//             type: "function",
//           },
//           {
//             inputs: [],
//             name: "_BronzePrice",
//             outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
//             stateMutability: "view",
//             type: "function",
//           },
//           {
//             inputs: [],
//             name: "_GentTop",
//             outputs: [
//               { internalType: "contract IERC20", name: "", type: "address" },
//             ],
//             stateMutability: "view",
//             type: "function",
//           },
//           {
//             inputs: [],
//             name: "_GoldPercentage",
//             outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
//             stateMutability: "view",
//             type: "function",
//           },
//           {
//             inputs: [],
//             name: "_GoldPrice",
//             outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
//             stateMutability: "view",
//             type: "function",
//           },
//           {
//             inputs: [],
//             name: "_SilverPercentage",
//             outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
//             stateMutability: "view",
//             type: "function",
//           },
//           {
//             inputs: [],
//             name: "_SilverPrice",
//             outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
//             stateMutability: "view",
//             type: "function",
//           },
//           {
//             inputs: [],
//             name: "_USDT",
//             outputs: [
//               { internalType: "contract IERC20", name: "", type: "address" },
//             ],
//             stateMutability: "view",
//             type: "function",
//           },
//           {
//             inputs: [],
//             name: "_bronzeSold",
//             outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
//             stateMutability: "view",
//             type: "function",
//           },
//           {
//             inputs: [],
//             name: "_goldSold",
//             outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
//             stateMutability: "view",
//             type: "function",
//           },
//           {
//             inputs: [],
//             name: "_limitSale",
//             outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
//             stateMutability: "view",
//             type: "function",
//           },
//           {
//             inputs: [],
//             name: "_silverSold",
//             outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
//             stateMutability: "view",
//             type: "function",
//           },
//           {
//             inputs: [],
//             name: "buyer",
//             outputs: [{ internalType: "address", name: "", type: "address" }],
//             stateMutability: "view",
//             type: "function",
//           },
//           {
//             inputs: [
//               { internalType: "address", name: "userAddress", type: "address" },
//               { internalType: "uint256", name: "_num", type: "uint256" },
//             ],
//             name: "checkCumulativeReward",
//             outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
//             stateMutability: "view",
//             type: "function",
//           },
//           {
//             inputs: [],
//             name: "getTotalTokenPurchased",
//             outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
//             stateMutability: "view",
//             type: "function",
//           },
//           {
//             inputs: [
//               { internalType: "address", name: "_userAdd", type: "address" },
//               { internalType: "uint256", name: "_num", type: "uint256" },
//             ],
//             name: "getUserData",
//             outputs: [
//               { internalType: "address", name: "", type: "address" },
//               { internalType: "uint256", name: "", type: "uint256" },
//               { internalType: "uint256", name: "", type: "uint256" },
//               { internalType: "uint256", name: "", type: "uint256" },
//               { internalType: "uint256", name: "", type: "uint256" },
//               { internalType: "uint256", name: "", type: "uint256" },
//             ],
//             stateMutability: "view",
//             type: "function",
//           },
//           {
//             inputs: [],
//             name: "owner",
//             outputs: [{ internalType: "address", name: "", type: "address" }],
//             stateMutability: "view",
//             type: "function",
//           },
//           {
//             inputs: [],
//             name: "price",
//             outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
//             stateMutability: "view",
//             type: "function",
//           },
//           {
//             inputs: [],
//             name: "salesClosingTime",
//             outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
//             stateMutability: "view",
//             type: "function",
//           },
//           {
//             inputs: [
//               { internalType: "uint256", name: "_percentage", type: "uint256" },
//               {
//                 internalType: "uint256",
//                 name: "_whichTypeOfPercentage",
//                 type: "uint256",
//               },
//             ],
//             name: "setPercentage",
//             outputs: [],
//             stateMutability: "nonpayable",
//             type: "function",
//           },
//           {
//             inputs: [],
//             name: "staking",
//             outputs: [{ internalType: "address", name: "", type: "address" }],
//             stateMutability: "view",
//             type: "function",
//           },
//           {
//             inputs: [],
//             name: "totalTokenpurchased",
//             outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
//             stateMutability: "view",
//             type: "function",
//           },
//           {
//             inputs: [{ internalType: "address", name: "", type: "address" }],
//             name: "userPurcahases",
//             outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
//             stateMutability: "view",
//             type: "function",
//           },
//           {
//             inputs: [],
//             name: "withdrawAdmin",
//             outputs: [],
//             stateMutability: "nonpayable",
//             type: "function",
//           },
//         ],
//         signer
//       );

//       const No_Of_Purchases = await contract1.UserPurcahases(walletAddress);

//       const numPurchases = Number(No_Of_Purchases);
//       console.log("from first number of purchases", numPurchases);
//       const purchases = Array.from(
//         { length: numPurchases },
//         (_, index) => index + 1
//       );

//       setPurchaseArray(purchases); // Update state with the purchases array
//       setLoading(false);
//       // console.log(num);
//       const stakingAbi = [
//         {
//           inputs: [
//             {
//               internalType: "contract IERC20",
//               name: "__USDT",
//               type: "address",
//             },
//             {
//               internalType: "contract IERC20",
//               name: "__GentTop",
//               type: "address",
//             },
//             { internalType: "address", name: "owner", type: "address" },
//           ],
//           stateMutability: "nonpayable",
//           type: "constructor",
//         },
//         {
//           inputs: [
//             { internalType: "address", name: "userAddress", type: "address" },
//             { internalType: "uint256", name: "_num", type: "uint256" },
//           ],
//           name: "GetUserData",
//           outputs: [
//             { internalType: "uint256", name: "", type: "uint256" },
//             { internalType: "uint256", name: "", type: "uint256" },
//             { internalType: "uint256", name: "", type: "uint256" },
//           ],
//           stateMutability: "view",
//           type: "function",
//         },
//         {
//           inputs: [],
//           name: "SECONDS_IN_A_DAY",
//           outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
//           stateMutability: "view",
//           type: "function",
//         },
//         {
//           inputs: [],
//           name: "STAKING_120_DAYS",
//           outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
//           stateMutability: "view",
//           type: "function",
//         },
//         {
//           inputs: [],
//           name: "STAKING_45_DAYS",
//           outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
//           stateMutability: "view",
//           type: "function",
//         },
//         {
//           inputs: [],
//           name: "STAKING_90_DAYS",
//           outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
//           stateMutability: "view",
//           type: "function",
//         },
//         {
//           inputs: [
//             { internalType: "address", name: "userAddress", type: "address" },
//             { internalType: "uint256", name: "_num", type: "uint256" },
//           ],
//           name: "WithdrawReward",
//           outputs: [],
//           stateMutability: "nonpayable",
//           type: "function",
//         },
//         {
//           inputs: [],
//           name: "_preSale",
//           outputs: [
//             { internalType: "contract IpreSale", name: "", type: "address" },
//           ],
//           stateMutability: "view",
//           type: "function",
//         },
//         {
//           inputs: [
//             { internalType: "address", name: "userAddress", type: "address" },
//             { internalType: "uint256", name: "_num", type: "uint256" },
//           ],
//           name: "checkCumulativeReward",
//           outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
//           stateMutability: "view",
//           type: "function",
//         },
//         {
//           inputs: [],
//           name: "checkGentTopBalance",
//           outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
//           stateMutability: "view",
//           type: "function",
//         },
//         {
//           inputs: [
//             { internalType: "address", name: "__preSale", type: "address" },
//           ],
//           name: "setPreSale",
//           outputs: [],
//           stateMutability: "nonpayable",
//           type: "function",
//         },
//         {
//           inputs: [],
//           name: "totalRewardsGiven",
//           outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
//           stateMutability: "view",
//           type: "function",
//         },
//         {
//           inputs: [{ internalType: "address", name: "", type: "address" }],
//           name: "userDatas",
//           outputs: [
//             { internalType: "address", name: "userAddress", type: "address" },
//             { internalType: "uint256", name: "joinTime", type: "uint256" },
//             { internalType: "uint256", name: "joiningAmount", type: "uint256" },
//             {
//               internalType: "uint256",
//               name: "stakingSeconds",
//               type: "uint256",
//             },
//           ],
//           stateMutability: "view",
//           type: "function",
//         },
//         {
//           inputs: [{ internalType: "address", name: "", type: "address" }],
//           name: "userPurcahases",
//           outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
//           stateMutability: "view",
//           type: "function",
//         },
//         {
//           inputs: [
//             { internalType: "address", name: "", type: "address" },
//             { internalType: "uint256", name: "", type: "uint256" },
//           ],
//           name: "userPurcahasesS",
//           outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
//           stateMutability: "view",
//           type: "function",
//         },
//         {
//           inputs: [],
//           name: "withdrawAdmin",
//           outputs: [],
//           stateMutability: "nonpayable",
//           type: "function",
//         },
//       ];
//       const contract = new ethers.Contract(
//         "0x47F564607D6aCA3e2bDeaB4e09E8133b4dB86f13",
//         [
//           {
//             inputs: [
//               {
//                 internalType: "contract IERC20",
//                 name: "__USDT",
//                 type: "address",
//               },
//               {
//                 internalType: "contract IERC20",
//                 name: "__GentTop",
//                 type: "address",
//               },
//               { internalType: "address", name: "owner", type: "address" },
//             ],
//             stateMutability: "nonpayable",
//             type: "constructor",
//           },
//           {
//             inputs: [
//               { internalType: "address", name: "userAddress", type: "address" },
//               { internalType: "uint256", name: "_num", type: "uint256" },
//             ],
//             name: "GetUserData",
//             outputs: [
//               { internalType: "uint256", name: "", type: "uint256" },
//               { internalType: "uint256", name: "", type: "uint256" },
//               { internalType: "uint256", name: "", type: "uint256" },
//             ],
//             stateMutability: "view",
//             type: "function",
//           },
//           {
//             inputs: [],
//             name: "SECONDS_IN_A_DAY",
//             outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
//             stateMutability: "view",
//             type: "function",
//           },
//           {
//             inputs: [],
//             name: "STAKING_120_DAYS",
//             outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
//             stateMutability: "view",
//             type: "function",
//           },
//           {
//             inputs: [],
//             name: "STAKING_45_DAYS",
//             outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
//             stateMutability: "view",
//             type: "function",
//           },
//           {
//             inputs: [],
//             name: "STAKING_90_DAYS",
//             outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
//             stateMutability: "view",
//             type: "function",
//           },
//           {
//             inputs: [
//               { internalType: "address", name: "userAddress", type: "address" },
//               { internalType: "uint256", name: "_num", type: "uint256" },
//             ],
//             name: "WithdrawReward",
//             outputs: [],
//             stateMutability: "nonpayable",
//             type: "function",
//           },
//           {
//             inputs: [],
//             name: "_preSale",
//             outputs: [
//               { internalType: "contract IpreSale", name: "", type: "address" },
//             ],
//             stateMutability: "view",
//             type: "function",
//           },
//           {
//             inputs: [
//               { internalType: "address", name: "userAddress", type: "address" },
//               { internalType: "uint256", name: "_num", type: "uint256" },
//             ],
//             name: "checkCumulativeReward",
//             outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
//             stateMutability: "view",
//             type: "function",
//           },
//           {
//             inputs: [],
//             name: "checkGentTopBalance",
//             outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
//             stateMutability: "view",
//             type: "function",
//           },
//           {
//             inputs: [
//               { internalType: "address", name: "__preSale", type: "address" },
//             ],
//             name: "setPreSale",
//             outputs: [],
//             stateMutability: "nonpayable",
//             type: "function",
//           },
//           {
//             inputs: [],
//             name: "totalRewardsGiven",
//             outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
//             stateMutability: "view",
//             type: "function",
//           },
//           {
//             inputs: [{ internalType: "address", name: "", type: "address" }],
//             name: "userDatas",
//             outputs: [
//               { internalType: "address", name: "userAddress", type: "address" },
//               { internalType: "uint256", name: "joinTime", type: "uint256" },
//               {
//                 internalType: "uint256",
//                 name: "joiningAmount",
//                 type: "uint256",
//               },
//               {
//                 internalType: "uint256",
//                 name: "stakingSeconds",
//                 type: "uint256",
//               },
//             ],
//             stateMutability: "view",
//             type: "function",
//           },
//           {
//             inputs: [{ internalType: "address", name: "", type: "address" }],
//             name: "userPurcahases",
//             outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
//             stateMutability: "view",
//             type: "function",
//           },
//           {
//             inputs: [
//               { internalType: "address", name: "", type: "address" },
//               { internalType: "uint256", name: "", type: "uint256" },
//             ],
//             name: "userPurcahasesS",
//             outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
//             stateMutability: "view",
//             type: "function",
//           },
//           {
//             inputs: [],
//             name: "withdrawAdmin",
//             outputs: [],
//             stateMutability: "nonpayable",
//             type: "function",
//           },
//         ],
//         signer
//       );
//       console.log("this is stacking Contract", walletAddress, contract);
//       setStakingContract(contract);
//       const currentRewards = await contract.checkCumulativeReward(
//         walletAddress,
//         numPurchases
//       );
//       console.log("This is Current Reward", currentRewards);

//       // Fetch user data, including staking seconds and joining amount
//       const totalStakingRewardss = await contract.GetUserData(
//         walletAddress,
//         numPurchases
//       );

//       const [joinTime, endTime, totalReward] = totalStakingRewardss;
//       console.log("this is User data of end time ", numPurchases);

//       const currentReward = ethers.utils.formatEther(currentRewards); // Format current reward to readable value
//       console.log(currentReward);

//       // const currentTime = Math.floor(Date.now() / 1000);
//       // let timeRemainingInSeconds = Number(currentTime) - Number(endTime);

//       // console.log("this current Time ", currentTime);

//       // // let remainingTime = `${hours}H : ${minutes}M : ${seconds}S`;
//       const totalStakingRewards = totalReward / 1e18; // Format total staking rewards
//       SetendTime(endTime);
//       const EndTime = endTime;
//       console.log(totalStakingRewards);
//       setNo_Of_Purchases(No_Of_Purchases);
//       setCurrentReward(currentReward);
//       setTotalStakingRewards((totalStakingRewards * 1e9).toFixed(8));
//       setTotalStakingRewards(totalStakingRewards);
//       setEndTime(new Date(EndTime * 1000).toLocaleString());
//       // setremainingTime(remainingTime);
//       // Format the values assuming the returned values are in wei
//       // const currentRewardFormatted = ethers.utils.formatEther(currentReward); // Format current reward to readable value

//       // console.log(totalStakingRewards);

//       // await fetchGentTopBalance();
//     } catch (error) {
//       console.error("Error fetching staking data:", error);
//     }
//     return endTime;
//   }

//   // Connect wallet function with automatic data fetching
//   const connectWallet = async () => {
//     try {
//       const web3Modal = new Web3Modal({
//         cacheProvider: false,
//         providerOptions,
//       });

//       const web3modalInstance = await web3Modal.connect();
//       const web3modalProvider = new ethers.providers.Web3Provider(
//         web3modalInstance
//       );

//       if (web3modalProvider) {
//         const signer = web3modalProvider.getSigner();
//         console.log(signer);
//         setSigner(signer);

//         const walletAddress = await signer.getAddress();
//         console.log(walletAddress);
//         // Update state with wallet details
//         setWalletAddress(walletAddress);

//         // Fetch staking data right after connecting the wallet
//         setLoading(true);
//         await fetchStakingDetails(signer); // Pass signer directly
//         // await updateCountdown();

//         setLoading(false);
//       }
//     } catch (error) {
//       console.log("Error connecting wallet:", error);
//     }
//   };

//   // Withdraw function
//   const withdrawReward = async () => {
//     try {
//       const web3Modal = new Web3Modal({
//         cacheProvider: false,
//         providerOptions,
//       });

//       const web3modalInstance = await web3Modal.connect();
//       const web3modalProvider = new ethers.providers.Web3Provider(
//         web3modalInstance
//       );

//       if (web3modalProvider) {
//         // provider = new ethers.providers.JsonRpcProvider(
//         //   "https://1rpc.io/holesky"
//         // );
//         // const signer = await provider.getSigner();
//         // console.log(signer);
//         const walletAddress = await signer.getAddress();
//         console.log(walletAddress);
//         // Update state with wallet details
//         setWalletAddress(walletAddress);
//         console.log(Number(No_Of_Purchases), walletAddress);
//         const number = Number(No_Of_Purchases);
//         const contract = new ethers.Contract(
//           contractAddress,
//           [
//             {
//               inputs: [
//                 {
//                   internalType: "contract IERC20",
//                   name: "__USDT",
//                   type: "address",
//                 },
//                 {
//                   internalType: "contract IERC20",
//                   name: "__GentTop",
//                   type: "address",
//                 },
//                 { internalType: "address", name: "owner", type: "address" },
//               ],
//               stateMutability: "nonpayable",
//               type: "constructor",
//             },
//             {
//               inputs: [
//                 {
//                   internalType: "address",
//                   name: "userAddress",
//                   type: "address",
//                 },
//                 { internalType: "uint256", name: "_num", type: "uint256" },
//               ],
//               name: "GetUserData",
//               outputs: [
//                 { internalType: "uint256", name: "", type: "uint256" },
//                 { internalType: "uint256", name: "", type: "uint256" },
//                 { internalType: "uint256", name: "", type: "uint256" },
//               ],
//               stateMutability: "view",
//               type: "function",
//             },
//             {
//               inputs: [],
//               name: "SECONDS_IN_A_DAY",
//               outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
//               stateMutability: "view",
//               type: "function",
//             },
//             {
//               inputs: [],
//               name: "STAKING_120_DAYS",
//               outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
//               stateMutability: "view",
//               type: "function",
//             },
//             {
//               inputs: [],
//               name: "STAKING_45_DAYS",
//               outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
//               stateMutability: "view",
//               type: "function",
//             },
//             {
//               inputs: [],
//               name: "STAKING_90_DAYS",
//               outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
//               stateMutability: "view",
//               type: "function",
//             },
//             {
//               inputs: [
//                 {
//                   internalType: "address",
//                   name: "userAddress",
//                   type: "address",
//                 },
//                 { internalType: "uint256", name: "_num", type: "uint256" },
//               ],
//               name: "WithdrawReward",
//               outputs: [],
//               stateMutability: "nonpayable",
//               type: "function",
//             },
//             {
//               inputs: [],
//               name: "_preSale",
//               outputs: [
//                 {
//                   internalType: "contract IpreSale",
//                   name: "",
//                   type: "address",
//                 },
//               ],
//               stateMutability: "view",
//               type: "function",
//             },
//             {
//               inputs: [
//                 {
//                   internalType: "address",
//                   name: "userAddress",
//                   type: "address",
//                 },
//                 { internalType: "uint256", name: "_num", type: "uint256" },
//               ],
//               name: "checkCumulativeReward",
//               outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
//               stateMutability: "view",
//               type: "function",
//             },
//             {
//               inputs: [],
//               name: "checkGentTopBalance",
//               outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
//               stateMutability: "view",
//               type: "function",
//             },
//             {
//               inputs: [
//                 { internalType: "address", name: "__preSale", type: "address" },
//               ],
//               name: "setPreSale",
//               outputs: [],
//               stateMutability: "nonpayable",
//               type: "function",
//             },
//             {
//               inputs: [],
//               name: "totalRewardsGiven",
//               outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
//               stateMutability: "view",
//               type: "function",
//             },
//             {
//               inputs: [{ internalType: "address", name: "", type: "address" }],
//               name: "userDatas",
//               outputs: [
//                 {
//                   internalType: "address",
//                   name: "userAddress",
//                   type: "address",
//                 },
//                 { internalType: "uint256", name: "joinTime", type: "uint256" },
//                 {
//                   internalType: "uint256",
//                   name: "joiningAmount",
//                   type: "uint256",
//                 },
//                 {
//                   internalType: "uint256",
//                   name: "stakingSeconds",
//                   type: "uint256",
//                 },
//               ],
//               stateMutability: "view",
//               type: "function",
//             },
//             {
//               inputs: [{ internalType: "address", name: "", type: "address" }],
//               name: "userPurcahases",
//               outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
//               stateMutability: "view",
//               type: "function",
//             },
//             {
//               inputs: [
//                 { internalType: "address", name: "", type: "address" },
//                 { internalType: "uint256", name: "", type: "uint256" },
//               ],
//               name: "userPurcahasesS",
//               outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
//               stateMutability: "view",
//               type: "function",
//             },
//             {
//               inputs: [],
//               name: "withdrawAdmin",
//               outputs: [],
//               stateMutability: "nonpayable",
//               type: "function",
//             },
//           ],
//           signer
//         );

//         // Call the WithdrawReward function from the contract
//         const tx = await contract.WithdrawReward(walletAddress, number);
//         console.log("nothing ", tx);
//         // Wait for transaction to be mined
//         await tx.wait();
//       }

//       console.log("Reward withdrawn successfully!");
//     } catch (error) {
//       console.error("Error withdrawing reward:", error);
//     }
//   };

//   // const [remainingTime, setRemainingTime] = useState('');

//   useEffect(() => {
//     const updateCountdown = async () => {
//       // const web3Modal = new Web3Modal({
//       //   cacheProvider: false,
//       //   providerOptions,
//       // });

//       // const web3modalInstance = await web3Modal.connect();
//       // const web3modalProvider = new ethers.providers.Web3Provider(
//       //   web3modalInstance
//       // );

//       // const signer = web3modalProvider.getSigner();
//       // console.log(signer);

//       // const walletAddress = await signer.getAddress();

//       // Fetch staking data right after connecting the wallet

//       console.log(`from useEffect : => ${signer}`);

//       const preSaleABI = [
//         {
//           inputs: [
//             {
//               internalType: "contract IERC20",
//               name: "__USDT",
//               type: "address",
//             },
//             {
//               internalType: "contract IERC20",
//               name: "__GentTop",
//               type: "address",
//             },
//             { internalType: "address", name: "_staking", type: "address" },
//             { internalType: "address", name: "_owner", type: "address" },
//             { internalType: "uint256", name: "_price", type: "uint256" },
//           ],
//           stateMutability: "nonpayable",
//           type: "constructor",
//         },
//         {
//           inputs: [
//             { internalType: "uint256", name: "_usdtAmount", type: "uint256" },
//             { internalType: "address", name: "_buyer", type: "address" },
//             { internalType: "uint256", name: "_runner", type: "uint256" },
//           ],
//           name: "Buy",
//           outputs: [],
//           stateMutability: "nonpayable",
//           type: "function",
//         },
//         {
//           inputs: [
//             { internalType: "address", name: "", type: "address" },
//             { internalType: "uint256", name: "", type: "uint256" },
//           ],
//           name: "User",
//           outputs: [
//             { internalType: "address", name: "userAdd", type: "address" },
//             { internalType: "uint256", name: "joinTime", type: "uint256" },
//             {
//               internalType: "uint256",
//               name: "joiningAmount",
//               type: "uint256",
//             },
//             { internalType: "uint256", name: "percenTage", type: "uint256" },
//             { internalType: "uint256", name: "endTime", type: "uint256" },
//             { internalType: "uint256", name: "totalReward", type: "uint256" },
//           ],
//           stateMutability: "view",
//           type: "function",
//         },
//         {
//           inputs: [
//             { internalType: "address", name: "__user", type: "address" },
//           ],
//           name: "UserPurcahases",
//           outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
//           stateMutability: "view",
//           type: "function",
//         },
//         {
//           inputs: [],
//           name: "_BronzePercentage",
//           outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
//           stateMutability: "view",
//           type: "function",
//         },
//         {
//           inputs: [],
//           name: "_BronzePrice",
//           outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
//           stateMutability: "view",
//           type: "function",
//         },
//         {
//           inputs: [],
//           name: "_GentTop",
//           outputs: [
//             { internalType: "contract IERC20", name: "", type: "address" },
//           ],
//           stateMutability: "view",
//           type: "function",
//         },
//         {
//           inputs: [],
//           name: "_GoldPercentage",
//           outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
//           stateMutability: "view",
//           type: "function",
//         },
//         {
//           inputs: [],
//           name: "_GoldPrice",
//           outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
//           stateMutability: "view",
//           type: "function",
//         },
//         {
//           inputs: [],
//           name: "_SilverPercentage",
//           outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
//           stateMutability: "view",
//           type: "function",
//         },
//         {
//           inputs: [],
//           name: "_SilverPrice",
//           outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
//           stateMutability: "view",
//           type: "function",
//         },
//         {
//           inputs: [],
//           name: "_USDT",
//           outputs: [
//             { internalType: "contract IERC20", name: "", type: "address" },
//           ],
//           stateMutability: "view",
//           type: "function",
//         },
//         {
//           inputs: [],
//           name: "_bronzeSold",
//           outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
//           stateMutability: "view",
//           type: "function",
//         },
//         {
//           inputs: [],
//           name: "_goldSold",
//           outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
//           stateMutability: "view",
//           type: "function",
//         },
//         {
//           inputs: [],
//           name: "_limitSale",
//           outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
//           stateMutability: "view",
//           type: "function",
//         },
//         {
//           inputs: [],
//           name: "_silverSold",
//           outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
//           stateMutability: "view",
//           type: "function",
//         },
//         {
//           inputs: [],
//           name: "buyer",
//           outputs: [{ internalType: "address", name: "", type: "address" }],
//           stateMutability: "view",
//           type: "function",
//         },
//         {
//           inputs: [
//             { internalType: "address", name: "userAddress", type: "address" },
//             { internalType: "uint256", name: "_num", type: "uint256" },
//           ],
//           name: "checkCumulativeReward",
//           outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
//           stateMutability: "view",
//           type: "function",
//         },
//         {
//           inputs: [],
//           name: "getTotalTokenPurchased",
//           outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
//           stateMutability: "view",
//           type: "function",
//         },
//         {
//           inputs: [
//             { internalType: "address", name: "_userAdd", type: "address" },
//             { internalType: "uint256", name: "_num", type: "uint256" },
//           ],
//           name: "getUserData",
//           outputs: [
//             { internalType: "address", name: "", type: "address" },
//             { internalType: "uint256", name: "", type: "uint256" },
//             { internalType: "uint256", name: "", type: "uint256" },
//             { internalType: "uint256", name: "", type: "uint256" },
//             { internalType: "uint256", name: "", type: "uint256" },
//             { internalType: "uint256", name: "", type: "uint256" },
//           ],
//           stateMutability: "view",
//           type: "function",
//         },
//         {
//           inputs: [],
//           name: "owner",
//           outputs: [{ internalType: "address", name: "", type: "address" }],
//           stateMutability: "view",
//           type: "function",
//         },
//         {
//           inputs: [],
//           name: "price",
//           outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
//           stateMutability: "view",
//           type: "function",
//         },
//         {
//           inputs: [],
//           name: "salesClosingTime",
//           outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
//           stateMutability: "view",
//           type: "function",
//         },
//         {
//           inputs: [
//             { internalType: "uint256", name: "_percentage", type: "uint256" },
//             {
//               internalType: "uint256",
//               name: "_whichTypeOfPercentage",
//               type: "uint256",
//             },
//           ],
//           name: "setPercentage",
//           outputs: [],
//           stateMutability: "nonpayable",
//           type: "function",
//         },
//         {
//           inputs: [],
//           name: "staking",
//           outputs: [{ internalType: "address", name: "", type: "address" }],
//           stateMutability: "view",
//           type: "function",
//         },
//         {
//           inputs: [],
//           name: "totalTokenpurchased",
//           outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
//           stateMutability: "view",
//           type: "function",
//         },
//         {
//           inputs: [{ internalType: "address", name: "", type: "address" }],
//           name: "userPurcahases",
//           outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
//           stateMutability: "view",
//           type: "function",
//         },
//         {
//           inputs: [],
//           name: "withdrawAdmin",
//           outputs: [],
//           stateMutability: "nonpayable",
//           type: "function",
//         },
//       ];
//       const contract1 = new ethers.Contract(
//         "0x08B60D7804033A15aFFb1Db781DAEEb03c57dCC8",
//         preSaleABI,
//         signer
//       );
//       const No_Of_Purchases = await contract1.UserPurcahases(walletAddress);
//       const numPurchases = Number(No_Of_Purchases);
//       const purchases = Array.from(
//         { length: numPurchases },
//         (_, index) => index + 1
//       );

//       const stakingAbi = [
//         {
//           inputs: [
//             {
//               internalType: "contract IERC20",
//               name: "__USDT",
//               type: "address",
//             },
//             {
//               internalType: "contract IERC20",
//               name: "__GentTop",
//               type: "address",
//             },
//             { internalType: "address", name: "owner", type: "address" },
//           ],
//           stateMutability: "nonpayable",
//           type: "constructor",
//         },
//         {
//           inputs: [
//             { internalType: "address", name: "userAddress", type: "address" },
//             { internalType: "uint256", name: "_num", type: "uint256" },
//           ],
//           name: "GetUserData",
//           outputs: [
//             { internalType: "uint256", name: "", type: "uint256" },
//             { internalType: "uint256", name: "", type: "uint256" },
//             { internalType: "uint256", name: "", type: "uint256" },
//           ],
//           stateMutability: "view",
//           type: "function",
//         },
//         {
//           inputs: [],
//           name: "SECONDS_IN_A_DAY",
//           outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
//           stateMutability: "view",
//           type: "function",
//         },
//         {
//           inputs: [],
//           name: "STAKING_120_DAYS",
//           outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
//           stateMutability: "view",
//           type: "function",
//         },
//         {
//           inputs: [],
//           name: "STAKING_45_DAYS",
//           outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
//           stateMutability: "view",
//           type: "function",
//         },
//         {
//           inputs: [],
//           name: "STAKING_90_DAYS",
//           outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
//           stateMutability: "view",
//           type: "function",
//         },
//         {
//           inputs: [
//             { internalType: "address", name: "userAddress", type: "address" },
//             { internalType: "uint256", name: "_num", type: "uint256" },
//           ],
//           name: "WithdrawReward",
//           outputs: [],
//           stateMutability: "nonpayable",
//           type: "function",
//         },
//         {
//           inputs: [],
//           name: "_preSale",
//           outputs: [
//             { internalType: "contract IpreSale", name: "", type: "address" },
//           ],
//           stateMutability: "view",
//           type: "function",
//         },
//         {
//           inputs: [
//             { internalType: "address", name: "userAddress", type: "address" },
//             { internalType: "uint256", name: "_num", type: "uint256" },
//           ],
//           name: "checkCumulativeReward",
//           outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
//           stateMutability: "view",
//           type: "function",
//         },
//         {
//           inputs: [],
//           name: "checkGentTopBalance",
//           outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
//           stateMutability: "view",
//           type: "function",
//         },
//         {
//           inputs: [
//             { internalType: "address", name: "__preSale", type: "address" },
//           ],
//           name: "setPreSale",
//           outputs: [],
//           stateMutability: "nonpayable",
//           type: "function",
//         },
//         {
//           inputs: [],
//           name: "totalRewardsGiven",
//           outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
//           stateMutability: "view",
//           type: "function",
//         },
//         {
//           inputs: [{ internalType: "address", name: "", type: "address" }],
//           name: "userDatas",
//           outputs: [
//             { internalType: "address", name: "userAddress", type: "address" },
//             { internalType: "uint256", name: "joinTime", type: "uint256" },
//             {
//               internalType: "uint256",
//               name: "joiningAmount",
//               type: "uint256",
//             },
//             {
//               internalType: "uint256",
//               name: "stakingSeconds",
//               type: "uint256",
//             },
//           ],
//           stateMutability: "view",
//           type: "function",
//         },
//         {
//           inputs: [{ internalType: "address", name: "", type: "address" }],
//           name: "userPurcahases",
//           outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
//           stateMutability: "view",
//           type: "function",
//         },
//         {
//           inputs: [
//             { internalType: "address", name: "", type: "address" },
//             { internalType: "uint256", name: "", type: "uint256" },
//           ],
//           name: "userPurcahasesS",
//           outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
//           stateMutability: "view",
//           type: "function",
//         },
//         {
//           inputs: [],
//           name: "withdrawAdmin",
//           outputs: [],
//           stateMutability: "nonpayable",
//           type: "function",
//         },
//       ];

//       const contract = new ethers.Contract(
//         contractAddress,
//         [
//           {
//             inputs: [
//               {
//                 internalType: "contract IERC20",
//                 name: "__USDT",
//                 type: "address",
//               },
//               {
//                 internalType: "contract IERC20",
//                 name: "__GentTop",
//                 type: "address",
//               },
//               { internalType: "address", name: "owner", type: "address" },
//             ],
//             stateMutability: "nonpayable",
//             type: "constructor",
//           },
//           {
//             inputs: [
//               { internalType: "address", name: "userAddress", type: "address" },
//               { internalType: "uint256", name: "_num", type: "uint256" },
//             ],
//             name: "GetUserData",
//             outputs: [
//               { internalType: "uint256", name: "", type: "uint256" },
//               { internalType: "uint256", name: "", type: "uint256" },
//               { internalType: "uint256", name: "", type: "uint256" },
//             ],
//             stateMutability: "view",
//             type: "function",
//           },
//           {
//             inputs: [],
//             name: "SECONDS_IN_A_DAY",
//             outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
//             stateMutability: "view",
//             type: "function",
//           },
//           {
//             inputs: [],
//             name: "STAKING_120_DAYS",
//             outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
//             stateMutability: "view",
//             type: "function",
//           },
//           {
//             inputs: [],
//             name: "STAKING_45_DAYS",
//             outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
//             stateMutability: "view",
//             type: "function",
//           },
//           {
//             inputs: [],
//             name: "STAKING_90_DAYS",
//             outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
//             stateMutability: "view",
//             type: "function",
//           },
//           {
//             inputs: [
//               { internalType: "address", name: "userAddress", type: "address" },
//               { internalType: "uint256", name: "_num", type: "uint256" },
//             ],
//             name: "WithdrawReward",
//             outputs: [],
//             stateMutability: "nonpayable",
//             type: "function",
//           },
//           {
//             inputs: [],
//             name: "_preSale",
//             outputs: [
//               { internalType: "contract IpreSale", name: "", type: "address" },
//             ],
//             stateMutability: "view",
//             type: "function",
//           },
//           {
//             inputs: [
//               { internalType: "address", name: "userAddress", type: "address" },
//               { internalType: "uint256", name: "_num", type: "uint256" },
//             ],
//             name: "checkCumulativeReward",
//             outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
//             stateMutability: "view",
//             type: "function",
//           },
//           {
//             inputs: [],
//             name: "checkGentTopBalance",
//             outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
//             stateMutability: "view",
//             type: "function",
//           },
//           {
//             inputs: [
//               { internalType: "address", name: "__preSale", type: "address" },
//             ],
//             name: "setPreSale",
//             outputs: [],
//             stateMutability: "nonpayable",
//             type: "function",
//           },
//           {
//             inputs: [],
//             name: "totalRewardsGiven",
//             outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
//             stateMutability: "view",
//             type: "function",
//           },
//           {
//             inputs: [{ internalType: "address", name: "", type: "address" }],
//             name: "userDatas",
//             outputs: [
//               { internalType: "address", name: "userAddress", type: "address" },
//               { internalType: "uint256", name: "joinTime", type: "uint256" },
//               {
//                 internalType: "uint256",
//                 name: "joiningAmount",
//                 type: "uint256",
//               },
//               {
//                 internalType: "uint256",
//                 name: "stakingSeconds",
//                 type: "uint256",
//               },
//             ],
//             stateMutability: "view",
//             type: "function",
//           },
//           {
//             inputs: [{ internalType: "address", name: "", type: "address" }],
//             name: "userPurcahases",
//             outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
//             stateMutability: "view",
//             type: "function",
//           },
//           {
//             inputs: [
//               { internalType: "address", name: "", type: "address" },
//               { internalType: "uint256", name: "", type: "uint256" },
//             ],
//             name: "userPurcahasesS",
//             outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
//             stateMutability: "view",
//             type: "function",
//           },
//           {
//             inputs: [],
//             name: "withdrawAdmin",
//             outputs: [],
//             stateMutability: "nonpayable",
//             type: "function",
//           },
//         ],
//         signer
//       );
//       const totalStakingRewardss = await contract.GetUserData(
//         walletAddress,
//         numPurchases
//       );

//       console.log("this is User data", totalStakingRewardss);
//       //  const [joinTime, EndTime, totalReward] = totalStakingRewardss;
//       const now = new Date().getTime();
//       console.log(now);
//       // const endTime = 1763189959 * 1000;
//       const endTime = Number(EndTime) * 1000;
//       const distance = Number(endTime) - Number(now);

//       const days = Math.floor(distance / (1000 * 60 * 60 * 24));
//       const hours = Math.floor(
//         (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
//       );
//       const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//       const seconds = Math.floor((distance % (1000 * 60)) / 1000);

//       console.log(`${days}d ${hours}h ${minutes}m ${seconds}s`);

//       setremainingTime(`${days}d ${hours}h ${minutes}m ${seconds}s`);

//       if (distance < 0) {
//         clearInterval(interval);
//         setremainingTime("Now you can witdraw your Reward");
//       }
//     };

//     // Update the countdown every second
//     const interval = setInterval(updateCountdown, 1000);

//     // Clean up the interval when the component unmounts
//     return () => clearInterval(interval);
//   }, [walletAddress, signer]);
//   // const fetchGentTopBalance = async (signer) => {
//   //   try {
//   //     // Instantiate the contract
//   //     const contract = new ethers.Contract(contractAddress, stakingAbi, signer);

//   //     // Call the checkGentTopBalance function from the contract
//   //     const gentTopBalance = await contract.checkGentTopBalance();

//   //     // Format the balance (assumes the balance is in wei)
//   //     const gentTopBalanceFormatted = ethers.utils.formatEther(gentTopBalance);

//   //     // Update state or return the formatted value
//   //     setGentTopBalance(Number(gentTopBalanceFormatted));
//   //   } catch (error) {
//   //     console.error("Error fetching GentTop balance:", error);
//   //     setGentTopBalance("0");
//   //   }
//   // };
//   // useEffect(() => {}, []);

//   useEffect(() => {
//     const interval = setInterval(async () => {
//       const endTime = await updateCountdown();
//       console.log("this is endTime from useEffect", endTime);
//     }, 1000);

//     return clearInterval(interval);
//   }, [endTime]);

//   function shortenAddress(address) {
//     if (!address) return "";
//     return `${address.slice(0, 6)}...${address.slice(-4)}`;
//   }
//   return (
//     <div>
//       <nav className=" bg-[#14000b] font-san fixed w-full z-20 top-0 start-0 border-b ">
//         <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
//           <a
//             href="https://flowbite.com/"
//             className="flex items-center space-x-3 rtl:space-x-reverse"
//           >
//             <Link href="/">
//               <Image
//                 src="/logo1.png"
//                 width={10000}
//                 height={10000}
//                 alt="Logo"
//                 className="h-16 w-16"
//               />
//             </Link>
//             <span className="self-center text-2xl font-semibold text-white">
//               Gentop
//             </span>
//           </a>
//           {/* <ToastContainer position="top-right" autoClose={50000} /> */}

//           <div className="flex md:order-2 border-2 p-2 rounded-lg text-white space-x-3 md:space-x-0 rtl:space-x-reverse">
//             <button className="" onClick={connectWallet}>
//               {walletAddress
//                 ? shortenAddress(walletAddress)
//                 : "Connect Wallet To View Your Data"}
//             </button>
//           </div>
//           <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
//             <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 text-white text-xl rounded-lg bg-[#14000b] md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
//               <li>
//                 <a href="/" className="block py-3 px-3 " aria-current="page">
//                   Home
//                 </a>
//               </li>
//               <li>
//                 <a href="/about" className="block py-3 px-3 ">
//                   Audit
//                 </a>
//               </li>
//               <li>
//                 <a href="/" className="block py-3 px-3   ">
//                   White Paper
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//       <div className="flex flex-col md:flex-row mt-10 min-h-screen text-white p-10 space-x-5">
//         {/* Left Side: Connect Wallet Button */}
//         <div className="w-full md:w-1/3 p-10 shadow-md rounded-lg">
//           <h2 className="text-xl font-semibold mb-6">User Dashboard</h2>
//           <div className="w-full p-3 bg-[#F05B76] font-bold text-white rounded-md border-2 border-white text-lg">
//             Address : {walletAddress ? shortenAddress(walletAddress) : ""}
//           </div>

//           {loading ? (
//             <p>Loading purchases...</p>
//           ) : (
//             <div className="text-black">
//               <label htmlFor="purchaseSelect" className="text-white">
//                 Select No. of Purchases:
//               </label>
//               <br />
//               <select id="purchaseSelect">
//                 {purchaseArray.map((purchase, index) => (
//                   <option className="text-black" key={index} value={purchase}>
//                     Purchase #{purchase}
//                   </option>
//                 ))}
//               </select>
//             </div>
//           )}
//           <button
//             onClick={withdrawReward} // Pass amount if applicable
//             className="w-full p-3 mt-4 bg-[#97833d] border-2 border-white font-bold text-white rounded-md text-lg"
//           >
//             Withdrawal
//           </button>
//         </div>

//         {/* Right Side: Address Information Table */}
//         <div className="w-full md:w-2/3 p-10 shadow-md rounded-lg">
//           <h2 className="text-xl font-semibold mb-6">Address Information</h2>

//           {/* Show loading, wallet connection status, or data */}
//           {loading ? (
//             <p className="text-yellow-500">Loading...</p>
//           ) : !walletAddress ? (
//             <p className="text-red-500 text-lg">
//               Please connect your wallet to view staking data.
//             </p>
//           ) : (
//             <div className="overflow-x-auto">
//               <table className="w-full table-auto border-collapse border border-gray-300 text-xl">
//                 <thead>
//                   <tr className="bg-[#2C0219]">
//                     <th className="border px- py-8 text-[#9168BF]">Detail</th>
//                     <th className="border px-28 py-8 text-[#9168BF]">Value</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   <tr>
//                     <td className="border px-36 py-4">Current Reward</td>
//                     <td className="border px-36 py-4 text-[#F7CE3C] font-bold">
//                       {currentReward ? `${currentReward}` : "No Data Found"}
//                     </td>
//                   </tr>
//                   <tr>
//                     <td className="border px-36 py-4">Total Staking Rewards</td>
//                     <td className="border px-36 py-4 text-[#F7CE3C] font-bold">
//                       {totalStakingRewards
//                         ? `${totalStakingRewards}`
//                         : "No Data Found"}
//                     </td>
//                   </tr>
//                   <tr>
//                     <td className="border px-36 py-4">Days Left</td>
//                     <td className="border px-36 py-4 text-[#F7CE3C] font-bold">
//                       {/* {remainingTime
//                       ? `${remainingTime}`
//                       : "Hours:00 ,Min : 00, Secs :00 "} */}
//                       {remainingTime}
//                     </td>
//                   </tr>
//                 </tbody>
//               </table>
//             </div>
//           )}
//           {/* {!loading && !details && walletAddress && (
//           <p className="text-red-500 text-lg">
//             No staking data found for the connected wallet address.
//           </p>
//         )} */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UDashboard;

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
    <div className="mt-4 text-white flex flex-col items-center justify-center h-screen">
      <h1>User Dashboard</h1>

      <div>
        <UserDashboard1 />
      </div>
    </div>
  );
};

export default UserDashboard;
