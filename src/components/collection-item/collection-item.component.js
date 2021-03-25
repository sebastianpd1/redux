import React from 'react'
import CustomButton from '../custom-button/custom-button.component';
import {connect} from 'react-redux';
import {addItem} from '../../redux/cart/cart.actions';

// const CollectionItem = ({id, name, price, imageUrl, addItem})=>( ASI HAGO CUANDO PASA EL DESTRUCTUR DEL PREVIEW ACA, Y ABAJO CUANDO PASA EL OBJETO

const CollectionItem = ({item, addItem})=>{
    const {name, price, imageUrl} = item; // con esto abajo tengo accesso a los item individuales y tambien puedo usar el objeto item en mi redux
    return( // al poner return, significa que puedo meter lineas extra de javascript antes de el 
    <div className="">
        <div className="image" style={{backgroundImage:`url(${imageUrl})`}}/>
        <div className="collection-footer">
            <span className="name">{name}</span>
            <span className="price">{price}</span>
        </div>
        <CustomButton onClick={()=>addItem(item)}>Add to Cart</CustomButton> {/* // Recuerda que tengo acceso a la funcion addItem(), porque esta bajando de los props, y aparte esta subiendo a los props desde el mapDispatchToProps */}
    </div>
)};

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item)) // entonces creo una propiedad que se llamara addItem que entrara a mi collectionItem como props. ojo acordar de ponerlo arriba en const collectionItem({ .....   ,addItem}) y este tomara como parametro un objeto item, el cual almomento de usar mi accion addItem(item) se lo pasara adentro, y esta me devolvera el TYPE:'ADD_ITEM', y el PAYLOAD: item, DICHO ITEM QUE LE FUE PASADO, y eso se despachara, al store, el cual ejecutara los reducers en este caso cart reducer para obtener el estado  
})
export default connect(null, mapDispatchToProps)(CollectionItem); // ojo que aca cuando pongo null en el primer valor es que no usare del estado, solo las acciones
