import { useState } from 'react'
import './App.css'

function App() {
  const [height, setHeight] = useState("")
  const [weight, setWeight] = useState("")
  const [bmi, setBmi] = useState(null)
  const [bmiStatus, setBmiStatus] = useState("")
  const [errMessege, setErrMessege] = useState("")
   
  const calculateEmi = ()=>{
    const isValidHeight = /^\d+$/.test(height);
    const isValidWeight = /^\d+$/.test(weight);
    if(isValidHeight && isValidWeight){
      const heightInMeter = height / 100;
      const bmiValue = weight / (heightInMeter * heightInMeter);
      setBmi(bmiValue.toFixed(1))
      if(bmiValue < 18.5){
        setBmiStatus('Underweight')
      }else if(bmiValue >= 18.5 && bmiValue <= 24.9 ){
        setBmiStatus('Normal Weight')
      }else if(bmiValue >= 25 && bmiValue <= 28.9 ){
        setBmiStatus('Overweight')
      }else{
        setBmiStatus("Obese")
      }
      setErrMessege('')
    }else{
      setBmi(null);
      setBmiStatus('')
      setErrMessege('Please Enter the Valid Numeric values for Height & Weight')
    }
  }

  const clearAll =() =>{
    setBmi(null);
    setBmiStatus('')
    setErrMessege('')
    setHeight('')
    setWeight('')
  }
  return (
    <>
    <div className='bmi-container'>
      <div className="box"></div>
      <div className="data">
        <h3>BMI CALCULATOR</h3>
        {errMessege && <p className='error'>{errMessege}</p>}
        <div className="input">
          <label htmlFor="height">Height (cm) :</label>
          <input type="text" name='height' id='height' value={height} onChange={(e) => setHeight(e.target.value)}/>
        </div>
        <div className="input">
          <label htmlFor="weight">Weight (kg) :</label>
          <input type="text" name='weight' id='weight' value={weight} onChange={(e) => setWeight(e.target.value)}/>
        </div>
        <button onClick={calculateEmi}>BMI CALCULATOR</button>
        <button onClick={clearAll}>Clear</button>
        {bmi !== null && <div className="result">
          <p>Your BMI is : {bmi} </p>
          <p>Status : {bmiStatus}</p>
        </div>}
      </div>
    </div>
    </>
  )
}

export default App
