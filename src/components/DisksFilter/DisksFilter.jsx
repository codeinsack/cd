import React, { Component } from 'react';
import { connect } from 'react-redux';

import { filterText } from '../../store/actions';

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
      <div>
        <input
          type="text"
          placeholder="Search"
          value={filter.text}
          onChange={this.inputChangeHandler}
        />
      </div>
    );
  }
}


export default DisksFilter;
