import React from "react";
import Sidebar from "../components/Sidebar";
import CoffeeList from "../components/CoffeeList";
import styles from "./Shop.module.css";

function Shop() {
  return (
    <div className={styles.shop}>
        <Sidebar />
        <CoffeeList />
    </div>
  )
}

export default Shop