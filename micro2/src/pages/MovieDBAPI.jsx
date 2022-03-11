import { useEffect, useState, Fragment } from "react";
import axios from "axios";

const apiKey= "d6a162fc58997f23acfaf32d37774c18"
const url ="https://www.themoviedb.org/3"
const nowPlayingUrl =`${url}/movie/now_playing`
const topRatedUrl =`${url}/movie/top_rated`
const movieUrl=`${url}/movie`
const genreUrl=`${url}/genre/movie/list`
const moviesurl=`${url}/discover/movie`
const personurl =`${url}/trending/person/week`

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
        
        return (
          <div>
              {movie.map((movie,index) => (
                  <Fragment key={index}>
                    <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt="imagenes"/>
                  </Fragment>
              ))}
          </div>
        );

    }

  
  
