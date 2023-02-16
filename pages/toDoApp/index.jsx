import { Button, Stack, IconButton } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import React, {useState} from "react";
import Styles from './styles/toDoApp.module.scss'
import Task from "./components/Task";

const tasks = [{"taskText":"Hi User!, this is too easy toDo, first, write text above and press the add button, if you complete the task just make click in the text, if you want to delete the task just click into de close mark (X)","status":"notCompleted"}]
const string = ""

function ToDoApp(){
    const [task, setTask] = useState(tasks)
    const [input,setInput] = useState(string)

    const newTask = (evt) => {
        evt.preventDefault;
        const obj = [
            ...task,
            {"taskText":input,"status":"notCompleted"}
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
        <Stack alignItems="center" justifyContent="center" mt={5}>
        <div className={Styles.toDo}>
            <div className={Styles.container}>
                <input className={Styles.textBox} placeholder="Write task here"
                onChange={char => setInput(char.target.value)}/>
                <IconButton aria-label="Add Task" icon={<AddIcon/>} className={Styles.button} onClick={newTask}/>
                </div>
                <div className={Styles.TaskContainer}>
            {task.map(task => {
                return <Task 
                taskText={task.taskText} 
                Text={task.taskText} 
                key={tasks.indexOf(task)} 
                Styles={Styles}
                onComplete={CompleteTask}
                status={task.status}
                onDelete={deleteTask}
                />})}
        </div>
           
        </div>
        </Stack>
    )

}

export default ToDoApp