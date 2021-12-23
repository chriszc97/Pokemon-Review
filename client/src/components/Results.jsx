import React from 'react'

const Result = (props) => {

    return(
        <div>
            <div className='pokeGames' onClick={props.onClick}>
                <h2>{props.title}</h2>
                <img src={props.image} alt={props.name} />
            </div>
        </div>
    )
}

export default Result