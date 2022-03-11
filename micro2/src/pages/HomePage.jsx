import React,{useState,useEffect} from 'react'
import MovieSearcher from "../components/movieSearcher"
import MovieDBAPI from "./MovieDBAPI"


export default function HomePage() {
    
    return (
        <div>
            <div>
                <div>
                    <div>
                            <MovieDBAPI/>
                    </div>
                </div>
            </div>

        </div>
        
    )
}
