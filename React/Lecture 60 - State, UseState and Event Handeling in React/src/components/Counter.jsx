import { useState } from "react";

function Counter({ printCountValue }) {
  
  let [value , setValue] = useState(0)
  

  function increament() {
    setValue((prev) => prev + 1)
    printCountValue(++value)
    
  }

  function decreamnet() {
    setValue((prev) => prev - 1)
    printCountValue(--value)
  }


  return (
    <div>
      <h1>Counter</h1>

      <button onClick={increament}>+</button>
      <p>{value}</p>
      <button onClick={decreamnet}>-</button>
    </div>
  )
}

export default Counter



