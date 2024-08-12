const express = require('express');
const router = require('./router/router');
const cors = require('cors')
const app = express();
app.use(cors())
app.use(express.json())
app.use(router)


app.listen(3000,()=>{
    console.log("Server is Running...!!!");
})