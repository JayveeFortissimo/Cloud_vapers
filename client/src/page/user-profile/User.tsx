import { useSelector } from "react-redux";
import { type RootState } from "@/store/store";

const User = () => {
  const user = useSelector(
    (state: RootState) => state.userAuthenticationSlice.user
  );

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
      <div className="border border-white w-full md:w-[80%] h-[40rem] p-5 rounded shadow-2xl">
        <p className="font-oleo text-3xl">CloudVapers</p>
        <div className="py-2">
          <h1 className="text-lg font-extrabold">{user?.username}</h1>
          <p className="text-xs">{user?.email}</p>
        </div>

        <div className="mt-10 flex gap-10">
          {tabs.map((tab, index) => (
            <p
              key={index}
              className={`${tab.active ? "border" : undefined}  p-1 rounded`}
            >
              {tab.name}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default User;
