import React from 'react';
import './form-input.scss'
const FormInput = ({handleChange,lable,...otherProps}) => {
    return ( 
        <div className='group'>
            <input type="text" name="" id=""  className='form-input' onChange={handleChange} {...otherProps}/>
        {
            lable? 
            <lable className={`${otherProps.value.length  ? 'shrink' : `` }form-input-label `}>
                {lable}
            </lable>
            :null
        }
        </div>


     );
}
 
export default FormInput;