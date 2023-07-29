"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import loginImg from "../../public/loginImg.jpg";
import { EyeIcon } from "@heroicons/react/24/solid";
import { EyeSlashIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";
import axios from "axios";
import { Toaster, toast } from "react-hot-toast";

const LoginPage = () => {
  const router = useRouter();
  const [user, setUser] = React.useState({
    username: "",
    password: "",
  });

  const [data, setData] = useState();
  const getUserDetails = async () => {
    const res = await axios.get("/api/users/getUsers");
    console.log(res.data);
    setData(res.data.data._id);
  };

  const [buttonDisabled, setButtonDisabled] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const onLogin = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/users/login", user);
      console.log("Login success", response);
      toast.success("Login success");
      const res = await axios.get("/api/users/getUsers");
      console.log(res.data);
      setData(res.data.data._id);
      router.push(`/profile/${res.data.data._id}`);
    } catch (error) {
      console.log("Login failed", error.message);
      toast.error("Sorry, You Are Not Allowed to Access This Page");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user.username.length > 0 && user.password.length > 0) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  const [showPassword, setShowPassword] = React.useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
        <div className="hidden sm:block">
          <Image
            className="w-full h-full object-cover"
            src={loginImg}
            alt=""
            loading="lazy"
          />
        </div>

        <div className="bg-gray-800 flex flex-col justify-center">
          <form className="max-w-[400px] w-full mx-auto rounded-lg bg-gray-900 p-8 px-8">
            <div className="text-left mb-4 dark:text-white text-white">
              Dont Have a account?{" "}
              <span>
                <Link
                  href="/signup"
                  className="text-indigo-700 hover:text-white"
                >
                  Sign Up
                </Link>
              </span>
            </div>
            <h2 className="text-4xl text-white dark:text-white font-bold text-center">
              {loading ? "Processing" : "SIGN IN"}
            </h2>
            <div className="flex flex-col text-gray-400 py-2">
              <label>Username</label>
              <input
                className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
                type="text"
                value={user.username}
                onChange={(e) => setUser({ ...user, username: e.target.value })}
              />
            </div>
            <div className="flex flex-col text-gray-400 py-2">
              <label>Password</label>
              <div className="flex flex-col relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={user.password}
                  onChange={(e) =>
                    setUser({ ...user, password: e.target.value })
                  }
                  className="p-2 rounded-lg bg-gray-700 mt-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
                  placeholder="Password"
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center focus:outline-none"
                >
                  {showPassword ? (
                    <EyeIcon className="h-5 w-5 text-gray-500" />
                  ) : (
                    <EyeSlashIcon className="h-5 w-5 text-gray-500" />
                  )}
                </button>
              </div>
            </div>
            <div className="flex justify-between text-gray-400 py-2">
              <p className="flex items-center">
                <input className="mr-2" type="checkbox" /> Remember Me
              </p>
              <p>Forgot Password</p>
            </div>

            <Link href="#">
              <Toaster position="top-center" reverseOrder={false} />
              <button
                onClick={onLogin}
                className="w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg"
              >
                {buttonDisabled ? "no login" : "LOG IN"}
              </button>
            </Link>
            <Link href="/">
              <button className="w-full my-5 py-2 bg-gray-500 shadow-lg shadow-gray-500/50 hover:shadow-gray-500/40 text-black font-semibold rounded-lg">
                BACK TO HOME
              </button>
            </Link>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
