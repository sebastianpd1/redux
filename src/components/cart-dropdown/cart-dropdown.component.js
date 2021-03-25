import React from 'react';
import {connect} from 'react-redux';
import CustomButton from '../custom-button/custom-button.component';
import './cart-dropdown.styles.css';
import CartItem from '../cart-item/cart-item.component';
import {selectCartItems} from '../../redux/cart/cart.selectors'; // me ayuda poner el selector en el padre del cart que es el dropdown para que cuando algo cambie en mi pagina esto no cambie y no me joda el cart
import {createStructuredSelector} from 'reselect';
import {withRouter} from 'react-router-dom';
import {toggleCartHidden} from '../../redux/cart/cart.actions';

// nota : para meter una accion de mi reducer aca, deberia hacer un mapDispatchToPops, y despues pasar el toggle hacia abajo, atra vez del connect()
// pero tambien hay otra forma corta de hacerlo, de porsi el connect, ya pasa el dispatch, entonces lo llamo aca abajocomo props

const CartDropdown = ({cartItems, history, dispatch}) => (
    <div className="cart-dropdown">
        <div className="cart-items">
            {
                cartItems.length ? (
                cartItems.map((cartItem, id) => <CartItem key={id} item={cartItem}/>) // el componente CartItem  recibe como prop todo el item del array y ahi adentro lo destructuro
                )
                :
                <span>Your Cart is Empty</span>
            }
        </div>
        <CustomButton onClick = {()=> {
            history.push('/checkout');
            dispatch(toggleCartHidden()) 
        }}
        >Go to CheckOut</CustomButton>
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})

// lo de abajo era sin usar el structredSelect
// const mapStateToProps = (state) => ({
//     cartItems: selectCartItems(state)
// })
// abajo era sin usar los selectors
// const mapStateToProps = ({cart:{cartItems}})=> ({ // estoy destructurando el state que tiene cart dentro y eso viene del cart reducer que adentro tiene un array que se llama cartItems
//     cartItems
// });


export default withRouter(connect(mapStateToProps)(CartDropdown)); // el connect retorna un component , y el withrouter lo toma para react router