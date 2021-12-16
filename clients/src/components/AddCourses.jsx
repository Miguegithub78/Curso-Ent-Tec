import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { postCursos } from '../helpers/api'
import './add.css'

const AddCourses = () => {
  const navigate = useNavigate()

  const [times, setTimes] = useState({
    day: '',
    hour: '',
    min: '',
    durhour: '',
    durmin: '',
  })

  const [cursos, setCursos] = useState({
    title: '',
    description: '',
    day: [],
    time: [],
    duration: [],
    image: ''
  })

  const handleHour = (evt) => {
    if ((evt.target.name === 'hour') && (evt.target.value <= 23) && (evt.target.value >= 0)) {
      setTimes({
        ...times,
        hour: evt.target.value
      })
    }

    if ((evt.target.name === 'min') && (evt.target.value <= 59) && (evt.target.value >= 0)) {
      setTimes({
        ...times,
        min: evt.target.value
      })
    }

    if ((evt.target.name === 'durhour') && (evt.target.value <= 23) && (evt.target.value >= 0)){
      setTimes({
        ...times,
        durhour: evt.target.value
      })
    }

    if ((evt.target.name === 'durmin') && (evt.target.value <= 59) && (evt.target.value >= 0)){
      setTimes({
        ...times,
        durmin: evt.target.value
      })
    }

    if (evt.target.name === 'day'){
      setTimes({
        ...times,
        day: evt.target.value
      })
    }
  }

  if ((times.day !== '') && (times.hour !== '') && (times.min !== '') && (times.durhour !== '') && (times.durmin !== '')) {

        const day = times.day
        const time = ('0' + times.hour).slice(-2) + ('0'  + times.min).slice(-2)
        const duration = ('0' + times.durhour).slice(-2) + ('0'  + times.durmin).slice(-2)
        const control = cursos.day.includes(day)
        if(!control){
          setCursos({
            ...cursos,
            day: [...cursos.day, day],
            time: [...cursos.time, time],
            duration: [...cursos.duration, duration]
          })
        }
        setTimes({
          day: '',
          hour:   '',
          min:  '',
          durhour:  '',
          durmin: '',
        })
      
    }

  const handleChange = (evt) => {
    setCursos({
      ...cursos,
      [evt.target.name]: evt.target.value
    })

  }

  const handleSubmit = (evt) => {
    evt.preventDefault()
    if (cursos.title !== '' && cursos.description !== '' && cursos.day.lenght !== 0) {
      postCursos({title: cursos.title, description: cursos.description, image: cursos.image, day:cursos.day, time: cursos.time, duration: cursos.duration}).then(() => {
      navigate('/') 
    })
    }
  }

  return (
    <div className="add-courses">
      <div className = "menu">
        <Link to = {`/`} className = "link">Home</Link>
      </div>
    <form className= 'wrapper' onSubmit={(evt) => handleSubmit(evt)}>
      
      <div className= 'element'>
        <label>
          Course:  
        </label>
        <input type="text" name="title" onChange = {(evt) => handleChange(evt)}/>
        <div className="element">
          <label>
            Course Description: 
          </label>
          <textarea name="description" onChange = {(evt) => handleChange(evt)}/>
        </div>
        <div className="element">

          <label>
            Course time: 
          </label>
          <div >
            <input className = 'time' type="Number" value = {times.hour} name="hour" onChange = {(evt) => handleHour(evt)}/>
            :
            <input className = 'time' type="Number" value = {times.min} name="min" onChange = {(evt) => handleHour(evt)}/>
          </div>
          <label>
            Duration time: 
          </label>
          <div >
            <input className = 'time' type="Number" value = {times.durhour} name="durhour" onChange = {(evt) => handleHour(evt)}/>
            :
            <input className = 'time' type="Number" value = {times.durmin} name="durmin" onChange = {(evt) => handleHour(evt)}/>
          </div>

          <label>
            Course Day: 
          </label>
          <select className= 'select' name = 'day' defaultValue='Day' onChange={(evt) => handleHour(evt)}>
            <option value="Day" disabled>Select a day</option>
            <option value="Monday">Monday</option>
            <option value="Tuesday">Tuesday</option>
            <option value="Wednesday">Wednesday</option>
            <option value="Thursday">Thursday</option>
            <option value="Friday">Friday</option>
          </select>
          
        </div>
        
        <div className="element">
          <label>
            Course image: 
          </label>
          <input type="text" name="image" onChange = {(evt) => handleChange(evt)}/>
        </div>
        <div className="element">
            <button type='submit'>Courses Create</button>
        </div>
      </div>
    </form>
    </div>
  )
}

export default AddCourses

