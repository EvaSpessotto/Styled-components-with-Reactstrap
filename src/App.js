import React, { Component } from 'react';
import styled from '@emotion/styled';
import './App.scss';
import { Container, Row, Col } from 'reactstrap';

// Methode 2
const MyContainer = styled.div`
  max-width: 70%;
  margin-right: auto;
  margin-left: auto;
  border-radius: 10px;
  padding: 50px;
  background-color: ${props =>
    props.orange ? '#ffa100' : 'white'};
`
class App extends Component {
  render() {
    return (
      <div className="App">
       
        <div>
          <MyContainer orange style={{marginTop: '5%'}}>
           <Container>
             <Row>
               <Col lg="6">
                <h1>Bienvenue sur my contribution !</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                  labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                  nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse 
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui 
                  officia deserunt mollit anim id est laborum.
                </p>
               </Col>
             </Row>
           </Container>
          </MyContainer>

          <MyContainer  style={{marginTop: '5%'}}>
            <h2>Prochains évènements:</h2>
          </MyContainer>
        </div>

      </div>
    );
  }
}

export default App;
