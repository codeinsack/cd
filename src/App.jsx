import React, { Component } from 'react';

import Layout from './hoc/Layout/Layout';
import DisksCatalog from './containers/DisksCatalog/DisksCatalog';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <DisksCatalog />
        </Layout>
      </div>
    );
  }
}

export default App;
