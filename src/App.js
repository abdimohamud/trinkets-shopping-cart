import React, { useState, useEffect } from "react";
import { Route, NavLink, Switch } from "react-router-dom";
import axios from "axios";



import Home from "./components/Home";
import ItemsList from "./components/ItemsList";
import Item from "./components/Item";
import ItemForm from "./components/ItemForm";
import UpdateForm from "./components/UpdateForm";
import ShoppingCart from "./components/ShoppingCart";
import CheckoutForm from './components/CheckoutForm';
const App = () => {
  const [cart, setCart] = useState([]);
  const [items, setItems] = useState([]);
  useEffect(() => {
    axios
      .get("https://trinkets-shopping-list.herokuapp.com/items")
      .then((res) => setItems(res.data))
      .catch((error) => console.log(error));
  }, []);
  const addItem = item => {
    setCart([...cart, item ])
  }
  const removeItem = id => {
		setCart(cart.filter((obj) => obj.id != id));
	}
  

  return (
    <div className="App">
      <nav>
        <h1 className="store-header">Trinkets Shop</h1>
        <div className="nav-links">
          <NavLink exact to="/item-form">
            Add Item
          </NavLink>
          <NavLink exact to="/">
            Home
          </NavLink>
          <NavLink to="/item-list">Shop</NavLink>
  <NavLink to="/shopping-cart">Cart  <span>{(cart.length>0) ? cart.length : ''}</span></NavLink>
        </div>
      </nav>

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path = "/checkout">
          <CheckoutForm cart={cart} />
        </Route>

        <Route path="/shopping-cart">
          <ShoppingCart  cart={cart} removeItem={removeItem} />
        </Route>

        <Route exact path="/item-list">
          <ItemsList  items={items} />
        </Route>
        
        <Route path="/item-list/:id">
          <Item items={items} setItems={setItems} addItem={addItem} />
        </Route>

        <Route path="/item-form">
          <ItemForm setItemList={setItems} />
        </Route>
        <Route path="/update-form/:id">
          <UpdateForm setItems={setItems} />
        </Route>
      </Switch>

        
    </div>
  );
};

export default App;