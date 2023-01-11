import React, {useState} from "react";
import Image from "next/image";

const lockimg = 'https://imgs.search.brave.com/8L3U9s5S83OeqA0oQ-HDfoy8tspXV_JmtYLVYX5wq-o/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly92ZWN0/b3JpZmllZC5jb20v/aW1hZ2UvY2FuZGFk/by12ZWN0b3ItMjAu/cG5n'
let passObj = {}
let a = "notActive"


export default function Register(props) {
  const [state, setState] = useState({})
  const [verification, setVerification] = useState({})

  function setInput(str, input){
    let obj = {
      ...state,
      [input] : str
    }
    setState(obj)
  }

  function verificator(str, input){
    passObj = {
      ...verification,
    [input] : str
  }
    setVerification(passObj)
    }

  return (
    <div className={props.styles.signin}>
      <div className={props.styles.container}>
        <Image className={props.styles.logo} src={lockimg} alt="lock-image" width={100} height={100}/>
        <label>Email</label>
        <input type="email" onChange={char => setInput(char.target.value, "email")}/>
        <label>Password</label>
        <input type="password" onChange={char => setInput(char.target.value, "password")}/>
        <label>Type Password Again</label>
        <input type="password" onChange={char => verificator(char.target.value, "repassword")}/>
        <p className={props.styles[a]}>Password do not match</p>
        <div className={props.styles.checkbox}>
          <p>Registering you will accept the Term and Conditions of this service</p>
        </div>
        <div>
        <button onClick={() => props.onCheck(state, verification)}>Register</button>
        </div>
      </div>
    </div>
  );
}
