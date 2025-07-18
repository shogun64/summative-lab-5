import React from "react";
import CoffeeCard from "./CoffeeCard";

function CoffeeList() {
  return (
    <div className="coffeeList">
        <h1>Coffee R Us</h1>
        <p>The go to store for your coffee needs</p>
        <CoffeeCard />
    </div>
  )
}

export default CoffeeList