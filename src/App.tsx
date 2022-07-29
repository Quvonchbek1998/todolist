import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Navbar } from "./components/Navbar";
import { Aboutpage } from "./pages/AboutPage";
import { Home } from "./pages/Home";
import { TodosPage } from "./pages/TodosPage";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todo" element={<TodosPage />} />
          <Route path="/about" element={<Aboutpage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
