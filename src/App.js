import Nav from './Nav'
import TodoApp from './TodoApp/TodoApp';
//import { useEffect, useState } from "react";
import FormApp from './FormApp/FormApp';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import TickingClock from './TickingClock/TickingClock';


function App() {

  return (
    <div>
      <Nav/>
      <Switch>
        <Route exact path = "/" component = {Home}></Route>
        <Route exact path = "/todo" component = {TodoApp}></Route>
        <Route exact path = "/table" component = {FormApp}></Route>
        <Route exact path = "/tickingclock" component = {TickingClock}></Route>
      </Switch>
    </div>
  );
}

export default App;
