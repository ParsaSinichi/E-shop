import HomePage from './components/homepage/homepage';
import './App.css'
import React from 'react';
import{Switch,Route,Redirect} from "react-router-dom"
import shopPage from './components/Shoppage/shoppage';
import Header from './components/header/header';
import SignInSignUp from './components/Signin_signOut/sign-in-up';
import {auth,createUserProfileDocument} from './firebase/firebase'; 
import { connect } from 'react-redux';
import {selectCurrentUser} from './redux/user/user.selector'
import { createStructuredSelector } from 'reselect'

import { setCurrentUser } from './redux/user/user.actions';

class App extends React.Component {
  
  unsubscribeFromAuth =null
  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }

      setCurrentUser(userAuth);
    });
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
      <Route exact  path={'/signin'}  render={()=>this.props.currentUser?(<Redirect to={'/'} />):(<SignInSignUp/>)}/>
      
     </Switch>
      </div>);
  }
}
 
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});
const mapStateToprops=createStructuredSelector({
  currentUser: selectCurrentUser
})
export default connect(
  mapStateToprops,
  mapDispatchToProps
)(App);