import {useState, useEffect} from 'react';
import './App.css';
import {getFormattedTimeStamp} from './helpers/dateTimeHelpers';

function App() {

const [clickArray, setClickArray] = useState([]);

useEffect(()=> {
  document.title = clickArray.length;
})

const handleClick = () => {
const newClickArray = Object.assign([], clickArray);
newClickArray.push(getFormattedTimeStamp());
setClickArray(newClickArray);  

}


  return (
    <div>
 <h1> React teste</h1>
      <button onClick={handleClick}>Clique aqui</button>
      <ul>
        {clickArray.map((item) =>{
          return <li key={item}>{item}</li>
        })}
      </ul>

    </div>
  );
}

export default App;
