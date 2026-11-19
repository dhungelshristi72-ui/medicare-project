import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Hospitals from "./pages/Hospitals";
import Doctors from "./pages/Doctors";
import Appointments from "./pages/Appointments";
import About from "./pages/About";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/hospitals" element={<Hospitals />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/appointments" element={<Appointments/>} />
        <Route path="/about" element={<About/>} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
