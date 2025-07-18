import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import AdminPortal from "./pages/AdminPortal";
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/admin" element={<AdminPortal />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App
