const path = require('path')
const mongoose = require('mongoose')
function routes(app,dbe,lms,accounts)
{
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
    app.get('/userForm',(req,res)=>{
        res.status(200).sendFile(path.join(__dirname,'pages','HTML','user_form.html'))
    })
    app.post('/userForm',(req,res)=>{
        
    })
}