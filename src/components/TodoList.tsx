import { useState } from 'react'

interface Task {
    name: string
    isDone: boolean
}

export default function TodoList () {
    const [tasks, setTasks] = useState<Task[]>([
        { name: "水やり", isDone: false }
    ]) 
    const incompleteTasks = tasks.filter(t => !t.isDone)
    const completedTasks = tasks.filter(t => t.isDone)

    const [newTaskName, setNewTaskName] = useState('')

    const addTask = () => {
        if (!newTaskName) {
            return
        }
        setTasks([...tasks, {name: newTaskName, isDone: false }])
        setNewTaskName('')
    }

    const doneTask = (taskName: string) => {
        setTasks(tasks.map(task => {
            if (task.name === taskName) {
                return { ...task, isDone:true }
            }
            return task
        }
        ))
    }

    return (
        <div>
            <div>
                <div>未完タスク</div>
            {incompleteTasks.map(task => (
                <div key={task.name}>
                    <div>名前: {task.name}</div>
                    <button onClick={() => doneTask(task.name)}>完了する</button>
                </div>

            ))}
            </div>
            <div>
                <div>完了済みタスク</div>
                {completedTasks.map(task => (
                    <div key={task.name}>
                        <div>名前: {task.name}</div>
                    </div>
                ))}
            </div>
            <div>
                <label>名前
                    <input onChange={(e) => setNewTaskName(e.target.value)} type="text" value={newTaskName}/>
                </label>
                <button onClick={addTask}>add</button>
            </div>
        </div>
    )
}
