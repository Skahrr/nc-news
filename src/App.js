import "./App.css";
import React from "react";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Footer } from "./components/Footer";
import { Routes, BrowserRouter, Route, Navigate } from "react-router-dom";
import { useState } from "react";

function App() {
  const [endpoint, setEndpoint] = useState("/articles")
  return (
    
      <BrowserRouter>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<Navigate to="/articles" />} />
            <Route path="/articles/:topic" element={<Main />} />
            <Route path="/articles" element={<Main />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
  );
}

export default App;
