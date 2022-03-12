import { useEffect, useState, Fragment } from "react";
import axios from "axios";
import styles from "./ComponentsCss.module.css"
import { useParams,Link } from "react-router-dom";


export default function Proximo(){

    const[movie,setmovie]=useState([])

    const fetchMovies=async()=>{
        try {
            const response = await axios.get(
                "https://api.themoviedb.org/3/movie/upcoming?api_key=d6a162fc58997f23acfaf32d37774c18&language=en-US&page=1"
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
                <div  className={styles.flexi3}>
                {movie.map((movie) => (
                    <div key={movie.id}>
                        <h3> {movie.title}</h3>
                      <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt="imagenes" className={styles.container3}/>
                      <p> Les gusto: {movie.popularity}</p>
                <p>Idioma original: {movie.original_language} </p>
                    </div>
                    
                ))}
            </div>
        );
    }

  