import React, {useState} from 'react';
import { Button, Card, Row, Col, Icon, Container } from 'react-materialize';

export default function App() {

  const [optionSelected, setOptionSelected] = useState("lime");

  return (
  <>
<form onSubmit={this.handleSubmit}>
        <label>
          Pick your favorite flavor:
          <select value={optionSelected} onChange={setOptionSelected()}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    <Container>
    <h1 style={{fontSize:'18px', textAlign:"center"}}>Desafio Final do Bootcamp Full Stack</h1>
    <h2 style={{fontSize:'14px' , textAlign: "center"}}>Controle Financeiro Pessoal</h2>
    <Container>
      <Button></Button>
      <Button></Button>
    </Container>
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
    </Container>
  </>
  )

  ;
}
