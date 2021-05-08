import React, { useState, useEffect } from 'react';

// cleanup function
// second argument

const UseEffectCleanup = () => {
const[size,setSize]=useState(window.innerWidth)

const checkSize = 
useEffect(() => {
  window.addEventListener("resize",() => {
    setSize(window.innerWidth)
  })
  return () => {
    window.removeEventListener("resize",checkSize)
  }
},[window.innerWidth])

  return (
  <>
  <h1>window</h1>
  <h2>{size}</h2>
  </>
    );
};

export default UseEffectCleanup;
