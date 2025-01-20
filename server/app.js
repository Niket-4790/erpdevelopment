const express = require('express');
const mongoose = require('mongoose');
const product = require('./db')

mongoose.connect('mongodb://localhost:27017/erpdevelopment',
 {
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

const app=express();
app.use(express.json());


app.get('/products',async(req,res)=>{
   const data=await product.find({});
   res.status(200).json(data);

})



app.listen(5000,()=>{
    console.log('serving on port 5000');
})