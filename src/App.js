import React ,{ useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage, NavBar, Checkout, ProductPage, SearchResults, Login, Register } from "./components";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <BrowserRouter>
    <NavBar />
    <Routes>
    <Route exact path="/" element={<Login />} />
    <Route exact path="/register" element={<Register />} />
 
    
      <Route exact path="/homepage" element={<HomePage />} />
      <Route exact path="/search" element={<SearchResults />} />
      <Route exact path="/Product/:id" element={<ProductPage />} />
      <Route exact path="/checkout" element={<Checkout />} />
      
    </Routes>
    <ToastContainer />
    </BrowserRouter>
  )
}

export default App
