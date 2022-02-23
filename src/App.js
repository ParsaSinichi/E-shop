import HomePage from './components/homepage/homepage';
import './App.css'
import React from 'react';
import{Switch,Route} from "react-router-dom"
import shopPage from './components/Shoppage/shoppage';
import Header from './components/header/header';
import SignInSignUp from './components/Signin_signOut/sign-in-up';
import {auth,createUserProfileDocument} from './firebase/firebase'; 

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      currentUser:null,
    }
  }
  unsubscribeFromAuth =null
  componentDidMount(){
    this.unsubscribeFromAuth =auth.onAuthStateChanged(async userAuth=>{
    
      if(userAuth) {
            const userRef=await createUserProfileDocument(userAuth )  ;
            userRef.onSnapshot(snapShot=>{
              this.setState({
                currentUser:{
                  id:snapShot.id,
                  ...snapShot.data()
                }
              })
              console.log(this.state)
            })
           
      }
      else{
        this.setState({currentUser:userAuth})
      }
    },)
  }
  componentWillUnmount(){
    this.unsubscribeFromAuth()
  }
  render() { 
    return (  
      <div className="App">
        <Header currentUser={this.state.currentUser}/>
        <Switch>
     <Route  exact path={'/'} component={HomePage}/>
      <Route path={'/shop'}  component={shopPage}/>
      <Route path={'/signin'}  component={SignInSignUp}/>
      
     </Switch>
      </div>);
  }
}
 

export default App;
