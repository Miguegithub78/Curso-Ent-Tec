import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom' 
import { fetchCursos } from '../helpers/api'
import './cursos.css'


const Cursos = () => {
  const [cursos, setCursos] = useState([])
  useEffect(() => {
    fetchCursos().then((response) => {
      setCursos(response.cursos)
    })
  },[])

  const filterbyDay = (day) => {
    console.log(day)
    const filtCursos = cursos.filter(curso => {
      return curso.day.includes(day)
    })
    setCursos(filtCursos)
  }

  const handleClick = () => {
    fetchCursos().then((response) => {
      setCursos(response.cursos)
    })
  }

  return (
    <div className="card">
      <div className = "menu">
        <Link to = {`/students`} className = "link">Students</Link>
        <Link to = {`/teachers`} className = "link">Teachers</Link>
      </div>
      <div className = "menu">
        <Link to = {`/postcursos`} className = "link">New Course</Link>
      </div>
      <div className="filters">
      <select className= 'select' name = 'day' defaultValue='Day' onChange={(evt) => filterbyDay(evt.target.value)}>
            <option value="Day" disabled>Select a day</option>
            <option value="Monday">Monday</option>
            <option value="Tuesday">Tuesday</option>
            <option value="Wednesday">Wednesday</option>
            <option value="Thursday">Thursday</option>
            <option value="Friday">Friday</option>
          </select>
          <button onClick = {() => handleClick()}>refresh</button>
      </div>
      <div className="wrapper">
      {cursos && cursos.map((curso) => {
        return (
          
          <div  className="info" key={curso._id}>
            <Link to = {`/detail/${curso._id}`}>
              <h1 className="title">{curso.title}</h1>
            </Link> 
            <div className = "im"><img className = "boxim" src={curso.image} alt='no found'/></div>
            <p>{curso.description}</p>
          </div>
        )
      })}
      </div>
    </div>
  )
}

export default Cursos
