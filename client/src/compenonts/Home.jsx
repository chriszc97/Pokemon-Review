import { useState, useEffect} from 'react';
import react from 'react';
import axios from 'axios';

const BASE_URL = 'http://localhost:3001/api'


const Home = ()=>{


  const[games, setGames] = useState([])

const pokeGames = async (props) =>{
  const res = await axios.get(`${BASE_URL}/getAllGames`)
  console.log(res)
}
pokeGames();

  return (
    <div>
      <h1>Pokemon Games!</h1>
      <section classname ="games">

      </section>
    </div>
  )
}

export default Home;