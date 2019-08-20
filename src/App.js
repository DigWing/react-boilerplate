import React from 'react';
import { Switch, Route, Router } from 'react-router';
import { Provider } from 'react-redux';
import HomeScreen from 'screens/HomeScreen';
import { routes } from 'consts';
import { store, history } from './configureStore';

const App = () => (
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route path={routes.getBase()} component={HomeScreen} />
      </Switch>
    </Router>
  </Provider>
);

export default App;
