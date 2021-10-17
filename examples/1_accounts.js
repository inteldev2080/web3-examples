const Web3 = require('web3')
const rpcURL = 'https://mainnet.infura.io/v3/3f24492ae6f046119155bb8fdc6cc5ac' // Your RCkP URL goes here
const web3 = new Web3(rpcURL)
const address = '0x90e63c3d53E0Ea496845b7a03ec7548B70014A91' // Your account address goes here
web3.eth.getBalance(address, (err, wei) => { balance = web3.utils.fromWei(wei, 'ether') })
