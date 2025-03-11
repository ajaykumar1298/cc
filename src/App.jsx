import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [amount,setAmount]=useState(0)
  let [fromCurr,setFromCurr]=useState("usd")
  let [toCurr,setToCurr]=useState("inr")
  let [calAmount,setCalAmount]=useState(null)
  let swapCurr =()=>{
    setToCurr(fromCurr)
  setFromCurr(toCurr)
  }

  return (
  <>
  <div className="container">
    <div className="heading-section">
      <h1>currency convertor</h1>
    </div>
    <div className="amount-section">
      <label htmlFor="curr-input">amount</label>
      <input type="number"  value={amount} min={0} onChange={(e)=>setAmount(e.target.value)} />
    </div>
    <div className="currency-section">
      <div className="form-currency">
        <label htmlFor="from">from</label>
        <select value={fromCurr} onChange={(e)=>setFromCurr(e.target.value)}>
          <option value="usd">usd</option>
          <option value="EUR">EUR</option>
          <option value="inr">inr</option>
        </select>
      </div>
      <button type='button' onClick={swapCurr}> swap currency</button>
      <div className="to-currency">
        <label htmlFor="to">to</label>
        <select value={toCurr} onChange={(e)=>setToCurr(e.target.value)}>
          <option value="inr">inr</option>
          <option value="EUR">EUR</option>
          <option value="usd">usd</option>
        </select>
      </div>
    </div>
    <div className="footer-section">
      <button type='button'>Currency Convertor</button>
      {calAmount &&  <p> 1 usd is equal to 83 inr</p>} 
    </div>
  </div>
  </>
  )
}

export default App
