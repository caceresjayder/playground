import React from "react";
import Image from "next/image";

const loadingImg = "https://imgs.search.brave.com/RFCDmssF2LdKQdwljmz3rZeONWzgfwZmW827PGydGB0/rs:fit:630:637:1/g:ce/aHR0cHM6Ly9pLnN0/YWNrLmltZ3VyLmNv/bS9rT256eS5naWY.gif" 
export default function WaitingPage(props){
    return(
        <div className={props.styles.loading}>
            <p> Loading Project, Please Wait</p>
            <Image src={loadingImg} width={100} height={100} alt="loading-imagen"/>
        </div>
    )
}