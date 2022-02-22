import React from "react";
import './sign-in.scss'
import FormInput from "../form-input/form-input";
import CustomButton from "../custom-button/custom-button";
import { signInWithGoogle } from '../../firebase/firebase';
class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            email:"",
            password:'',



        }
        
     
    }
    handleSubmit=(event)=>{
        event.preventDefault();
        this.setState({email:"",password:''})
     }   
     handeChange =(event)=>{
        const {vale,name}=event.target;
        this.setState({[name]:vale})
     }
    render() { 
        return ( 
            <div className="sign-in">
                <h2>I already have an account </h2>
                <span>sign in with your email and password </span>
                <form onSubmit={this.handleSubmit} >
                <FormInput type="email" value={this.state.email}   required name="email" handleChange={this.handeChange} lable="email"/>
                
                <FormInput lable="password" type="password" value={this.state.password}   required name="password" handleChange={this.handeChange}/>
               
                <div className="buttons">
                <CustomButton type="submit" value="Submit form " >Sign in</CustomButton>
                
                <CustomButton onClick={signInWithGoogle} isGoogleSignIn >Sign in with Google</CustomButton>
                </div> 
                </form>


            </div>


         );
    }
}
 
export default SignIn;