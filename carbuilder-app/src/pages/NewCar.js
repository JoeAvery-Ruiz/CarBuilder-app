import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'


const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    min-width: 250px;
    max-width: 50vw;
    align-items: baseline;
    div input {
        margin-right: 25px;
    }
`

const NewCar = ({ addCar }) => { 
    const initialState = {
       
        make: '',
        model: '',
        year:'',
        cost:'',
      
        image: '',
       
        uniqueIdentifier: '',
        inStock: ''
    }
    const navigate = useNavigate()

    const [formData, setFormData] = useState(initialState)


    const handleChange = (e) => {
        console.log(e.target)
        setFormData({...formData, [e.target.id] : e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData)
        axios.post('http://localhost:8000/car', formData )
        .then(res =>  {
            setFormData(initialState)
            addCar(res.data)
            navigate('/', { replace: true })
        })

    }


  return (
    <StyledForm onSubmit={handleSubmit}>
        <h1> Create new Item</h1>
            <div>
                <label htmlFor='make'>make</label>
                <input id='make' name='make' type='text' onChange={handleChange} />
            </div>
            
            <div>
                <label htmlFor='model'>model</label>
                <input id='model' name='model' type='text'    onChange={handleChange} />
            </div>
            <div>
                <label htmlFor='year'>year</label>
                <input id='year' name='year' type='text'   onChange={handleChange} />
            </div>
            <div>
                <label htmlFor='cost'>cost</label>
                <input id='cost' name='cost' type='text'   onChange={handleChange} />
            </div>
           
            <div>
                <label htmlFor='image'>Image</label>
                <input id='image' name='image' type='text'   onChange={handleChange} />
            </div>
            <div>
                <label htmlFor='uniqueIdentifier'>sku</label>
                <input id='uniqueIdentifier' name='uniqueIdentifier' type='text'   onChange={handleChange}/>
            </div>
            

            <input type='submit' value='Create Item' />
    </StyledForm>
  )
}

export default NewCar