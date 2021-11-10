import React, { useState, useEffect } from 'react'
import {
  FaEnvelopeOpen,
  FaUser,
  FaCalendarTimes,
  FaMap,
  FaPhone,
  FaLock,
} from 'react-icons/fa'
const url = 'https://randomuser.me/api/'
const defaultImage = 'https://randomuser.me/api/portraits/men/75.jpg'
function App() {
  const [user, setUser] = useState(null)
  const [title, setTitle] = useState('name')
  const [value, setValue] = useState('random person')
  const fetchUser = async () => {
    const response = await fetch(url)
    const data = await response.json()
    const person = data.results[0]
    const { email, phone } = person
    const { first, last } = person.name
    const { large } = person.picture
    const { password } = person.login
    const {
      dob: {age}
    } = person
    const {
      street: { number, name },
    } = person.location
    const newPerson = {
      email,
      phone,
      name: `${first} ${last}`,
      image: large,
      password,
      age,
      street: `${number} ${name}`
    }
    setUser(newPerson)
    setValue(newPerson.name)
  }
  useEffect(() => {
    fetchUser();
  },[]);

  const handleValue = (e) => {
    if(e.target.classList.contains('icon')) {
      const newValue = e.target.dataset.label
      setTitle(newValue)
      setValue(user[newValue])
    }
  }
  return (
    <main>
      <div className="block bck-black"></div>
      <div className="block">
        <div className="container">
          <img src={(user && user.image) || defaultImage} alt="ttil" />
          <p className="user-title">My {title} is</p>
          <p className="user-value">{value}</p>
          <div className="values-list">
          <button
              className='icon'
              data-label='name'
              onMouseOver={handleValue}
            >
              <FaUser />
            </button>
            <button
              className='icon'
              data-label='email'
              onMouseOver={handleValue}
            >
              <FaEnvelopeOpen />
            </button>
            <button className='icon' data-label='age' onMouseOver={handleValue}>
              <FaCalendarTimes />
            </button>
            <button
              className='icon'
              data-label='street'
              onMouseOver={handleValue}
            >
              <FaMap />
            </button>
            <button
              className='icon'
              data-label='phone'
              onMouseOver={handleValue}
            >
              <FaPhone />
            </button>
            <button
              className='icon'
              data-label='password'
              onMouseOver={handleValue}
            >
              <FaLock />
            </button>
          </div>
          <button className="btn" type="button" onClick={fetchUser}>random user</button>
        </div>
      </div>
    </main>
  )
}

export default App
