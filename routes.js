



app.get('/',(req,res)=>{
    res.status(200).sendFile(path.join(__dirname,'pages','HTML','signin.html'))
})
app.listen(process.env.PORT || 8000, () => {
    console.log('listening on port '+ (process.env.PORT || 8000));
 })