import Block from './block';
import Blockchain from './blockchain';
import Transaction from './transaction';

let genesisBlock = new Block();
let blockchain = new Blockchain(genesisBlock);

let transaction = new Transaction('Andy', 'John', 10);
let nextBlock = blockchain.buildNextBlock([transaction]);
blockchain.addBlock(nextBlock);

console.log(blockchain);