import {createSelector} from 'reselect';
 //lo unico que esto hace es seleccionar un item (ojbeto) dentro de mi state, y puedo ir entrando los layer o jerarquias (el objeto del objeto), y lo que hace es que puedo modificar solo una parte del objeto para que un solo componente haga rerender en vez de cambiar todo el estado, y esto lo hace atravez de guardando en memoria lo que no cambio
export const selectCart = state => state.cart; // recibo el state y bajo un nivel y selecciono el objeto cart

export const selectCartItems = createSelector ([selectCart], cart =>cart.cartItems) // aca empiezo a tener en memoria mi selectCart, entonces solo hara update si el cart cambia, aparte de eso estoy entrando un nivel en el objeto y agarrando cartItems
// ojo que aca arriba ya llegue al nivel de cart.cartItems
export const selectCartItemsCount = createSelector([selectCartItems], cartItems => cartItems.reduce( 
    (accumulatedQuantity, cartItem)=> accumulatedQuantity + cartItem.quantity, 0 ))
 // aca arriba ya baje un nivel mas porque ahora solo hara re-render si cartItems cambia, entonces ya no cambiara todo el cart porque ya baje un nivel
 // cartItems ya es el elemento que esta dentro mi cartItems, que es mi cartItem
export const selectCartTotal = createSelector([selectCartItems],
    cartItems=>cartItems.reduce((accumulatedQuantity, cartItem)=>
    accumulatedQuantity + cartItem.quantity * cartItem.price, 0
    )
    )
 export const selectCartHidden = createSelector([selectCart], cart=>cart.hidden);