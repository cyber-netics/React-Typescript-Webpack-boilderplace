import React from "react";
import Layout from "Layout";

import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import MainPage from "./Pages/main";

const App: React.FC = () => {
  const history = createBrowserHistory();

  return (
    <Router history={history}>
      <Layout>
        <Switch>
          <Route exact path="/" component={MainPage} />
        </Switch>
      </Layout>
    </Router>
  );
};

export default App;
