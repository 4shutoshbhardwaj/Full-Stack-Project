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