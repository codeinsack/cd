import styled from 'styled-components';

const Wrapper = styled.div`
  text-shadow: #8f5c2c 3px 2px 2px;
  color: white;
  width: 200px;
  margin: 20px;
  padding: 15px;
  height: 250px;
  background-image: url(${props => props.imageUrl});
  background-size: cover;
  
  span {
    font-style: italic;
  }
  
  div {
    background-color: seagreen;
    opacity: 0.9;
    border-radius: 5px;
    box-sizing: border-box;
    padding: 10px;
    cursor: pointer;
    
    :hover {
      text-shadow: #40a4c8 3px 2px 2px;
    }
  }
`;

export default Wrapper;
