import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
const[value,setValue]=useState(0)
const trigger = 2


  useEffect(() => {
    console.log("call sideeffect")
    if(value >= 5){
      // document.title = `${value}`
  
    }
   
  },[trigger])

  console.log("rendering")
  return (<>
  <h2>{value}</h2>
  <button className="btn" onClick={(prev) => { 
    setValue(value+1)
    
    
  }}>Increase</button>
</>
  );
};

export default UseEffectBasics;
