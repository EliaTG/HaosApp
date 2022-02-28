import React from 'react';
import {Homepage, Login, Register, Navbar, Mercury, Venus, Earth,Mars, Jupiter,Saturn, Uranus, Neptune}from './components';
import {Switch, Route, Link} from 'react-router-dom';
import './App.scss';


function App() {
  return (
    <div className="App">
            <div className="routes" >
                            <Switch>
                                   <Route exact path="/">
                                          <Homepage />
                                   </Route>
                                   <Route exact path="/register">
                                          <Register />
                                   </Route>
                                   <Route exact path="/login">
                                          <Login />
                                   </Route>
                                   <Route exact path="/mercury">
                                          <Mercury />
                                   </Route>
                                   <Route exact path="/venus">
                                          <Venus />
                                   </Route>
                                   <Route exact path="/earth">
                                          <Earth />
                                   </Route>
                                   <Route exact path="/mars">
                                          <Mars />
                                   </Route>
                                   <Route exact path="/jupiter">
                                          <Jupiter />
                                   </Route>
                                   <Route exact path="/saturn">
                                          <Saturn />
                                   </Route>
                                   <Route exact path="/uranus">
                                          <Uranus />
                                   </Route>
                                   <Route exact path="/neptune">
                                          <Neptune />
                                   </Route>

                                   
                            </Switch>
            </div>
            
    </div>
  );
}

export default App;
