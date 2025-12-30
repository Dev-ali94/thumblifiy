import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import GenratePage from "./pages/GenratePage";
import MyGenerate from "./pages/MyGenerate";
import YTPreview from "./pages/YTPreview";
import Login from "./pages/Login";
import "./globals.css";

export default function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                 <Route path="/generate" element={<GenratePage />} />
                  <Route path="/generate/:id" element={<GenratePage/>} />
                  <Route path="/my-generation" element={<MyGenerate/>} />
                   <Route path="/preview" element={<YTPreview />} />
                    <Route path="/login" element={<Login />} />
            </Routes>
            <Footer />
        </>
    );
}