import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const cart = props.cart;
    console.log(cart);
    const total = cart.reduce( (total, prd) => 
    total + prd.price, 0);

    let shipping = 0;
    
    if(total > 0){
        shipping = 12.99;
    }
    else if(total > 35){
        shipping = 0
    }
    else if(total > 15){
        shipping = 4.99;
    }
    
    const tax = (total / 10).toFixed(2);
    const grandTotal = total + shipping + Number(tax);

    const formatNumber = num => {
        const precision = num.toFixed(2);
        return Number(precision);
    }


    return (
        <div>
            <h4>Order Summery</h4>
            <p>Items Ordered: {cart.length}</p>
            <p>Product Price: {formatNumber(total)}</p>
            <p>Shipping Cost: ${shipping}</p>
            <p>Tax: {(tax)}</p>
            <p>Total Price: ${formatNumber(grandTotal)}</p>
            
        </div>
    );
};

export default Cart;