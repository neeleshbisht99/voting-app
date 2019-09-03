const express=require('express');
const app=express();
const port=4000;
const handle=require('./handlers');
app.get('/',(req,res)=>res.json({hello:'world'}));

app.use(handle.notFound);

app.use(handle.errors);
app.listen(port,console.log(`server started on port ${port}.`));