import {useState, useEffect} from 'react';
import axios from 'axios'
import ReviewResult from './ReviewResult'
import {useNavigate} from 'react-router-dom';

const DisplayReviews = () =>{
  const BASE_URL = 'http://localhost:3001/api'
  const navigate = useNavigate();
  const[reviews, setReviews] = useState([])

  const pokeReview = async () =>{
    const res = await axios.get(`${BASE_URL}/getallreviews`);
    setReviews(res.data.review)
  }

  const deleteReview = async (e) =>{
    const res = await axios.delete(`${BASE_URL}/deletereview/${e._id}`);
    window.location.reload()
  }
  
  useEffect(()=>{
    pokeReview();
  },[])

  return(
    <div>
      <h1>Reviews</h1>
      <div className='reviewGrid'>
        {reviews.map((e)=>(
          <div className='reviews'>
          <ReviewResult
            key={e.id}
            rating={e.rating}
            response={e.response}
            username={e.username}
            />
            <button onClick = { () => navigate(`/reviewupdate/${e._id}`)}>
              Update</button>
            <button onClick = { () =>deleteReview(e)}> Remove</button>
            </div>
        ))}  
      </div>
    </div>
  )
}

export default DisplayReviews;