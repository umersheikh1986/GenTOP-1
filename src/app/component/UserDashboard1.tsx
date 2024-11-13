// import React, { useState } from "react";

// interface AddressDetails {
//   currentReward: string;
//   totalStakingRewards: string;
//   daysLeft: number;
// }

// const addressDetails: { [key: string]: AddressDetails } = {
//   address1: {
//     currentReward: "100 GT",
//     totalStakingRewards: "500 GT",
//     daysLeft: 30,
//   },
//   address2: {
//     currentReward: "200 GT",
//     totalStakingRewards: "700 GT",
//     daysLeft: 25,
//   },
//   address3: {
//     currentReward: "150 GT",
//     totalStakingRewards: "600 GT",
//     daysLeft: 20,
//   },
//   address4: {
//     currentReward: "250 GT",
//     totalStakingRewards: "800 GT",
//     daysLeft: 15,
//   },
//   address5: {
//     currentReward: "180 GT",
//     totalStakingRewards: "550 GT",
//     daysLeft: 18,
//   },
//   address6: {
//     currentReward: "300 GT",
//     totalStakingRewards: "1000 GT",
//     daysLeft: 12,
//   },
//   address7: {
//     currentReward: "120 GT",
//     totalStakingRewards: "400 GT",
//     daysLeft: 22,
//   },
//   address8: {
//     currentReward: "220 GT",
//     totalStakingRewards: "750 GT",
//     daysLeft: 10,
//   },
// };

// // Address options for the dropdown
// const addressOptions = [
//   { value: "address1", label: "Address 1" },
//   { value: "address2", label: "Address 2" },
//   { value: "address3", label: "Address 3" },
//   { value: "address4", label: "Address 4" },
//   { value: "address5", label: "Address 5" },
//   { value: "address6", label: "Address 6" },
//   { value: "address7", label: "Address 7" },
//   { value: "address8", label: "Address 8" },
// ];

// const UserDashboard1: React.FC = () => {
//   const [selectedAddress, setSelectedAddress] = useState<string>("address1");

//   // Handler for dropdown change
//   const handleAddressChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
//     setSelectedAddress(event.target.value);
//   };

//   // Get details of the selected address or use a fallback
//   const details = addressDetails[selectedAddress] || null;

//   return (
//     <div className="flex flex-col md:flex-row mt-10 min-h-screen text-white p-10 space-x-5">
//       {/* Left Side: Dropdown and Search Button */}
//       <div className="w-full md:w-1/3 p-10 shadow-md rounded-lg">
//         <h2 className="text-xl font-semibold mb-6">Select an Address</h2>
//         <label htmlFor="address-select" className="sr-only">
//           Select Address
//         </label>
//         <select
//           id="address-select"
//           className="w-full p-3 mb-6 border border-gray-400 rounded bg-black text-white focus:border-white focus:ring-2 focus:ring-white outline-none"
//           value={selectedAddress}
//           onChange={handleAddressChange}
//         >
//           {addressOptions.map((option) => (
//             <option key={option.value} value={option.value}>
//               {option.label}
//             </option>
//           ))}
//         </select>

//         <button className="w-full p-3 bg-[#F05B76] font-bold text-white rounded-md border-2 border-white text-lg">
//           Search
//         </button>
//         <button className="w-full p-3 mt-4 bg-[#97833d] border-2 border-white font-bold text-white rounded-md  text-lg">
//           Withdrwal
//         </button>
//       </div>

//       {/* Right Side: Address Information Table */}
//       <div className="w-full md:w-2/3 p-10 shadow-md rounded-lg ">
//         <h2 className="text-xl font-semibold mb-6">Address Information</h2>
//         {details ? (
//           <div className="overflow-x-auto">
//             <table className="w-full table-auto border-collapse border border-gray-300 text-xl">
//               <thead>
//                 <tr className="bg-[#2C0219]">
//                   <th className="border px- py-8 text-[#9168BF]">Detail</th>
//                   <th className="border px-28 py-8 text-[#9168BF]">Value</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 <tr>
//                   <td className="border px-36 py-4">Current Reward</td>
//                   <td className="border px-36 py-4 text-[#F7CE3C]">
//                     {details.currentReward}
//                   </td>
//                 </tr>
//                 <tr>
//                   <td className="border px-36 py-4">Total Staking Rewards</td>
//                   <td className="border px-36 py-4 text-[#F7CE3C]">
//                     {details.totalStakingRewards}
//                   </td>
//                 </tr>
//                 <tr>
//                   <td className="border px-36 py-4">Days Left</td>
//                   <td className="border px-36 py-4 text-[#F7CE3C]">
//                     {details.daysLeft}
//                   </td>
//                 </tr>
//               </tbody>
//             </table>
//           </div>
//         ) : (
//           <p className="text-red-500 text-lg">
//             No data available for the selected address.
//           </p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default UserDashboard1;

