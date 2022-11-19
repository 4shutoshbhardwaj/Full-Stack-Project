import Todo from "../model/todo.js";

export const addTodo=async(req,res)=>{
    try {
        const newTodo=await Todo.create({
            data:req.body.data,
            done:false,
            createdAt:Date.now()
        })
        await newTodo.save();
        console.log(newTodo);
        res.status(200).json(newTodo);
    } catch (err) {
        res.status(500).json(err.message);
    }
}

export const getAllTodos=async(req,res)=>{
    try {
        const todos=await Todo.find({}).sort({'createdAt':-1});
        res.status(200).json(todos);
    } catch (err) {
        res.status(500).json(err.message);
    }
}

export const toggleTodo=async(req,res)=>{
    try {
        const todo=await Todo.find({_id:req.params.id});
        todo[0].done=!todo[0].done;
        await todo[0].save();
        res.status(200).json(todo);
    } catch (err) {
        res.status(500).json(err.message);
    }
}

export const updateTodo=async(req,res)=>{
    try {
        const todo=await Todo.find({_id:req.params.id});
        todo[0].data=req.body.data;
        await todo[0].save();
        const savedTodo=await Todo.find({_id:req.params.id});
        console.log(savedTodo[0]);
        res.status(200).json(savedTodo[0]);
    } catch (err) {
        res.status(500).json(err.message);
    }
}

export const deleteTodo=async(req,res)=>{
    try {
        const todoList=await Todo.deleteOne({_id:req.params.id});
        res.status(200).json(todoList);
    } catch (err) {
        res.status(500).json(err.message);
    }
}