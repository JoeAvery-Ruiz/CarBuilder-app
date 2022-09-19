import React from 'react'
import Cars from '../components/car/Cars'






const Home = ({cars , updateCarState, user}) => {
  return (
    <div className= 'home'>
    
     <Cars cars={cars} updateCarState={updateCarState}  user={user}/>
    </div>
  )
}

export default Home