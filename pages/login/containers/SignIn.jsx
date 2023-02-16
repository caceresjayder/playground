import React, { useState }from "react";
import Image from "next/image";
import styles from "../styles/Styles.module.scss"


const lockimg = 'https://imgs.search.brave.com/8L3U9s5S83OeqA0oQ-HDfoy8tspXV_JmtYLVYX5wq-o/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly92ZWN0/b3JpZmllZC5jb20v/aW1hZ2UvY2FuZGFk/by12ZWN0b3ItMjAu/cG5n'

export default function Signin(props) {
  const [state, setState] = useState({})

  function setInput(str, input){
    let obj = {
      ...state,
      [input] : str
    }
    setState(obj)
  }
  return (
    <div className={styles.signin}>
      <div className={styles.container}>
        <Image className={styles.logo} src={lockimg} width={100} height={100} alt="lock-image"/>
        <label>Email</label>
        <input type="email" onChange={char => setInput(char.target.value, "email")}/>
        <label>Password</label>
        <input type="password" onChange={char => setInput(char.target.value, "password")}/>
        <div>
        <button onClick={() => props.onLogin(state)}>Log In</button>
        <button>Register</button>
        </div>
      </div>
    </div>
  );
}
