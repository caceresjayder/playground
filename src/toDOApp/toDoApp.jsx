import React, {useState} from "react";
import TaskContainer from './containers/TasksContainer'
import Styles from './styles/toDoApp.module.scss'

const tasks = [{"taskText":"Hi User!, this is too easy toDo, first, write text above and press the add button, if you complete the task just make click in the text, if you want to delete the task just click into de close mark (X)","status":"notCompleted"}]
const string = ""

function ToDoApp(){
    const [task, setTask] = useState(tasks)
    const [input,setInput] = useState(string)

    function newTask(str){
        const obj = [
            ...task,
            {"taskText":str,"status":"notCompleted"}
        ]
        setTask(obj)
    }

    function CompleteTask(str){
        const index = task.findIndex(item => item.taskText === str)
        const newTasks = [...task]
        newTasks[index].status === "Completed" ? newTasks[index].status = "notCompleted" : newTasks[index].status = "Completed"  
        setTask(newTasks)
    }

    function deleteTask(str){
        const index = task.findIndex(item => item.taskText === str)
        const newTasks = [...task]
        newTasks.splice(index, 1)
        setTask(newTasks)
    }
    
    return(
        <div className={Styles.toDo}>
            <div className={Styles.container}>
                <input className={Styles.textBox} onChange={char => setInput(char)}/>
                <button className={Styles.button} onClick={() => newTask(input.target.value)}>ADD</button>
                </div>
                <TaskContainer  
                Styles={Styles} 
                tasks={task} 
                onComplete={CompleteTask}
                onDelete={deleteTask}/>
           
        </div>
    )

}

export default ToDoApp