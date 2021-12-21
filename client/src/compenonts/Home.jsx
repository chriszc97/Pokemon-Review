import { useState, useEffect} from 'react';
import react from 'react';
import axios from 'axios';
import Result from './Results';
import DisplayReviews from './DisplayReviews'
import {useNavigate} from 'react-router-dom';

const BASE_URL = 'http://localhost:3001/api'


const Home  = (props)=>{
  const navigate = useNavigate();

const[games, setGames] = useState([])


useEffect(() => {
  pokeGames();
}, []);

const pokeGames = async () =>{
  const res = await axios.get(`${BASE_URL}/getallgames`)
  setGames(res.data.games)
  // console.log(res.data.games)
}


  return (
    <div>
      <h1>Pokemon Games!</h1>
      <section className ="games">
        {games.map((e) =>(
          <Result 
          banana={pokeGames}
          key={e.title}
          title={e.title}
          image={e.image}
          id = {e._id}
          {...e}
          onClick = { () => navigate(`/game/${e._id}`)}
          // onClick={navigate(`/game/${e._id}`)}
          />
        ))}
      </section>
    </div>
  );
};

export default Home;