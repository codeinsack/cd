import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-flow: wrap;
  
  .left {
    width: 300px;
    margin: 40px;
    background-image: url(${props => props.imageUrl});
    height: 350px;
    background-size: cover;
  }
  
  .right {
    display: flex;
    flex-flow: column;
    text-align: center;
    width: 300px;
    background-color: seagreen;
    margin: 40px;
    border-radius: 5px;
    box-sizing: border-box;
    padding: 10px;
    text-shadow: #8f5c2c 3px 2px 2px;
    color: white;
    font-size: 17px;
  }
  
  .btn {
    margin-top: auto;
    margin-bottom: 20px;
  }
`;

export default Wrapper;
