import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Browse from "./pages/Browse";
import About from "./pages/About";
import FAQ from "./pages/FAQ";
import NotFound from "./pages/NotFound";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/browse" Component={Browse} />
        <Route path="/about" Component={About} />
        <Route path="/faq" Component={FAQ} />
        <Route path="*" Component={NotFound} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
