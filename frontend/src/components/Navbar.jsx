import React from "react";

function Navbar() {
  return (
    <div className=" h-[150px] border-4 mx-3 my-2 ">
      <div className=" text-center font-bold text-2xl">
        Integrated Data Management system (IDMS) for the Chemical and
        Petrochemicals Sector
      </div>
      <div className=" flex m-5 justify-end space-x-4">
        <div>Login</div>
        <div>Help </div>
        <div>Contact us </div>
        <div>Logout </div>
      </div>
    </div>
  );
}

export default Navbar;
