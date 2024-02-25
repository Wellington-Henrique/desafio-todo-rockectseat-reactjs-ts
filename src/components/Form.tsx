import { ChangeEvent, FormEvent, useState } from 'react'

import { TaskList, TaskType } from './TaskList'

import style from './Form.module.css'

export function Form() {
    const [tasks, setTasks] = useState<TaskType[]>([])
    const [currentTask, setCurrentTask] = useState<string>('')

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target

        setCurrentTask(value)
    }

    const handleCreateNewTask = (e: FormEvent) => {
        e.preventDefault()
        
        setTasks(prev => [...prev, {id: tasks.length.toString(), description: currentTask}])
        setCurrentTask('')
    }

    return(
        <>
            <form className={style.formContent} onSubmit={handleCreateNewTask}>
                <input 
                    type="text"
                    value={currentTask}
                    placeholder='Adicione uma nova tarefa'
                    onChange={handleChange} 
                />
                <button type='submit'>
                    Criar
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm48-88a8,8,0,0,1-8,8H136v32a8,8,0,0,1-16,0V136H88a8,8,0,0,1,0-16h32V88a8,8,0,0,1,16,0v32h32A8,8,0,0,1,176,128Z"></path></svg>
                </button>
            </form>

            <TaskList tasks={tasks} onDelete={() => console.log('deletando...')}/>
        </>
    )
}