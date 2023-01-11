import React from "react";


export default function Nav(props){
    const buttons = props.buttons
    return(
        <div className={props.Styles.nav}>
            {buttons.map(item => {
                return(
                    <button key={item} onClick={()=> props.openMenu(item)}>
                        {item}
                    </button>
                )
            })}
        </div>
    )
}