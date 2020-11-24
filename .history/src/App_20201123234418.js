import React, {Fragment} from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import ProductList from "./components/ProductList";
import Details from "./components/Details";
import Cart from "./components/Cart";
import Default from './components/Default';
import ProductProvider } from './context'



export default function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/" component={ProductList} exact />
        <Route path="/details" component={Details} exact />
        <Route path="/cart" component={Cart} exact />
        <Route component={Default} />
      </Switch>
    </>
  );
}
