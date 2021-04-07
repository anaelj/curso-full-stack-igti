import React, { Component } from 'react';



export default class App extends Component {
  constructor() {
    super();
    this.state = {
      textoDigitado : '',
      textoInvertido : '',
      textoNumerico: '',
      textoCSV: '',
      textoSLUG: '',
      textoVogais: '',
      textoConsoantes: ''
    }
  }

 handleChangeText = (evt) => {

   this.setState({
     textoInvertido: evt.target.value.split('').reverse().join('') ,
     textoNumerico: evt.target.value.toUpperCase().replaceAll('O','0').replaceAll('L','1').replaceAll('E','3').replaceAll('S','5').replaceAll('T','7'),
     textoCSV: '"'+evt.target.value.split(' ').join('"; "')+'"',
     textoSLUG: evt.target.value.split(' ').join('-').toLowerCase(),
     textoVogais: evt.target.value.replace(/[^aeiou]/gi, ''),
     textoConsoantes: evt.target.value.replace(/[aeiou]/gi, '').replaceAll(' ',''),
   })
 }

 
  render() {
//    const {textoDigitado} = this.state;

    return (
      <div>
        <input 
          name="textoPrincipal" 
          type="text" 
          onChange={this.handleChangeText}
         >
         </input>        
        <input 
          name="textoInvertido" 
          type="text" 
          value={this.state.textoInvertido} 
         >
         </input>        
        
        <input 
          name="textoNumerico" 
          type="text" 
          value={this.state.textoNumerico} 
         >
         </input>        
        <input 
          name="textoCSV" 
          type="text" 
          value={this.state.textoCSV} 
         >
         </input>        
        <input 
          name="textoSLUG" 
          type="text" 
          value={this.state.textoSLUG} 
         >
         </input>        
        <input 
          name="textoVogais" 
          type="text" 
          value={this.state.textoVogais} 
         >
         </input>        
        <input 
          name="textoConsoantes" 
          type="text" 
          value={this.state.textoConsoantes} 
         >
         </input>        
        
      </div>

    );
  }
}
