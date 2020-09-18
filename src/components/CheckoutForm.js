import React, { useState } from 'react'
import {useForm} from '../hooks/useForm'
const initialValue = {
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    zip: "",
  };
const CheckoutForm = (props) => {
  const getCartTotal = () => {
		return props.cart.reduce((acc, value) => {
			return acc + value.price;
		}, 0).toFixed(2);
	};
    const [handleChanges,values,showSuccessMessage,setShowSuccessMessage, setValues] = useForm(initialValue);
    const [data, setData] = useState(initialValue)
    const handleSubmit = (e) => {
        e.preventDefault();
       setShowSuccessMessage(true);
       setData(values)
       resetIt();
              
      };
      const resetIt = () => {
        setValues(initialValue)
      }
      console.log(data)
      console.log(values)
    

    return (
        <div className="checkout">
            
        <form onSubmit={handleSubmit}>
        <h2>Checkout Form</h2>
    
          
          <input
            name="firstName"
            value={values.firstName}
            onChange={handleChanges}
            placeholder="First Name"
          />
        
        <div className="baseline" />
    
         
          <input
            name="lastName"
            value={values.lastName}
            onChange={handleChanges}
            placeholder="Last Name"
          />
        
        <div className="baseline" />
    
          
          <input
            name="address"
            value={values.address}
            onChange={handleChanges}
            placeholder="Address"
          />
        
        <div className="baseline" />
    
         
          <input name="city" value={values.city} onChange={handleChanges} placeholder="City" />
        
        <div className="baseline" />
    
          
          <input name="state" value={values.state} onChange={handleChanges} placeholder="State" />
        
        <div className="baseline" />
    
          
          <input name="zip" value={values.zip} onChange={handleChanges} placeholder="Zip" />
        
        <div className="baseline" />
        <button className="md-button form-button">Update</button>
      </form>
      {showSuccessMessage && (
        
        <div className="success-message" data-testid="successMessage">
          <p>
            Thank you for placing your order! Woo-hoo! <span role="img">🎉</span>
          </p>
          <p>Your new items will be shipped to:</p>
          <br />
          
          <p>
            {data.firstName} {data.lastName}
          </p>
          <p>{data.address}</p>
          <p>
            {data.city}, {data.state} {data.zip}
          </p>
          <p>Order Details</p>
          <div>
            {props.cart.map(item => (

                      <div className="cartcheckout-items-list-wrapper">
                      <div className="cartcheckout-item-card">
                          <img
                          className="cartcheckout-item-list-image"
                          src={item.imageUrl}
                          alt={item.name}
                          />
                      </div>
                      <div className="cartcheckout-item-info">
                          <p>{item.name}</p>
                          <p>${item.price}</p>
                      </div>
                     
                    </div> 
            ))}
            <h4>Total: ${getCartTotal()}</h4>
          </div>
        </div>
      )}
            
        </div>
    )
}

export default CheckoutForm;

