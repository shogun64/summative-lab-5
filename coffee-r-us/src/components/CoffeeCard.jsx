import React from "react";
import { useNavigate } from "react-router-dom"
import styles from "./styles/CoffeeCard.module.css";

function CoffeeCard({coffee, onUpdate, onDelete}) {

  return (
    <div className={styles.coffeeCard}>
        <h2>{coffee.name}</h2>
        <p>{coffee.description}</p>
        <p>{coffee.origin} origin</p>
        <p>${parseFloat(coffee.price).toFixed(2)}</p>
    </div>
  )
}

export default CoffeeCard