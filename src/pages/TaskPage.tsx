import React, { useState, useEffect } from 'react'
import { TaskForm } from '../component/TaskForm';
import { TaskList } from '../component/TaskList';
import { ITodo } from '../interfaces';


export const TodoPage: React.FC = () => {

    const [todo,setTodo] = useState<ITodo[]>([])

    useEffect(() => {
      const saved = JSON.parse(localStorage.getItem('todo') || '[]') as ITodo[]
  
      setTodo(saved)
    },[])
  
    useEffect(() => {
      localStorage.setItem('todo', JSON.stringify(todo))
    })
  
    const addHandler = (title: string) => {
      const newTodo: ITodo = {
        title: title,
        id: Date.now(),
        completed: false
      }
      setTodo(prev => [newTodo, ...prev])
    }
  
    const toggleHandler = (id: number) => {
      setTodo(prev =>
        prev.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          }
        }
        return todo
      }))
    }
  
    const removeHandler = (id: number) => {
      setTodo(prev => prev.filter(todo => todo.id !== id
      ))
    }

    return (
        <React.Fragment>
            <TaskForm onAdd={addHandler} />

            <TaskList todo={todo} 
                      onRemove={removeHandler} 
                      onToggle={toggleHandler} />


        </React.Fragment>
    )
    

 

    
}