import express  from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import routes from './src/routes/crmRoutes';

const app= express();
const PORT = 3000;

//creating mongoose connection
mongoose.Promise=global.Promise;

//replace local mongodb server url to actual one
mongoose.connect('mongodb://localhost/CRMdb',{
    useMongoClient:true
});



routes(app)

app.get('/',(req,res)=>
res.send(`node and express server is running on port ${PORT}`)
);

app.listen(PORT,()=>
console.log(`your Server is running on port ${PORT}`)

);