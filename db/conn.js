let mongoose=require('mongoose')
let path=require('path')
const dotenvPath = path.join(__dirname, '../.env');
require('dotenv').config({ path: dotenvPath });
mongoose.connect(`mongodb://127.0.0.1:${process.env.DB_PORT}/${process.env.DB_NAME}`).then(()=>{
     console.log(`db connected`)
}).catch((err)=>{
    console.log('db is not connected')
})
