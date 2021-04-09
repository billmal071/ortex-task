import React from 'react';
import store from "./store/store";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from './components/layout/Login';
import Header from './components/page/Header';
import Footer from './components/page/Footer';
import NoMatch from './components/layout/404';
import Profile from './components/layout/Profile';
import PrivateRoute from './utilities/PrivateRoute';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <Router>
        <div className="2xl:container mx-auto">
          <Header />
          <Switch>
            <Route exact path="/" component={Login} />
            <PrivateRoute exact path="/login" component={Profile} />
            <Route path="*" component={NoMatch} />
          </Switch>
          <Footer />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
