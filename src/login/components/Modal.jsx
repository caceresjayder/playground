import React from "react";

export default function Modal(props){
    return(
    <div className={`${props.order.isActive ? `${props.Styles.modal}` : `${props.Styles.notActive}`}`}>
        <div className={props.Styles.square}>
            <p>{props.order.message}</p>
            <button onClick={() => props.onClose({
    "message" : "",
    "isActive" : false
})}>X</button>
        </div>
    </div>
    )

}