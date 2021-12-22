
import React, {useEffect, useState} from 'react'
import ReviewArray from './data/myReviews'
import axios from 'axios'
const BASE_URL = 'http://localhost:3001/api'



const Reviews=()=>{
  // const[display,setDisplay]=useState(ReviewArray)
  const [reviews,setReviews]=useState([])
  const [newReview,setNewReview] = useState({
    username: '',
    rating: '',
    response: ''
  })
  const review = async () => {
    const res = await axios.post(`${BASE_URL}/createreview`, newReview);
    // setReviews(res.data.reviews);
    // console.log(res)
  };
  
  const theNewReview = (e) =>{
    e.preventDefault();
    const currentReview = reviews;
    const newestReview = newReview;
    currentReview.push(newestReview);
    setReviews(currentReview)
    setNewReview({
      username: '',
      rating: '',
      response: ''
    })
  }
  const handleChange = (e) =>{
    setNewReview({
      ...newReview,
      [e.target.name]: e.target.value,
      // [e.target.rating]: e.target.value,
      // [e.target.response]: e.target.value,
    }
    ) 
  }
  const formSubmit = (e) => {
    theNewReview(e);
    review();
    console.log(newReview);
  };

  return (
    <div>
      <h1>Add A New Review</h1>
      <form onSubmit={formSubmit}>
      <input 
      type='text'
      value={newReview.username}
      onChange={handleChange}
      name={'username'}
      placeholder={'username'}
      />
      <input 
      type="Number"
      value={newReview.rating}
      onChange={handleChange}
      name={'rating'}
      placeholder={'rating'}
      />
      <input
      type='text'
      value={newReview.response}
      onChange={handleChange}
      name={'response'}
      placeholder={'response'}
      />
      <button>Submit</button>
      </form>
      

    </div>
  )
}

export default Reviews;