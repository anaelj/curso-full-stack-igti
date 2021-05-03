import React, {useState, useEffect} from 'react';
//import Select from "react-select";
import { Button, Card, Row, Col, Icon, Container } from 'react-materialize';
import {StyledSelect, StyledDiv, StyledListItem } from './style.js';
import * as api from './services/api.js';


export default function App() {
  const [selectedOption, setSelectedOption] = useState("2019-2");
  const [dataTransactions, setTransactions] = useState([]);
  const options = [];

  const handleChangeItem =(typeChange) =>{
    if (typeChange === '+'){
      setSelectedOption(options[options.findIndex(Selection)+1]);    
    } else {
      setSelectedOption(options[options.findIndex(Selection)-1]);    
    }     
  //  console.log(selectedOption);
  }

  for (var i = 2019; i < 2023; i++) {
    for (var x = 1; x <= 12; x++) {
      options.push( { value: i+'-'+x, label: x+'/'+i } );
    }
  }

  const dadosTeste = [];

  const handleTypeSelect = e => {
    setSelectedOption(e.value);
    //console.log(e.value)
  };
  const dataFromMonth = async ()=>{
    const dataLoad = await api.getDataFromMonth(selectedOption);
//    console.log(dataLoad.data);
    dadosTeste.push(... dataLoad.data);
    return dataLoad.data;
  }

  useEffect(() => {
    setTransactions(dataFromMonth());
    console.log(dataTransactions);
  }, [selectedOption])

  return (
  <>
    <Container>
          <h1 style={{fontSize:'18px', textAlign:"center"}}>Desafio Final do Bootcamp Full Stack</h1>
          <h2 style={{fontSize:'14px' , textAlign: "center"}}>Controle Financeiro Pessoal</h2>
    <Container>
    <StyledDiv>
          <Button style={{ margin: '5px', height: 50}} onClick={()=> handleChangeItem('+')}>
              <Icon>arrow_back</Icon> 
          </Button>

          <StyledSelect
            options={options}
            onChange={handleTypeSelect}
            value={options.filter(function(option) {
              return option.value === selectedOption;
            })}
            label="Selecione uma opção"
          />

          <Button style={{ margin: '5px', height: 50}}><Icon>arrow_forward</Icon></Button>
          </StyledDiv>

    </Container>
        <span>{(dataTransactions.lenght > 0) ? dataTransactions[0].description : ''}</span> 
        <span>{(dadosTeste.lenght > 0) ? dadosTeste[0].description : ''}</span> 
        <Card >
        <div style={{display: "flex" , flexDirection: "row" , alignContent: "center" }}>
          <StyledListItem> 
            <Row>
              <Col style={{display: "flex", alignItems: "center", alignContent: "center"}}>
              </Col>
              <Col style={{width: 300, display : "flex", flexDirection: "column" , verticalAlign: "center"}}>
              <span style={{fontSize:16}}>Titulo</span>
              <span>Desricao</span>
            </Col>
            </Row>
          </StyledListItem>
          <Button style={{ margin: '5px'}}><Icon>edit</Icon></Button>
          <Button style={{ margin: '5px'}}><Icon>delete</Icon></Button>
          </div>
    </Card>
    </Container>
   
  </>
  )

  ;
}
