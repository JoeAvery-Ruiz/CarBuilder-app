import React from 'react'
import styled from 'styled-components'
import axios from 'axios'
import Car from'./Car'

const CarBox = styled.div`
    background-color: #c0ffee;
    min-width: 100vw;
    display:  flex;
    flex-wrap: wrap;
    gap: 10px;
`

const Cars = ({ cars, updateCarState, user }) => {
    
    const deleteCar = (id) => {
        axios.delete(`http://localhost:8000/car/${id}`)
        .then(res => {
            console.log(res)
            updateCarState(id)
        })
    }

    return (

    <CarBox>
        { 
          cars.length === 0 ? 'No car Available' :  (cars.map( car => {
                return <Car key={car._id} car={car} deleteCar={deleteCar} user={user}/>
            }))
        }
    </CarBox>
  )
}

export default Cars