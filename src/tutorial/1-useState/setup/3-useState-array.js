import React from 'react';
import {useState} from "react"
import { data } from '../../../data';

const UseStateArray = () => {
const [people,setPeople]= useState(data)


//  const sorted =  [...people].sort(function(a, b){
//   var x = a.name.toLowerCase();
//   var y = b.name.toLowerCase();
//   if (x < y) {return -1;}
//   if (x > y) {return 1;}
//   return 0;
// })


const deleteAll= () => {
  setPeople([])
}
const deleteMe= (id) => {

  setPeople((oldPeople)=> [...people].filter(element => id !== element.id
  )  )
}

  return (
    <>
   { people.map((elt) =>(
     <div key={elt.id} className="item">
      <h4>{elt.name}</h4>
      <button onClick={()=>{
         deleteMe(elt.id)
         }}>delete me</button>
      </div>
  ))}
<button className="btn" onClick={deleteAll}>delete all</button>
 
 </>
  )
};

export default UseStateArray;
