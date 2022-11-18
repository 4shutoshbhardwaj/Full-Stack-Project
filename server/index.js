import express from "express";
import mongoose from "mongoose";
import { Connection } from "./database/db.js";
import dotenv from 'dotenv';
import cors from 'cors';
import Routes from './routes/route.js'
import bodyParser from 'body-parser';

dotenv.config();

const app=express();

app.use(cors());

app.use(express.json({extended:true}));
app.use(express.urlencoded({extended:true}));

app.use('/',Routes);

const port=8000;

Connection(`mongodb+srv://admin:${process.env.password}@crud-app.nyjl8gj.mongodb.net/?retryWrites=true&w=majority`);

app.listen(port,()=>console.log(`server started at http://localhost:${port}`));