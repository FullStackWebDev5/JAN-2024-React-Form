import React from 'react'
import { useState } from 'react'

function Forms() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

  const [error, setError] = useState({
    name: false,
    email: false,
    phone: false,
  })

  const handleSubmit = (e) => {
    e.preventDefault()

    setError((prevState) => {
      return {
        ...prevState,
        name: false,
        email: false,
        phone: false,
      }
    })

    if(!name) {
      setError((prevState) => {
        return {
          ...prevState,
          name: true
        }
      })
    }

    if(!email) {
      setError((prevState) => {
        return {
          ...prevState,
          email: true
        }
      })
    }

    if(!phone) {
      setError((prevState) => {
        return {
          ...prevState,
          phone: true
        }
      })
    }

    if(!name || !email || !phone) {
      console.log('Error exist in the form')
      return;
    }

    const userDetails = {
      name,
      email,
      phone
    }
    console.log(userDetails)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Forms</h1>
        <input 
          type="text" 
          name="name" 
          autoComplete='off' 
          placeholder="Name" 
          value={name} 
          onInput={(e) => setName(e.target.value)}
        /><br />
        {error.name && <p style={{color: 'red'}}>Please enter a valid name</p>}
        <br />

        <input 
          type="text" 
          name="email" 
          autoComplete='off' 
          placeholder="Email" 
          value={email} 
          onInput={(e) => setEmail(e.target.value)}
        /><br />
        {error.email && <p style={{color: 'red'}}>Please enter a valid email</p>}
        <br />

        <input 
          type="text" 
          name="phone" 
          autoComplete='off' 
          placeholder="Phone" 
          value={phone} 
          onInput={(e) => setPhone(e.target.value)}
        /><br />
        {error.phone && <p style={{color: 'red'}}>Please enter a valid phone number</p>}
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default Forms

/*
  # Controlled Components
    - Where React "state is the single source of truth"

    1. Assign state value to the 'value' prop
    2. Link state handlers to the event handlers
*/