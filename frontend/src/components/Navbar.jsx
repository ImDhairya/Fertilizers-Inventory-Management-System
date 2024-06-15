import React from "react";
import {Button} from "./ui/button";
import {Link, useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import axios from "axios";
import {useLocation} from "react-router-dom";

function Navbar() {
  let showLogin = useSelector((state) => state.navbar.showLogin);
  let showAddProducts = useSelector((state) => state.navbar.showAddProducts);
  let showHelp = useSelector((state) => state.navbar.showHelp);
  let showLogout = useSelector((state) => state.navbar.showLogout);
  let showHome = useSelector((state) => state.navbar.showHome);

  let navigate = useNavigate();
  const location = useLocation();

  async function handleLogout() {
    const res = await axios.post("http://localhost:5000/api/user/logout");
    navigate("/login");
  }
  const isLoginPage = location.pathname === "/login";
  // if (isLoginPage) {
  //   showLogin = false;
  // }

  const isLoggedIn = location.pathname !== "/login";
  if (!isLoggedIn) {
    showLogin = false;
    showAddProducts = false;
    showLogout = false;
    showHome = false;
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
        {!showLogin && (
          <Link to={"/login"}>
            <Button>Login</Button>
          </Link>
        )}
        {showAddProducts && (
          <Link to={"/home/card"}>
            <Button>Add Products</Button>
          </Link>
        )}
        {showHome && (
          <Link to={"/home"}>
            <Button>Home</Button>
          </Link>
        )}

        {showHelp && (
          <>
            <Link to={"/login"}>
              <Button>Help</Button>
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
