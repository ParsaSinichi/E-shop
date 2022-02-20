import React, { Component } from 'react';
import ShopData from './shop.data.js';
import CollectionPreview from '../Preview-collection/Preview-collection.jsx';
class shopPage extends Component {
    constructor(props) {
        super(props);
        this.state={
            collections:ShopData

        }
    }
    
    render() { 
        const {collections}=this.state;
        
        return ( 
            <div className='shop-page'>
               {   
                   collections.map(({id,...otherColectionProps})=>(
                        <CollectionPreview key={id} {...otherColectionProps}/>
                   ))
               }

            </div>

         );
    }
}
 
export default shopPage;