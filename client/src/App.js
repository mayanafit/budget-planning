import React from 'react';
import './scss/style.scss';
import { Dashboard, LoginPage, RegisterPage } from './Pages';
import { Provider } from 'react-redux';
import store from './store';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

function App() {
  return (
    <Provider store={store}>
      <div className="body">
        <Router>
          <Switch>
            <Route exact path="/" component={LoginPage} />
            <Route exact path="/register" component={RegisterPage} />
            <Route path="/dashboard" component={Dashboard} />
          </Switch>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
