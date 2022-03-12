
import { useParams } from 'react-router-dom'
import { useEffect, useState, Fragment } from "react";

export default function returnApi() {
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
    
    return (
        pagina
    )
}
