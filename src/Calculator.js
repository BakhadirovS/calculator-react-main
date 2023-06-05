import React, { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
  const [display, setDisplay] = useState('');

  const handleButtonClick = (value) => {
    setDisplay((prevDisplay) => prevDisplay + value);
  };

  const handleClear = () => {
    setDisplay('');
  };

  const handleEquals = () => {
    try {
      const result = eval(display);
      setDisplay(result.toString());
    } catch (error) {
      setDisplay('Error');
    }
  };

  return (
    <div className="calculator">
      <div className="display">{display}</div>
      <div className="buttons">
        <div className="row">
          <button className="number-button" onClick={() => handleButtonClick('1')}>
            1
          </button>
          <button className="number-button" onClick={() => handleButtonClick('2')}>
            2
          </button>
          <button className="number-button" onClick={() => handleButtonClick('3')}>
            3
          </button>
          <button className="operator-button" onClick={() => handleButtonClick('+')}>
            +
          </button>
        </div>
        <div className="row">
          <button className="number-button" onClick={() => handleButtonClick('4')}>
            4
          </button>
          <button className="number-button" onClick={() => handleButtonClick('5')}>
            5
          </button>
          <button className="number-button" onClick={() => handleButtonClick('6')}>
            6
          </button>
          <button className="operator-button" onClick={() => handleButtonClick('-')}>
            -
          </button>
        </div>
        <div className="row">
          <button className="number-button" onClick={() => handleButtonClick('7')}>
            7
          </button>
          <button className="number-button" onClick={() => handleButtonClick('8')}>
            8
          </button>
          <button className="number-button" onClick={() => handleButtonClick('9')}>
            9
          </button>
          <button className="operator-button" onClick={() => handleButtonClick('*')}>
            *
          </button>
        </div>
        <div className="row">
          <button className="clear-button" onClick={handleClear}>
            C
          </button>
          <button className="number-button" onClick={() => handleButtonClick('0')}>
            0
          </button>
          <button className="equal-button" onClick={handleEquals}>
            =
          </button>
          <button className="operator-button" onClick={() => handleButtonClick('/')}>
            /
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
