import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectCartItems, selectCartTotal} from '../../redux/cart/cart.selectors';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';

const CheckOutPage = ({cartItems, total}) =>(

    <div className="container">
        <div className="row">
            <div className="col">
            Product
            </div>
            <div className="col">
            Description
            </div>
            <div className="col">
            Quantity    
            </div>
            <div className="col">
            Price
            </div>
            <div className="col">
            Remove    
            </div>
        </div>
        <div className="row">
            {
                cartItems.map((cartItem, i) => (<CheckoutItem key={i} cartItem={cartItem}/>))
            }
        </div>
            <div className="row">
                <span>Total: ${total}</span> 
            </div>
        <div className="row">
            -------------------------------------------------------------------------------------------------------------------------------
        </div>
        <div className="row">
            <StripeCheckoutButton price = {total}/>
        </div>
    </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})

export default connect(mapStateToProps)(CheckOutPage);