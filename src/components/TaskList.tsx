import taskIco from '../assets/task-ico.svg'
import { TaskCard } from './TaskCard'

import style from './TaskList.module.css'

export interface TaskType {
    id: string
    description: string
    isCompleted: boolean
}

interface TaskListProps {
    tasks: TaskType[]
    onComplete: (id: string) => void
    onDelete: (id: string) => void
}

export function TaskList({ tasks, onComplete, onDelete } : TaskListProps) {
    const hasTasks = tasks.length > 0;
    const completedTasks = tasks.filter(task => task.isCompleted).length;

    return (
        <div className={style.tasksContainer}>
            <div className={style.counterContainer}>
                <div>
                    <span className={style.createdCounterLabel}>Tarefas criadas</span>
                    <span className={style.counter}>
                        {tasks.length}
                    </span>
                </div>

                <div>
                    <span className={style.completedCounterLabel}>Concluídas</span>

                    <span className={style.counter}>
                        {completedTasks > 0 ? `${completedTasks} de ${tasks.length}` : 0}
                    </span>
                </div>
            </div>

            {hasTasks ?
                tasks.map(task => 
                    <TaskCard
                        description={task.description} 
                        isCompleted={task.isCompleted}
                        onComplete={() => onComplete(task.id)} 
                        onDelete={() => onDelete(task.id)} 
                />)
            : <div className={style.emptyTasksMsgContainer}>
                <img src={taskIco}/>
                <div>
                    <strong>Você ainda não tem tarefas cadastradas</strong>
                    <span>Crie tarefas e organize seus itens a fazer</span>
                </div>
            </div>}
        </div>
    )
}