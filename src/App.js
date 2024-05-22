import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage, NavBar, Checkout, ProductPage, SearchResults } from "./components";

function App() {
  return (
    <BrowserRouter>
    <NavBar />
    <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route exact path="/search" element={<SearchResults />} />
      <Route exact path="/Product/:id" element={<ProductPage />} />
      <Route exact path="/checkout" element={<Checkout />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
