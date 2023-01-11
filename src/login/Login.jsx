import React, { useState } from "react";
import SignIn from "./containers/SignIn";
import Register from "./containers/Register";
import Modal from "./components/Modal";
import Styles from "./styles/Styles.module.scss";

const accounts = [];
const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/


let modalOrder = {
    "message" : "",
    "isActive" : false
}

function Login() {
  const [account, setAccount] = useState(accounts);
  const [modalprops, setModalprops] = useState(modalOrder)

  function addAccount(obj) {
    let newAccounts = [...account, obj];
    setAccount(newAccounts);
    console.log(account)
  }

  function Logger(obj) {
    let email = obj.email;
    let pass = obj.password;
    const granted = {
        "message" : "Access Granted",
    "isActive" : true
    }

    const denegated = {
        "message" : "Denegated",
    "isActive" : true
    }



    let index = account.findIndex((item) => item.email === email);
    if (index >= 0) {
      if (account[index].password === pass) {
        setModalprops(granted)
      } else {
        setModalprops(denegated)
      }
    } else {
        setModalprops(denegated)
    }
  }

  function check(state, obj){
    const successRegister = {
        "message" : "Succesful Register",
    "isActive" : true
    }
    const invalidEmail = {
        "message" : "Invalid Email",
    "isActive" : true
    }
    const invalidPass = {
        "message" : "Invalid Password",
    "isActive" : true
    }
    const notSame = {
        "message" : "Passwords don't match",
        "isActive" : true
    }
    if(state.email != undefined && state.email != '' && state.email.match(regex)){
      if(state.password != undefined && state.password != ''){
        if(state.password === obj.repassword){
          addAccount(state)
          setModalprops(successRegister)
        }else{setModalprops(notSame)}
      }else{setModalprops(invalidPass)}
    }else{setModalprops(invalidEmail)}      
  }

  function closeModal(){
    setModalprops(modalOrder)
  }


  return (
    <div className={Styles.main}>
      {account.length > 0 ? (
        <SignIn styles={Styles} onLogin={Logger}/>
      ) : (
        <Register styles={Styles} addAccount={addAccount} onCheck={check}/>
      )}
      <Modal order={modalprops} Styles={Styles} onClose={closeModal}/>;
    </div>
  );
}

export default Login;
