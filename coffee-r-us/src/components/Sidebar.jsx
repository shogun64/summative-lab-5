import React, { useState } from "react";
import styles from "./styles/Sidebar.module.css"

function Sidebar({search, setSearch}) {
  return (
    <div className={styles.sidebar}>
        <input
        type="text" placeholder="Search" value={search} onChange={(e) => setSearch(e.target.value)}/>
    </div>
  )
}

export default Sidebar