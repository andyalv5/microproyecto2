import React,{useState} from 'react'


export default function movieSearcher() {
    const[query,setquery]= useState("")

    const onChange = (param)=>{
        setquery(param.target.value)
    }

    return (
        <div >
            <input type="text" placeholder="search for a movie" value={query} onChange={onChange}/></div>
    )
}
