import React from "react";
import {Button} from "./ui/button";
import {Link, useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import axios from "axios";

function Navbar() {
  const showLogin = useSelector((state) => state.navbar.showLogin);
  const showAboutUs = useSelector((state) => state.navbar.showAboutUs);
  const showHelp = useSelector((state) => state.navbar.showHelp);
  const showLogout = useSelector((state) => state.navbar.showLogout);
  const navigate = useNavigate();
  async function handleLogout() {
    const res = await axios.post("http://localhost:5000/api/user/logout");
    navigate("/login");
  }

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
          <Link to={"/home/card"}>
            <Button>Add Products</Button>
          </Link>
        )}

        {showHelp && (
          <>
            <Link to={"/login"}>
              <Button>Help</Button>
            </Link>
            <Link to={"/home"}>
              <Button>Home</Button>
            </Link>
          </>
        )}

        {showLogout && (
          <Link to={"/logout"}>
            <Button
              onClick={handleLogout}
              variant="destructive"
            >
              Logout
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
}

export default Navbar;
