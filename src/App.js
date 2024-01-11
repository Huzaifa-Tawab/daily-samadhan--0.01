// App.js
import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./pages/pages.css";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Form from "./components/Complaint Form/Form";
import Complainportal from "./pages/Complaint Portal/Complainportal";
import Contact from "./pages/Contact/Contact";
import Login from "./Admin/Login/Login";
import Admin from "./Admin/Admin/Admin";
import PComplaint from "./Admin/Police Com/PComplaint";
import ThankYou from "./pages/ThankYou/ThankYou";
import PrivateRoutes from "./PrivateRoute";
import NotFoundPage from "./pages/404/NotFoundPage";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import Services from "./pages/Services/services";
import UploadPortal from "./Admin/Upload Portal/uploadportal";

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Routes>
          <Route path="/404" element={<NotFoundPage />} />
          <Route path="*" element={<Navigate replace to="/404" />} />
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/complaintportal" element={<Complainportal />} />
          <Route path="/contact/:id" element={<Contact />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/form/:id" element={<Form />} />
          <Route path="/thanks/:id" element={<ThankYou />} />
          <Route path="/login" element={<Login />} />
          <Route path="/services" element={<Services />} />
          <Route path="/addportal" element={<UploadPortal />} />
          <Route element={<PrivateRoutes />}>
            <Route path="/admin" element={<Admin />} />
            <Route path="/adminpolicecomplaint" element={<PComplaint />} />
          </Route>
        </Routes>
      </ScrollToTop>
    </BrowserRouter>
  );
};

export default App;
