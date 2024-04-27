import axios from 'axios';

const clienteAxios = axios.create({
    baseURL : 'http://localhost:4000'
});
console.log(process.env.REACT_APP_BACKEND_URL)
export default clienteAxios;