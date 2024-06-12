import * as React from "react";
import {Button} from "./ui/button";
import {useSelector} from "react-redux";
import {useEffect} from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import {Input} from "./ui/input";
import {Label} from "./ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import {format} from "date-fns";
import {Calendar} from "./ui/calendar";
import {cn} from "../lib/utils";
import {Popover, PopoverContent, PopoverTrigger} from "./ui/popover";
import {Checkbox} from "./ui/checkbox";
import {Textarea} from "./ui/textarea";
import {useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import Navbar from "./Navbar";

function CardComponent() {
  const [isSimilarProductsChecked, setIsSimilarProductsChecked] =
    useState(false);
  const [expDate, setExpDate] = useState("");
  const [mfgDate, setMfgDate] = useState("");
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [similarProducts, setSimilarProducts] = useState("");
  const userId = useSelector((store) => store.user.user._id);
  const navigate = useNavigate();
  // name, amount ,description, similar products, expiration date, manufacturing date

  const handleCheckboxChange = (event) => {
    setIsSimilarProductsChecked(!isSimilarProductsChecked);
    console.log(isSimilarProductsChecked);
  };

  async function handleSubmit(e) {
    e.preventDefault();
    // console.log(name);
    const res = await axios.post(
      "http://localhost:5000/api/product/addProduct",
      {
        name,
        amount,
        description,
        expDate,
        similarProducts,
        mfgDate,
        userId,
      }
    );
    if (res) {
      console.log("Data sent");
    }
  }

  function handleCancle() {
    navigate("/home");
  }

  return (
    <div className=" items-center w-full justify-center flex flex-col p-5">
      <Navbar className={"p-5"} />
      <Card className="">
        <CardHeader>
          <CardTitle>Add a chemical </CardTitle>
          <CardDescription>
            Describe the quantity and give detailed information about the
            product
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              {/*  */}
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Name</Label>
                <Input
                  onChange={(e) => setName(e.target.value)}
                  id="name"
                  placeholder="Name of your project"
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="amount">Amount</Label>
                <Input
                  type="number"
                  id="amount"
                  onChange={(e) => setAmount(e.target.value)}
                  min={0}
                  max={100}
                  placeholder="Enter your amount"
                />
              </div>
              <div>
                <Label htmlFor="description">Description</Label>
                <Textarea
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Describe the product"
                />
              </div>

              <div className="  items-center ">
                <Checkbox
                  id="similarProductsCheck"
                  checked={isSimilarProductsChecked}
                  onClick={handleCheckboxChange}
                />

                <label
                  htmlFor="similarProductsCheck"
                  className="text-sm p-1 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Similar Products
                </label>
              </div>
              {isSimilarProductsChecked && (
                <div className="flex flex-col space-y-1.5">
                  <Input
                    id="similarProducts"
                    onChange={(e) => setSimilarProducts(e.target.value)}
                    placeholder="Similar products"
                  />
                </div>
              )}

              {/*  */}
              {/* <div className="flex flex-col space-y-1.5">
                <Label htmlFor="framework">Framework</Label>
                <Select>
                  <SelectTrigger id="framework">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    <SelectItem value="next">Next.js</SelectItem>
                    <SelectItem value="sveltekit">SvelteKit</SelectItem>
                    <SelectItem value="astro">Astro</SelectItem>
                    <SelectItem value="nuxt">Nuxt.js</SelectItem>
                  </SelectContent>
                </Select>
              </div> */}
            </div>
            <div className=" p-2 items-center justify-center flex flex-col">
              <div className=" flex">
                <label
                  className=" p-2"
                  htmlFor="expiration"
                >
                  Select Expiration date
                </label>
                <label
                  className=" p-2"
                  htmlFor=""
                >
                  Select Manufacturing date
                </label>
              </div>
              <div className=" flex space-x-2 items-center">
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-[280px] justify-start text-left font-normal",
                        !expDate && "text-muted-foreground"
                      )}
                    >
                      {/* <CalendarIcon className="mr-2 h-4 w-4" /> */}
                      {expDate ? (
                        format(expDate, "PPP")
                      ) : (
                        <span>Pick a date</span>
                      )}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={expDate}
                      onSelect={setExpDate}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-[280px] justify-start text-left font-normal",
                        !mfgDate && "text-muted-foreground"
                      )}
                    >
                      {/* <CalendarIcon className="mr-2 h-4 w-4" /> */}
                      {mfgDate ? (
                        format(mfgDate, "PPP")
                      ) : (
                        <span>Pick a date</span>
                      )}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={mfgDate}
                      onSelect={setMfgDate}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button
            onClick={handleCancle}
            variant="outline"
          >
            Cancel
          </Button>
          <Button onClick={handleSubmit}>Deploy</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
export default CardComponent;