// "use client";
// import React, { useState, useEffect } from "react";
// import { ethers } from "ethers";
// import Web3Modal from "web3modal";
// import CoinbaseWalletSDK from "@coinbase/wallet-sdk";

// // Provider options for Web3Modal
// const providerOptions = {
//   coinbasewallet: {
//     package: CoinbaseWalletSDK,
//     options: {
//       appName: "Staking Dashboard",
//       rpc: {
//         4002: "https://rpc.testnet.fantom.network",
//       },
//       chainId: 4002,
//     },
//   },
// };

// // Staking contract ABI (example format; replace with your actual ABI)
// const stakingContractABI = [
//   "function getCurrentReward(address) view returns (uint256)",
//   "function getTotalStakingRewards(address) view returns (uint256)",
//   "function getDaysLeft(address) view returns (uint256)",
// ];

// // Staking contract address (replace with your actual staking contract address)
// const stakingContractAddress = "0xYourStakingContractAddress";

// const UDashboard = () => {
//   const [selectedAddress, setSelectedAddress] = useState("");
//   const [stakingData, setStakingData] = useState(null);
//   const [web3Modal, setWeb3Modal] = useState(null);
//   const [provider, setProvider] = useState(null);

//   useEffect(() => {
//     const initWeb3Modal = () => {
//       const web3ModalInstance = new Web3Modal({
//         cacheProvider: true,
//         providerOptions,
//       });
//       setWeb3Modal(web3ModalInstance);
//     };
//     initWeb3Modal();
//   }, []);

//   const connectWallet = async () => {
//     const instance = await web3Modal.connect();
//     const ethersProvider = new ethers.providers.Web3Provider(instance);
//     setProvider(ethersProvider);

//     const signer = ethersProvider.getSigner();
//     const walletAddress = await signer.getAddress();
//     setSelectedAddress(walletAddress);
//   };

//   const fetchStakingData = async () => {
//     if (!selectedAddress || !provider) return;

//     const contract = new ethers.Contract(
//       stakingContractAddress,
//       stakingContractABI,
//       provider
//     );

//     try {
//       const [currentReward, totalStakingRewards, daysLeft] = await Promise.all([
//         contract.getCurrentReward(selectedAddress),
//         contract.getTotalStakingRewards(selectedAddress),
//         contract.getDaysLeft(selectedAddress),
//       ]);

//       setStakingData({
//         currentReward: ethers.utils.formatUnits(currentReward, 18) + " GT",
//         totalStakingRewards:
//           ethers.utils.formatUnits(totalStakingRewards, 18) + " GT",
//         daysLeft: daysLeft.toNumber(),
//       });
//     } catch (error) {
//       console.error("Error fetching staking data:", error);
//     }
//   };

//   return (
//     <div className="flex flex-col md:flex-row mt-10 min-h-screen text-white p-10 space-x-5">
//       {/* Left Side: Connect Wallet and Fetch Data Button */}
//       <div className="w-full md:w-1/3 p-10 shadow-md rounded-lg">
//         <h2 className="text-xl font-semibold mb-6">Wallet Actions</h2>
//         {selectedAddress ? (
//           <>
//             <p className="text-lg mb-4">Connected: {selectedAddress}</p>
//             <button
//               onClick={fetchStakingData}
//               className="w-full p-3 bg-[#F05B76] font-bold text-white rounded-md border-2 border-white text-lg"
//             >
//               Fetch Staking Data
//             </button>
//           </>
//         ) : (
//           <button
//             onClick={connectWallet}
//             className="w-full p-3 bg-blue-500 font-bold text-white rounded-md border-2 border-white text-lg"
//           >
//             Connect Wallet
//           </button>
//         )}
//       </div>

