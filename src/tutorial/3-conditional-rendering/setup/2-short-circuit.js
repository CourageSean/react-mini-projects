import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  // const firstValue = text || 'hello world';
  // const secondValue = text && 'hello world';
  const [text,setText]=useState("e")
  const [time,setTime]=useState(4)
// const firstValue= !text || ""
const secondValue= text && "hello second value"
// const thirdValue= text && "hello second value"

  return <>
  {/* <h1>{firstValue}</h1> */}
  <button className="btn" onClick={() => {
    setText(!text)
  }}>toggle error</button>
  <h2>{secondValue}</h2>
  <h2>{text?"hello third value": "hi"}</h2>
  
  </>;
};

export default ShortCircuit;
