import { Routes, Route } from "react-router-dom";
// Import Pages/halaman yang akan ditampilkan
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/About" element={<About />}/>
            <Route path="/Contact" element={<Contact />}/>
        </Routes>

    )
}