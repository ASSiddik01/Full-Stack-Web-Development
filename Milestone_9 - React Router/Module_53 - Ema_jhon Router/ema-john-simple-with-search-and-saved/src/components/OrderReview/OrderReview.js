import React from 'react';
import useProducts from '../../hooks/useProducts';

const OrderReview = () => {
    const [products] = useProducts();
    return (
        <div>
            <h1>Total product:{products.length} </h1>
            <h2>This is Order Review</h2>
        </div>
    );
};

export default OrderReview;