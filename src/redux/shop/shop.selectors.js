import {createSelector} from 'reselect';
// con esto buscaba cuando el shopData era un array
// const COLLECTION_ID_MAP = {
//     hats: 1,
//     sneakers:2,
//     jackets:3,
//     womens:4,
//     mens:5
// } 

const selectShop = state => state.shop;

export const selectCollections = createSelector(
    [selectShop],
    shop=>shop.collections // ojo que este collections no viene de la data, sino que se crea en mi shop.reducer y dentro de el reside la data.
);

// esto de aca abajo para volver a transformar mi shop data en array despues de que la transforme en objeto para el CollectionsPReview que esta mapeando y no puede mapear objetos

export const selectCollectionsForPreview = createSelector(
    [selectCollections],
    collections=>Object.keys(collections).map(e=>collections[e]) // primero obtengo las keys en un array y despues al hacer map obtengo un array con los valores en dicha posicion porque al hacer collections[e] estoy obteniendo el valor en esa posicion y armando un array con esos valores
)

export const selectCollection = collectionUrlParam => // esta sera una funcion que toma como argumento el parametro
createSelector(
    [selectCollections], collections=>collections[collectionUrlParam]
    // esto cuando el shop data era un array collections => collections.find(collection=>collection.id==COLLECTION_ID_MAP[collectionUrlParam] // recuerda que lo llamo como array porque es un array asociativo, osea con nombres
         
    )
