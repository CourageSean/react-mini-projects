import React, { useState } from 'react';

const UseStateCounter = () => {
const [counter,setCounter]= useState(0)

  return <>
  <section>
    <h2>regular counter</h2>
    <h1>{counter}</h1>
    <button className="btn"  onClick={() => {
      setCounter(counter=>counter-1)
    }}>Decrement</button>
    <button className="btn" onClick={() => {
      setCounter(0)
    }}>Reset</button>
    <button className="btn" onClick={() => {
      setCounter(counter=>counter+1)
    }}>Increment</button>
  </section>
  
  </>;
};

export default UseStateCounter;
