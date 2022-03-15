import React from 'react';
import { connect } from 'react-redux';
import {CartActionTypes, toggleCartHidden} from '../../redux/cart/cart.actions'

import './cart-icon.scss'
import {ReactComponent as ShoppingIcon} from '../../assests/shopping-bag.svg'
import {selectCartItemsCount} from "../../redux/cart/cart-selector"
import { createStructuredSelector } from 'reselect'

function CartIcon({toggleCartHidden,itemCount}) {
    return ( 
        <div className='cart-icon' onClick={toggleCartHidden}>
            <ShoppingIcon className='shopping-icon'/>
            <span className='item-count'> {itemCount}</span>
        </div>
        
     );
}
const mapDispathToProps=dispath=>({
    toggleCartHidden:()=>dispath(toggleCartHidden())
})
const mapStateToProps=createStructuredSelector({
itemCount:selectCartItemsCount,
})
export default connect(mapStateToProps,mapDispathToProps)(CartIcon)

