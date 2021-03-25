import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import CollectionPreview from '../collection-preview/collection-preview';
import {selectCollectionsForPreview} from '../../redux/shop/shop.selectors';


const CollectionsOverview = ({collections}) => (
    <div className="container">
          {collections.map(({...otherCollectionProps}, i)=>(
                    <CollectionPreview key={i} {...otherCollectionProps}/>
                ))}
    </div>
);


const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionsOverview)