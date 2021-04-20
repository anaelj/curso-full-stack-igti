import axios from 'axios';

const API_URL = 'http://localhost:3001/todos';

async function getAll () {
    const res = await axios.get(API_URL);
    return res;
}

export {getAll};
