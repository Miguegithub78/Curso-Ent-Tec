const {
  Teachers
} = require("../../models/index");

const newTeacher = async (req, res) => {

  const {name, image} = req.body;
  try{
          //console.log(title, description, price);
    
          var teachersCreate = await Teachers.create({
          name,
          image: image || "https://www.w3schools.com/howto/img_avatar.png",
        });
        
        res.status(200).json({ curso: teachersCreate }); 
      }catch(err){
        res.status(405).json(err);
      }
}

const allTeachers = async (req, res) => {
      try{
        const teachers = await Teachers.find().populate([{path:'courses'}]);
        res.status(200).json({ teachers });
      }catch(err){
        res.status(405).json(err);
      }
    };  

    const oneTeacher = async (req, res) => {
      try{
        const { id } = req.params;
        const teacher = await Teachers.findOne({_id: id}).populate([{path:'courses'}]);
        res.status(200).json({ teacher });
      }catch(err){
        res.status(405).json(err);
      }
    };


module.exports = {
  newTeacher,
  allTeachers,
  oneTeacher
};