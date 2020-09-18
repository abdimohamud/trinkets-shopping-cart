import React from 'react'
import {Link} from 'react-router-dom'
import CartItem from './CartItem'

const ShoppingCart = ( props) => {
  const getCartTotal = () => {
		return props.cart.reduce((acc, value) => {
			return acc + value.price;
		}, 0).toFixed(2);
	};


  return (
    <div className="cart">
      <h2>Your Cart</h2>
      <div>
        {props.cart.map(item =>(
          <CartItem key={item.id} item={item} removeItem={props.removeItem} />
        ))}
      </div>
      <h4>Total: ${getCartTotal()}</h4>
        <Link to="/checkout"><button>Checkout</button></Link>
        
    </div>
  )
}

export default ShoppingCart;