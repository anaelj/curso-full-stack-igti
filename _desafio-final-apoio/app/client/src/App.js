import React from 'react';
import { Button, Card, Row, Col, Icon } from 'react-materialize';

export default function App() {
  return (
  <>
    <h1>Desafio Final do Bootcamp Full Stack</h1>
    <h3>Controle Financeiro Pessoal</h3>
    <Card>
      <Row>
        <Col>
          <li> Texto
          </li>
        </Col>
        <Col>
          <Button style={{ margin: '5px'}}><Icon>edit</Icon></Button>
          <Button style={{ margin: '5px'}}><Icon>delete</Icon></Button>
        </Col>
      </Row>      
      
    </Card>
  </>
  )

  ;
}
