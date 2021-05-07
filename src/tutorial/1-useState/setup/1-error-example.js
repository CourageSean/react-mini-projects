import React from 'react';
import {useState} from "react"

const ErrorExample = () => {
const [title,setTitle]=useState(true)

  
const handleClick = () => {
 setTitle(!title)
}

  return (
  <div>
  <h2>{title?"random title":"changed title"}</h2>
  <button className="btn" onClick={handleClick}>change title</button>
  </div>
  )
}

export default ErrorExample;
