import React from "react";

export default function Modal(props){
    return(
        <div className={props.modalProps.isActive ? props.Styles.disabled : props.Styles.modal}>
            <div className={props.Styles.modalContainer}>
                {props.modalProps.return}
            <button onClick={() => props.closeModal()}>X</button>

            </div>

        </div>
    )
}