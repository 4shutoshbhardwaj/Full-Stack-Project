import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

const port=4444;

const app=express();

app.use(cors());

await mongoose.connect('mongodb+srv://admin:admin123@crud-app.nyjl8gj.mongodb.net/?retryWrites=true&w=majority')
console.log('MongoDB Connected');

app.get("/",(req,res)=>{
    res.send("Hello World");
})

app.listen(port,()=>console.log('Server Started'));