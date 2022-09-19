import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Routes, Route } from 'react-router-dom'
import Home from  './pages/Home'
import NewCar from'./pages/NewCar';
import Layout from './components/Layout';
import CarView from './pages/CarView';
import CarEdit from './pages/CarEdit';
import Login from './pages/Login'
import About from './pages/About';


function App() {
  const [ cars, setCars  ] = useState([])
  const [user , setUser ] = useState()

  useEffect(() => {
    fetch('http://localhost:8000/car')
    .then( res => res.json())
    .then( items => setCars(items))
  }, [])
  
  console.log(cars)
  
  const addToCar = (car) => {
     setCars([...cars, car])
  }

  const updateCarState = (id) => {

      setCars(cars.filter(car => car._id !== id))

  }

  return (
    <Layout user={user} setUser={setUser}>
      
      <Routes>
          <Route path='/' element={ <Home cars={cars} updateCarState={updateCarState} user={ user} />} />
          <Route path='/newcar' element={ <NewCar addCar={addToCar}  /> } />
          <Route path='/car/edit/:id/' element={ <CarEdit  setCars={setCars} /> } />
          <Route path='/car/:id' element={ <CarView cars={cars}/>} />
          <Route path='/login' element={ <Login setUser={setUser} />} />
          <Route path = '/about' element={<About/>}/>
      </Routes>

    
      
    </Layout>
  );
}

export default App;