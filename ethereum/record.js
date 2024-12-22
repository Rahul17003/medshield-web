import web3 from './web3';
import Record from './build/Record.json';

const instance = new web3.eth.Contract(
    JSON.parse(Record.interface),
    '0xaDAdA5B03C4C02D73c064714374e419857693606' 
);

export default instance;

