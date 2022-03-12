import { useEffect, useState, Fragment } from "react";
import axios from "axios";
import styles from "./ComponentsCss.module.css"
import { useParams,Link } from "react-router-dom";


const apiKey= "d6a162fc58997f23acfaf32d37774c18"
const url ="https://www.themoviedb.org/3"



export default function MovieDBAPI(){

    const{num}=useParams();

    const[movie,setmovie]=useState([])

    const fetchMovies=async()=>{
        try {
            const response = await axios.get(
              `https://api.themoviedb.org/3/discover/movie?api_key=d6a162fc58997f23acfaf32d37774c18&language=en-US&page=${num}`
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
                {movie.map((movie) => (
                    <div key={movie.id}>
                        <Link to ={`/peli/${movie.id}`}>
                        <h3> {movie.title}</h3>
                        <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt="imagenes" className={styles.container}/>
                        </Link>
                      <h5> Les gusto: {movie.popularity}</h5>
                <h5>Idioma original: {movie.original_language} </h5>
                    </div>
                ))}
            </div>
        );
    }

  
  
