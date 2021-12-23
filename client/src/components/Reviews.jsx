
import React, {useState} from 'react'
import axios from 'axios'
const BASE_URL = 'http://localhost:3001/api'

const Reviews=()=>{
  const [reviews,setReviews]=useState([])
  const [newReview,setNewReview] = useState({
    username: '',
    rating: '',
    response: ''
  })
  const review = async () => {
    const res = await axios.post(`${BASE_URL}/createreview`, newReview);
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
    }
    ) 
  }
  const formSubmit = (e) => {
    theNewReview(e);
    review();
  };
  const refresh= ()=>{
    window.location.reload()
  }

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
      <button onClick={refresh}>Submit</button>
      </form>
    </div>
  )
}

export default Reviews;