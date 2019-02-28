import styled from 'styled-components';

const Wrapper = styled.button`
  outline: none;
  font: inherit;
  padding: 10px;
  margin: 10px;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
  background-color: white;
  border-width: 3px;
  
  border-color: ${(props) => {
    if (!props.disabled) {
      if (props.btnType === 'primary') {
        return '#40a4c8';
      }
      if (props.btnType === 'danger') {
        return '#e84930';
      }
      if (props.btnType === 'success') {
        return '#09ba03';
      }
    }
    return '#ccc';
  }};
  color: ${(props) => {
    if (!props.disabled) {
      if (props.btnType === 'primary') {
        return '#40a4c8';
      } if (props.btnType === 'danger') {
        return '#e84930';
      } if (props.btnType === 'success') {
        return '#09ba03';
      }
    }
    return '#ccc';
  }};
  
  :hover {
      background-color: ${(props) => {
    if (!props.disabled) {
      if (props.btnType === 'primary') {
        return '#40a4c8';
      } if (props.btnType === 'danger') {
        return '#e84930';
      } if (props.btnType === 'success') {
        return '#09ba03';
      }
    }
    return '#ccc';
  }};
    color: white;
  }
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
`;

export default Wrapper;
