import { useEffect, useState } from 'react'
import './demo.css'
import { MdOutlineClose, MdOutlineEdit } from 'react-icons/md'
import { Navbar } from '../navbar/navbar'
const axios = require('axios')
export const Demo = () => {
    const [newTodo, setNewTodo] = useState()
    const [todos, setTodos] = useState([])
    const addTodo = (e) => {
        e.preventDefault()
        axios.post('http://localhost:5000/api/post', {
            content: newTodo
        }).then((response) => {
            getAll()
            e.target.reset()
        }).catch((e) => {
            console.log("ERR ", e)
        })
    }
    const getAll = () => {
        axios.get('http://localhost:5000/api/posts').then((res) => {
            setTodos(res.data)
        })
    }
    const edit = (e, todo) => {
        e.preventDefault()
        axios.put('http://localhost:5000/api/post', {
            content: todo.content,
            _id: todo._id
        }).then((e) => {
            console.log(e)
        })
    }
    const del = (e, todo) => {
        e.preventDefault()
        axios.delete(`http://localhost:5000/api/${todo._id}`).then(res => {
            getAll()
        })
    }

    useEffect(() => {
        getAll()
    }, [])
    useEffect(() => {
        console.log(todos)
    }, [todos])
    return (
        <div>
            <Navbar/>
            <div className='outer_container'>
                <div className='todo_container'>
                    <div className='todos'>
                        {
                            todos.map(todo => (
                                <div className='todo'>
                                    <input type='text' value={todo.content} style={{ background: 'transparent', border: "0" }}
                                        onChange={(e) => {
                                            setTodos(todos.map(val => {
                                                return val._id === todo._id ? { ...val, content: e.target.value } : val
                                            }))
                                        }} />
                                    <div>
                                        <button className='delete' onClick={(e) => {
                                            del(e, todo)
                                        }}> <MdOutlineClose /></button>
                                        <button className='edit' onClick={(e) => {
                                            edit(e, todo)
                                        }}> <MdOutlineEdit /></button>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <form className='todo_form' onSubmit={(e) => {
                        addTodo(e)
                    }}>
                        <input type='text' placeholder='Subject' className='i_todoName'
                            onChange={(e) => setNewTodo(e.target.value)}
                        />
                        <input type='submit' value='submit' className='i_submit_todo' />
                    </form>
                </div>
            </div>
        </div>
    )
}