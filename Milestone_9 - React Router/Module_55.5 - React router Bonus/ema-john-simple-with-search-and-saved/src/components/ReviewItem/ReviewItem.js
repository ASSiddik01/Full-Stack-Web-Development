import React from 'react';

const ReviewItem = (props) => {
    // console.log(props);
    const { name, price, quantity, img, key } = props.product
    const { removehandler } = props;
    return (
        <div className='product'>
            <div className="">
                <img src={img} alt="" />
            </div>
            <div className="product-name">
                <h4 className='product-name'>{name}</h4>
                <p>Price: {price} </p>
                <p>Queantity: {quantity} </p>
                <button onClick={() => removehandler(key)} className='btn-regular'>Remove</button>
            </div>
        </div>
    );
};

export default ReviewItem;