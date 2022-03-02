import HomePage from './components/homepage/homepage';
import './App.css'
import React from 'react';
import{Switch,Route} from "react-router-dom"
import shopPage from './components/Shoppage/shoppage';
import Header from './components/header/header';
import SignInSignUp from './components/Signin_signOut/sign-in-up';
import {auth,createUserProfileDocument} from './firebase/firebase'; 
import{connect} from 'react-redux'
import{setCurrentUser} from './redux/user/user-actions'
class App extends React.Component {
  
  unsubscribeFromAuth =null
  componentDidMount(){
    const {setCurrentUser}=this.props
    this.unsubscribeFromAuth =auth.onAuthStateChanged(async userAuth=>{
    
      if(userAuth) {
            const userRef=await createUserProfileDocument(userAuth )  ;
            userRef.onSnapshot(snapShot=>{
              setCurrentUser({
                
                  id:snapShot.id,
                  ...snapShot.data()
                
              });
              
            });
           
      }
      else{
        setCurrentUser(userAuth);
      }
    },)
  }
  componentWillUnmount(){
    this.unsubscribeFromAuth()
  }
  render() { 
    return (  
      <div className="App">
        <Header  />
        <Switch>
     <Route  exact path={'/'} component={HomePage}/>
      <Route path={'/shop'}  component={shopPage}/>
      <Route path={'/signin'}  component={SignInSignUp}/>
      
     </Switch>
      </div>);
  }
}
 
const mapDispatchToProps=dispath=>({
setCurrentUser:user=>dispath(setCurrentUser(user))
})
export default connect(null,mapDispatchToProps)(App);
