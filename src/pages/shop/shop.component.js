import React from 'react';
import CollectionsOverview from '../../components/collection-overview/collection-overview.component';
import {Route} from 'react-router-dom';
import CollectionPage from '../collection/collection.component';

const ShopPage = ({match}) => ( // because on our app.js shop is nested in a route  we get automatically the match in our props 
   
            <div>
                <Route exact path ={`${match.path}`} component = {CollectionsOverview}/>
                <Route path ={`${match.path}/:collectionId`} component = {CollectionPage}/>
            </div>

)

export default ShopPage;