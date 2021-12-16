import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom' 
import { fetchStudents } from '../helpers/api'
import './cursos.css'


const Students = () => {
  const [students, setStudents] = useState([])
  useEffect(() => {
    fetchStudents().then((response) => {
      setStudents(response.student)
    })
  },[])
  
  return (
    <div className="card">
      <div className = "menu">
        <Link to = {`/`} className = "link">Home</Link>
        <Link to = {`/poststudents`} className = "link">New Student</Link>
      </div>
      <div className="wrapper">
      {students && students.map((student) => {
        return (
          
          <div className = "info" key={student._id}>
            <Link to = {`/detailstudent/${student._id}`}>
              <h1 className="title">{student.name}</h1>
            </Link> 
            <div className = "im"><img className = "boxim" src={student.image} alt='no found'/></div>
            <h2>Courses..:</h2>
            {student.courses?.map((course) => {
              return (
                <div key={course._id}>
                  {course.title}
                </div>
              )
            })}
          </div>
        )
      })}
      </div>
    </div>
  )
}

export default Students