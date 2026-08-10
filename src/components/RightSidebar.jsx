import React from "react";

const RightSidebar = ({ selectedUser }) => {
  console.log("RightSidebar selectedUser:", selectedUser);
  return (
    selectedUser && (
      <div
        className={`bg-[#8185B2]/10 text-white w-full relative overflow-y-scroll ${selectedUser ? "max-md:hidden" : ""}`}
      >
        <button className="absolute bottom-5 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-400 to-violet-600 text-white border-none text-sm font-light py-2 px-20 rounded-full cu">
          logout
        </button>
      </div>
    )
  );
};

export default RightSidebar;
