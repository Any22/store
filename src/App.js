import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar  from './components/Navbar';
import Sidebar  from './components/Sidebar';
import Footer  from './components/Footer';
import {
  Home,
  SingleProduct,
  Cart,
  Checkout,
  Error,
  About,
  Products,
  PrivateRoute,
 
} from './pages'


import './App.css';
// https://www.youtube.com/watch?v=S8yn3-WpVV8
function App() {
  return (
    <BrowserRouter>
  
      <Navbar/>
      <Sidebar/>
      <Switch>
        <Route exact path='/'><Home/></Route>
        <Route exact path="/about"><About/></Route>
        <Route exact path="/cart"><Cart/></Route>
        <Route exact path="/products"><Products/></Route>
        <Route path='/products/:id' children={<SingleProduct />} />
        <PrivateRoute path='/checkout'><Checkout /></PrivateRoute>
        <Route path='*'><Error /></Route>
      </Switch>
      <Footer/>
    </BrowserRouter>
    
  );
}

export default App;