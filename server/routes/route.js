import express from 'express';
import { addTodo,getAllTodos,toggleTodo } from '../controller/todo-controller.js';

const route=express.Router();

route.post('/todos',addTodo)

route.get('/todos',getAllTodos)

route.get('/todos/:id',toggleTodo)

export default route;