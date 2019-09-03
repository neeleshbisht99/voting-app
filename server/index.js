require('dotenv').config();
const express=require('express');
const cors=require('cors');
const handle=require('./handlers');
const bodyParser=require('body-parser');
const app=express();
app.use(cors());
app.use(bodyParser.json());

const port=process.env.PORT;

app.get('/',(req,res)=>res.json({hello:'world'}));
app.use(handle.notFound);
app.use(handle.errors);

app.listen(port,console.log(`server started on port ${port}.`));