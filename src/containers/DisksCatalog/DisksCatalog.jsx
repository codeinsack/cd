import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchDisks } from '../../store/actions/index';

const mapStateToProps = state => ({
  disks: state.disksCatalog.disks,
});

const mapDispatchToProps = dispatch => ({
  onInitDisks: () => dispatch(fetchDisks()),
});

@connect(mapStateToProps, mapDispatchToProps)

class DisksCatalog extends Component {
  componentDidMount() {
    const { onInitDisks } = this.props;
    onInitDisks();
  }

  render() {
    return (
      <div>
        DisksCatalog
      </div>
    );
  }
}

export default DisksCatalog;
