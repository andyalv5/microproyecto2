import { useEffect, useState, Fragment } from "react";
import axios from "axios";
import styles from "./ComponentsCss.module.css"
import { useParams,Link } from "react-router-dom";

const apiKey= "d6a162fc58997f23acfaf32d37774c18"
const url ="https://www.themoviedb.org/3"



export default function MovieDBAPI(){

    const[movie,setmovie]=useState([])

    const fetchMovies=async()=>{
        try {
            const response = await axios.get(
              "https://api.themoviedb.org/3/discover/movie?api_key=d6a162fc58997f23acfaf32d37774c18&language=en-US"
            );
      
            setmovie(response.data.results);
          } catch (error) {
            console.log({ error });
          }
        };

        useEffect(() => {
          fetchMovies();
        }, []);

       
        return (<div className={styles.tituloInicial}>
            <h2 >Ultimos estrenos</h2>
                <div  className={styles.flexi2}>
                {movie.filter(movie =>movie.popularity>1900.000).map((movie,index) => (
                    <div key={movie.id}>
                        <Link to ={`/peli/${movie.id}`}>
                      <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt="imagenes" className={styles.container2}/>
                      </Link>
                    </div>
                ))}
            </div>
            </div>
        );
    }
