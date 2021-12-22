import axios from 'axios';
import React, { useEffect } from 'react'
import {useState} from 'react';
import {useParams} from 'react-router-dom'



const UpdateReview = () =>{
  const BASE_URL = 'http://localhost:3001/api/updatereview/'
  let params = useParams();
  console.log(params.id)
  const[review,setReview] = useState([]);
  const[updateReview, setUpdate]= useState({
    username: '',
    rating: '',
    response: ''
  })
    const updateTheReview = async () =>{
      const res = await axios.put(`${BASE_URL}${params.id}`, updateReview)
      console.log(res.data)
      setUpdate(res.data)
    }
    

    const update = (e) => {
      e.preventDefault();
      const currentReview = review;
      const changeReview = updateReview;
      currentReview.push(changeReview)
      setReview(changeReview);
      setUpdate({
        username: '',
        rating: '',
        response: ''
      })
    }

  const handleChange = (e) =>{
    setUpdate({
      ...updateReview,
      [e.target.name]: e.target.value,
    }
    ) 
  }

  const formSubmit = (e) => {
    update(e);
    updateTheReview(params.id);
    // updateTheReview();
    // console.log(newReview);
  };


  return (
    <div>
      <h1>Update The Review</h1>
      <form onSubmit={formSubmit}>
      <input 
      type='text'
      value={updateReview.username}
      onChange={handleChange}
      name={'username'}
      placeholder={'username'}
      />
      <input 
      type="Number"
      value={updateReview.rating}
      onChange={handleChange}
      name={'rating'}
      placeholder={'rating'}
      />
      <input
      type='text'
      value={updateReview.response}
      onChange={handleChange}
      name={'response'}
      placeholder={'response'}
      />
      <button>Submit</button>
      </form>
    </div>
  )
}

export default UpdateReview;