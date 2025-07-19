import React, {useState} from "react";
import Sidebar from "../components/Sidebar";
import CoffeeList from "../components/CoffeeList";
import useFetchData from "../hooks/useFetchData";
import styles from "./Shop.module.css";

function Shop() {
    const [search, setSearch] = useState("")

    const { data, loading, error } = useFetchData("http://localhost:4000/coffee");

    if (loading) return <p className="loading">Loading products...</p>;
    if (error) return <p className="error">Error: {error}</p>;

    const coffeeList = data.filter(
    (coffee) =>
      coffee.name.toLowerCase().includes(search.toLowerCase()) ||
      coffee.description.toLowerCase().includes(search.toLowerCase()) ||
      coffee.origin.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className={styles.shop}>
            <Sidebar search={search} setSearch={setSearch}/>
            <CoffeeList coffeeList={coffeeList}/>
        </div>
    )
}

export default Shop