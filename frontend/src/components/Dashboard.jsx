import React, {useEffect, useState} from "react";
import axios from "axios";
import {Button} from "./ui/button";
import {Input} from "./ui/input";
import {Label} from "./ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import Data from "./Data";
function Dashboard() {
  const [productData, setProductData] = useState("");
  const [userData, setUserData] = useState("");

  useEffect(() => {
    getUserData();
    getProductData();
  }, []);

  async function getProductData() {
    const res = await axios.get("http://localhost:5000/api/product/getProduct");
    // console.log(res.data.data[0]); // can be uses for getting the userdetails
    setProductData(res.data.data);
  }

  async function getUserData() {
    const res = await axios.get("http://localhost:5000/api/user/getUsers");
    // console.log(res.data.data[0]);
    setUserData(res.data.data);
  }

  async function handleDelete(id) {
    const res = await axios.post(
      `http://localhost:5000/api/product/deleteProduct/${id}`
    );
    getProductData();
  }

  function formatDate(dateString) {
    const date = new Date(dateString);
    const options = {year: "numeric", month: "2-digit", day: "2-digit"};
    return date.toLocaleDateString(undefined, options);
  }
  return (
    <div className=" flex items-center justify-center ">
      <div className="">{/* <Data /> */}</div>
      <div className="  grid p-5 space-y-5 justify-center items-center  space-x-1">
        {productData &&
          productData.map((data) => {
            return (
              <Card className="w-[1650px] flex p-5">
                <CardHeader>
                  <CardTitle> {data.name} </CardTitle>
                  <CardDescription>Amount. {data.amount}</CardDescription>
                </CardHeader>
                <CardContent>
                  <form>
                    <div className="grid  w-full items-center gap-4">
                      <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="name">Description</Label>
                        <CardDescription> {data.description}</CardDescription>
                      </div>
                      <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="name">Email: </Label>
                        <CardDescription> {data.email}</CardDescription>
                      </div>
                      <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="name">Manufacturing date</Label>
                        <CardDescription>
                          {" "}
                          {formatDate(data.mfgDate)}
                        </CardDescription>
                      </div>
                      <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="name">Expiration Date</Label>
                        <CardDescription>
                          {" "}
                          {formatDate(data.expDate)}
                        </CardDescription>
                      </div>
                    </div>
                  </form>
                  {data.similarProducts ? (
                    <div className="flex flex-col mt-4 space-y-1.5">
                      <Label htmlFor="name">Similar Products</Label>
                      <CardDescription> {data.similarProducts}</CardDescription>
                    </div>
                  ) : null}
                </CardContent>
                <CardFooter className="flex justify-between"></CardFooter>
                <div className=" w-[500px] ">
                  <Data className="" />
                </div>
              </Card>
            );
          })}
      </div>
    </div>
  );
}

export default Dashboard;
