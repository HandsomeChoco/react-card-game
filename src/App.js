import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Card from './components/card/Card';
import Login from './components/login/Login.jsx';
import LayoutContainer from './containers/LayoutContainer';

function App() {
  return (
    <Switch>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/card">
        <Card />
      </Route>
    </Switch>
  );
}

export default App;
