import React from "react";
import axios from "axios";
function Dashboard() {
  async function getData() {
    const res = await axios.get("http://localhost:5000/api/product/getProduct");
    console.log(res.data.data[0].userDetails); // can be uses for getting the userdetails
    const userData = res.data.data[0].userDetails;
    const changed = JSON.parse(userData);
    console.log(changed, "from the house of makhani");
  }

  getData();
  return <div></div>;
}

export default Dashboard;
