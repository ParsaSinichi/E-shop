import React from 'react'
import './sign-in-up.scss'
import SignIn from '../sign-in/sign-in';
import SignUp from '../sign-up/sign-up';
function SignInSignUp() {
    return (
        <div className='sign-in-and-sign-up'>
        <SignIn/>
        <SignUp/>

        </div>




      );
}

export default SignInSignUp;