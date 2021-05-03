import axios from 'axios';

const API_URL = 'http://localhost:3001/api';

async function getDataFromMonth (month) {
    
    const sendUrl = API_URL+'/transaction?period='+month;
 
    console.log(sendUrl);

    const res = await axios.get(sendUrl);
    return res;
}

export {getDataFromMonth};
