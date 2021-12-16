
const url = `https://newcoursesapp.herokuapp.com/cursos`;

export const fetchCursos = async () => {
  const response = await fetch(url);
  const cursos = await response.json();
  return cursos;
}

export const fetchCurso = async (id) => {
  const response = await fetch(`https://newcoursesapp.herokuapp.com/cursos/${id}`);	
  const curso = await response.json();
  return curso;
}

export const putCurso = async (id, payload) => {
  console.log(payload)
  const response = await fetch(`https://newcoursesapp.herokuapp.com/cursos/${id}`, {
    method: 'PUT',
    body: JSON.stringify(payload),
    headers: {
      'Content-Type': 'application/json'
    }
  });
  const curso = await response.json();
  return curso;
}

export const postCursos = async (payload) => {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  });
  const cursos = await response.json();
  return cursos;
}

const urlTeachers = 'https://newcoursesapp.herokuapp.com/teachers';

export const fetchTeachers = async () => {
  const response = await fetch(urlTeachers);
  const teachers = await response.json();
  return teachers;
}

export const fetchTeacher = async (id) => {
  const response = await fetch(`${urlTeachers}/${id}`);
  const teacher = await response.json();
  console.log(teacher);
  return teacher;
}

export const postTeachers = async (payload) => {
  const response = await fetch(urlTeachers, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  });
  const teachers = await response.json();
  return teachers;
}

const urlStudents = 'https://newcoursesapp.herokuapp.com/students';

export const fetchStudents = async () => {
  const response = await fetch(urlStudents);
  const students = await response.json();
  return students;
}

export const fetchStudent = async (id) => {
  const response = await fetch(`${urlStudents}/${id}`);
  const student = await response.json();
  return student;
}

export const postStudents = async (payload) => {
  const response = await fetch(urlStudents, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  });
  const students = await response.json();
  return students;
}