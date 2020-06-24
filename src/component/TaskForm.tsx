import React, { useRef } from 'react';

interface TaskFormProps {
    onAdd(title: string): void
}

export const TaskForm: React.FC<TaskFormProps> = (props) => {

    const ref = useRef<HTMLInputElement>(null)

    const keyPressHandler = (event: React.KeyboardEvent) => {
        if (event.key ==="Enter") {
            props.onAdd(ref.current!.value)
            ref.current!.value = ''
        }
    }

    return (
        <div className="input-field mt2">
            <input
                ref={ref}
                type="text" 
                id="title" 
                placeholder="Введите название задачи" 
                onKeyPress={keyPressHandler} />
            <label htmlFor="title" className="active">Введите название задачи</label>
        </div>
    )
}