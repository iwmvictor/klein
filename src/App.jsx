import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Error from "./pages/Error";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="contact" element={<Contact />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
