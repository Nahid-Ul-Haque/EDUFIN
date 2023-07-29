"use client";
import React from "react";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import axios from "axios";

const UserProfile = ({ params }, any) => {
  const router = useRouter();

  const logout = async () => {
    try {
      await axios.get("/api/users/logout");
      toast.success("Logout successful");
      router.push("/login");
    } catch (error) {
      console.log(error.message);
      toast.error(error.message);
    }
  };

  return (
    <>
      <div>
        <span className=" p-2 ml-2 rounded bg-orange-500 text-black">
          {params.id}
        </span>
        <button
          onClick={logout}
          className="inline-block rounded-md border border-transparent bg-slate-700 px-8 py-3 text-center font-medium text-white hover:bg-slate-800"
        >
          Logout
        </button>
      </div>
    </>
  );
};

export default UserProfile;
