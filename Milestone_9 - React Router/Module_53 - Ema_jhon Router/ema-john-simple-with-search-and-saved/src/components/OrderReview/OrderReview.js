import React from 'react';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';

const OrderReview = () => {
    const [products] = useProducts();
    const [cart] = useCart(products);
    return (
        <div>
            <h1>Total product:{products.length} </h1>
            <h2>Cart: {cart.length} </h2>
            <h2>This is Order Review</h2>
        </div>
    );
};

export default OrderReview;