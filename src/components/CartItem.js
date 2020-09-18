import React from 'react'

const CartItem = props => {

    return(
        
        <div className="cart-items-list-wrapper">
        <div className="cart-item-card">
            <img
            className="cart-item-list-image"
            src={props.item.imageUrl}
            alt={props.item.name}
            />
        </div>
        <div className="cart-item-info">
            <p>{props.item.name}</p>
            <p>${props.item.price}</p>
        </div>
        <button className="md-button" onClick={()=>{props.removeItem(props.item.id)}}>
        Remove from cart
      </button>
      </div>
        
    )
}

export default CartItem;