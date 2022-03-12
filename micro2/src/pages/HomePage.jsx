import React,{useState,useEffect} from 'react'
import MovieSearcher from "../components/movieSearcher"
import MovieDBAPI from "./MovieDBAPI"
import HomePelis from "./homePelis"


export default function HomePage() {
    
    return (
        <div>
            <div>
                <div>
                    <div>
                            <HomePelis/>
                    </div>
                </div>
            </div>

        </div>
        
    )
}
