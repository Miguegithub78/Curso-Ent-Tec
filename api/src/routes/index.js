const { Router } = require('express');
const { newCurso, allCursos, oneCurso, updateCurso } = require('./controllers/cursos');
const { newTeacher, allTeachers, oneTeacher } = require('./controllers/teachers')
const { newStudent, allStudents, oneStudent } = require('./controllers/students')

const router = Router();

router.post('/cursos', newCurso);
router.get('/cursos', allCursos);
router.get('/cursos/:id', oneCurso);
router.put('/cursos/:id', updateCurso); 

router.post('/teachers', newTeacher);
router.get('/teachers', allTeachers);
router.get('/teachers/:id', oneTeacher);

router.post('/students', newStudent);
router.get('/students', allStudents);
router.get('/students/:id', oneStudent);

module.exports = router;