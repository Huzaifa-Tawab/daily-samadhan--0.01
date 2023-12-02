import { BrowserRouter, Routes, Route } from "react-router-dom";
import './pages/pages.css'
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Form from "./components/Complaint Form/Form";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </BrowserRouter>
  );
}

