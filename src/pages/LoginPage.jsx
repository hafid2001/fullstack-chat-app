import React from "react";
import { useState } from "react";
import assets from "../assets/assets";

const LoginPage = () => {
  const [currState, setCurrState] = useState("sinup");
  const [fullName,setfullName]=useState("");
   const [email,setEmail]=useState("");
    const [password,setPassowrd]=useState("");
     const [bio,setBio]=useState("");
      const [isDatasubmitted,setisDatasubmitted]=useState("");

  return (
    <div className='min-h-screen bg-cover bg-center flex items-center justify-content-center gap-8 sm:justify-evenly max-sm:flex-col backdrop-blur-2xl' >
      {/* Left Side */}
      <img src={assets.logo_big} alt="" className='w-[min(30vw,250px)]' />
      {/* Right Side */}
      <form className='border-2 bg-white/8 text-white border-gray-500 p-6 flex flex-col gap-6 rounded-lg shadow-lg'>
      <h2 className='font-medium text-2xl flex justify-content-between align-items-center'>
        {currState}
        <img src={assets.arrow_icon} alt="" className='w-5 cursor-pointer'/>
      </h2>
      {currState === "Sign up" && !isDatasubmitted && (
        <input onChange={(e)=> setfullName(e.target.value)} value={fullName}
        type="text" className='p-2 border border-gray-500 rounded-md 
        focus:outline-none' required placeholder="FullName"/>
      )}
      {!isDatasubmitted && (
        <>
         <input onChange={(e)=> setEmail(e.target.value)} value={email}
        type="email" className='p-2 border border-gray-500 rounded-md 
        focus:outline-none focus:ring-2 focus:ring-indigo-500' required
         placeholder="Email"/>
          <input onChange={(e)=> setPassword(e.target.value)} value={password}
        type="password" className='p-2 border border-gray-500 rounded-md 
        focus:outline-none focus:ring-2 focus:ring-indigo-500' required
         placeholder="password"/>
        </>
      )}
      {currState === "Sign up" && !isDatasubmitted && (
 <textarea onChange={(e)=> setBio(e.target.value)} value={bio} rows={4}
        type="email" className='p-2 border border-gray-500 rounded-md 
        focus:outline-none focus:ring-2 focus:ring-indigo-500' required
         placeholder="Email"></textarea>
      )}
<button type='submit'  className='py-3 bg-gradient-to-r from-purple-400 to-violet-600 text-white rounded-md cursor-pointer'>
  {currState === "Sign up "? "Create Account ": "Login Now"}
</button>

      </form>
    </div>
  );
};

export default LoginPage;
