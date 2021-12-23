import React from 'react'

const Regions = () =>{
  return(
    <div className='displayRegions'>
      <h1>Explore the Regions</h1>
      <div className='regions'>
        <div>
        <h2>Kanto</h2>
        <img className='region' src="https://i.imgur.com/F2aQtvk.jpg?1" />
        </div>

        <div>
        <h2>Johto </h2>
        <img className='region' src='https://i.imgur.com/jlBoOWj.png' />
        </div>
        
        <div>
        <h2>Hoenn</h2>
        <img className='region' src='https://i.imgur.com/bz21vCM.jpg?1' />
        </div>
        
        <div>
        <h2>Sinnoh</h2>
        <img className='region' src='https://i.imgur.com/MKJoOwk.png?1' />
        </div>

        <div>
        <h2>Unova</h2>
        <img className='region' src='https://i.imgur.com/4dpddFg.jpg' />
        </div>

        <div>
        <h2>Kalos</h2>
        <img className='region' src='https://i.imgur.com/2yPx8MX.jpg?1'/>
        </div>
        
        <div> 
        <h2>Alola</h2>
        <img className='region' src='https://i.imgur.com/Uau2DUh.jpg' />
        </div>

        <div>
        <h2>Galar</h2>
        <img className='region' src='https://i.imgur.com/y1xRKkD.jpg'/>
        </div>
        

      </div>

    </div>
  )
}
export default Regions;