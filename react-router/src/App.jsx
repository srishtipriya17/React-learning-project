import { Routes, Route } from "react-router";
import {  NavLink} from "react-router";
import Product from "./pages/Product";

import "./App.css";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
function App() {
  return (
    <div>

      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/login">Login</NavLink>

        </nav>

      <Routes>

        <Route path="/product/:category/:id" element={<Product />} />

        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="/login" element={<Login />} />

      </Routes>

    </div>
  );
}

export default App;