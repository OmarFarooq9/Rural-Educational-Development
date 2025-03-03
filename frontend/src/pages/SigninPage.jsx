import React, { useState } from "react";
import ButtonDefault from "../components/ButtonDefault";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SigninForm = () => {
  // States for form inputs
  const [sec, setSec] = useState("");
  const [roll, setRoll] = useState("");
  const [error, setError] = useState(null); // State for handling errors
  const navigate = useNavigate();

  // Handle form submission
  const handleSignin = async () => {
    try {
      const response = await axios.post("http://localhost:3000/api/v1/student/login", {
        sec,
        roll,
      });
      if (response.data.success) {
        console.log("Sign-in successful:", response.data);
        navigate(`/home/${response.data.id}`)
        
      } else {
        setError("Invalid credentials");
      }
    } catch (error) {
      console.error("Error during sign-in:", error);
      setError("Error during sign-in, please try again.");
    }
  };

  return (
    <div className="h-[100vh] items-center flex justify-center px-10 lg:px-0">
      <div className="max-w-screen-sm bg-white border shadow sm:rounded-lg flex justify-center flex-1">
        <div className="lg:w-1/2 xl:w-5/12 p-6 sm:px-4 sm:py-10">
          <div className="flex flex-col items-center">
            <div className="text-center">
              <h1 className="text-2xl xl:text-4xl font-extrabold text-blue-900">
                Student Sign In
              </h1>
              <p className="text-[12px] text-gray-500">
                Enter Your Account Details to Sign In
              </p>
            </div>
            <div className="w-full flex-1 mt-8">
              <div className="mx-auto max-w-xs flex flex-col gap-4">
                <input
                  className="w-full px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                  type="text"
                  placeholder="Enter your Section"
                  value={sec}
                  onChange={(e) => setSec(e.target.value)}
                />
                <input
                  className="w-full px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                  type="password"
                  placeholder="Enter your Roll Number"
                  value={roll}
                  onChange={(e) => setRoll(e.target.value)}
                />
                <ButtonDefault title={"Sign In"} onClick={handleSignin} />
                {error && (
                  <p className="mt-2 text-xs text-red-600 text-center">{error}</p>
                )}
                <p className="mt-6 text-xs text-gray-600 text-center">
                  Forgot Your Password?{" "}
                  <a href="">
                    <span className="text-blue-900 font-semibold">Forgot</span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SigninForm;
