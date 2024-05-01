import './App.css';
import React, { useState } from 'react';
import Error from './assets/Error';
import Input from './assets/Input';
import Button from './assets/Button';
import Switch from './assets/Switch';

function AppCalc() {
    const [valueA, setValueA] = useState('');
    const [valueB, setValueB] = useState('');
    const [useType1Formula, setUseType1Formula] = useState(true);
    const [error, setError] = useState('');
  
    const handleCalculate = () => {
      let result;
      if (useType1Formula) {
        result = parseFloat(valueA) + parseFloat(valueB);
      } else {
        result = parseFloat(valueA) * parseFloat(valueB);
      }
      setError('');

    };
  
    return (
      <div className="nimiApp">
        <Switch />
        <Input label='Value A' />
        <Input label='Value B' />
        <Button label='Calculate' />
        <Button label='Clear' />
        <Error message='ХА,Ошибка' />
      </div>
    );
  }
  
  return ( 
    <div className='nimiApp'>
      <Switch
        useType1Formula={useType1Formula}
        setUseType1Formula={setUseType1Formula}
      />
      <Input
        label='Value A'
        value={valueA}
        onChange={(e) => setValueA(e.target.value)}
      />
      <Input
        label='Value B'
        value={valueB}
        onChange={(e) => setValueB(e.target.value)}
      />
      <Button label='Calculate' onClick={handleCalculate} />
      <Button label="Clear" onClick={handleClear} />
      {error ? <Error message={error} /> : null}
    </div>
  );

export default AppCacl;
