const express = require('express');
const path = require('path');
const mongodb = require('mongodb').MongoClient
const contract = require('truffle-contract');
const artifacts = require('./build/Documents.json');
const mongoose = require('mongoose');
const app = express()
if (typeof web3 !== 'undefined') {
    var web3 = new Web3(web3.currentProvider)
  } else {
    var web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'))
}

const LMS = contract(artifacts)
LMS.setProvider(web3.currentProvider)

mongodb.connect('mongodb://localhost:27017/test',{ useUnifiedTopology: true }, async(err,client)=>{
    if(client){
        console.log('Done')
    }
    await client.connect()
    const db =client.db('Doc')
    const accounts = await web3.eth.getAccounts();
    console.log(accounts[0])
    const lms = await LMS.deployed();
    routes(app,db, lms, accounts)
    app.listen(process.env.PORT || 3005, () => {
        console.log('listening on port '+ (process.env.PORT || 3005));
     })
})