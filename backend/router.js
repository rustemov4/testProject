import { Router } from "express";
import Todo from "./Todo.js";
const router = new Router()
router.get('/posts', async (req, res) => {
    const todos = await Todo.find()
    res.json(todos)
})
router.post('/post', async (req, res) => {
    const { content } = req.body
    const todo = await Todo.create({ content: content, done: false })
    res.json(todo)
})
router.put('/post', async (req, res) => {
    const todo = req.body
    const updatedTodo = await Todo.findByIdAndUpdate(todo._id, todo, { new: true })
    res.json(updatedTodo)
})
router.delete('/:id', async (req, res) => {
    const { id } = req.params
    const todo = await Todo.findByIdAndDelete(id)
    res.json(todo)
})
export default router