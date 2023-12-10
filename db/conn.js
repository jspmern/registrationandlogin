let mongoose=require('mongoose')
mongoose.connect("mongodb://127.0.0.1:27017/LOGINANDREGI").then(()=>{
     console.log('db is connected')
}).catch((err)=>{
    console.log('db is not connected')
})
