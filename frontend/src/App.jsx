import {useState} from "react";
import {Outlet} from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />

      <h2 className=" text-center  p-5 font-bold">
        {" "}
        Hello this is petrochemicals and fertilizers company
      </h2>
      {/* <Outlet /> */}
      <Footer />
    </>
  );
}

export default App;
