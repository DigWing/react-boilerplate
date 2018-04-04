import 'babel-polyfill'; // eslint-disable-line
import { AppContainer } from 'react-hot-loader';  // eslint-disable-line
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import configureStore from './configureStore';
import App from './App';
import './assets/main.scss';

const history = createHistory();
const store = configureStore(history);

const render = Component =>
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
				<ConnectedRouter history={history}>
          <Component />
        </ConnectedRouter>
      </Provider>
    </AppContainer>,
    document.getElementById('root')
  );

render(App);
if (module.hot) module.hot.accept('./App', () => render(App));
