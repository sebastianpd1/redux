import React from 'react';

const CartItem = ({item: {imageUrl, price, name, quantity}})=>(
    <div className="container">
        <div className="row">
            <div className="col"><img src={imageUrl} alt=""/></div>
            <div className="col">
                <span>{name}</span>
                <span>{quantity} x ${price}</span>
            </div>     
        </div>
    </div>
);

export default CartItem;