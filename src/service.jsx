import CryptoJS from 'crypto-js';

const publicKey = 'cee3b8d06d96d04c70c452d5c2e8f74a';
const privateKey = '7d7278f50a8f90eec883da017d3cc50d341412cc';

let ts = new Date().getTime();
let hash = CryptoJS.MD5(ts + privateKey + publicKey).toString();

let url = 'http://gateway.marvel.com/v1/public/characters?ts=' + ts + '&apikey=' + publicKey + '&hash=' + hash + '';


const getService = () => ({ url: url });
const Service = getService();

export default Service;
