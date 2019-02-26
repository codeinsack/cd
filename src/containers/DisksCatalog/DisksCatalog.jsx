import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchDisks } from '../../store/actions/index';
import Disk from '../../components/Disk/Disk';
import Wrapper from './DiskCatalogStyled';
import Spinner from '../../components/UI/Spinner/Spinner';

const mapStateToProps = state => ({
  disks: state.disksCatalog.disks,
  loading: state.disksCatalog.loading,
  filter: state.filter,
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

  postSelectedHandler = (id) => {
    const { history } = this.props;
    history.push(`/${id}`);
  };

  render() {
    const {
      disks, loading, location: { pathname }, filter,
    } = this.props;
    const categoryFilter = pathname.slice(1);

    let categoryFiltered = null;
    let titleFiltered = null;

    if (categoryFilter) {
      categoryFiltered = disks.filter(disk => disk.category === categoryFilter);
    } else {
      categoryFiltered = disks;
    }

    if (filter.text) {
      titleFiltered = categoryFiltered.filter(
        disk => disk.title.toLowerCase().includes(filter.text.toLowerCase()),
      );
    } else {
      titleFiltered = categoryFiltered;
    }

    let discoverDisks = titleFiltered.map(disk => (
      <Disk
        key={disk.id}
        author={disk.author}
        category={disk.category}
        genre={disk.genre}
        title={disk.title}
        year={disk.year}
        imageUrl={disk.imageUrl}
        clicked={() => this.postSelectedHandler(disk.id)}
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
