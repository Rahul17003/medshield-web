const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledRecord = require('./build/Record.json');

const provider = new HDWalletProvider(
    'ride punch fade journey topic cannon myself spice clutch return wisdom top',
    'HTTP://127.0.0.1:7545',
);

const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();

    console.log('Attempting to deploy from account', accounts[0]);

    const result = await new web3.eth.Contract(JSON.parse(compiledRecord.interface))
        .deploy({ data: compiledRecord.bytecode })
        .send({ gas: '5000000', from: accounts[0] });

    console.log('Contract deployed to', result.options.address);

};

deploy();