import React from 'react';
import './Shop.css'
import { useState, useEffect } from 'react';
import Product from '../Product/Product';


const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('./products.JSON')
            .then(res => res.json())
            .then(data => setProducts(data));
    },[])
    return (
        <div className='shop_container'>
            <div className="product_container">
                {
                    products.map(product => <Product
                        key={product.key}
                        product={product}
                    />)
                }
            </div>
            <div className="cart_container">
                <h3>Cart</h3>
                <h5>Order</h5>
            </div>
            
        </div>
    );
};

export default Shop;