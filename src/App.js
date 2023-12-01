import React from 'react'
import {Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import BmiCalculatorPage from './pages/BmiCalculatorPage'


export default function App() {
  return (
    <div>
      <Routes>
        <Route path='/ZU860j90aelR6ebY' element={<Home/>}/>
        <Route path='/bmicalcuatorpage' element={<BmiCalculatorPage/>}/>
      </Routes> 
    </div>
  )
}