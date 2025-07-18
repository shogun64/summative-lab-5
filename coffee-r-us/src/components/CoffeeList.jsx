import React from "react";
import CoffeeCard from "./CoffeeCard";
import styles from "./styles/CoffeeList.module.css";

function CoffeeList() {
  return (
    <div className={styles.coffeeList}>
        <h1>Coffee R Us</h1>
        <p>The go to store for your coffee needs</p>
        <CoffeeCard />
    </div>
  )
}

export default CoffeeList