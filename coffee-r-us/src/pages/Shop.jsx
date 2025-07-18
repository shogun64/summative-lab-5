import React from "react";
import Sidebar from "../components/Sidebar";
import CoffeeList from "../components/CoffeeList";

function Shop() {
  return (
    <div className="shop">
        <h1>Coffee R Us</h1>
        <p>The go to store for your coffee needs</p>
        <Sidebar />
        <CoffeeList />
    </div>
  )
}

export default Shop