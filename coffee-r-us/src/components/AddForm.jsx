import React, {useState} from "react";
import { useNavigate } from "react-router-dom"
import usePostData from "../hooks/usePostData"
import styles from "./styles/AddForm.module.css";

function AddForm() {
    const navigate = useNavigate()
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [origin, setOrigin] = useState("")
    const [price, setPrice] = useState("")

    async function handleSubmit(e) {
        const data = {name: name, description: description, origin: origin, price: price}
        e.preventDefault()
        try {
            await usePostData('http://localhost:4000/coffee', data);
            navigate(`/shop`);
        } catch (err) {
            console.log(err.message);
        }
    }

    return (
        <div className={styles.addForm}>
            <h2>Add New Product</h2>
            <form className={styles.form} onSubmit={handleSubmit}>
                <input type="text"
                placeholder="Product Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                />
                <input type="text"
                placeholder="Product Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
                />
                <input type="text"
                placeholder="Product Origin"
                value={origin}
                onChange={(e) => setOrigin(e.target.value)}
                required
                />
                <input type="text"
                placeholder="Price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                required
                />
                <button className={styles.button} type="submit">Add Product</button>
            </form>
        </div>
    )
}

export default AddForm