import HomePage from './components/homepage/homepage';
import './App.css'
import React from 'react';
import{Switch,Route} from "react-router-dom"
import shopPage from './components/Shoppage/shoppage';

function App() {
  return (
    <div className="App">
      <Switch>
   <Route  exact path={'/'} component={HomePage}/>
    <Route path={'/shop'}  component={shopPage}/>
    
   </Switch>
    </div>
  );
}
  
export default App;
