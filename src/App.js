import React from 'react'
import { Switch, Route, Redirect } from 'react-router'
import Home from './pages/Home'


// Création de la route /Home => www.xxx/home.com
// Posibilité de rajouter des extensions de route / pages

function App() {

  return (
    <Switch>
      <Route exact path="/Home" component={Home} />
      <Redirect to="/Home" />
    </Switch>
  );
}

export default App;
