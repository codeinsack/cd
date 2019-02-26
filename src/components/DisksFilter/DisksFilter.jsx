import React, { Component } from 'react';
import { connect } from 'react-redux';

import { filterText } from '../../store/actions';
import Wrapper from './DisksFilterStyled';

const mapStateToProps = state => ({
  filter: state.filter,
});

const mapDispatchToProps = dispatch => ({
  onFilterText: text => dispatch(filterText(text)),
});

@connect(mapStateToProps, mapDispatchToProps)

class DisksFilter extends Component {
  inputChangeHandler = (e) => {
    const { onFilterText } = this.props;
    onFilterText(e.target.value);
  };

  render() {
    const { filter } = this.props;

    return (
      <Wrapper>
        <input
          type="text"
          placeholder="Search by name"
          value={filter.text}
          onChange={this.inputChangeHandler}
        />
      </Wrapper>
    );
  }
}


export default DisksFilter;
