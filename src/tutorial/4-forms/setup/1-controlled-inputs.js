import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
const[firstName,setFirstName]=useState("")
const[email,setEmail]=useState("")
const[people,setPeople]=useState([])

const handleFirstName = (e) => {
  setFirstName(e.target.value)

}
const handleEmail = (e) => {
  setEmail(e.target.value)

}

  const handleSubmit = (e) => {
     e.preventDefault()
   if(firstName && email){
const newUser = { 
  id:new Date().getTime().toString(),
firstName,
email
}
console.log(newUser)
setPeople((people) => {
 return [...people,newUser]
})
e.target.reset()
   }else{
     console.log("empty values")
   }
   setEmail("")
   setFirstName("")
  }
  return <>
  <article>
    <div>
  
   </div>
    <form className="form" onSubmit={handleSubmit}>
      <div className="form-control">
        <label htmlFor="firstName">Name:</label>
        <input onChange={handleFirstName} value={firstName} type="text" name="firstName" id="firstName" />
      </div>
      <div className="form-control">
        <label htmlFor="email">Email:</label>
        <input onChange={handleEmail} type="email" name="email" id="email" />
      </div>
      <button type="submit" >add person</button>
    </form>
    {people && people.map((elt) => {
      const{id,firstName,email}=elt
return  <div key={id} className="item">
    <h4>{firstName}</h4>
    <p>{email}</p>
</div>   
   })}
  </article>
  </>;
};

export default ControlledInputs;
