import React from "react";

function Task(props){
    
    return(
        <div className={`${props.status === "Completed" ? `${props.Styles.Task} ${props.Styles.completed}` : `${props.Styles.Task}`}`}>
            <button
            onClick={() => props.onDelete(props.taskText)}
            >X</button>
            <p 
            onClick={() => props.onComplete(props.taskText)}
            >{props.Text}</p>
        </div>
    )
}


export default Task;