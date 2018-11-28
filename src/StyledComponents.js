import styled from '@emotion/styled';

export const MyContainer = styled.div`
  max-width: 70%;
  margin-right: auto;
  margin-left: auto;
  border-radius: 10px;
  padding: 50px;
  background-color: ${props =>
    props.orange ? '#ffa100' : 'white'};
`