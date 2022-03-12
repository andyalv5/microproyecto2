import React from 'react'
import Proximo from "./Proximo"
import { useParams } from 'react-router-dom'
import { useEffect, useState, Fragment } from "react";
import axios from "axios";
import styles from "./ComponentsCss.module.css"


export default function DetallePelicula() {
    const id = useParams()
    const[movie,setmovie]=useState([])

    const fetchMovies=async()=>{
        try {
            const response = await axios.get(
                `https://api.themoviedb.org/3/movie/upcoming?api_key=d6a162fc58997f23acfaf32d37774c18&language=en-US&page=${id}`
            );
      
            setmovie(response.data.results);
          } catch (error) {
            console.log({ error });
          }
        };

        useEffect(() => {
          fetchMovies();
        }, []);
        

       
        return (<div>
            <h3>Proximos Extrenos</h3>
                <div  className={styles.flexi3}>
                <Proximo/>
                
            </div>
            </div>
        );
    
}
