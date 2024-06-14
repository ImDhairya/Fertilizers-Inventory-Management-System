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
  console.log(productData);
  return (
    <div className=" grid grid-cols-3 p-5 space-x-5">
      {productData &&
        productData.map((data) => {
          return (
            <Card className="w-[550px]">
              <CardHeader>
                <CardTitle> {data.name} </CardTitle>
                <CardDescription>Amount. {data.amount}</CardDescription>
              </CardHeader>
              <CardContent>
                <form>
                  <div className="grid w-full items-center gap-4">
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
                      <CardDescription> {data.mfgDate}</CardDescription>
                    </div>
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="name">Expiration Date</Label>
                      <CardDescription> {data.expDate}</CardDescription>
                    </div>
                  </div>
                </form>
              </CardContent>
              <CardFooter className="flex justify-between">
                {/* <Button variant="outline">Cancel</Button>
                <Button>Deploy</Button> */}
                {data.similarProducts ? (
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="name">Similar Products</Label>
                    <CardDescription> {data.similarProducts}</CardDescription>
                  </div>
                ) : null}
              </CardFooter>
            </Card>
          );
        })}
      {/* <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Create project</CardTitle>
          <CardDescription>
            Deploy your new project in one-click.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  placeholder="Name of your project"
                />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline">Cancel</Button>
          <Button>Deploy</Button>
        </CardFooter>
      </Card> */}
    </div>
  );
}

export default Dashboard;
