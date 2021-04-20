import React, { useState, useEffect } from 'react';
import * as api from './service/api';

export default function App () {

  const [selectedYear, setSelectedYear] = useState(2019);
  const [selectedMonth, setSelectedMonth] = useState(1);
  const [selectedTodos, setSelectedTodos] = useState([]);
  let all = [];
  
  useEffect(() => {
    getTodos();

    
}, [selectedYear, selectedMonth])
  
  const getTodos = async ()=>{
    const result = await api.getAll();
      all.push(...result.data);
      console.log(all);
      console.log(selectedMonth);
      const teste = []; 
      result.data.map((item) => {
        //console.log(item.year);
//        console.log(selectedYear);
        if (item.year === selectedYear && 
          item.month === selectedMonth) { teste.push({id: item.id, date : item.date, description: item.description, done: item.done, day: item.day}) }});
        console.log(teste);
        setSelectedTodos(teste);

//      const teste = 
//    result.data.map((item) => { if (item.ear == selectedYear) return item }); //&& item.month === selectedMonth

//       console.log(teste);
}
  

// const handleListItens = () => {
//  const lista = selectedTodos.map( 
//     (item) => { 
//       if (item.month === selectedMonth && item.year === selectedYear){
//        return (<li key={item.id}>)
//       } 

//   return (
   
// }


  return (
  <div>
    <div>
      <button onClick={ ()=> setSelectedYear(2019) }>2019</button>
      <button onClick={ ()=> setSelectedYear(2020) }>2020</button>
      <button onClick={ ()=> setSelectedYear(2021) }>2021</button>
    </div>
    <div>
      <button onClick={ ()=> setSelectedMonth(1) }>JAN</button>
      <button onClick={ ()=> setSelectedMonth(2) }>FEV</button>
      <button onClick={ ()=> setSelectedMonth(3) }>MAR</button>
      <button onClick={ ()=> setSelectedMonth(4) }>ABR</button>
      <button onClick={ ()=> setSelectedMonth(5) }>MAI</button>
      <button onClick={ ()=> setSelectedMonth(6) }>JUN</button>
      <button onClick={ ()=> setSelectedMonth(7) }>JUL</button>
      <button onClick={ ()=> setSelectedMonth(8) }>AGO</button>
      <button onClick={ ()=> setSelectedMonth(9) }>SET</button>
      <button onClick={ ()=> setSelectedMonth(10) }>OUT</button>
      <button onClick={ ()=> setSelectedMonth(11) }>NOV</button>
      <button onClick={ ()=> setSelectedMonth(12) }>DEZ</button>
    </div>
    <span><p>{selectedMonth}/{selectedYear}</p></span>
    <span>
      <p>Total:{selectedTodos.length}    
            Cumpridas:{selectedTodos.filter((item) => item.done).length}     
            Não Cumpridas:{selectedTodos.filter((item) => (!item.done)).length}</p></span>
    <ul>
  { selectedTodos.map( item => { return ( <li key={item.id}>{item.date} - {item.description} - {item.done.toString()}</li>) })}
    </ul>
  
  </div> 
  )
  
}
