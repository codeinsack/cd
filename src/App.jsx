import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import DisksCatalog from './containers/DisksCatalog/DisksCatalog';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Switch>
            <Route path="/" component={DisksCatalog} />
            <Route path="/music" component={DisksCatalog} />
            <Route path="/movie" component={DisksCatalog} />
            <Route path="/game" component={DisksCatalog} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
