import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchTeachers } from '../helpers/api';
import './cursos.css';


const Teachers = () => {
  const [teachers, setTeachers] = useState([])
  useEffect(() => {
    fetchTeachers().then((response) => {
      setTeachers(response.teachers)
    })
  },[])
  console.log(teachers)
  return (
    <div className="card">
      <div className = "menu">
        <Link to = {`/`} className = "link">Home</Link>
        <Link to = {`/postteachers`} className = "link">New Teacher</Link>
      </div>
      <div className="wrapper">
      {teachers && teachers.map((teacher) => {
        return (
          
          <div  className = "info" key={teacher._id}>
            <Link to = {`/detailteacher/${teacher._id}`}>
              <h1 className="title">{teacher.name}</h1>
            </Link> 
            <div className = "im"><img className = "boxim" src={teacher.image} alt='no found'/></div>
            <h2>Courses..:</h2>
            {teacher.courses?.map((course) => {
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

export default Teachers