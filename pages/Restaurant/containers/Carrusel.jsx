import React, {useState} from "react";
import Image from "next/image";

const CarruselImgs = ["https://imgs.search.brave.com/55bQo9MmOmSUZKmfymgNWJhXnOzcOkFSR5ENQR_Ewbo/rs:fit:1200:1131:1/g:ce/aHR0cDovL2Jsb2cu/a2l3aWxpbW9uLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAx/NS8wNi9yZWNldGFz/LWRlLWhhbWJ1cmdl/c2EuanBn","https://imgs.search.brave.com/CRIzEa3tOBt-HNDBT89XjXxbr_uN_lRiWyXLXlzzbSY/rs:fit:1200:1080:1/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2I3L2M3/LzBmL2I3YzcwZjQ4/M2E5NTAyYWFhM2U4/MjhhN2E2OTZkZWQ4/LmpwZw","https://imgs.search.brave.com/wrKF-yBMUvy5LScfNp2O0OYLqbOl00sflUQff69P6GI/rs:fit:1200:800:1/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzU4Lzgz/L2JiLzU4ODNiYjNk/ZTdmNTYyOTU2NjU3/M2U1ZjYxMGYwYjEz/LmpwZw"]

export default function Carrusel(props){
    let [state, setState] = useState(0)
    let sliderInterval = setInterval(()=>{
        if(state == CarruselImgs.length -1){
            setState(state = 0)
            clearInterval( sliderInterval )
        }

        else if(state != CarruselImgs.length){
            setState(state += 1)
            clearInterval( sliderInterval )
        }
    }, 5000)

    return(
        <div className={props.Styles.carrusel}>
            <div className={props.Styles.carruselContent}>
                <Image src={CarruselImgs[state]} priority="low" className={props.Styles.imgCarrusel} width={300} height={300} alt="carrusel-images"/>
            </div>
        </div>
    )
}