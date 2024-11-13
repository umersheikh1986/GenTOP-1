import React, { useState } from "react";

interface AddressDetails {
  currentReward: string;
  totalStakingRewards: string;
  daysLeft: number;
}

const addressDetails: { [key: string]: AddressDetails } = {
  address1: {
    currentReward: "100 GT",
    totalStakingRewards: "500 GT",
    daysLeft: 30,
  },
  address2: {
    currentReward: "200 GT",
    totalStakingRewards: "700 GT",
    daysLeft: 25,
  },
  address3: {
    currentReward: "150 GT",
    totalStakingRewards: "600 GT",
    daysLeft: 20,
  },
  address4: {
    currentReward: "250 GT",
    totalStakingRewards: "800 GT",
    daysLeft: 15,
  },
  address5: {
    currentReward: "180 GT",
    totalStakingRewards: "550 GT",
    daysLeft: 18,
  },
  address6: {
    currentReward: "300 GT",
    totalStakingRewards: "1000 GT",
    daysLeft: 12,
  },
  address7: {
    currentReward: "120 GT",
    totalStakingRewards: "400 GT",
    daysLeft: 22,
  },
  address8: {
    currentReward: "220 GT",
    totalStakingRewards: "750 GT",
    daysLeft: 10,
  },
};

// Address options for the dropdown
const addressOptions = [
  { value: "address1", label: "Address 1" },
  { value: "address2", label: "Address 2" },
  { value: "address3", label: "Address 3" },
  { value: "address4", label: "Address 4" },
  { value: "address5", label: "Address 5" },
  { value: "address6", label: "Address 6" },
  { value: "address7", label: "Address 7" },
  { value: "address8", label: "Address 8" },
];

const UserDashboard1: React.FC = () => {
  const [selectedAddress, setSelectedAddress] = useState<string>("address1");

  // Handler for dropdown change
  const handleAddressChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedAddress(event.target.value);
  };

  // Get details of the selected address or use a fallback
  const details = addressDetails[selectedAddress] || null;

  return (
    <div className="flex flex-col md:flex-row mt-10 min-h-screen text-white p-10 space-x-5">
      {/* Left Side: Dropdown and Search Button */}
      <div className="w-full md:w-1/3 p-10 shadow-md rounded-lg">
        <h2 className="text-xl font-semibold mb-6">Select an Address</h2>
        <label htmlFor="address-select" className="sr-only">
          Select Address
        </label>
        <select
          id="address-select"
          className="w-full p-3 mb-6 border border-gray-400 rounded bg-black text-white focus:border-white focus:ring-2 focus:ring-white outline-none"
          value={selectedAddress}
          onChange={handleAddressChange}
        >
          {addressOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        <button className="w-full p-3 bg-[#F05B76] font-bold text-white rounded-md border-2 border-white text-lg">
          Search
        </button>
        <button className="w-full p-3 mt-4 bg-[#97833d] border-2 border-white font-bold text-white rounded-md  text-lg">
          Withdrwal
        </button>
      </div>

      {/* Right Side: Address Information Table */}
      <div className="w-full md:w-2/3 p-10 shadow-md rounded-lg ">
        <h2 className="text-xl font-semibold mb-6">Address Information</h2>
        {details ? (
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
                  <td className="border px-36 py-4 text-[#F7CE3C]">
                    {details.currentReward}
                  </td>
                </tr>
                <tr>
                  <td className="border px-36 py-4">Total Staking Rewards</td>
                  <td className="border px-36 py-4 text-[#F7CE3C]">
                    {details.totalStakingRewards}
                  </td>
                </tr>
                <tr>
                  <td className="border px-36 py-4">Days Left</td>
                  <td className="border px-36 py-4 text-[#F7CE3C]">
                    {details.daysLeft}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        ) : (
          <p className="text-red-500 text-lg">
            No data available for the selected address.
          </p>
        )}
      </div>
    </div>
  );
};

export default UserDashboard1;
