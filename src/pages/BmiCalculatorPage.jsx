import React, { useEffect, useState } from 'react'

export default function BmiCalculatorPage() {

  const initialValue = {
    weight:"",
    height:"",
  };

  const[details, setDetails] = useState(initialValue);
  const[errors, setErrors] = useState({});
  const[isSubmit, setIsSubmit] = useState(false)
  
  const handleChange = (e) => {
    const {name, value} = e.target;
    setDetails((prev) => {
      return {...prev,[name]: value};
    })
  };
  const handelSubmit = (e) => {
    e.preventDefault();
    console.log(details);
    setErrors(validation(details));
    setIsSubmit(true)
  }
  useEffect(() => {
    console.log(errors)
    if(Object.keys(errors).length === 0 && isSubmit){
      console.log(details)
    }
  },[errors])

const validation = (values) => {
  const error = {};
  if(!values.weight){
    error.weight = "Weight is required!"
  }
  if(!values.height){
    error.height = "Height is required!";
  }
  if(values.weight >= 1 && values.weight <= 300){
  }else{error.weight = "Not valid weight!";}

  if(values.height >= 0.1 && values.height <= 3){
  }else{error.weight = "Not valid height!";}
  
  return error;
}

  return (
    <div>
      <form onSubmit={handelSubmit}>
        <h1>BMI Calculator:</h1>
        <div>
          <label>Weight:</label>
          <input name='weight' type="number" placeholder='in kilograms' value={details.weight} onChange={handleChange}/>
          <p style={{color: "red"}}>{errors.weight}</p>
        </div>
        <div>
          <label>Height:</label>
          <input name='height' type="number" placeholder='in meters' value={details.height} onChange={handleChange}/>
          <p style={{color: "red"}}>{errors.height}</p>
        </div>
        <div>
          <button type='submit' onClick={validation}>Submit</button>
        </div>
      </form>
    </div>
  )
}
