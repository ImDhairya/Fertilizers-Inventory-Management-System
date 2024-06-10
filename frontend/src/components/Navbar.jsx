import React from "react";
import {Button} from "./ui/button";
import {Link} from "react-router-dom";

function Navbar() {
  return (
    <div className=" h-[150px] border-4 mx-3 my-2 ">
      <Link to={"/home"}>
        {/* <Button>Home</Button> */}
        <div className=" text-center font-bold text-2xl">
          Integrated Data Management system (IDMS) for the Chemical and
          Petrochemicals Sector
        </div>
      </Link>
      <div className=" flex m-5 justify-end space-x-4">
        <Link to={"/login"}>
          <Button>Login</Button>
        </Link>

        <Link to={"/login"}>
          <Button>About us</Button>
        </Link>

        <Link to={"/login"}>
          <Button>Help</Button>
        </Link>

        <Link to={"/logout"}>
          <Button variant="destructive">Logout</Button>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
