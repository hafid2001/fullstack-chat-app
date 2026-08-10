import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const ProfilePage = () => {
const [selectedUser, setSelectedUser] = useState(false);
const navigate = useNavigate();
const [name,setName] = useState("Ahmd Ali");
const [bio,setBio] = useState("I am a software engineer");
return(
  <div className='min-h-secreen bg-cover bg-no-repeat flex items-center justify-center'>
    <div className='w-5/6 max-w-2xl backdrop-blur-2xl text-gray-300 border-2 border-gray-600 flex items-center justify-between max-sm:flex-col-reverse rounded-lg' >
    <form className="flex flex-col gap-5 p-10 flex-1">
      <h3 className="text-lg">Profile details</h3>
      <label htmlFor="avatar" className='flex items-center gap3 cursor-pointer'>
        <input type="file" id="avatar" accept=".png, .jpg,.jpeg "hidden/>
        <img src={""} alt=""/>
      </label>

    </form>
    <img src="" alt=""/>
    </div>

  </div>





)
};

export default ProfilePage;
