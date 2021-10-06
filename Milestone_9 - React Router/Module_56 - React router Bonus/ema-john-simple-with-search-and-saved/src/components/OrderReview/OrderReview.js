import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { clearTheCart, deleteFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';


const OrderReview = () => {
    const [products] = useProducts();
    const [cart, setCart] = useCart(products);
    const history = useHistory()
    const removehandler = (key) => {
        const newCart = cart.filter(product => product.key !== key);
        setCart(newCart);
        deleteFromDb(key);
    }
    const OrderHandler = () => {
        history.push('/placeorder');
        setCart([]);
        clearTheCart()
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
                        <button onClick={OrderHandler} className='btn-regular'>Place Order</button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default OrderReview;