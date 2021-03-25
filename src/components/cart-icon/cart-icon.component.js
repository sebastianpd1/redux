import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import  {faCartArrowDown} from '@fortawesome/free-solid-svg-icons';
import {toggleCartHidden} from '../../redux/cart/cart.actions';
import { connect } from 'react-redux';
import {selectCartItemsCount} from '../../redux/cart/cart.selectors';
import {createStructuredSelector} from 'reselect';

const CartIcon = ({toggleCartHidden, itemCount}) => (

    <div className = 'container bg-warning' onClick={toggleCartHidden}>
        <FontAwesomeIcon icon={faCartArrowDown}/>
        <span>{itemCount}</span>
    </div>
);

const mapDispatchToProps = dispatch => ({

    toggleCartHidden: () => dispatch(toggleCartHidden())
});


// porque el select ya viene con el state??? que selecciona el select?, el state poooo
const mapStateToProps = createStructuredSelector (
    {
        itemCount: selectCartItemsCount // por dentro ya  a este item le pasa el state
    }
)

// aca abajo era sin el structured selector
// const mapStateToProps = (state) => ({ // no estoy destructurando el state sino que pasa directo
//     itemCount: selectCartItemsCount(state)
// })

// aca abajo era sin los selectors
// const mapStateToProps = ({cart:{cartItems}}) => ({ // aca destructuro el estado, y dentro el estado tengo cart y dentro de cart tengo mas items y destructuro cartItems

//     itemCount: cartItems.reduce( (accumulatedQuantity, cartItem)=> accumulatedQuantity + cartItem.quantity, 0 ) // recuerda que cartItem sera el e, que itera, y cartItem.quantity, es una propiedad que tiene ese e del estado

// })


export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
