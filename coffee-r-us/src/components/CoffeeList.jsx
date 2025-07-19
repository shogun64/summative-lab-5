import React, {useState} from "react";
import CoffeeCard from "./CoffeeCard";
import styles from "./styles/CoffeeList.module.css";

function CoffeeList({coffeeList}) {
    return (
        <div className={styles.coffeeList}>
            {coffeeList.map((coffee) => (
                <CoffeeCard key={coffee.id} coffee={coffee} />
            ))}
        </div>
    )
}

export default CoffeeList