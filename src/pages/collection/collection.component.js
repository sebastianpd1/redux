import React from 'react';
import CollectionItem from '../../components/collection-item/collection-item.component';
import {connect} from 'react-redux';
import {selectCollection} from '../../redux/shop/shop.selectors';

const CollectionPage = ({collection}) =>{

const {title, items} = collection;

return(
    <div className="container">
        <h2>{title}</h2>
        <div className="row">
            {
                items.map((item,i)=>(<CollectionItem key={i} item={item}/>))
            }
        </div>
    </div>
)

};

const mapStateToProps = (state, ownProps) => ({// el segunto argumento son los props del componente que estamos wrapping uso esto para acceder al react router MATCH
    // recuerda que siempre pasaba el state aca antes de usar CreateStructuredSelector, que ahi ya no necesito pasar el state
    collection:selectCollection(ownProps.match.params.collectionId)(state) // recuerda que la funcion que se encuentra en mi shop Selector selectCollection me devuelve la funcion createSelector que a su vez toma como argumento el estado para devolver esa parte
}) 

export default connect (mapStateToProps)(CollectionPage);