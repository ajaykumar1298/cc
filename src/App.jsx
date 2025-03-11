import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
  <>
  <div className="container">
    <div className="heading-section">
      <h1>currency convertor</h1>
    </div>
    <div className="amount-section">
      <label htmlFor="curr-input">amount</label>
      <input type="number"  />
    </div>
    <div className="currency-section">
      <div className="form-currency">
        <label htmlFor="from">from</label>
        <select>
          <option value="usd">usd</option>
        </select>
      </div>
      <button type='text'> swap currency</button>
      <div className="to-currency">
        <label htmlFor="to">to</label>
        <select>
          <option value="inr">inr</option>
        </select>
      </div>
    </div>
    <div className="footer-section">
      <button type='button'>Currency Convertor</button>
      <p> 1 usd is equal to 83 inr</p>
    </div>
  </div>
  </>
  )
}

export default App
