import {addItemToCart, removeItemFromCart} from './cart.utils';

const INITIAL_STATE = {
    hidden: true,
    cartItems:[]
  };
  
  const cartReducer = (state = INITIAL_STATE, action) => { // el state que esta aca adentro nos entrega una copia del previous state antes que la accion pase
    switch (action.type) {
      case'TOGGLE_CART_HIDDEN':
        return {
          ...state,
          hidden: !state.hidden
        };
      case 'ADD_ITEM':
        return {
          ...state,
          cartItems: addItemToCart(state.cartItems, action.payload) // recuerda que el payload es el item que viene como objeto para sumar la cantidad 
          //cartItems: [...state.cartItems, action.payload] // el spread agrega los anteriores y el payload agrega uno mas, ojo, el spread me crea otro array en la memoria, encambio si uso puch, modifico el estado actual que no se debe y puede hacer porque solo modifico el state atraves, de los reducers
        }
      case 'CLEAR_ITEM_FROM_CART':
        return {
          ...state,
          cartItems: state.cartItems.filter(cartItem=>cartItem.id != action.payload.id) // recuerda lo siguiente filter es un iterador, cartItem es como la "e", entonces el iterara y dira:
          // si el item que estoy metiendo desde el payload, es distinto al item que estoy iterando entonces devuelvelo y hechalo al nuevo array, y uno por uno, y cuando encuentre dicho item lo ignorara, y me devolvera un nuevo array sin ese item asi logre eliminar el item no deseado sin usar slice, u otro
        }
        case 'REMOVE_ITEM':
          return {
            ...state,
            cartItems: removeItemFromCart(state.cartItems, action.payload)
          };
      default:
        return state;
    }
  };
  
  export default cartReducer;