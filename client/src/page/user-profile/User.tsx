import { useSelector } from "react-redux";
import {type RootState } from "@/store/store";

const User = () => {
	const user = useSelector((state: RootState) => state.userAuthenticationSlice.user);
  return (
    <div className=" min-h-screen flex justify-center py-20 bg-white">
      <div className="border border-white w-full md:w-[80%] h-[40rem] p-5 rounded shadow-2xl">
		<h1>{user?.username}</h1>
         <p>{user?.email}</p>
	  </div>

    </div>
  );
};

export default User;
