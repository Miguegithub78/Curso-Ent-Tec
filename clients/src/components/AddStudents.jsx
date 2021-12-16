import React,{ useState } from 'react'
import { postStudents } from '../helpers/api'
import { Link, useNavigate } from 'react-router-dom'

const AddStudents = () => {
  const navigate = useNavigate()
  const [students, setStudents] = useState({
    name: '',
    image: ''
  })

  const handleChange = (evt) => {
    setStudents({
      ...students,
      [evt.target.name]: evt.target.value
    })

  }

  const handleSubmit = (evt) => {
    evt.preventDefault()
    if (students.name !== ''){
      postStudents({name: students.name, image: students.image}).then(() => {
        navigate('/students')
      })
    }
  }

  return (
    <div className= ''>
      <div className = "menu">
        <Link to = {`/`} className = "link">Home</Link>
        <Link to = {`/students`} className = "link">Students</Link>
      </div>
      <div >
    <form className= 'form-register' onSubmit={(evt) => handleSubmit(evt)}>
      
      <div className = "cover">
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
            <button type='submit'> Students Create</button>
        </div>
      </div>
    </form>
    </div>
    </div>
  )
}

export default AddStudents
