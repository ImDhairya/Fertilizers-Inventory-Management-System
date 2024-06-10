import React, {useState} from "react";
import {Input} from "./ui/input";
import {Button} from "./ui/button";
import Navbar from "./Navbar";
import Footer from "./Footer";
import {Link} from "react-router-dom";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [register, setRegister] = useState(false);
  async function handleSubmit() {
    console.log("Hello world ");
    console.log(email);
    console.log(password);

    await axios.post("http://localhost:5000/");
  }

  function handleRegister() {
    setRegister(!register);
  }
  return (
    <div className=" items-center flex flex-col  ">
      <Navbar />
      <div className=" flex">
        <p className=" font-bold text-lg">
          {" "}
          {!register ? "Login " : "Register"}{" "}
        </p>
      </div>
      <div className=" m-5 space-y-4 ">
        {!register ? (
          <>
            <Input
              onChange={(e) => setEmail(e.target.value)}
              className=" flex  w-fit "
              type="text"
              placeholder="Enter your Email"
            />
            <Input
              onChange={(e) => setPassword(e.target.value)}
              className=" flex w-fit "
              type="text"
              placeholder="Enter password
          "
            />
            <Button onClick={handleSubmit}>Submit</Button>
          </>
        ) : (
          <>
            <Input
              onChange={(e) => setEmail(e.target.value)}
              className=" flex  w-fit "
              type="text"
              placeholder="Enter your Email"
            />
            <Input
              onChange={(e) => setPassword(e.target.value)}
              className=" flex w-fit "
              type="text"
              placeholder="Enter password
          "
            />
            <Input
              onChange={(e) => setPassword(e.target.value)}
              className=" flex w-fit "
              type="text"
              placeholder="Enter username
          "
            />
            <Input
              onChange={(e) => setPassword(e.target.value)}
              className=" flex w-fit "
              type="text"
              placeholder="Enter name
          "
            />
            <Button onClick={handleSubmit}>Submit</Button>
          </>
        )}
        <Link>
          {" "}
          <Button
            onClick={handleRegister}
            className=" bg-amber-500 text-white hover:bg-primary/90"
          >
            {!register ? "Register" : "Login"}
          </Button>
        </Link>
      </div>
      <Footer />
    </div>
  );
}

export default Login;
