"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import signup from "../../public/signup.jpg";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-hot-toast";
import { EyeIcon } from "@heroicons/react/24/solid";
import { EyeSlashIcon } from "@heroicons/react/24/outline";
import ReactPasswordChecklist from "react-password-checklist";

const SignUpPage = () => {
  const router = useRouter();
  const [user, setUser] = React.useState({
    registrationNumber: "",
    username: "",
    password: "",
    confirmPassword: "",
  });
  const [buttonDisabled, setButtonDisabled] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const [showPassword, setShowPassword] = React.useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const onSignup = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/users/signup", user);
      console.log("Signup success", response);

      router.push("/login");
    } catch (error) {
      console.log("Signup failed", error.message);

      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (
      user.username.length > 0 &&
      user.registrationNumber.length > 0 &&
      user.password.length > 0 &&
      user.confirmPassword.length > 0
    ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 h-screen w-full">
        <div className="bg-gray-800 flex flex-col justify-center">
          <form className="max-w-[400px] w-full mx-auto rounded-lg bg-gray-900 p-8 px-8">
            <div className="text-left mb-4 dark:text-white text-white">
              Already have a account?{" "}
              <span>
                <Link
                  href="/login"
                  className="text-indigo-700 hover:text-white"
                >
                  Sign in here
                </Link>
              </span>
            </div>
            <h2 className="text-4xl text-white dark:text-white font-bold text-center">
              {loading ? "Processing" : "Signup"}
            </h2>
            <div className="flex flex-col text-gray-400 py-2">
              <label>Username</label>
              <input
                className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
                id="username"
                type="text"
                value={user.username}
                onChange={(e) => setUser({ ...user, username: e.target.value })}
              />
            </div>
            <div className="flex flex-col text-gray-400 py-2">
              <label>Registration Number</label>
              <input
                className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
                id="registrationNumber"
                type="number"
                value={user.registrationNumber}
                onChange={(e) =>
                  setUser({ ...user, registrationNumber: e.target.value })
                }
              />
            </div>
            <div className="flex flex-col text-gray-400 py-2">
              <label>Department Name</label>
              <select
              
              className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none "
            >
              <option value="seller">ECE</option>
              <option value="Buyer">BBA</option>
              <option value="Buyer">CSE</option>
            </select>
            </div>
            <div className="text-gray-400 py-2">
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
            <ReactPasswordChecklist
              className="text-gray-400"
              rules={["minLength", "specialChar", "number", "capital", "match"]}
              minLength={8}
              value={user.password}
              valueAgain={user.confirmPassword}
            />
            <div className="flex flex-col text-gray-400 py-2">
              <label>Confirm Password</label>
              <div className="flex flex-col relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={user.confirmPassword}
                  onChange={(e) =>
                    setUser({ ...user, confirmPassword: e.target.value })
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
              <button
                onClick={onSignup}
                className="w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg"
              >
                {buttonDisabled ? "no signup" : "Register"}
              </button>
            </Link>
            <Link href="/">
              <button className="w-full my-5 py-2 bg-gray-500 shadow-lg shadow-gray-500/50 hover:shadow-gray-500/40 text-black font-semibold rounded-lg">
                BACK TO HOME
              </button>
            </Link>
          </form>
        </div>
        <div className="hidden lg:block">
          <Image className="w-full h-full object-cover" src={signup} alt="" />
        </div>
      </div>
    </>
  );
};

export default SignUpPage;
