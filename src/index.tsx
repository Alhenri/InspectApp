import React from 'react';
import ReactDOM from 'react-dom';
import Home from './pages/pageHome/pageHome';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Switch>
      <Route path='/' component={ Home } exact />
    </Switch>
  </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

