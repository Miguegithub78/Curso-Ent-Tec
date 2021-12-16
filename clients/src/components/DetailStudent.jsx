import React, { useState, useEffect} from 'react'
import { useParams, Link } from 'react-router-dom'
import { fetchStudent } from '../helpers/api'

const DetailStudent = () => {

  const { id } = useParams()
  const [student, setStudent] = useState({})

  useEffect(() => {
    fetchStudent(id).then((response) => {
      setStudent(response.teacher)
    })
  },[id])


  return (
    <div>
      <div className = "menu">
        <Link to = {`/`} className = "link">Home</Link>
        <Link to = {`/students`} className = "link">Students</Link>
      </div>
      <h1>{student.name}</h1>
      <div ><img className = "detImage" src={student.image} alt='no found'/></div>
      <h2>Courses..:</h2>
      {student.courses?.map((course) => {
        return (
          <div key={course._id}>
            <h3>{course.title}</h3>
            <div className = "info">
              {course.day?.map((day, index) => {
                return (
                  <div key={index}>
                    {day}, {(course.time[index]).slice(0, 2)}:{(course.time[index]).slice(-2)}
                    <div>
                      duration..:{(course.duration[index]).slice(0, 2)}:{(course.duration[index]).slice(-2)}
                    </div>
                  </div>)}
                )}
            </div>
          </div>
        )
      })}

      
    </div>
  )
}

export default DetailStudent