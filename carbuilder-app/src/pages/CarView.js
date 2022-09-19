import React, {  useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

const CarView = ({ cars }) => {
    const { id } = useParams()
    const [ car, setCar ] = useState()
    

    useEffect(()=> {
        fetch(`http://localhost:8000/car/${id}`)
        .then(res => res.json())
        .then(data => setCar(data))
    }, [])
    
    
    
    console.log(car)
    return (
        <div>
            {
            car && ( <>
                        <h1>${car.make}</h1>
                        <h2>${car.model}</h2>
                        <h2>${car.year}</h2>
                        <h2>${car.cost}</h2>
                        <br/>
                        <img src={car.image} alt={car.description} />
                       
                    
                        {car.inStock ? 'In Stock' : 'Currently Unavailable'}
                        <Link to={`/car/edit/${car._id}`}>Edit Item</Link>
                    </>
                    )
            }
        </div>
    )
}

export default CarView