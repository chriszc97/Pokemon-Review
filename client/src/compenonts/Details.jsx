import React from 'react'
import {useState, useEffect} from 'react'
import axios from 'axios'

const BASE_URL = 'http://localhost:3001/api/getgamebyid/'


const Details = (props) =>{

  const [gameDetails, setGameDetails] = useState([])

  useEffect(()=>{
    let isCanceled = false 
    const getGameDetails = async () =>{
      const res = await axios.get(`${BASE_URL}${props.match.params.id}`)
      console.log(props)
      setGameDetails(res.data.game)

    }
    getGameDetails()
    return () =>{
      isCanceled = true;
    }
  },[])
  return(
    <div>
            <h1> {gameDetails.name} </h1>
            <img src={gameDetails.image} alt="game" />
            <p>{gameDetails.details}</p>
    </div>
  )
  



}
export default Details;