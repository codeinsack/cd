import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchDisks } from '../../store/actions/index';
import Disk from '../../components/Disk/Disk';
import Wrapper from './DiskCatalogStyled';
import Spinner from '../../components/UI/Spinner/Spinner';

const mapStateToProps = state => ({
  disks: state.disksCatalog.disks,
  loading: state.disksCatalog.loading,
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
    const { disks, loading } = this.props;

    let discoverDisks = disks.map(disk => (
      <Disk
        key={disk.id}
        author={disk.author}
        category={disk.category}
        genre={disk.genre}
        title={disk.title}
        year={disk.year}
      />
    ));

    if (loading) {
      discoverDisks = (
        <Spinner />
      );
    }
    return (
      <Wrapper loading={loading}>
        {discoverDisks}
      </Wrapper>
    );
  }
}

export default DisksCatalog;
