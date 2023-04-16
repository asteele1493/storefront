import './App.css';
import React from 'react';
import Header from './Components/Header';
import Categories from './Components/Categories';
import Footer from './Components/Footer';
import SimpleCart from './Components/SimpleCart';
// import { BrowserRouter, Routes } from "react-router-dom";

function App() {
  return (
   <>
   {/* <BrowserRouter>
   <Routes> */}
    <Header />
    <Categories />
    <SimpleCart />
    <Footer />
    {/* </Routes>
  </BrowserRouter> */}
   </>
  );
}

export default App;
