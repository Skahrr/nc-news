import "./App.css";
import React from "react";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Footer } from "./components/Footer";
import { Routes, BrowserRouter, Route, Navigate } from "react-router-dom";
import { SingleArticle } from "./components/SingleArticle";


function App() {
  
  return (
    
      <BrowserRouter>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<Navigate to="/articles" />} />
            <Route path="/articles/:topic" element={<Main />} />
            <Route path="/articles" element={<Main />} />
            <Route path="/articles/:topic/:article_id" element={<SingleArticle/>}/>
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
  );
}

export default App;
