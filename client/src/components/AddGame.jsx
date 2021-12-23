import React, { useState } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const AddGame = ()=>{
  const BASE_URL = 'http://localhost:3001/api'
  const navigate = useNavigate()
  const[game,setGame] = useState([])
  const[newGame,setNewGame] = useState({
    title: '',
    release_date: '',
    image: '',
    details: ''
  })

  const gameAdd = async () =>{
    const res = await axios.post(`${BASE_URL}/creategame`, newGame);
  }

  const theNewGame = (e) =>{
    e.preventDefault();
    const currentGame = game;
    const newestGame = newGame;
    currentGame.push(newestGame);
    setGame(currentGame);
    setNewGame({
      title: '',
      release_date: '',
      image: '',
      details: ''
    })
  }
  const handleChange = (e) =>{
    setNewGame({
      ...newGame,
      [e.target.name]: e.target.value,
    }
    ) 
  }
  const formSubmit = (e) => {
    theNewGame(e);
    gameAdd();
  };

  return (
    <div>
      <h1>Add a game</h1>
      <form onSubmit={formSubmit}>
      <input 
      type='text'
      value={newGame.title}
      onChange={handleChange}
      name={'title'}
      placeholder={'title'}
      />
      <input 
      type="text"
      value={newGame.release_date}
      onChange={handleChange}
      name={'release_date'}
      placeholder={'release_date'}
      />
      <input
      type='text'
      value={newGame.image}
      onChange={handleChange}
      name={'image'}
      placeholder={'image'}
      />
      <input
      type='text'
      value={newGame.details}
      onChange={handleChange}
      name={'details'}
      placeholder={'details'}
      />
      <button>Submit</button>
      </form>
      </div>
  )
}
export default AddGame;