//Aca en el utils pongo funciones extra que me sirven 

export const addItemToCart = (cartItems, cartItemToAdd) =>{

    const existingCartItem = cartItems.find(
        cartItem => cartItem.id == cartItemToAdd.id //cartItem can be pupu, es el elemento que objetngo del objeto cartItems
        // si el find no encuentra nada quedara esto como undefined, si lo encuentra devuelve el elemento que coincida, busca de izq a derecha, si encunetra uno antes q otro en una condicion devolvera ese x ej, este menor que este....
    )
    if(existingCartItem){ // si no es undefined
        return cartItems.map(cartItem=> // mapeo cart items, para en todoo el array incrementar el que me sirve, y en la funcion anterior claramente ya se que existe
            
            cartItem.id==cartItemToAdd.id
            ? {...cartItem, quantity: cartItem.quantity + 1}//si hay match incremento 1
            : cartItem       // obviamente esta linea no sucedera porque arriba ya verifique que el item existia, pero igual se pone
            )
    }

    return [...cartItems, {...cartItemToAdd, quantity: 1}] // si no entra al if, entonces hara este return y agregara ese item con cantidad 1 , y si entra al if, tiene su propio return, 

}

export const removeItemFromCart = (cartItems, cartItemToRemove) => {

    const existingCartItem = cartItems.find(
        cartItem => cartItem.id == cartItemToRemove.id
    )

    if(existingCartItem.quantity == 1){
        return cartItems.filter(cartItem=>cartItem.id != cartItemToRemove.id)
    }

    return cartItems.map(
        cartItem => cartItem.id == cartItemToRemove.id?
        {...cartItem, quantity: cartItem.quantity - 1} // ...cartItem es que mantenga las propiedades de ese "e" igual, y solo que cambie la cantidad -1
        : cartItem
    )
}
