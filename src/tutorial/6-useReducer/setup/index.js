import React, { useState, useReducer } from 'react';
import Modal from './Modal';
import { data } from '../../../data';
// reducer function

const Index = () => {
  const [name,setName]= useState("")
// const[people,setPeople]=useState(data)
// const [showModal,setShowModal]=useState(false)
const reducer= (state,action) => {
  
}
const defaultState = {
  people:[],
  isModalOpen:false,
  modalConetent:"hello world"
}
const [state,dispatch]=useReducer(reducer,defaultState)

const handleName= (e) => {
  setName(e.target.value)
  console.log(name)
}

const handleSubmit = (e) => {
e.preventDefault()

if(name){
  // setShowModal(true)
  // setPeople([...people,{name,id:5}])
}else{
  // setShowModal(true)
}
}
  return <>
  {state.isModalOpen && <Modal modalConetent={state.modalContent}/>}
  <form onSubmit={handleSubmit} className="form">
    <div>
      <input name="name" type="text" value={name} onChange={handleName} className="input"/>
    </div>
    <button type="submit">add</button>
  </form>
    {/* {people.map((elt) => {
      const{name,id}=elt
    return   <div>
     
        <h4>{name}</h4>
        </div>

    })} */}

  </>;
}

export default Index;
