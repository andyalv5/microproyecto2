import { useEffect, useState, Fragment } from "react";
import axios from "axios";
import styles from "./ComponentsCss.module.css"

const apiKey= "d6a162fc58997f23acfaf32d37774c18"
const url ="https://www.themoviedb.org/3"



export default function MovieDBAPI(num){

    
    const[movie,setmovie]=useState([])

    const fetchMovies=async()=>{
        try {
            const response = await axios.get(
              `https://api.themoviedb.org/3/discover/movie?api_key=d6a162fc58997f23acfaf32d37774c18&language=en-US&page=${num.value}`
            );
      
            setmovie(response.data.results);
          } catch (error) {
            console.log({ error });
          }
        };

        useEffect(() => {
          fetchMovies();
        }, []);

       
        return (
                <div  className={styles.flexi}>
                {movie.map((movie,index) => (
                    <div key={index}>
                        <h3> {movie.title}</h3>
                      <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt="imagenes" className={styles.container}/>
                      <h5> Personas que la recomiendan: {movie.popularity}</h5>
                <h5>Idioma original: {movie.original_language} </h5>
                    </div>
                ))}
            </div>
        );
    }

  
  
