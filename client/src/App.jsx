import React from "react";
import Navbar from "./components/Navbar";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import MyLoanAccount from "./pages/MyLoanAccount";
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer";

const App = () => {
  const isAdminRoute = useLocation().pathname.startsWith("/admin");
  return (
    <>
      <Toaster />
      {!isAdminRoute && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/myloanaccount" element={<MyLoanAccount />} />
        <Route path="/myrdaccount" element={<MyLoanAccount />} />
      </Routes>
      {!isAdminRoute && <Footer />}
    </>
  );
};

export default App;