//       {/* Right Side: Staking Data Table */}
//       <div className="w-full md:w-2/3 p-10 shadow-md rounded-lg">
//         <h2 className="text-xl font-semibold mb-6">Staking Information</h2>
//         {stakingData ? (
//           <div className="overflow-x-auto">
//             <table className="w-full table-auto border-collapse border border-gray-300 text-xl">
//               <thead>
//                 <tr className="bg-[#2C0219]">
//                   <th className="border px-6 py-4 text-[#9168BF]">Detail</th>
//                   <th className="border px-10 py-4 text-[#9168BF]">Value</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 <tr>
//                   <td className="border px-6 py-4">Current Reward</td>
//                   <td className="border px-6 py-4 text-[#F7CE3C] font-bold">
//                     {stakingData.currentReward}
//                   </td>
//                 </tr>
//                 <tr>
//                   <td className="border px-6 py-4">Total Staking Rewards</td>
//                   <td className="border px-6 py-4 text-[#F7CE3C] font-bold">
//                     {stakingData.totalStakingRewards}
//                   </td>
//                 </tr>
//                 <tr>
//                   <td className="border px-6 py-4">Days Left</td>
//                   <td className="border px-6 py-4 text-[#F7CE3C] font-bold">
//                     {stakingData.daysLeft} days
//                   </td>
//                 </tr>
//               </tbody>
//             </table>
//           </div>
//         ) : (
//           <p className="text-red-500 text-lg">
//             No data available. Connect your wallet and fetch staking data.
//           </p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default UDashboard;

