const express = require('express');
const cors = require('cors');
const router = require('./routes');

const app = express();

app.use(cors());

app.use(express.json());
app.use(router);

const port = process.env.PORT || 3333;


app.listen( port, (err)=>{
    if(err){
        console.log(err);
    }else{
         console.log(`connected server http://localhost:${port}`);
    }     
})
    
   
