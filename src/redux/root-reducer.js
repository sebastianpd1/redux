import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist' //localstorage
import storage from 'redux-persist/lib/storage' //localstorage
import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
import directoryReducer from './directory/directory.reducer';
import shopReducer from './shop/shop.reducer';

// persist se conficuro en el root reducer, store, e index.js

const persistConfig = { // esto para el local storage

    key: 'root',
    storage,
    whitelist: ['cart'] // aca listo los objetos de mi estado que quiero meter en mi local storage

}

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer,
    shop: shopReducer
})

export default persistReducer(persistConfig, rootReducer)


// aca abajo antes de usar el persist
// export default combineReducers ({

//     user: userReducer,
//     cart: cartReducer 

// });