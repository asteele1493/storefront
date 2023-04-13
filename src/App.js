import './App.css';
import React from 'react';
import Header from './Components/Header';
import Categories from './Components/Categories';
import Footer from './Components/Footer';
import SimpleCart from './Components/SimpleCart';

function App() {
  return (
   <>
    <Header />
    <Categories />
    <SimpleCart />
    <Footer />
   </>
  );
}

export default App;
