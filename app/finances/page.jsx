'use react'
'use client'
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
//i don't know why the first empty div is important but it makes whatever is next show up so
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div></div>
      <h1>Calculator</h1>
      <input
        type="text"
        value={input}
        onChange={handleInputChange}
        placeholder="Enter calculation"
      />
      <button onClick={handleCalculate}>Calculate</button>
      <div>Result: {result}</div>
    </main>
  );
};

export default Calculator;
