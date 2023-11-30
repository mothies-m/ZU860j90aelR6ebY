import React from 'react'

export default function BmiCalculatorPage() {
  return (
    <div>
        <h1>BMI Calculator:</h1>
        <label htmlFor="weight">Weight:</label>
        <input type="number" placeholder='in kilograms'/>
        <label htmlFor="height">Height:</label>
        <input type="number" placeholder='in meters' />
    </div>
  )
}
