const express = require('express');
const cors = require('cors');
const morgan = require('morgan')
const router = require('./routes');

require('./database/index')

const app = express();

app.use(cors());

app.use(express.json());
app.use(morgan('dev'))
app.use(router);

const port = process.env.PORT || 8080;


app.listen( port, (err)=>{
    if(err){
        console.log(err);
    }else{
         console.log(`connected server http://localhost:${port}`);
    }     
})
    
   
