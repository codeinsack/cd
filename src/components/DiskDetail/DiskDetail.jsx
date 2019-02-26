import React, { Component } from 'react';
import axios from '../../axios-disks';

class DiskDetail extends Component {
  componentDidMount() {
    const { match: { params: id } } = this.props;

    axios.get(`/disks/${id}`)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div />
    );
  }
}

export default DiskDetail;
