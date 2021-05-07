import React, { useState } from 'react';

const UseStateObject = () => {
const[person,setPerson]=useState({name:"peter",age:24,massage:"hello world"})
 
const changeMassage = () => {
  setPerson({...person,massage:"my name is peter"})
  
}
 
 return <>
  <h3>{person.name}</h3>
  <h3>{person.age}</h3>
  <h3>{person.massage}</h3>
  <button onClick={changeMassage} className="btn">change massage</button>
  </>;
};

export default UseStateObject;
