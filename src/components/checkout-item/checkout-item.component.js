import React from 'react';
import {connect} from 'react-redux';
import {clearItemFromCart, addItem, removeItem} from '../../redux/cart/cart.actions';

const CheckoutItem = ({cartItem, clearItem, addItem, removeItem})=>{
    const {name, imageUrl, price, quantity} = cartItem;
return(
<div className="container">
    <div className="row">
        <div className="col">
            <img src={imageUrl} alt=""/>
        </div>
        <div className="col">
            <span>{name}</span>
        </div>
        <div className="col">
            <div onClick= {()=>removeItem(cartItem)}>&#10094;</div>
                <span>{quantity}</span>
            <div onClick= {()=>addItem(cartItem)}>&#10095;</div>
        </div>
        <div className="col">
            <span>{price}</span>
        </div>
        <div className="col" onClick={() => clearItem(cartItem)}>
            &#10006;
        </div>
    </div>
</div>
)
}
const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItemFromCart(item)),
    addItem: item=> dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item))
})
export default connect(null, mapDispatchToProps)(CheckoutItem);
