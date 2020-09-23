const Newcar = require("../../models/car");

const slugify = require("slugify");

exports.AddCar = (req, res) => {

  let carImg = "";
  let specdtl = "";
  const Specification = [];

  req.files.map((file) => {
    if (file.fieldname === "carimage") {
      carImg = file.filename;
    } else if (file.fieldname === "spec") {
      Specification.push({ icon: file.filename, specname: "" });
    } else {
      specdtl = file.filename;
    }
  });

  const new_car = new Newcar({
    CarName: req.body.name,
    slug: slugify(req.body.name),
    CarImg: carImg,
    Specification: Specification,
    specdtl: specdtl,
  });


 new_car.save((error,data)=>{
   if(data){
    res.status(200).json({data:data})
  }else{
    res.status(400).json({error:error})
  }
 })

};



// get car data
// -----------------------

exports.GetCar = (req, res) => {
  Newcar.find({}, (err,data)=>{
    if(data) 
    res.status(200).json({data:data})
  })
};


