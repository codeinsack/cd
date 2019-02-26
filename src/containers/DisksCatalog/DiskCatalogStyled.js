import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 0 75px;
  min-height: 800px;
  display: flex;
  flex-flow: wrap;
  
  justify-content: ${props => (props.loading ? 'center' : 'flex-start')};
  align-items: ${props => (props.loading ? 'center' : 'flex-start')};
`;

export default Wrapper;
