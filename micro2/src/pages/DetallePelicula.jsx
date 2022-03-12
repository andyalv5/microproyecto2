import React from 'react'
import Proximo from "./Proximo"
import { useParams } from 'react-router-dom'
import { useEffect, useState, Fragment } from "react";
import axios from "axios";
import styles from "./ComponentsCss.module.css"


export default function DetallePelicula() {
    
    const{id}=useParams()

    const [pagina, paginaconfig]= useState([])
    
    useEffect(() => {
        const response = async()=>{
            const data = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=d6a162fc58997f23acfaf32d37774c18&language=en-US`)
            const users= await data.json()
            paginaconfig(users)
        };
        response();
      }, []);
        
       
        return (<div>
            <h3>Proximos Extrenos</h3>
            <div  className={styles.flexi3}>
                <Proximo/>
            </div>
            <div className={styles.flexi}>
                <h3>{pagina.original_title}</h3>
                <img src={`https://image.tmdb.org/t/p/original/${pagina.poster_path}`} alt="imagenes" className={styles.container2}/>
                {pagina.genres.map((los) =>(
                    <div><h6>categoria: {los.name} - {los.id}</h6> </div>
                ))}
            </div>
            </div>
        );
    
}
