import React from 'react';
import { connect } from 'react-redux';
import {CartActionTypes, toggleCartHidden} from '../../redux/cart/cart.actions'

import './cart-icon.scss'
import {ReactComponent as ShoppingIcon} from '../../assests/shopping-bag.svg'

function CartIcon({toggleCartHidden}) {
    return ( 
        <div className='cart-icon' onClick={toggleCartHidden}>
            <ShoppingIcon className='shopping-icon'/>
            <span className='item-count'> 0</span>
        </div>
        
     );
}
const mapDispathToProps=dispath=>({
    toggleCartHidden:()=>dispath(toggleCartHidden())
})
export default connect(null,mapDispathToProps)(CartIcon)

