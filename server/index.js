import express from "express";
import mongoose from "mongoose";
import { Connection } from "./database/db.js";
import dotenv from 'dotenv';

dotenv.config();

const app=express();

const port=8000;

Connection(`mongodb+srv://admin:${process.env.password}@crud-app.nyjl8gj.mongodb.net/?retryWrites=true&w=majority`);

app.listen(port,()=>console.log(`server started at http://localhost:${port}`));