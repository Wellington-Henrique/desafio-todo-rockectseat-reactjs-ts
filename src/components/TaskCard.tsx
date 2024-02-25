import style from './TaskCard.module.css'

interface TaskProps {
    description: string
    isCompleted: boolean
    onComplete: () => void
    onDelete: () => void
}

export function TaskCard({description, isCompleted, onComplete, onDelete}: TaskProps) {
    return (
        <div className={style.card}>
            <input 
                type="checkbox" 
                checked={isCompleted}
                onChange={onComplete}
            />

            <p className={isCompleted ? style.taskCompleted : style.taskIsNotCompleted}>{description}</p>
            <button onClick={onDelete}>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M216,48H180V36A28,28,0,0,0,152,8H104A28,28,0,0,0,76,36V48H40a12,12,0,0,0,0,24h4V208a20,20,0,0,0,20,20H192a20,20,0,0,0,20-20V72h4a12,12,0,0,0,0-24ZM100,36a4,4,0,0,1,4-4h48a4,4,0,0,1,4,4V48H100Zm88,168H68V72H188ZM116,104v64a12,12,0,0,1-24,0V104a12,12,0,0,1,24,0Zm48,0v64a12,12,0,0,1-24,0V104a12,12,0,0,1,24,0Z"></path></svg>
            </button>
        </div>
    )
}