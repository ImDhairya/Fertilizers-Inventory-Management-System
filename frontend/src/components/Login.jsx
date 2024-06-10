import React, {useEffect, useState} from "react";
import {Input} from "./ui/input";
import {Button} from "./ui/button";
import Navbar from "./Navbar";
import Footer from "./Footer";
import {Link} from "react-router-dom";
import axios from "axios";
import {useNavigate} from "react-router-dom";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [username, setUserName] = useState("");
  const [register, setRegister] = useState(false);
  const navigate = useNavigate();
  async function handleSubmit(e) {
    e.preventDefault();
    // useEffect(() => {
    //   setEmail("");
    // }, []);
    try {
      if (!register) {
        const res = await axios.post("http://localhost:5000/api/user/login", {
          email,
          password,
        });
        setEmail("");
        setPassword("");
        navigate("/dashboard");
      } else {
        await axios.post("http://localhost:5000/api/user/register", {
          email,
          password,
          username,
          name,
        });
        setEmail("");
        setPassword("");
        setUserName("");
        setName("");
        setRegister(!register);
      }
      setEmail("");
      setPassword("");
      setUserName("");
      setName("");
      // console.log(email, password, name, username);
    } catch (error) {
      console.log("Error", error);
    }
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
      <div className=" text-center m-5 space-y-4 ">
        {!register ? (
          <>
            <Input
              onChange={(e) => setEmail(e.target.value)}
              className=" flex  w-fit "
              type="text"
              value={email}
              placeholder="Enter your Email"
            />
            <Input
              onChange={(e) => setPassword(e.target.value)}
              className=" flex w-fit "
              type="password"
              value={password}
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
              value={email}
              placeholder="Enter your Email"
            />
            <Input
              onChange={(e) => setPassword(e.target.value)}
              className=" flex w-fit "
              type="text"
              value={password}
              placeholder="Enter password
          "
            />
            <Input
              onChange={(e) => setUserName(e.target.value)}
              className=" flex w-fit "
              type="text"
              value={username}
              placeholder="Enter username
          "
            />
            <Input
              onChange={(e) => setName(e.target.value)}
              className=" flex w-fit "
              type="text"
              value={name}
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
