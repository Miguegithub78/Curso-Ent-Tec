import React, { useState } from 'react'
import { postTeachers } from '../helpers/api'
import { Link, useNavigate } from 'react-router-dom'
import "./add.css"

const AddTeachers = () => {
  const navigate = useNavigate() 

  const [teachers, setTeachers] = useState({
    name: '',
    image: ''
  })

  const handleChange = (evt) => {
    setTeachers({
      ...teachers,
      [evt.target.name]: evt.target.value
    })

  }

  const handleSubmit = (evt) => {
    evt.preventDefault()
    if (teachers.name !== ''){
      postTeachers({name: teachers.name, image: teachers.image}).then(() => {
        navigate('/teachers')
      })
    }  
  }

  return (
    <div className= 'cov'>
      <div className = "menu">
        <Link to = {`/`} className = "link">Home</Link>
        <Link to = {`/teachers`} className = "link">Teachers</Link>
      </div>
      <div >
    <form className= 'form-register' onSubmit={(evt) => handleSubmit(evt)}>
      
      <div className= 'cover'>
        <label>
          Name:  
        </label>
        <input type="text" name="name" onChange = {(evt) => handleChange(evt)}/>
        <div >
          <label>
            Students image: 
          </label>
          <input type="text" name="image" onChange = {(evt) => handleChange(evt)}/>
        </div>
        <div>
            <button type='submit'> Teachers Create</button>
        </div>
      </div>
    </form>
    </div>
    </div>
  )
}

export default AddTeachers
