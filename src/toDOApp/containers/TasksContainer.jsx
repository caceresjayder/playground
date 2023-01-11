import React from "react";
import Task from "../components/Task";


function TaskContainer(props){
    
    return(
        <div className={props.Styles.TaskContainer}>
            {props.tasks.map(task => {
                return <Task 
                taskText={task.taskText} 
                Text={task.taskText} 
                key={props.tasks.indexOf(task)} 
                Styles={props.Styles}
                onComplete={props.onComplete}
                status={task.status}
                onDelete={props.onDelete}
                />})}
        </div>
    )
}

export default TaskContainer