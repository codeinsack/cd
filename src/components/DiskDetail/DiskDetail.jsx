import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchDisk } from '../../store/actions';
import Spinner from '../UI/Spinner/Spinner';
import Wrapper from './DiskDetailStyled';
import Button from '../UI/Button/Button';

const mapStateToProps = state => ({
  disk: state.disk.disk,
  loading: state.disk.loading,
});

const mapDispatchToProps = dispatch => ({
  onInitDisk: id => dispatch(fetchDisk(id)),
});

@connect(mapStateToProps, mapDispatchToProps)

class DiskDetail extends Component {
  componentDidMount() {
    const { onInitDisk, match: { params: { id } } } = this.props;
    onInitDisk(id);
  }

  render() {
    const { disk, loading } = this.props;

    let discoverDisk = null;

    if (disk) {
      if (loading) {
        discoverDisk = <Spinner />;
      } else {
        discoverDisk = (
          <>
            <div className="left" />
            <div className="right">
              <h2>{disk.title} ({disk.year})</h2>
              <h4>{disk.genre}</h4>
              <p>{disk.author}</p>
              <div className="btn">
                <Button btnType="primary">Edit</Button>
                <Button btnType="danger">Delete</Button>
              </div>
            </div>
          </>
        );
      }
    } else {
      return null;
    }

    return (
      <Wrapper imageUrl={disk.imageUrl}>
        {discoverDisk}
      </Wrapper>
    );
  }
}

export default DiskDetail;
