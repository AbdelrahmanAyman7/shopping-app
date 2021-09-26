import React, { Fragment } from 'react';
import './Components/Products.css'; 
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Header from './Components/Header';
import ProductList from './Components/ProductList';
import ProductDetails from './Components/ProductDetails';
import Cart from './Components/Cart';



const App = () => {
  
  return (
    <div className="App">
    <Fragment>
    <Router>
    <Header/>
     <Switch>
      <Route path = "/" exact component = {ProductList} />
      <Route path = "/Product/:ProductId" exact component = {ProductDetails} />
      <Route path = "/Cart" exact component = {Cart} />
     </Switch>
    </Router>
    </Fragment>
    </div>
    
    
  );
}

export default App;
