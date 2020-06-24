import React from 'react'
import { ITodo } from '../interfaces'


type TaskListProps = {
    todo: ITodo[]
    onToggle(id: number): void
    onRemove(id: number): void
}

export const TaskList: React.FC<TaskListProps> = (props) => {
    if (props.todo.length === 0) {
        return <p className="center">Пока дел нет!</p>    }
    return (
        <ul>
            {props.todo.map(todo => {
                const classes = ['todo']
                if (todo.completed) {
                    classes.push('completed')
                }

                return (
                    <li className={classes.join(' ')} key={todo.id}>
                        <label>
                            <input type="checkbox" 
                                   checked={todo.completed}
                                   onChange={props.onToggle.bind(null, todo.id)}
                            />
                            <span>{todo.title}</span>
                            <i className="material-icons red-text"
                            onClick={() => props.onRemove(todo.id)}
                            >delete</i>
                        </label>
                    </li>
                )
            })}
            
        </ul>
    )
}