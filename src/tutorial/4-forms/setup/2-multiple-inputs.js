import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange
// dynamic object keys

const ControlledInputs = () => {
  // const [firstName, setFirstName] = useState('');
  // const [email, setEmail] = useState('');
  // const [age, setAge] = useState('');
  const[person,setPerson]=useState({firstName:"",age:"",email:""})
  const [people, setPeople] = useState([]);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (firstName && email) {
  //     const person = { id: new Date().getTime().toString(), firstName, age,email };
  //     console.log(person);
  //     setPeople((people) => {
  //       return [...people, person];
  //     });
  //     setFirstName('');
  //     setEmail('');
  //   } else {
  //     console.log('empty values');
  //   }
  // };
  let name;
  let value;
const handleSubmit = (e) => {
  e.preventDefault() 
  setPeople([...people,person])
  

}
  const handleChange = (e) => {
 name = e.target.name
 value = e.target.value
 setPerson({...person,[name]:value})
 console.log(person)
  }
  return (
    <>
      <article>
        
        <form className='form' onSubmit={handleSubmit}>
          <div className='form-control'>
            <label htmlFor='firstName'>Name : </label>
            <input
              type='text'
              id='firstName'
              name='firstName'
              value={person.firstName}
              onChange={handleChange}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='email'>Age : </label>
            <input
              type='text'
              id='age'
              name='age'
              value={person.age}
              onChange={handleChange}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='email'>Email : </label>
            <input
              type='email'
              id='email'
              name='email'
              value={person.email}
              onChange={handleChange}
            />
          </div>
          <button type='submit'>add person</button>
        </form>
        {people.map((person, index) => {
          const { id, firstName, email,age } = person;
          return (
            <div className='item' key={index}>
              <h4>{firstName}</h4>
              <h5>{age}</h5>
              <p>{email}</p>
            </div>
          );
        })}
      </article>
    </>
  );
};

export default ControlledInputs;
