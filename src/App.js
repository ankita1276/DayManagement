import React from 'react';
import Dashboard from './web/containers/dashboard'
import Profile from './web/containers/Profile'
import './App.css';
import { Route, Switch, BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <div className="App">
  
        <BrowserRouter>
          <Switch>
            {/* <Route path="/checkout" component={}></Route> */}
            <Route path="/home" exact component={Dashboard} ></Route>
            <Route path="/profile" exact component={Profile}></Route>
            <Route path="/addtask" exact component={Profile}></Route>
          </Switch>
          </BrowserRouter>
    
    </div>
  );
}

export default App;
