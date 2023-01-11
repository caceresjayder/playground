import React, {useState} from "react";
import Router from "next/router";
import ToDoApp from '../toDOApp/toDoApp'
import Login from '../login/Login'
import Restaurant from '../Restaurant/Restaurant'
import WaitingPage from './WaitingPage'

export default function MainPage(props){
    const projects = {
        "Login Page":<Login/>
      ,
        "Restaurant Page":<Restaurant/>
      ,
        "To Do App":<ToDoApp/>
      }
      
      const mainData = {"page": ""}
      
        const buttons = Object.keys(projects)
        let [state, setState] = useState(mainData)
      
        function testProject(str){
          setState(state = {
          "page": projects[str]
          })
        }
      
        function loading(str){
          setTimeout(() => {testProject(str)}, 1000)
          setState(state = {
            "page" : <WaitingPage styles={props.styles}/>
          })
          
        }

        function reload(){
          Router.reload()
        }
      
    return(
        <div>
        <div className={props.styles.header}>
      <button onClick={() => reload()}>Home</button>
    </div>
    <h1 className={props.styles.title}>
      Projects Playground
    </h1>
    <div className={state.page == "" ? props.styles.present : props.styles.loaded}>
      {
      state.page == "" ? (<aside className={props.styles["aside-javascript"]}>
      <p>Javascript Projects</p>
      {buttons.map(project => {
        return <button key={`${project}`} onClick={() => loading(project)}>{project}</button>
      })}

    </aside>) : state.page
    }
    </div>
        </div>
    )
}