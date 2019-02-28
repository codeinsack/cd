import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 20px auto;
  margin-top: 200px;
  width: 80%;
  text-align: center;
  box-shadow: 2px 3px 4px #40a4c8;
  border: 1px solid #eee;
  padding: 30px;
  box-sizing: border-box;
  border-radius: 5px;
  
  @media (min-width: 600px) {
    width: 500px;
  }
`;

export default Wrapper;
