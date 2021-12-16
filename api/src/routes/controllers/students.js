const {
  Students
} = require("../../models/index");

const newStudent = async (req, res) => {

  const {name, image} = req.body;
  try{
          //console.log(title, description, price);
    
          var studentsCreate = await Students.create({
          name,
          image: image || "https://cdn.pixabay.com/photo/2021/01/30/12/06/icon-5963629_960_720.png",
        });
        
        res.status(200).json({ curso: studentsCreate }); 
      }catch(err){
        res.status(405).json(err);
      }
}

const allStudents = async (req, res) => {
      try{
        const student = await Students.find().populate([{ path: 'courses'}]);
        res.status(200).json({ student });
      }catch(err){
        res.status(405).json(err);
      }
    };  

    const oneStudent = async (req, res) => {
      try{
        const { id } = req.params;
        const teacher = await Students.findOne({_id: id}).populate([{ path: 'courses'}]);
        res.status(200).json({ teacher });
      }catch(err){
        res.status(405).json(err);
      }
    };


module.exports = {
  newStudent,
  allStudents,
  oneStudent
};