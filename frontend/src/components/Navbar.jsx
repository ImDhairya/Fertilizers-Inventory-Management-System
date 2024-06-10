import React from "react";
import {Button} from "./ui/button";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

function Navbar() {
  const showLogin = useSelector((state) => state.navbar.showLogin);
  const showAboutUs = useSelector((state) => state.navbar.showAboutUs);
  const showHelp = useSelector((state) => state.navbar.showHelp);
  const showLogout = useSelector((state) => state.navbar.showLogout);

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
        {showLogin && (
          <Link to={"/login"}>
            <Button>Login</Button>
          </Link>
        )}
        {showAboutUs && (
          <Link to={"/login"}>
            <Button>About us</Button>
          </Link>
        )}

        {showHelp && (
          <Link to={"/login"}>
            <Button>Help</Button>
          </Link>
        )}

        {showLogout && (
          <Link to={"/logout"}>
            <Button variant="destructive">Logout</Button>
          </Link>
        )}
      </div>
    </div>
  );
}

export default Navbar;
