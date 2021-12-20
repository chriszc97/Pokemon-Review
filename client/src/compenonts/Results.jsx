import React from 'react'

const Result = (props) => {

    return(
        <div>
            <div onClick={props.onClick}>
                <h2>{props.title}</h2>
                <h3>{props.release_date}</h3>
                <img src={props.image} alt={props.name} />
            </div>
        </div>
    )
}

export default Result