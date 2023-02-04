const express = require('express');
const path = require('path');
const mongodb = require('mongodb').MongoClient
const mongoose = require('mongoose');
const app = express()
mongoose.connect("mongodb://localhost:27017/test",{
    useNewUrlParser : true,
    useUnifiedTopology : true
},console.log('Database connected'))
app.get('/',(req,res)=>{
    res.status(200).sendFile(path.join(__dirname,'pages','HTML','signin.html'))
})
app.post('/signin',(req,res)=>{
    const {Email,Password} = req.body;
    db.findOne({Email},async(err,pres)=>{
        if(pres)
        {
            console.log('Welcome')
            res.status(200).sendFile(path.join(__dirname,'pages','HTML','Dashboard.html'))
        }
        else
        {
            console.log('not present try to login')
            res.status(400).sendFile(path.join(__dirname,'pages','HTML','error.html'))
        }
    })
})
app.get('/signup',(req,res)=>{
    res.status(200).sendFile(path.join(__dirname,'pages','HTML','signup.html'))
})
app.post('/signup',(req,res)=>{
    const {BSname,BSAdd,BSType,BSSize,Email,Pass,ConfPass} = req.body;
    db.findOne({Email},async(err,pres)=>{
        if(pres)
        {
            console.log('Already Present')
            res.status(400).sendFile(path.join(__dirname,'pages','HTML','error.html'))
        }
        else
        {
            const proc = await db.insertOne({BSname,BSAdd,BSType,BSSize,Email,Pass,ConfPass})
                if(proc){
                    console.log('Stored in DB');
                    dataBase = true
                }else{
                    console.log('Some error occured');
                }
            res.status(200).sendFile(path.join(__dirname,'pages','HTML','error.html'))
        }
    })
})
app.listen(process.env.PORT || 3005, () => {
    console.log('listening on port '+ (process.env.PORT || 3005));
 })