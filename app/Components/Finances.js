<<<<<<< HEAD
'use react'
import { useState } from 'react';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleCalculate = () => {
    try {
      // Evaluate the input string as a JavaScript expression
      const calculatedResult = eval(input);
      setResult(calculatedResult);
    } catch (error) {
      setResult('Error');
    }
  };

  return (
    <div>
      <h1>Calculator</h1>
      <input
        type="text"
        value={input}
        onChange={handleInputChange}
        placeholder="Enter calculation"
      />
      <button onClick={handleCalculate}>Calculate</button>
      <div>Result: {result}</div>
    </div>
  );
};

export default Calculator;
=======
import { useState, useEffect } from "react";

>>>>>>> dd19d7ea53e8a3af439dc5c02ea4a14a21b3de78
