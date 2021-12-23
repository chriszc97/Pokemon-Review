import React from 'react'

const ReviewResults = (props) => {

    return(
        <div>
            <h4>Username: {props.username}</h4>
            <h4>Rating: {props.rating}</h4>
            <h4>Review: {props.response}</h4>
        </div>
    )
}

export default ReviewResults;