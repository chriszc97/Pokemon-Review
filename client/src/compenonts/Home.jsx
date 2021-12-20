import { useState, useEffect} from 'react';
import react from 'react';
import axios from 'axios';
import Result from './Results';

const BASE_URL = 'http://localhost:3001/api'


const Home = (props)=>{


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
          {...e}
          onClick={() => console.log(props.history)
            // props.history.push(`/game/${e._id}`)
        }
          />
        ))}
        

      </section>
    </div>
  )
}

export default Home;