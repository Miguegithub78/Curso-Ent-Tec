import { Route, Routes } from 'react-router-dom';
import './App.css';
import Cursos from './components/Cursos.jsx';
import AddCourses from './components/AddCourses.jsx';
import AddStudents from './components/AddStudents.jsx';
import AddTeachers from './components/AddTeachers.jsx';
import Detail from './components/Detail.jsx';
import Teachers from './components/Teachers.jsx';
import Students from './components/Students.jsx';
import DetailTeacher from './components/DetailTeacher.jsx';
import DetailStudent from './components/DetailStudent.jsx';

function App() {
  return (
    <div className="App">
      <Routes> 
          <Route exact path= '/' element= {<Cursos />}/>
          <Route exact path= '/teachers' element= {<Teachers />}/>
          <Route exact path= '/students' element= {<Students />}/>
          <Route exact path= '/postcursos' element= {<AddCourses />}/> 
          <Route exact path= '/poststudents' element= {<AddStudents />}/> 
          <Route exact path= '/postteachers' element= {<AddTeachers />}/>
          <Route exact path= '/detail/:id' element= {<Detail />}/>
          <Route exact path= '/detailteacher/:id' element= {<DetailTeacher />}/>'
          <Route exact path= '/detailstudent/:id' element= {<DetailStudent />}/>'          
      </Routes>
    </div>
  );
}

export default App;
