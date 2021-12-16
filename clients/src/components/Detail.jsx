import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { fetchCurso, fetchTeachers, fetchStudents, putCurso } from '../helpers/api'
import './detail.css'

const Detail = () => {

  const { id } = useParams()
  const [curso, setCurso] = useState([])
  const [teachers, setTeachers] = useState([])
  const [students, setStudents] = useState([])
  useEffect(() => {
    fetchCurso(id).then((response) => {
      setCurso(response.curso)
    })
  },[id])

  useEffect(() => {
    fetchTeachers().then((response) => {
      setTeachers(response.teachers)
    })},[])

  useEffect(() => {
    fetchStudents().then((response) => {
      setStudents(response.student)
    })},[])
  
    async function handleClick(idTeacher){
      await putCurso(id, {idTeacher: idTeacher})
      fetchCurso(id).then((response) => {
        setCurso(response.curso)
      })
    }

    async function handleStudent(idStudent){
      await putCurso(id, {idStudents: idStudent})
      fetchCurso(id).then((response) => {
        setCurso(response.curso)
      })
    }
  
  return (
    <div className="info">
      <div className = "menu">
        <Link to = {`/`} className = "link">Home</Link>
      </div>
      <h1>{curso.title}</h1>
      <div ><img className = "detImage" src={curso.image} alt='no found'/></div>
      <p>{curso.description}</p>
      <div className="info">
        {curso?.day?.map((day, index) => {
            return (
              <div key={index}>{day}, {(curso.time[index]).slice(0, 2)}:{(curso.time[index]).slice(-2)} </div>
            )
        })}
      </div>
      <div className="info"> 
        <h2 > Teachers </h2>
        {teachers?.map((teacher, index) => {
          return (
            <div key={index}>
              {teacher.name}
              <button onClick = {() => handleClick(teacher._id)}> + </button>
            </div>
          )
        })}
      </div>
      <div className = 'info'> 
        <h2 > Students </h2>
        {students?.map((student, index) => {
          return (
            <div key={index}>
              {student.name}
              <button onClick = {() => handleStudent(student._id)}> + </button>
            </div>
          )
        })}
      </div>
      <div className = 'info'>  
        <h2 > Course </h2>
        <h3 > Teacher </h3>
        {curso.teacher &&
        <div>{curso.teacher.name}</div>}
      </div>
        <h3>Students</h3>
        {curso.students &&
        curso.students.map((student, index) => {
          return (
            <div key={index}>
              {student.name}
            </div>
          )
        })}
      <div >

      </div>
    </div>
  )
}

export default Detail
