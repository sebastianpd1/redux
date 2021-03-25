import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import rootReducer from './root-reducer'
import {persistStore} from 'redux-persist' // esto es para el local storage

const middlewares = [logger]; // este middleware para hacer los logs y hacer el debbug

export const store = createStore (rootReducer, applyMiddleware(...middlewares)); 

export const persistor = persistStore(store); // esto es para el local storage


//export default store; // antes de anadir el persist para el local storage no llevaba curly braces