const {
  Cursos,
  Teachers,
  Students
} = require("../../models/index");

const newCurso = async (req, res) => {

  const {title, description, day, time, duration, image} = req.body;
  try{

          var cursosCreate = await Cursos.create({
          title,
          description,
          day,
          time,
          duration,
          image: image || "http://3.bp.blogspot.com/-hL1AGgXorcY/VCmFKFDQg-I/AAAAAAACnaA/11nmgyPxkD4/s1600/libros%252B1.png",
        });
        
        res.status(200).json({ curso: cursosCreate }); 
      }catch(err){
        res.status(405).json(err);
      }
}

const allCursos = async (req, res) => {
      try{
        const cursos = await Cursos.find();
        res.status(200).json({ cursos });
      }catch(err){
        res.status(405).json(err);
      }
    };  

    const oneCurso = async (req, res) => {
      try{
        const { id } = req.params;
        const curso = await Cursos.findOne({_id: id}).populate([{path:'teacher'}, {path:'students'}]);
        res.status(200).json({ curso });
      }catch(err){
        res.status(405).json(err);
      }
    };

    const updateCurso = async (req, res) => {
      try{
        const { id } = req.params;
        const {  idTeacher, idStudents } = req.body;
        console.log(idTeacher)
        const teacher = await Teachers.findOne({_id: idTeacher}).populate([{path:'courses'}]);
        const students = await Students.findOne({_id: idStudents}).populate([{path:'courses'}]);
        const curso = await Cursos.findOne({_id: id});
       
        if(idStudents && !curso.students.includes(idStudents) && students){
          const control = true;
          let index = 0;
          let i = 0;
          let j = 0;
          while((students.courses.length) && (control)){
            
            if(students.courses[index].day){
            
              if((students.courses[index].day[i] === curso.day[j]) && (((students.courses[index].time[i] * 1 <= curso.time[j] * 1) && (students.courses[index].time[i] * 1 + students.courses[index].duration[i] * 1 >= curso.time[j] * 1))) || ((curso.time[j] * 1 + curso.duration[j] * 1 <= students.courses[index].time[i] * 1) && (curso.time[j] * 1 + curso.duration[j] * 1 >= students.courses[index].time[i] * 1))){
                    control = false;
                  }   
              }

              j++;
              if ((i === students.courses[index].day.length) && (control.length < 1)){
                i = 0;
                index ++;
              }
              if ((j === curso.day.length) && (control.length < 1)){
                j = 0;
                i++
              }
            }
            
            if(control){
              curso.students = [...curso.students, students];
              await curso.save();
              students.courses = students.courses.concat(curso)
              await students.save();
              return res.status(200).json('successfull');
            }
          }
        
          if(idTeacher && !curso.teacher && teacher){
            const control = true;
            let index = 0;
            let i = 0;
            let j = 0;
            while((teacher.courses.length) && (control)){
              
              if(teacher.courses[index].day){
              
                if((teacher.courses[index].day[i] === curso.day[j]) && (((teacher.courses[index].time[i] * 1 <= curso.time[j] * 1) && (teacher.courses[index].time[i] * 1 + teacher.courses[index].duration[i] * 1 >= curso.time[j] * 1))) || ((curso.time[j] * 1 + curso.duration[j] * 1 <= teacher.courses[index].time[i] * 1) && (curso.time[j] * 1 + curso.duration[j] * 1 >= teacher.courses[index].time[i] * 1))){
                      control = false;
                    }   
                }
  
                j++;
                if ((i === teacher.courses[index].day.length) && (control.length < 1)){
                  i = 0;
                  index ++;
                }
                if ((j === curso.day.length) && (control.length < 1)){
                  j = 0;
                  i++
                }
              }
              
              if(control){
                teacher.courses = teacher.courses.concat(curso)
                await teacher.save();
                curso.teacher = teacher;
                await curso.save();
                return res.status(200).json('successfull');
              }  
            }
          
        res.status(200).json("no updated");
      }catch(err){
        console.log(err);
        res.status(405).json(err);
      }
    }


module.exports = {
  newCurso,
  allCursos,
  oneCurso,
  updateCurso
};