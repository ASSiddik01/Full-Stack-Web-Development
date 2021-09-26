import React from 'react';
import './Shop.css'
import { useState, useEffect } from 'react';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb } from '../../utilities/fakedb';


const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart]= useState([])
    useEffect(() => {
        fetch('./products.JSON')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])
    
    const addToCartHandeler = product => {
        const newCart = [...cart, product];
        setCart(newCart);
        addToDb(product.key)
    }

    return (
        <div className='shop_container'>
            <div className="product_container">
                {
                    products.map(product => <Product
                        key={product.key}
                        product={product}
                        addToCartHandeler = {addToCartHandeler}
                    />)
                }
            </div>
            <div className="cart_container">
                <Cart cart={cart} />
            </div>
            
        </div>
    );
};

export default Shop;