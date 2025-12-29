import { useSelector } from "react-redux";
import { type RootState } from "@/store/store";
import { useState } from "react";

import Checkout from "./tabs/Checkout";
import Deliver from "./tabs/Deliver";
import History from "./tabs/History";


const User = () => {
  const user = useSelector((state: RootState) => state.userAuthenticationSlice.user);
  const [activeTab, setActiveTab] = useState<string>("Checkout");
  const tabs: { name: string; active: boolean }[] = [
    {
      name: "Checkout",
      active: true,
    },
    {
      name: "Deliver",
      active: false,
    },
    {
      name: "History",
      active: false,
    },
  ];

  return (
    <div className=" min-h-screen flex justify-center py-20 bg-white">

      <div className="border border-white w-full md:w-[80%] h-[40rem] p-5 rounded shadow-2xl flex flex-col">
        <p className="font-oleo text-3xl">CloudVapers</p>
        <div className="py-2">
          <h1 className="text-lg font-extrabold">{user?.username}</h1>
          <p className="text-xs">{user?.email}</p>
        </div>

        <div className="mt-10 flex gap-5">
          {tabs.map((tab, index) => (
            <p
              key={index}
              className={`${tab.name === activeTab ? "border" : undefined}  p-1 rounded cursor-pointer`}
              onClick={() => setActiveTab(tab.name)}
            >
              {tab.name}
              
            </p>
          ))}
        </div>

        {activeTab === "Checkout" && <Checkout />}
        {activeTab === "Deliver" && <Deliver />}
        {activeTab === "History" && <History />}
      </div>
    </div>
  );
};

export default User;
