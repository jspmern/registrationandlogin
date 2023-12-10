let express=require('express')
let path=require('path')
let app=express()
let PORT=process.env.PORT || 8080
//this is for the connection of db
require('./db/conn')
//this is the middlware for the setting the reqBody
app.use(express.json()) 
//this is for the model
let Details=require('./src/model/registration')

//this is for serving static file
app.use(express.static(path.join(__dirname,'src/public')))
app.post('/registor',async(req,res)=>{
    try{
        let data= await new Details(req.body)
        let  result=data.save()
        console.log('this is result')
        res.send('crated sucessfully')
    }
    catch(e)
    {
           res.status(401).send('somthing error while crating db')
    }
   

})
//this is for port 
app.listen(PORT,()=>{
    console.log(`your server is sart at http://localhost:${PORT}`)
})