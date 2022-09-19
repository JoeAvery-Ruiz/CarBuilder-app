import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const CarContainer = styled.div`
    background-color: #aecdec;
    border-radius: 10px;
    width: 30vw;
    min-width: 200px;
    div {
        padding: 10px;
        margin:0;
        padding-bottom: 0px;
    }
    img {
      width  : 100% ;
      border-radius: inherit;
    }
`

const Button = styled.button`
    background: transparent;
    border-radius: 3px;
    border: 2px solid palevioletred;
    color: palevioletred;
    margin: 0 1em;
    padding: 0.25em 1em;
`

const Car = ({ car, deleteCar, user }) => {

  return (
    <CarContainer key={car._id}>
      <div>
        <h1> {car.make}</h1>
        <p>{car.model}</p>
        <p>{car.year}</p>
        <p> ${car.cost} <span style={car.inStock ? { color: 'green' } : { color: 'red' }}>{car.inStock ? 'In Stock' : 'Currently Unavailable'}</span></p>
        
        <br/>
      </div>
      <img src={car.image} alt={car.name} />
      {
        user?.isAdmin ? (
          <>
            <Button color='blue' onClick={() => deleteCar(car._id)}>Delete</Button>
            <Button color='red' onClick={() => deleteCar(car._id)}>Delete</Button>
            <Button onClick={() => deleteCar(car._id)}>Delete</Button>
          </>
        ) : null
      }

      <Link to={`/car/${car._id}`}>View Details</Link>
    </CarContainer>
  )
}

export default Car