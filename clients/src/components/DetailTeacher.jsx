import React, { useState, useEffect} from 'react'
import { useParams, Link } from 'react-router-dom'
import { fetchTeacher } from '../helpers/api'

const DetailTeacher = () => {

  const { id } = useParams()
  const [teacher, setTeacher] = useState({})

  useEffect(() => {
    fetchTeacher(id).then((response) => {
      setTeacher(response.teacher)
    })
  },[id])


  return (
    <div>
      <div className = "menu">
        <Link to = {`/`} className = "link">Home</Link>
        <Link to = {`/teachers`} className = "link">Teachers</Link>
      </div>
      <h1>{teacher.name}</h1>
      <div ><img className = "detImage" src={teacher.image} alt='no found'/></div>
      <h2>Courses..:</h2>
      {teacher.courses?.map((course) => {
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

export default DetailTeacher
