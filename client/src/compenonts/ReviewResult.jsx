import React from 'react'

const ReviewResults = (props) => {

    return(
        <div>
                <h3>Username: {props.username}</h3>
                <h3>Rating: {props.rating}</h3>
                <h3>Review: {props.response}</h3>
          
        </div>
    )
}

export default ReviewResults;