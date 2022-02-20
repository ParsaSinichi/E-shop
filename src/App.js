import HomePage from './components/homepage/homepage';
import './App.css'
import React from 'react';
import{Switch,Route} from "react-router-dom"
const Hatspage=()=>(
  <div>
    <h1>hh</h1>
  </div>
)
function App() {
  return (
    <div className="App">
      <Switch>
   <Route  exact path={'/'} component={HomePage}/>
    <Route path={'/hats'}  component={Hatspage}/>
   </Switch>
    </div>
  );
}
  
export default App;
