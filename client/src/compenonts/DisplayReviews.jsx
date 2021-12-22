import {useState, useEffect} from 'react';
import axios from 'axios'
import ReviewResult from './ReviewResult'
import {useParams} from 'react-router-dom'
import {useNavigate} from 'react-router-dom';

const DisplayReviews = (props) =>{
  const navigate = useNavigate();

  let params = useParams();
  
  const BASE_URL = 'http://localhost:3001/api'
  const[reviews, setReviews] = useState([])
  
  const[del, setDel]= useState();
 


  const pokeReview = async () =>{
    const res = await axios.get(`${BASE_URL}/getallreviews`);
    setReviews(res.data.review)
    // console.log(res.data.review)
  }


  const deleteReview = async (e) =>{
    const res = await axios.delete(`${BASE_URL}/deletereview/${e._id}`);
    // setDel('review Removed')
    window.location.reload()
  }
  const updateReview = async (e) =>{
    const res = axios.put(`${BASE_URL}/updatereview/${e._id}`,
    {
      username:'',
      rateing: '',
      respopnse: ''
    })
    console.log(e._id)
  }
  

 
  useEffect(()=>{
    pokeReview();
  },[])

  return(
    <div>
      <h1>Reviews</h1>
      <div className='reviewGrid'>
        {reviews.map((e)=>(
          <div>
          <ReviewResult
            key={e.id}
            rating={e.rating}
            response={e.response}
            username={e.username}
            />
            <button onClick = {()=> updateReview(e)}>
              Update</button>
              
            <button onClick = { () =>deleteReview(e)}> Remove</button>
            </div>
            
          
        ))}
        
        
      </div>
      
    </div>
  )
}

export default DisplayReviews;