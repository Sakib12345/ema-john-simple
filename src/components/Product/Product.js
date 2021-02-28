import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css';


const Product = (props) => {
    console.log(props);
    const {img, name, seller, price, stock} = props.product;
    return (
        <div className='product'>
            <div className='product-image'>
                <img src={img} alt=""/>
            </div>
            <div className='product-details'>
                <h4>{name}</h4>
                <br/>
                <p><small>by: {seller}</small></p>
                <p>${price}</p>
                <p><small>only {stock} left in stock - order soon</small></p>
                <button onClick={() => {
                    props.handleAddProduct(props.product)
                }} className="add-to-cart-button">
                    <FontAwesomeIcon icon={faShoppingCart} />
                    <span>add to cart</span>
                </button>
            </div>
        </div>
    );
};

export default Product;