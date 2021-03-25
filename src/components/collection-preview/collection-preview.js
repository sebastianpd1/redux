import React from 'react'
import  CollectionItem  from "../collection-item/collection-item.component";

const CollectionPreview = ({title, items}) => {
    return (
        <div>
            <h1>{title.toUpperCase()}</h1>
            <div className="preview">
            {items.filter((e,i)=>(i<4)).map((item, i) => 
                <CollectionItem key={i} item ={item}/>
                )}
                {/* ACA ABAJO PASANDO EL DESTRUCTUR, ARRIBA PASANDO EL OBJETO ITEM ENTERO {items.filter((e,i)=>(i<4)).map(({...otherItemProps}, i) => 
                <CollectionItem key={i} {...otherItemProps}/>
                )} */}
            </div>
        </div>
    )
}

export default CollectionPreview;