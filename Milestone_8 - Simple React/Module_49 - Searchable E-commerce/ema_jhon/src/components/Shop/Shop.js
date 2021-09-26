import React from 'react';
import './Shop.css'
import { useState, useEffect } from 'react';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb, getStoredCart } from '../../utilities/fakedb';


const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [displayProducts, setDisplayProducts] = useState([]);
    useEffect(() => {
        fetch('./products.JSON')
            .then(res => res.json())
            .then(data =>{
                setProducts(data);
                setDisplayProducts(data);
            });
    }, []);

    useEffect(() => {
        if (products.length) {
            const savedCart = getStoredCart();
            const storedCart = [];
            for (const key in savedCart) {
                const addedProduct = products.find(product => product.key === key);
                if (addedProduct) {
                    const quantity = savedCart[key];
                    addedProduct.quantity = quantity;
                    storedCart.push(addedProduct);
                }
            }
            setCart(storedCart);
        }
    }, [products])
    
    const addToCartHandeler = product => {
        const newCart = [...cart, product];
        setCart(newCart);
        addToDb(product.key)
    }

    const handleSearch = event => {
        const searchText = event.target.value;

        const matchedProducts = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()));

        setDisplayProducts(matchedProducts);
    }

    return (
        <div>
            <div className="search_container">
                <input
                    type="text"
                    onChange={handleSearch}
                    placeholder="Search Product" />
            </div>
            <div className='shop_container'>
                <div className="product_container">
                    {
                        displayProducts.map(product => <Product
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
        </div>
    );
};

export default Shop;