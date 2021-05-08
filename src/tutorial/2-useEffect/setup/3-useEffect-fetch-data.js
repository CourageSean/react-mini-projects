import React, { useState, useEffect } from 'react';

const url = 'https://api.github.com/users';

const UseEffectFetchData = () => {
const[users,setUsers]=useState([])


const getUsers = async () => {
  try {
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
    setUsers(data)
    
   

  
  } catch (error) {
    console.log(error)
  }


} 

  useEffect(() => {
    
    getUsers()
  users.length>=1?console.log(users):console.log("empty array")
 
    
  },[])


  return( <>
  <h3>github users</h3>
  {<ul className="users">
  {users.map((elt) => {
    const{id,login,avatar_url,html_url}=elt
 return   <li key={id}>
   <img src={avatar_url} alt={login} />
<div>
  <h4>
    {login}
  </h4>
  <a href={html_url}>Profile</a>
</div>
   </li>
})}
  </ul>
 }
  </>);
};

export default UseEffectFetchData;
