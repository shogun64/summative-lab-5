import React from "react";
import EditForm from "./EditForm";
import styles from "./styles/CoffeeCard.module.css";

function CoffeeCard({coffee}) {
  return (
    <div className={styles.coffeeCard}>
        <h2>{coffee.name}</h2>
        <p>{coffee.description}</p>
        <p>{coffee.origin} origin</p>
        <p>${coffee.price.toFixed(2)}</p>
        <p className={styles.edit}>Edit Product</p>
    </div>
  )
}

export default CoffeeCard