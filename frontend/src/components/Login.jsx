import React, {useState} from "react";
import {Input} from "./ui/input";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className=" items-center flex flex-col  ">
      <Navbar />
      <div>Login Hello wrold</div>
      <div className=" m-5 space-y-4 ">
        <Input
          className=" flex  w-fit "
          type="text"
          placeholder="Enter your Email"
        />
        <Input
          className=" flex  w-fit "
          type="text"
          placeholder="Enter password
          "
        />
      </div>
      <Footer />
    </div>
  );
}

export default Login;
