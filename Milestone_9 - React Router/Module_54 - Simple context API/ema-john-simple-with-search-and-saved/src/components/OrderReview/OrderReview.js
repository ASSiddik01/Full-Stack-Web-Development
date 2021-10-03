import React from 'react';
import { Link } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { deleteFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const OrderReview = () => {
    const [products] = useProducts();
    const [cart, setCart] = useCart(products);
    const removehandler = (key) => {
        const newCart = cart.filter(product => product.key !== key);
        setCart(newCart);
        deleteFromDb(key);
    }
    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    cart.map(product => <ReviewItem
                        key={product.key}
                        removehandler={removehandler}
                        product={product} ></ReviewItem>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart} >
                    <Link>
                        <button className='btn-regular'>Place Order</button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default OrderReview;