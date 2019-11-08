import React from 'react';
import './App.css';
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import Drawer from './components/Drawer'
import Test1 from './components/Test1'
import Test2 from './components/Test2'
import Test3 from './components/Test3'

function App() {
  return (
    <BrowserRouter>
    <Drawer>
    <Switch>
      <Route exact strict path='/' component={Test1}/>
      <Route exact strict path='/test2' component={Test2}/>
      <Route exact strict path='/test3' component={Test3}/>
    </Switch>
    </Drawer>
    </BrowserRouter>
  );
}

export default App;
