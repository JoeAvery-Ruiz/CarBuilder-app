import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'


const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
`

const CarEdit = ({ setCars }) => {
    let { id } = useParams()
    let navigate = useNavigate()
    
    const initialState = {
        make: '',
        model: '',
        cost: '',
        image: '',
        uniqueIdentifier: '',
        inStock: ''
    }

    const [formData, setFormData] = useState(initialState)

    const handleChange = (e) => {
        console.log(e.target)
        setFormData({...formData, [e.target.id] : e.target.value})
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData)
        axios.put(`http://localhost:8000/car/${id}`, formData )
        .then(res =>  {

            setFormData(initialState)
            setCars(res.data)
            navigate('/', { replace: true })
        })

    }

    useEffect(()=> {
        axios.get(`http://localhost:8000/car/${id}`)
        .then(res => {
            setFormData(res.data)
        })
    }, [])

  return (
        <StyledForm onSubmit={handleSubmit}>
            <div>
                <label htmlFor='make'>make</label>
                <input id='make' name='make' type='text' value={formData?.make} onChange={handleChange} />
            </div>
            
            <div>
                <label htmlFor='model'>model</label>
                <input id='model' name='model' type='text'   value={formData?.model}  onChange={handleChange} />
            </div>
            <div>
                <label htmlFor='cost'>Cost</label>
                <input id='cost' name='cost' type='text'  value={formData?.cost}  onChange={handleChange} />
            </div>
            <div>
                <label htmlFor='year'>year</label>
                <input id='year' name='year' type='text'  value={formData?.year}  onChange={handleChange} />
            </div>
           
            <div>
                <label htmlFor='image'>Image</label>
                <input id='image' name='image' type='text' value={formData?.image}   onChange={handleChange} />
            </div>
           
          

            <input type='submit' value='Edit Item' />
            
        </StyledForm>
  )
}

export default CarEdit