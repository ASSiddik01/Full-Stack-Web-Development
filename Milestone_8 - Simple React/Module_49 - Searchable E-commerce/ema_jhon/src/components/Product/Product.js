import React from 'react';
import './Product.css';
import Rating from 'react-rating';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />;

const Product = (props) => {
    const { name, img, seller, price, stock, star } = props.product;
    return (
        <div className="product">
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h4 className="product_name">{name}</h4>
                <p><small>by: {seller}</small></p>
                <p>Price: {price}</p>
                <p><small>only {stock} left in stock - order soon</small></p>
                <Rating
                    initialRating={star}
                    emptySymbol="far fa-star icon_color"
                    fullSymbol="fas fa-star icon_color"
                    readonly
                ></Rating>
                <br />
                <button onClick={()=>props.addToCartHandeler(props.product)} className="btn_regular" >{cartIcon} Add to Cart</button>
            </div>
        </div>
    );
};

export default Product;