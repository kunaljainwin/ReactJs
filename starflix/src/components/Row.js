import React, { useEffect, useState } from 'react'
import axios from '../axios';
import "./Row.css"

const base_url="https://image.tmdb.org/t/p/original/"

function Row({title,fetchUrl}) {
    // react hook
    const [movies,setMovies]=useState([]);

    useEffect(()=>{
        async function fetchData(){
            const req=await axios.get(fetchUrl);
            // const data=req.json();
            console.table(req.data.results);
            setMovies(req.data.results);
            return req;
        }
        fetchData();



    },[fetchUrl]);
  return (
    <div className='row'>
        {/* title */}
        <h2 className='title' >{title}</h2>

        <div className='row-posters' >
{/* several row posters */}
{movies.map((movie,i)=>{
  return <img key={i} className="row_poster" src={base_url+movie.poster_path} alt={movie.name} ></img>
})}

        </div>

        {/*Container-> images */}

    </div>
  )
}

export default Row