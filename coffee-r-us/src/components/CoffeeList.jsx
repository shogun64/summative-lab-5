import React, {useState} from "react";
import CoffeeCard from "./CoffeeCard";
import useFetchData from "../hooks/useFetchData";
import styles from "./styles/CoffeeList.module.css";

function CoffeeList() {
    const { data, loading, error } = useFetchData("http://localhost:4000/coffee");

    if (loading) return <p className="loading">Loading posts...</p>;
    if (error) return <p className="error">Error: {error}</p>;
    
    return (
        <div className={styles.coffeeList}>
            {data.map((coffee) => (
                <CoffeeCard key={coffee.id} coffee={coffee} />
            ))}
        </div>
    )
}

export default CoffeeList