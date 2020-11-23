import React, {Fragment} from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';


import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/Navbar';
import ProductList from "./components/ProductList";
import Details from "./components/Details";
import Cart from "./components/Cart";
import Dafault from "./components/Default";
import Default from './components/Default';



export default function App() {
  return (
    <>
      <Navbar />
      <ProductList />
      <Details />
      <Cart /> 
      <Default/>
    </>
  );
}
