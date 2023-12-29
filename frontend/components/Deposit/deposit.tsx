import {
  SMART_CONTRACT_ABI,
  VAULT_ABI,
  smartContractAddress,
} from "@/constants";
import { ethers } from "ethers";
import React, { useState } from "react";
import { useAccount } from "wagmi";
import { DAYS_PER_MONTH, Framework } from "@superfluid-finance/sdk-core";

const DepositForm: React.FC = () => {
  const [formData, setFormData] = useState({
    poolAddress: "",
    supertokenAddress: "",
    flowRate: "",
    // selectedDropdownValue: "option1",
    selectedOption: "",
  });
  const { address } = useAccount();
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleDropdownChange = (selectedValue: any) => {
    setFormData((prevData) => ({
      ...prevData,
      selectedOption: selectedValue,
    }));
    const dropdown = document.getElementById("dropdown");
    if (dropdown) {
      dropdown.removeAttribute("open");
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      //@ts-ignore
      const provider = new ethers.providers.Web3Provider(window.ethereum);

      const signer = provider.getSigner();

      const vaultContract = new ethers.Contract(
        formData.poolAddress,
        VAULT_ABI,
        signer
      );

      const asset = await vaultContract.asset();

      const wallet = new ethers.Wallet(
        process.env.NEXT_PUBLIC_PRIVATE_KEY as any,
        provider
      );

      const contract = new ethers.Contract(
        smartContractAddress,
        SMART_CONTRACT_ABI,
        wallet
      );

      const sf = await Framework.create({
        chainId: 420,
        provider,
      });

      const superToken = await sf.loadSuperToken(formData.supertokenAddress);

      const flowOp = superToken.createFlow({
        sender: address,
        receiver: smartContractAddress,
        flowRate: formData.flowRate, //should be flowrate per second
      });

      await flowOp.exec(signer);

      const tx = await contract.newDeposit(
        formData.poolAddress,
        asset,
        address,
        formData.supertokenAddress
      );

      await tx.wait();

      console.log("done");
      console.log("Form submitted with data:", formData);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  return (
    <div
      className="  min-h-58 max-w-3xl  mx-auto bg-white/5 p-8 rounded-md shadow-md  mt-14"
      style={{ height: "75vh" }}
    >
      <h2
        className="mb-4 block text-lg font-semibold text-gray-400"
        style={{ fontSize: "25px" }}
      >
        Start Streaming to any Pool
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-md font-semibold text-gray-400 mt-10">
            Pool Address
          </label>
          <input
            type="text"
            name="poolAddress"
            placeholder="Pool Address..."
            value={formData.poolAddress}
            onChange={handleChange}
            className="w-full border rounded-md py-2 px-3 focus:outline-none  focus:border-green-700 mt-2"
          />
        </div>
        <div className="mt-10">
          <label className="block text-md font-semibold text-gray-400">
            Supertoken Address
          </label>
          <input
            type="text"
            name="supertokenAddress"
            placeholder="SuperToken Address..."
            value={formData.supertokenAddress}
            onChange={handleChange}
            className="w-full border rounded-md py-2 px-3 focus:outline-none  focus:border-green-700 mt-2"
          />
        </div>
        <div className="mt-10 ">
          <label className="block text-md font-semibold text-gray-400 mr-2">
            Flow Rate
          </label>
          <div className="flex">
            <input
              type="text"
              name="flowRate"
              placeholder="FlowRate..."
              value={formData.flowRate}
              onChange={handleChange}
              className="border rounded-md py-2 px-3 focus:outline-none  focus:border-green-700 mt-2"
              style={{ width: "36rem" }}
            />
            <details id="dropdown" className="dropdown ml-2 mt-2 ">
              <summary
                tabIndex={0}
                className="border rounded-md py-2 px-4 bg-gray focus:outline-none  focus:border-green-700 cursor-pointer "
              >
                {formData.selectedOption || "Select"}
              </summary>
              <ul
                tabIndex={0}
                className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52"
              >
                <li>
                  <a onClick={() => handleDropdownChange("second")}>/ second</a>
                </li>
                <li>
                  <a onClick={() => handleDropdownChange("day")}>/ day </a>
                </li>
                <li>
                  <a onClick={() => handleDropdownChange("/month")}>/ month</a>
                </li>
              </ul>
            </details>
          </div>
        </div>

        <div>
          <button
            type="submit"
            className={` btn w-full bg-green-600 text-gray-300 py-3 px-4 rounded-md hover:bg-green-700 focus:outline-none  focus:border-green-700 mt-10`}
          >
            <span className={`${loading && "loading loading-spinner"}`}>
              <h1>Send Stream</h1>
            </span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default DepositForm;
