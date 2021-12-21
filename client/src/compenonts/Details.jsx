import React from 'react'
import {useState, useEffect} from 'react'
import axios from 'axios'
import {useParams} from 'react-router-dom'

import DisplayReviews from './DisplayReviews'
import Reviews from './Reviews'





const Details = (props) =>{

let params = useParams();

  const BASE_URL = 'http://localhost:3001/api/getgamebyid/'

  const [gameDetails, setGameDetails] = useState([])

  useEffect(()=>{
    let isCanceled = false 
    const getGameDetails = async () =>{
      
      const res = await axios.get(`${BASE_URL}${params.id}`)
      // console.log(res)
      setGameDetails(res.data.game)
    }
    
    getGameDetails()
    // console.log(gameDetails)
    return () =>{
      isCanceled = true;
    }
  },[])
  return(
    <div>
        <h1> {gameDetails.title} </h1>
        <h3>Release Date: {gameDetails.release_date}</h3>
        <img src={gameDetails.image} alt="game" />
        <p>{gameDetails.details}</p>
        <Reviews />
        <DisplayReviews />
        


    </div>
  )
  
}
export default Details;