"use client";
import React, { useState } from "react";
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
  const [details, setDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const [gentTopBalance, setGentTopBalance] = useState(null);
  const [withdrawalLoading, setWithdrawalLoading] = useState(false);
  const [withdrawalSuccess, setWithdrawalSuccess] = useState(null);

  // Staking contract address and ABI
  const contractAddress = "0x394734ee25DbF571a3FE5428B5BD946F9F238364"; // Replace with actual staking contract address
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
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
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

  // Fetch staking data using the wallet address
  const fetchStakingDetails = async () => {
    try {
      let web3Modal = new Web3Modal({
        cacheProvider: false,
        providerOptions,
      });

      const web3modalInstance = await web3Modal.connect();
      const web3modalProvider = new ethers.providers.Web3Provider(
        web3modalInstance
      );
      const contractAddress = "0x394734ee25DbF571a3FE5428B5BD946F9F238364"; // Replace with actual staking contract address
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
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
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
            { internalType: "uint256", name: "joiningAmount", type: "uint256" },
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
      const signer = web3modalProvider.getSigner();
      const walletAddress = await signer.getAddress();
      const contract = new ethers.Contract(contractAddress, stakingAbi, signer);

      // Fetch current reward (using checkCumulativeReward method)
      const currentReward = await contract.checkCumulativeReward(walletAddress);

      // Fetch total staking rewards (using totalRewardsGiven method)
      const totalStakingRewards = await contract.totalRewardsGiven();

      // Fetch staking details (using userDatas method to calculate days left)
      const userData = await contract.userDatas(walletAddress);

      const stakingDuration = userData.stakingSeconds; // assuming stakingSeconds is in seconds
      const secondsInADay = await contract.SECONDS_IN_A_DAY();
      const daysLeft = Math.max(
        0,
        Math.floor(
          stakingDuration / secondsInADay - Date.now() / 1000 / secondsInADay
        )
      );

      // Format the values assuming the returned values are in wei
      const currentRewardFormatted = ethers.utils.formatEther(currentReward); // Format current reward to readable value
      const totalStakingRewardsFormatted =
        ethers.utils.formatEther(totalStakingRewards); // Format total staking rewards

      // Set the details state with fetched data or default to "0" if no data found
      setDetails({
        currentReward: currentReward.isZero()
          ? "0 GT"
          : `${currentRewardFormatted} GT`, // Display current reward, or "0 GT" if zero
        totalStakingRewards: totalStakingRewards.isZero()
          ? "0 GT"
          : `${totalStakingRewardsFormatted} GT`, // Display total rewards, or "0 GT" if zero
        daysLeft: daysLeft === 0 ? "0" : daysLeft.toString(), // If no days left, show "0"
      });
      await fetchGentTopBalance();
    } catch (error) {
      console.error("Error fetching staking data:", error);
    }
  };

  // Connect wallet function
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
        const walletAddress = await signer.getAddress();

        // Update state with wallet details
        setWalletAddress(walletAddress);

        // Fetch staking data right after connecting the wallet
        setLoading(true);
        await fetchStakingDetails(walletAddress, web3modalProvider);
        setLoading(false);
      }
    } catch (error) {
      console.log("Error connecting wallet:", error);
    }
  };
  // Withdraw function
  const withdrawReward = async (amount) => {
    try {
      // Create contract instance with signer (for sending transactions)
      const web3Modal = new Web3Modal({
        cacheProvider: false,
        providerOptions,
      });

      const web3modalInstance = await web3Modal.connect();
      const web3modalProvider = new ethers.providers.Web3Provider(
        web3modalInstance
      );

      const signer = web3modalProvider.getSigner();
      const walletAddress = await signer.getAddress();
      const contract = new ethers.Contract(contractAddress, stakingAbi, signer);

      // Ensure amount is properly formatted (in wei)
      const amountInWei = ethers.utils.parseEther(amount.toString()); // Convert amount to wei

      // Call the WithdrawReward function from the contract
      const tx = await contract.WithdrawReward(walletAddress, amountInWei);

      // Wait for transaction to be mined
      await tx.wait();

      console.log("Reward withdrawn successfully!");

      // Optionally, you can update UI with success message or refresh the staking details.
    } catch (error) {
      console.error("Error withdrawing reward:", error);
    }
  };
  const fetchGentTopBalance = async () => {
    try {
      const web3Modal = new Web3Modal({
        cacheProvider: false,
        providerOptions,
      });

      const web3modalInstance = await web3Modal.connect();
      const web3modalProvider = new ethers.providers.Web3Provider(
        web3modalInstance
      );
      const signer = web3modalProvider.getSigner();

      // Instantiate the contract
      const contract = new ethers.Contract(contractAddress, stakingAbi, signer);

      // Call the checkGentTopBalance function from the contract
      const gentTopBalance = await contract.checkGentTopBalance();

      // Format the balance (assumes the balance is in wei)
      const gentTopBalanceFormatted = ethers.utils.formatEther(gentTopBalance);

      // Update state or return the formatted value
      setGentTopBalance(gentTopBalanceFormatted);
    } catch (error) {
      console.error("Error fetching GentTop balance:", error);
      setGentTopBalance("0");
    }
  };
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
        <p>Wallet Address {walletAddress}</p>
        <button
          onClick={withdrawReward}
          className="w-full p-3 mt-4 bg-[#97833d] border-2 border-white font-bold text-white rounded-md text-lg"
        >
          Withdrawal
        </button>
      </div>

      {/* Right Side: Address Information Table */}
      <div className="w-full md:w-2/3 p-10 shadow-md rounded-lg">
        <h2 className="text-xl font-semibold mb-6">Address Information</h2>

        {/* Check if the wallet is connected */}
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
                    {details && details.currentReward
                      ? details.currentReward
                      : "0 GT"}
                  </td>
                </tr>
                <tr>
                  <td className="border px-36 py-4">Total Staking Rewards</td>
                  <td className="border px-36 py-4 text-[#F7CE3C] font-bold">
                    {details && details.totalStakingRewards
                      ? details.totalStakingRewards
                      : "0 GT"}
                  </td>
                </tr>
                <tr>
                  <td className="border px-36 py-4">Days Left</td>
                  <td className="border px-36 py-4 text-[#F7CE3C] font-bold">
                    {details && details.daysLeft
                      ? details.daysLeft + " days"
                      : "0 days"}
                  </td>
                </tr>
                <tr>
                  <td className="border px-36 py-4">GentTop Balance</td>
                  <td className="border px-36 py-4 text-[#F7CE3C] font-bold">
                    {gentTopBalance ? gentTopBalance + " GT" : "0 GT"}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
        {!loading && !details && walletAddress && (
          <p className="text-red-500 text-lg">
            No staking data found for the connected wallet address.
          </p>
        )}
      </div>
    </div>
  );
};

export default UDashboard;
