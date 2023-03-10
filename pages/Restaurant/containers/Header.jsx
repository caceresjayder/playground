import React from "react";
import Image from "next/image";
import Styles from "../styles/Styles.module.scss"


const hamburguerImg = "https://imgs.search.brave.com/Q5SR-SdfjPO05SF1srHDhKrot4w1ptmaJRPeYBA9Ir4/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2JlLzMy/L2JmL2JlMzJiZjgz/YTBkNDkwZWE3MzU5/NjJmZDBlYzhkMDFi/LnBuZw"

export default function Header(){
    return(
        <div className={Styles.header}>
            <Image className={Styles.hamImg} src={hamburguerImg} width={300} height={200} alt="burger-logo"/>
        </div>
    )
}