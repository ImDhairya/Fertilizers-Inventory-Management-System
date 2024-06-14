import {useState} from "react";
import {Outlet} from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
// import Dashboard from "./components/Dashboard"
import {useSelector} from "react-redux";

import CardComponent from "./components/Card";
import Dashboard from "./components/Dashboard";
function App() {
  const [count, setCount] = useState(0);
  const [accessabel, setAccessable] = useState(true);
  const user = useSelector((store) => store.user.user);
  // console.log(user); // current user
  const navigate = useNavigate();
  useEffect(() => {
    if (!user || !user.email) {
      setAccessable(false);
      navigate("/login");
    }
  }, [user, navigate]);
  return (
    <>
      <Navbar />

      <h2 className=" text-center  p-5 font-bold">
        {" "}
        Hello this is petrochemicals and fertilizers company
      </h2>
      <Dashboard />
      {/* <CardComponent /> */}
      {/* <Outlet /> */}
      <Footer />
    </>
  );
}

export default App;
