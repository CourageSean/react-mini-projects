import React, { useState, useEffect } from 'react';
import axios from "axios"
const url = 'https://api.github.com/users/QuincyLarson';
const MultipleReturns = () => {
const[isLoading,setIsLoading]=useState(true)
const[isError,setIsError]=useState(false)
const[user,setUser]=useState("default")

const getUser = async () => {
  try {
    const response = await axios.get(url)
    console.log(response)
  //   const response = await fetch(url)
  //  if(response.status>=200 &&  response.status <=299){
    // const data = await response.json()
    console.log(response)
    setIsLoading(false)
    setUser(response.data.login)
//    } else{
// setIsError(true)
// setIsLoading(false)
// console.log("false fetch")
//    }
    
    
    
  } catch (error) {
    setIsError(true)
   
setIsLoading(false)
    console.log(error)
  }
}

useEffect(() => {
  getUser()

},[])

  if(isLoading){
    return <div>
      <h2>
      loading...
      </h2>
      </div>
  }
  if(isError){
    return <h2>404</h2>
  }
  
    return <h2>{user}</h2>
  
};

export default MultipleReturns;
