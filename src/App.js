import { BrowserRouter, Routes, Route } from "react-router-dom";
import './pages/pages.css'
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Form from "./components/Complaint Form/Form";
import Complainportal from "./pages/Complaint Portal/Complainportal";
import Contact from "./pages/Contact/Contact";
import Login from './Admin/Login/Login'
import Admin from "./Admin/Admin/Admin";
import PComplaint from "./Admin/Police Com/PComplaint";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/complaintportal" element={<Complainportal />} />
        <Route path="/contact" element={<Contact />} />
        <Route  path="/form/:id" element={<Form />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/admin" element={<Admin/>} />
        <Route path="/adminpolicecomplaint" element={<PComplaint/>} />
      </Routes>
    </BrowserRouter>
  );
}

