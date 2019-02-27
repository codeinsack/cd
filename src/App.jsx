import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Layout from './hoc/Layout/Layout';
import DisksCatalog from './containers/DisksCatalog/DisksCatalog';
import DiskDetail from './components/DiskDetail/DiskDetail';
import Auth from './containers/Auth/Auth';
import Logout from './containers/Auth/Logout/Logout';
import { authCheckState } from './store/actions';

const mapDispatchToProps = dispatch => ({
  onTryAutoSignup: () => dispatch(authCheckState()),
});

@connect(null, mapDispatchToProps)

class App extends Component {
  componentDidMount() {
    const { onTryAutoSignup } = this.props;
    onTryAutoSignup();
  }

  render() {
    return (
      <div>
        <Layout>
          <Switch>
            <Route path="/" exact component={DisksCatalog} />
            <Route path="/music" component={DisksCatalog} />
            <Route path="/movie" component={DisksCatalog} />
            <Route path="/game" component={DisksCatalog} />
            <Route path="/auth" component={Auth} />
            <Route path="/logout" component={Logout} />
            <Route path="/:id" exact component={DiskDetail} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default withRouter(App);
